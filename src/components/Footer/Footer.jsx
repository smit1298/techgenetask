import React from "react";
import logo from "../../assets/images/logo.png";
import {
  LinkedIn,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Google,
  AppStore,
  Ussd
} from "../../assets/icons";

import { Link } from "react-router-dom";

const Footer = () => {
  const phoneNumber = "+2347080625000";

  return (
    <footer className="bg-button px-8 sm:px-20 pt-4">
      <div className="space-y-4 sm:space-y-0 sm:flex justify-between sm:mb-4 pb-0 sm:pb-12">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="logo" />
        </Link>

        <ul className="pl-0 flex items-center gap-4">
          <li className="">
            <Link to="/">
              <Facebook />
            </Link>
          </li>
          <li className="">
            <Link to="/">
              <Instagram />
            </Link>
          </li>
          <li className="">
            <Link to="/">
              <Twitter />
            </Link>
          </li>
          <li className="">
            <Link to="/">
              <LinkedIn />
            </Link>
          </li>
          <li className="">
            <Link to="/">
              <Youtube />
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex flex-wrap sm:flex-nowrap w-full gap-y-6 sm:border-y pt-6 pb-6 border-solid border-add">
        <div className="w-1/2 sm:w-1/3 lg:w-1/3">
          <h6 className="text-white">Go to</h6>
          <ul className="pl-0 space-y-3">
            <li>
              <Link to="/" className="text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white">
                Meals
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white">
                Airtime and Bills
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white">
                Vouchers
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white">
                Your Account
              </Link>
            </li>
            <li>
              <Link to="/" className="text-white">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-1/2 sm:w-1/3 lg:w-1/3 space-y-3">
          <h6 className="text-white">Get in touch</h6>
          <Link to="/contact" className="text-white">
            Contact Form
          </Link>
          <p className="text-white w-2/3">
            TechGene House 325 Marina P.O. Box 4242, Lagos, Nigeria.
          </p>
          <div className="flex py-2">
            <Link className="text-white" to={`tel:${phoneNumber}`}>
              {phoneNumber}
            </Link>
          </div>{" "}
        </div>

        <div className="sm:w-1/3 lg:w-1/3 ">
          <h6 className="text-white">Legal</h6>
          <div className="flex flex-col space-y-3">
            <Link to="/terms-and-condition" className="text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-and-condition" className="text-white">
              Terms and Condition
            </Link>
            <Link to="/return-policy" className="text-white">
              Returns Policy
            </Link>
          </div>
        </div>
      </div>
      <div className="py-4">
        <small className="text-white">&copy; 2024 Techgene HQ.</small>
      </div>
    </footer>
  );
};

export default Footer;
