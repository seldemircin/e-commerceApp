import React from "react";
import "../style/About.css";

function About() {
  return (
    <div className="bg-photo" style={{ height: "100vh" }} id="about-page">
      <div className="container text-white d-flex justify-content-center align-items-center h-75">
        <div>
          <h3 className="fw-medium fs-4 text-center">About Us</h3>
          <p className="mt-4  text-center">
            Welcome to E-Commerce App, your one-stop online destination for the
            latest in electronics, jewelry, and fashion. We bring together the
            finest products to suit your lifestyle, whether you are upgrading
            your tech, adding elegance with beautiful jewelry, or refreshing
            your wardrobe with the latest trends in men's and women's fashion.
            Our mission is simple: to provide you with high-quality, stylish,
            and affordable products that make your life easier and more
            enjoyable. We believe that shopping should be an experience, not
            just a transaction. That's why we offer a user-friendly platform,
            secure payment options, and prompt delivery to ensure your
            satisfaction. Explore our wide range of carefully curated products
            from top brands and trusted manufacturers. Whether you're looking
            for the latest gadgets, timeless jewelry pieces, or fashion-forward
            clothing, we’ve got you covered. At E-Commerce App , we are
            committed to bringing you the best shopping experience. Thank you
            for choosing us, and happy shopping!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
