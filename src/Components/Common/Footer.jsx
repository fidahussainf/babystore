import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-[#1C2A54] p-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold text-6xl mb-4">Categories</h3>
          <ul className="font-normal text-xl">
            <li>
              <a href="#" className="hover:text-gray-400">
                Feeding
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Skincare
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Nursery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Clothes
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Diapers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Toys
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Gear & Safety
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                School
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Mommy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Outdoor
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-6xl mb-4">Contact Us</h3>
          <ul className="font-normal text-xl">
            <li className="flex items-start mb-2">
              <FaMapMarkerAlt className="mr-2 w-16 h-8 text-lg" />
              <span className="hover:text-gray-400">
                Babystore. c/o Edge Technical Solutions, 1706, Silver Tower,
                Marasi Dr, Business Bay, Dubai, United Arab Emirates
              </span>
            </li>
            <li className="flex items-center mb-2">
              <FaPhoneAlt className="mr-2 text-lg" />
              <a href="tel:+9712129299953" className="hover:text-gray-400">
                +971 212 929 9953
              </a>
            </li>
            <li className="flex items-center mb-2">
              <FaWhatsapp className="mr-2 text-lg" />
              <a href="tel:+971557994258" className="hover:text-gray-400">
                +971 55 799 4258
              </a>
            </li>
            <li className="flex items-center mb-2">
              <FaTelegram className="mr-2 text-lg" />
              <a
                href="mailto:info@babystore.ae"
                className="hover:text-gray-400"
              >
                info@babystore.ae
              </a>
            </li>
            <li className="flex items-center mb-2">
              <div className="mr-6"></div>
              <a
                href="mailto:sales@babystore.ae"
                className="hover:text-gray-400"
              >
                sales@babystore.ae
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-6xl mb-4">Company Info</h3>
          <ul className="font-normal text-xl">
            <li>
              <a href="#" className="hover:text-gray-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Our Brands
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Media & Press
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Blogs
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-6xl mb-4">Shipping & Policies</h3>
          <ul className="font-normal text-xl">
            <li>
              <a href="#" className="hover:text-gray-400">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Shipping Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Cancellation & Returns
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-5 pb-1">
        <img src="./images/logo.png" alt="logo" />
      </div>
      <p className="text-[#1C2A54] text-base pb-10">
        Babystore.ae is one of the biggest online store with mother and babv
        products. Having a tagline "From tummv to toddler", we carrv a large
        number of brands with various categories. Our range of International
        brands is of highest aualitv and best suited for babv and mommv. We
        provide free deliver all over UAE which includes Dubai. Abu Dhabi.
        Shariah. Aiman. RAK. Fuiairah and UAO. Our range includes evervthing a
        mom needs herself and her little one. from prenatal care to the toddler
        stage and bevond. We are the best Online Shonning Store. and we
        providing 50k+ Products.
      </p>

      <div className="flex  pt-1 border-t-[1px] border-gray-400 justify-between items-center">
        <div className=" ">
          <p className="text-sm">&copy; 2024 Babystore. All Rights Reserved</p>
        </div>
        <div className=" flex gap-4">
          <a href="#" className="text-sm hover:text-gray-400">
            Promotion
          </a>
          <a href="#" className="text-sm hover:text-gray-400">
            Contact
          </a>
          <a href="#" className="text-sm hover:text-gray-400">
            Frequently Asked Questions
          </a>
        </div>
        <div className="flex gap-4 ">
          <a href="#" className="hover:text-gray-400">
            <img src="./images/footer/PayPal.png" alt="PayPal" className="" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <img
              src="./images/footer/GooglePay.png"
              alt="Google Pay"
              className=""
            />
          </a>
          <a href="#" className="hover:text-gray-400">
            <img src="./images/footer/ApplePay.png" alt="iPay" className="" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <img src="./images/footer/stripe.png" alt="Stripe" className="" />
          </a>
          <a href="#" className="hover:text-gray-400">
            <img
              src="./images/footer/Mastercard.png"
              alt="Credit Card"
              className=""
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
