"use client";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-8">
      <p>&copy; {new Date().getFullYear()} Bookstore. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
