import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../index";

const Footer = () => {
  return (
    <section className="relative overflow-hidden py-10 bg-gray-200 border-t border-gray-300">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <Logo width="100px" />
              </div>
              <div>
                <p className="text-sm text-gray-500">&copy; Copyright 2023. All Rights Reserved by DevUI.</p>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-4 text-xs font-semibold uppercase text-gray-800 tracking-wider">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-gray-600 hover:text-blue-600" to="/">
                  Features
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-blue-600" to="/">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-blue-600" to="/">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-blue-600" to="/">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <h3 className="mb-4 text-xs font-semibold uppercase text-gray-800 tracking-wider">Support</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-gray-600 hover:text-blue-600" to="/">
                  Account
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-blue-600" to="/">
                  Help
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-blue-600" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-blue-600" to="/">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legals */}
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <h3 className="mb-4 text-xs font-semibold uppercase text-gray-800 tracking-wider">Legals</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link className="text-gray-600 hover:text-blue-600" to="/">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-blue-600" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-blue-600" to="/">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
