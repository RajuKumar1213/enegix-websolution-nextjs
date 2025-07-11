"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top";
import Link from "next/link";
import Image from "next/image";
import { enablePageScroll } from "@/utils/scroll-helper";
import Button from "@/components/Button";
import { FaArrowRight, FaPlus, FaMinus, FaGoogle, FaMapMarkerAlt, FaStar, FaSearch, FaCamera, FaUsers, FaChartLine, FaClipboardList, FaCog, FaCheckCircle, FaRocket } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function GoogleMyBusiness() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    enablePageScroll();
  }, []);


  const faqs = [
    {
      question: "What is Google My Business and why is it important?",
      answer: "Google My Business (GMB) is a free tool that allows businesses to manage their online presence across Google Search and Maps. It's crucial for local SEO as it helps customers find your business, see reviews, hours, and contact information directly in search results."
    },
    {
      question: "How long does it take to see results from GMB optimization?",
      answer: "Initial improvements can be seen within 2-4 weeks, with significant ranking improvements typically occurring within 2-3 months. Local SEO is a long-term strategy that continues to build authority and visibility over time."
    },
    {
      question: "Do you help with getting more Google reviews?",
      answer: "Yes, we implement ethical review generation strategies, help set up automated review requests, and provide professional response management for all reviews. We focus on building genuine, positive customer experiences."
    },
    {
      question: "Can you optimize GMB for multiple business locations?",
      answer: "Absolutely! We specialize in multi-location businesses and can optimize individual GMB profiles for each location while maintaining brand consistency across all listings."
    },
    {
      question: "What's included in your GMB optimization service?",
      answer: "Our service includes complete profile setup, keyword optimization, photo optimization, Google Posts creation, review management, citation building, competitor analysis, and monthly performance reporting."
    },
    {
      question: "How do you measure GMB optimization success?",
      answer: "We track key metrics including local search rankings, profile views, website clicks, direction requests, phone calls, review ratings, and overall online visibility in local search results."
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-10 px-4 md:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}>
                <div className="flex items-center space-x-3 mb-6">
                  
                  <h1 className="text-5xl md:text-5xl font-bold text-green-600">
                    <FcGoogle className="text-6xl inline mb-3"/>oogle My Business
                  </h1>
                </div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Dominate local search results with optimized Google My Business listings. 
                  We help your business appear prominently when customers search for your 
                  services in your area.
                </p>

                <div className="w-sm">
                  <Link
                    href="https://wa.me/919608263050?text=Hi%20I%20am%20interested%20in%20your%20services.%20Can%20you%20share%20more%20details%20about%20your%20offerings?"
                    target="_blank">
                    <Button className="py-2 gap-3">Connect with Us <FaArrowRight /></Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="w-full flex justify-right mb-10  ">
                <Image
                  src="https://images.pexels.com/photos/38547/office-freelancer-computer-business-38547.jpeg"
                  alt="Google My Business Analytics"
                  height={600}
                  width={500}
                  className="w-[500px] h-[400px] rounded-tl-[100px] rounded-br-[100px]  object-cover shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-102  z-20"
                />
                <Image
                  src="/pattern.png"
                  alt="Hero Image"
                  height={600}
                  width={600}
                  className=" h-[400px] -top-15  relative md:-left-[200px] -left-[350px] object-cover  "
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="px-4 md:px-12 ">
          <div className="max-w-7xl mx-auto bg-white md:p-10 p-3 shadow-xl rounded-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-16">
              <div className="text-green-500 font-semibold text-sm uppercase tracking-wider mb-4">
                OUR GMB SERVICES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Local SEO Excellence
              </h2>
            </motion.div>

            {/* Services Grid - Clean Text Layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Column 1 */}
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Google My Business Setup
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Complete GMB profile creation and optimization with accurate business information, compelling descriptions, and strategic keyword placement. We ensure your listing stands out in local search results and attracts more customers.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Local SEO Optimization
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Strategic optimization techniques to improve your local search rankings. We optimize for location-based keywords, ensure NAP consistency, and implement proven local SEO strategies that drive qualified local traffic.
                  </p>
                </motion.div>
              </div>

              {/* Column 2 */}
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Review Management
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Professional review monitoring and response management to build trust and credibility. We help generate positive reviews through ethical strategies and handle negative feedback professionally to protect your reputation.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Local Citation Building
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Strategic placement of your business information across authoritative local directories and platforms. Consistent NAP citations boost your local authority and improve search engine trust in your business location.
                  </p>
                </motion.div>
              </div>

              {/* Column 3 */}
              <div className="space-y-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.5 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Google Posts & Media
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Engaging Google posts that showcase your products, services, and business updates. Professional photo optimization and regular content creation keep your listing fresh and encourage customer engagement.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.6 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Performance Analytics
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive tracking and reporting of your GMB performance including search visibility, customer actions, and review metrics. Data-driven insights help optimize your local presence for maximum business growth.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>



        {/* FAQ Section */}
        <section className="py-20 px-4 md:px-12 ">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our Google My Business optimization services
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.02 }}
                  className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200">
                    <span className="font-semibold text-gray-900 text-lg">
                      {faq.question}
                    </span>
                    {openFAQ === index ? (
                      <FaMinus className="w-5 h-5 text-green-600 flex-shrink-0" />
                    ) : (
                      <FaPlus className="w-5 h-5 text-green-600 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <ScrollToTopButton />
      </div>
    </>
  );
}
