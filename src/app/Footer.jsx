"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");

  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [-10, 0, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const rotateAnimation = {
    initial: { rotate: 0 },
    animate: {
      rotate: [0, 5, 0, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <footer className="bg-gray-50">
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          {/* Decorative Icons */}
          <motion.div
            className="absolute left-20 top-18"
            variants={floatAnimation}
            initial="initial"
            animate="animate"
          >
            <div className="bg-[#E7CAAA] p-3 rounded-lg">
              <Image src="/layer1.png" width={25} height={25} alt="layer" />
            </div>
          </motion.div>

          <motion.div
            className="absolute right-20 top-18"
            variants={rotateAnimation}
            initial="initial"
            animate="animate"
          >
            <div className="bg-[#E7CAAA] p-3 rounded-lg">
              <Image src="/layer2.png" width={25} height={25} alt="layer" />
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl font-bold text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Subscribe To Our Newsletter
          </motion.h2>

          <motion.p
            className="mt-3 text-gray-600 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Every couple of weeks we send out an update and a few things that
            have inspired us.
          </motion.p>

          <motion.div
            className="mt-6 sm:flex sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="sm:flex-1 max-w-[660px] h-[62px] mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Write Your Mail Here..."
                  className="min-w-0 w-[459px] flex-1 px-4 py-3 border border-[#E7CAAA] rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                />
                <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent font-medium rounded-xl text-white bg-green-800 hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-800">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="bg-gray-100 pt-10 pb-5">
        <div className="border-t-2  border-b-2 w-[80%] mx-auto border-gray-200">
          <div className="max-w-6xl mx-auto py-10 px-1 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Logo and Social Links */}
              <div>
                <div className="flex flex-col items-center">
                  <Image
                    src="/logo2.png"
                    alt="Chair Location"
                    width={126}
                    height={110}
                    className="  "
                  />

                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {/* Social Icons */}
                    <a href="#" className="text-green-800 hover:text-green-700">
                      <span className="sr-only">Facebook</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a href="#" className="text-green-800 hover:text-green-700">
                      <span className="sr-only">YouTube</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a href="#" className="text-green-800 hover:text-green-700">
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                      </svg>
                    </a>
                    <a href="#" className="text-green-800 hover:text-green-700">
                      <span className="sr-only">Twitter</span>
                      <svg
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Main Pages */}
              <div className="mt-12 md:mt-0">
                <h3 className="text-2xl font-medium text-gray-900">
                  Main Pages
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/"
                      className="flex items-center text-base text-gray-600 hover:text-gray-900"
                    >
                      <span className="text-green-800 mr-2">•</span> Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="flex items-center text-base text-gray-600 hover:text-gray-900"
                    >
                      <span className="text-green-800 mr-2">•</span> About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/how-it-works"
                      className="flex items-center text-base text-gray-600 hover:text-gray-900"
                    >
                      <span className="text-green-800 mr-2">•</span> How It
                      Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="flex items-center text-base text-gray-600 hover:text-gray-900"
                    >
                      <span className="text-green-800 mr-2">•</span> Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/membership"
                      className="flex items-center text-base text-gray-600 hover:text-gray-900"
                    >
                      <span className="text-green-800 mr-2">•</span> Membership
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Products and App Download */}
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div className="mt-12 md:mt-0">
                  <h3 className="text-xl font-medium text-gray-900">
                    Products
                  </h3>
                  <ul className="mt-4 space-y-4">
                    <li>
                      <Link
                        href="/shared-space"
                        className="flex items-center text-base text-gray-600 hover:text-gray-900"
                      >
                        <span className="text-green-800 mr-2">
                          <Image
                            src="/co-working.png"
                            width={20}
                            height={20}
                            className=" ml-2"
                          />
                        </span>{" "}
                        Shared Space
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/private-offices"
                        className="flex items-center text-base text-gray-600 hover:text-gray-900"
                      >
                        <span className="text-green-800 mr-2">
                          <Image
                            src="/workplace.png"
                            width={20}
                            height={20}
                            className=" ml-2"
                          />
                        </span>{" "}
                        Private Offices
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/meeting-rooms"
                        className="flex items-center text-base text-gray-600 hover:text-gray-900"
                      >
                        <span className="text-green-800 mr-2">
                          <Image
                            src="/conss.png"
                            width={20}
                            height={20}
                            className=" ml-2"
                          />
                        </span>{" "}
                        Meeting Rooms
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/virtual-offices"
                        className="flex items-center text-base text-gray-600 hover:text-gray-900"
                      >
                        <span className="text-green-800 mr-2">
                          <Image
                            src="/call.png"
                            width={20}
                            height={20}
                            className=" ml-2"
                          />
                        </span>{" "}
                        Virtual Offices
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="mt-12 md:mt-0">
                  <h3 className="text-lg font-medium text-gray-900">
                    Download the
                  </h3>
                  <h3 className="text-lg font-medium text-gray-900">
                    Chair Location App
                  </h3>
                  <div className="mt-4 space-y-4">
                    <a href="#" className="inline-block">
                      <Image
                        src="/google1.png"
                        alt="Get it on Google Play"
                        width={140}
                        height={42}
                      />
                    </a>
                    <a href="#" className="inline-block">
                      <Image
                        src="/apple.png"
                        alt="Download on the App Store"
                        width={140}
                        height={42}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="  flex mx-auto w-[80%] pb-5  justify-between  items-center">
        <div className="flex  ">
          <Link
            href="/privacy-policy"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Privacy & Policy
          </Link>
          <span className="text-gray-400">|</span>
          <Link
            href="/terms"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Terms & Conditions
          </Link>
        </div>
        <p className="text-sm text-gray-500">
          All Copyrights Chair Location | Developed by{" "}
          <a href="#" className="text-green-800 hover:underline">
            e-RAMO For Digital Solutions
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
