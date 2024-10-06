const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const http = require("http").Server(app);
const port = process.env.PORT || 3000;
const path = require("path");
const bcrypt = require("bcrypt");

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root", 
  password: "",
  database: "shopify",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("Connected to MySQL");
  }
});

app.use((error, req, res, next) => {
  if (error instanceof SyntaxError) {
    return res.status(400).json({ message: "Invalid JSON payload" });
  }
  next();
});

app.get("/sse", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  res.write(": ping\n\n");

  const sendEvent = (data) => {
    const productsWithNames = data.map((product) => {
      return {
        ...product,
        product_name: product.name,
      };
    });
    res.write(`data: ${JSON.stringify(productsWithNames)}\n\n`);
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  const queryAndSendUpdates = () => {
    db.query(
      "SELECT id, name, description, price, availability, image_path FROM products",
      (err, results) => {
        if (err) {
          console.error(err);
        } else {
          sendEvent(results);
        }
      }
    );
  };

  const intervalId = setInterval(queryAndSendUpdates, 50);

  req.on("close", () => {
    clearInterval(intervalId);
  });
});

app.post("/products", (req, res) => {
  const { name, description, price, availability } = req.body;

  const image = req.files?.image;

  let imagePath = "";
  if (image) {
    imagePath = `uploads/${image.name}`;
    image.mv(imagePath, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
      }
    });
  }

  app.post("/login", (req, res) => {
    const { username, password } = req.body;

    db.query(
      "SELECT id, password FROM users WHERE username = ?",
      [username],
      (err, results) => {
        if (err) {
          console.error("Error during login:", err);
          return res.status(500).json({ error: "Internal server error" });
        }

        if (results.length === 0 || results[0].password !== password) {
          return res.status(401).json({ error: "Invalid credentials" });
        }

        res.json({ message: "Login successful" });
      }
    );
  });

  db.query(
    "INSERT INTO products (name, description, price, availability, image_path ) VALUES (?, ?, ?, ?, ?)",
    [name, description, price, availability, imagePath],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
      } else {
        res.status(201).json({ id: result.insertId, ...req.body });
      }
    }
  );
});




app.get("/api/orders", (req, res) => {
  const query = `
    SELECT 
      orders.id AS order_id,
      orders.product_id,
      products.name AS product_name,
      products.description AS product_description,
      products.price AS product_price,
      products.availability AS product_availability,
      products.image_path AS product_image_path
    FROM 
      orders 
    JOIN 
      products 
    ON 
      orders.product_id = products.id
  `;

  db.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json(results);
  });
});





const products = [
  {
    id: 1,
    name: "Sample Product",
    description: "This is a sample product.",
    price: 50,
    availability: "In Stock",
    image_path: "/sample-product.jpg",
    colors: [
      { id: 1, name: "Red", hexCode: "#FF0000" },
      { id: 2, name: "Blue", hexCode: "#0000FF" },
    ],
  },
];

app.get("/api/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json(product);
});

app.delete("/products/:name", (req, res) => {
  const productName = req.params.name;

  if (!productName) {
    return res.status(400).json({ error: "Product name is required" });
  }

  const deleteQuery = "DELETE FROM products WHERE name = ?";

  db.query(deleteQuery, [productName], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.status(204).send();
    }
  });
});

app.get("/api/product-images", (req, res) => {
  db.query("SELECT id, image_path FROM products", (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json(results);
  });
});

app.post("/register", (req, res) => {
  const { username, firstname, secondname, email, password, confirmPassword } =
    req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  db.query(
    "INSERT INTO users (username, firstname, secondname, email, password) VALUES (?, ?, ?, ?, ?)",
    [username, firstname, secondname, email, password],
    (err) => {
      if (err) {
        console.error("Error during registration:", err);
        return res.status(500).json({ error: "Internal server error" });
      }

      res.json({ message: "Registration successful" });
    }
  );
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  db.query(
    "SELECT id, password FROM users WHERE username = ?",
    [username],
    (err, results) => {
      if (err) {
        console.error("Error during login:", err);
        return res.status(500).json({ error: "Internal server error" });
      }

      if (results.length === 0) {
        return res.status(401).json({ error: "Invalid username or password" });
      }

      const user = results[0];

      if (password !== user.password) {
        return res.status(401).json({ error: "Invalid username or password" });
      }

      res.json({ message: "Login successful", userId: user.id });
      
    }
  );
});

app.post("/api/order", (req, res) => {
  const { productId } = req.body;

  const tableName = "orders";

  const sql = `INSERT INTO ${tableName} (product_id) VALUES (?)`;

  db.query(sql, [productId], (err, result) => {
    if (err) {
      console.error("Error inserting order into database:", err);
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      console.log("Order placed successfully");
      res.status(200).json({ message: "Order placed successfully" });
    }
  });
});

app.get("/api/orders", (req, res) => {
  const query =
    "SELECT orders.*, products.name AS product_name FROM orders JOIN products ON orders.product_id = products.id";

  db.query(query, (error, results) => {
    if (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }

    res.json(results);
  });
});

app.delete("/api/orders/:id", (req, res) => {
  const orderId = req.params.id;

  if (!orderId) {
    return res.status(400).json({ error: "Order ID is required" });
  }

  const deleteQuery = "DELETE FROM orders WHERE id = ?";

  db.query(deleteQuery, [orderId], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: "Order not found" });
    } else {
      res.status(204).send();
    }
  });
});

app.get("/product-images/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, "uploads", imageName);

  res.sendFile(imagePath, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    }
  });
});

app.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      const productsWithImagePaths = results.map((product) => {
        return {
          ...product,
          image_path: `http://localhost:3000/product-images/${product.image_path}`,
        };
      });
      res.json(productsWithImagePaths);
      res.json(results);
    }
  });
});

app.get("/products/:name", (req, res) => {
  const productName = req.params.name;
  db.query(
    "SELECT * FROM products WHERE name = ?",
    [productName],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
      } else if (results.length === 0) {
        res.status(404).send("Product not found");
      } else {
        res.json(results[0]);
      }
    }
  );
});

app.put("/products/:name", (req, res) => {
  const productName = req.params.name;
  const { description, price, availability } = req.body;

  db.query(
    "UPDATE products SET description = ?, price = ?, availability = ? WHERE name = ?",
    [description, price, availability, productName],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
      } else if (results.affectedRows === 0) {
        res.status(404).send("Product not found");
      } else {
        res.status(200).send("Product updated successfully");
      }
    }
  );
});

// app.get("/", (req, res) => {
//   res.send("Hello");
// });
app.get("/love", (req, res) => {
  res.send("love you ");
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});