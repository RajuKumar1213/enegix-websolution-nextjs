"use client";

import React from "react";
import Link from "next/link";
import { DockDemo } from "./dock-demo";
import Container from "./Container";
import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
  const companyLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  const serviceLinks = [
    {
      label: "UI/UX Designing",
      href: "/services/ui-ux-designing",
    },
    {
      label: "Website Development",
      href: "/services/website-development",
    },
    {
      label: "Mobile Application",
      href: "/services/mobile-application",
    },
    {
      label: "CRM/MLM",
      href: "/services/crm-mlm",
    },
    {
      label: "Search Engine Optimization (SEO)",
      href: "/services/search-engine-optimization",
    },
    {
      label: "Google My Business",
      href: "/services/google-my-business",
    },
    {
      label: "Paid Advertising",
      href: "/services/paid-advertising",
    },
    {
      label: "Social Media Marketing",
      href: "/services/social-media-marketing",
    },
    {
      label: "Blog And Articles",
      href: "/services/blog-and-articles",
    },
    {
      label: "Content Writing",
      href: "/services/content-writing",
    },
    {
      label: "Branding and Logo Design",
      href: "/services/logo-design",
    },
    {
      label: "Landing Page Design",
      href: "/services/landing-page-design",
    },
  ];

  const socialLinks = [
    { label: "Twitter", href: "https://x.com/enegixweb", icon: "twitter" },
    {
      label: "Facebook",
      href: "https://www.facebook.com/enegixwebsolution/",
      icon: "facebook",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/enegixwebsolution/",
      icon: "instagram",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/enegix-web-solutions-332427360/",
      icon: "linkedin",
    },
  ];

  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case "twitter":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16">
            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
          </svg>
        );
      case "facebook":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          </svg>
        );
      case "instagram":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.040-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
          </svg>
        );
      case "linkedin":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-emerald-900 via-teal-900 to-teal-900 overflow-hidden">
      <Container>
        {/* Subtle top gradient for smooth transition */}
        <div className="absolute inset-0">
          <div className="absolute top-0 w-full h-24 bg-gradient-to-b from-emerald-800/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
            <div>
              <h5 className="text-xl font-black mb-6 text-white">
                EnegixWeb Solutions
              </h5>
              <p className="mb-2 text-white ">
                House No.2, Old AG More, Kadru, Ranchi, Jharkhand , 834002
              </p>

              <p className="mb-4"></p>
              <div className="flex space-x-4 mt-6">
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-gray-200 hover:text-emerald-300 transition-colors duration-300">
                    {renderSocialIcon(link.icon)}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h6 className="text-white font-bold mb-4 font-montserrat tracking-tight">
                Services
              </h6>
              <ul className="grid grid-cols-2 ">
                {serviceLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-200 text-xs hover:text-emerald-300 transition-colors duration-300 font-space-grotesk  font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div >
              <h6 className="text-white font-bold mb-4 font-poppins tracking-tight">
                Company
              </h6>
              <ul className="space-y-2">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-200 hover:text-emerald-300 transition-colors duration-300 font-outfit text-sm font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="text-white font-bold mb-4 font-montserrat tracking-tight">
                Contact Us
              </h6>
              <address className="not-italic text-gray-200 font-space-grotesk text-sm font-medium">
                <p className="mb-2">
                  <a
                    href="mailto:contact@enegixwebsolutions.com"
                    className="hover:text-emerald-300 transition-colors ">
                    <strong className="text-white font-inter font-bold">
                      {" "}
                      <MdOutlineMail className="inline text-lg font-black" />
                    </strong>{" "}
                    contact@enegixwebsolutions.com
                  </a>
                </p>
                <p>
                  <strong className="text-white font-inter font-bold">
                    <FaPhone className="inline  font-black" />
                  </strong>{" "}
                  <a
                    href="tel:+919608263050"
                    className="hover:text-emerald-300 transition-colors">
                    +91 96082 63050
                  </a>
                </p>
              </address>
            </div>
          </div>

          <hr className="border-gray-500/50 my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-200 text-sm mb-4 md:mb-0 font-space-grotesk font-medium">
              © {new Date().getFullYear()} Enegix Websolutions. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-gray-200 hover:text-emerald-300 text-sm transition-colors duration-300 font-inter font-medium">
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-200 hover:text-emerald-300 text-sm transition-colors duration-300 font-inter font-medium">
                Terms of Service
              </Link>
              <Link
                href="/cookie-policy"
                className="text-gray-200 hover:text-emerald-300 text-sm transition-colors duration-300 font-inter font-medium">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
