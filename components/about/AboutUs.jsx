"use client";
import Image from "next/image";
import Link from "next/link";
import { FaUser, FaPhone, FaGithub, FaEnvelope } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-screen py-8 px-4 mt-16">
      <div className="container mx-auto max-w-screen-lg">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">About Us</h1>
          <p className="text-lg text-gray-600">
            Learn more about our company and what drives us to deliver the best.
          </p>
        </header>

        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src={
                  "https://media.istockphoto.com/id/1699842032/photo/online-shopping-e-commerce-concept-woman-using-mobile-phone-and-laptop-computer-for-online.webp?b=1&s=612x612&w=0&k=20&c=E4ctUBUcKB0BKyMONL2WcryNxddenFtoM242BnbJM2I="
                }
                alt="About Us"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 mb-4 text-justify">
                We are committed to providing the highest quality products and
                exceptional service. Our mission is to make online shopping
                easy, enjoyable, and accessible to everyone.
              </p>
              <p className="text-gray-700 text-justify">
                Our dedicated team works tirelessly to ensure that every
                customer has a memorable shopping experience. We believe in
                transparency, integrity, and innovation in everything we do.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Our Vision
              </h2>
              <p className="text-gray-700 mb-4 text-justify">
                To be the leading online shopping platform, recognized globally
                for our exceptional products, unparalleled customer service, and
                innovative approach to e-commerce.
              </p>
              <p className="text-gray-700 text-justify">
                We aim to continuously evolve and adapt to the ever-changing
                market, setting new standards in the industry and inspiring
                others to follow.
              </p>
            </div>
            <div className="md:w-1/2 my-4 md:mb-0">
              <Image
                src={
                  "https://media.istockphoto.com/id/1249219777/photo/shopping-online-concept-parcel-or-paper-cartons-with-a-shopping-cart-logo-in-a-trolley-on-a.webp?b=1&s=612x612&w=0&k=20&c=Z3RsrcQm2G19uOggBLXRtJZ_2mwvHyJikV4Ib3mqgd0="
                }
                alt="Our Vision"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <FaUser className="text-blue-500 mr-3" />
              <span className="text-gray-700">Jakeer Shaik - Founder</span>
            </div>
            <div className="flex items-center">
              <FaGithub className="text-blue-500 mr-3" />
              <Link
                href={"https://github.com/jakeer-shaik"}
                className="text-gray-700 hover:text-blue-500 transition"
              >
                Github
              </Link>
            </div>
            <div className="flex items-center">
              <FaPhone className="text-blue-500 mr-3" />
              <span className="text-gray-700">+91-8074298581</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-blue-500 mr-3" />
              <span className="text-gray-700">support@shoplite.com</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
