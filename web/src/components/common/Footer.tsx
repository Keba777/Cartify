import { FiArrowRight } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="text-secondary md:flex md:justify-between p-4 sm:p-8 md:p-12 lg:p-16">
        <div className="flex justify-evenly md:space-x-6 lg:space-x-20 text-sm">
          <div>
            <h2 className="font-semibold md:text-lg mb-1">Company Info</h2>
            <p>About Us</p>
            <p>Affliate</p>
            <p>Fashion Blogger</p>
          </div>
          <div>
            <h2 className="font-semibold md:text-lg mb-1">Help & Support</h2>
            <p>Shipping Info</p>
            <p>Refunds</p>
            <p>How to Order</p>
            <p>How to Track</p>
            <p>Size Guides</p>
          </div>
          <div>
            <h2 className="font-semibold md:text-lg mb-1">Customer Care</h2>
            <p>Contact Us</p>
            <p>Payment Methodes</p>
            <p>Bonus Point</p>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <h2 className="font-semibold md:text-lg mb-4 flex justify-center md:flex-none">
            Signup For The Latest News
          </h2>
          <span className="border border-secondary p-2 flex ">
            <input
              type="text"
              placeholder="Enter Email"
              className="focus:outline-none w-full"
            />
            <FiArrowRight color="#424242" />
          </span>
        </div>
      </div>
      <div className="flex justify-center space-x-4 py-4">
        <FaFacebook className="w-5 h-5" />
        <FaInstagram className="w-5 h-5" />
        <FaYoutube className="w-5 h-5" />
        <FaXTwitter className="w-5 h-5" />
      </div>
      <div className="py-5 border-t-2 flex justify-center">
        <p className="text-bluegray text-sm">
          All rights Reserved{" "}
          <span className="font-semibold">© Cartify 2024</span>{" "}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
