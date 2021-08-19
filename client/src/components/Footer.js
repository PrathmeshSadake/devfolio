import React from "react";

const Footer = () => {
  return (
    <section class="bg-white">
      <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav class="flex flex-wrap justify-center -mx-5 -my-2">
          <div class="px-5 py-2">
            <a
              href="/#"
              class="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              About
            </a>
          </div>
          <div class="px-5 py-2">
            <a
              href="/#"
              class="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Blog
            </a>
          </div>
          <div class="px-5 py-2">
            <a
              href="/#"
              class="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Team
            </a>
          </div>
          <div class="px-5 py-2">
            <a
              href="/#"
              class="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Pricing
            </a>
          </div>
          <div class="px-5 py-2">
            <a
              href="/#"
              class="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Contact
            </a>
          </div>
          <div class="px-5 py-2">
            <a
              href="/#"
              class="text-base leading-6 text-gray-500 hover:text-gray-900"
            >
              Terms
            </a>
          </div>
        </nav>
        <div class="flex justify-center mt-8 space-x-6">
          <i class="fab fa-facebook-square"></i>
          <i class="fab fa-twitter"></i>
          <i class="fab fa-google-plus-g"></i>
          <i class="fab fa-instagram"></i>
        </div>
        <p class="mt-8 text-base leading-6 text-center text-gray-400">
          © 2021 Shopgenix, Inc. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;