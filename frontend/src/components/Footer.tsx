// Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-2">ShopFlare</h4>
          <p>Welcome to ShopFlare, where style meets substance.</p>
        </div>

        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-2">Customer Care</h4>
          <p>Need assistance or have a question? Contact our customer care team.</p>
        </div>

        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-2">Stay Connected</h4>
          <p>Follow us on social media for the latest trends and exclusive deals.</p>
        </div>

        <div className="mb-4 md:mb-0">
          <h4 className="text-lg font-bold mb-2">Safe & Secure Shopping</h4>
          <p>Shop confidently with encrypted transactions ensuring a secure shopping experience.</p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} ShopFlare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
