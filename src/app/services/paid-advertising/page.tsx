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
import { FaArrowRight, FaPlus, FaMinus, FaGoogle, FaFacebook, FaChartLine, FaBullseye, FaRocket, FaShieldAlt } from "react-icons/fa";
import { MdCampaign, MdAnalytics, MdTrendingUp, MdGpsFixed, MdMonetizationOn, MdInsights } from "react-icons/md";

export default function PaidAdvertising() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  useEffect(() => {
    enablePageScroll();
  }, []);

 

  const faqs = [
    {
      question: "Which advertising platforms do you manage?",
      answer: "We manage campaigns across Google Ads (Search, Display, Shopping, YouTube), Facebook & Instagram Ads, LinkedIn Ads, Microsoft Advertising (Bing), and other relevant platforms based on your target audience and business goals."
    },
    {
      question: "How much should I budget for paid advertising?",
      answer: "Ad budgets vary depending on your industry, competition, and goals. We typically recommend starting with at least $1,000-$3,000 per month for Google Ads and $500-$2,000 for social media ads. We'll provide specific recommendations based on your market analysis."
    },
    {
      question: "How quickly will I see results from paid advertising?",
      answer: "You can start seeing traffic and impressions immediately after campaigns launch. However, meaningful results and optimizations typically develop within 2-4 weeks as we gather data and refine targeting, ad copy, and bidding strategies."
    },
    {
      question: "Do you provide detailed performance reports?",
      answer: "Yes, we provide comprehensive monthly reports including key metrics like impressions, clicks, conversions, cost-per-click, return on ad spend (ROAS), and recommendations for improvement. We also offer real-time dashboard access."
    },
    {
      question: "Can you help improve my existing ad campaigns?",
      answer: "Absolutely! We offer campaign audits and optimization services for existing accounts. We'll analyze your current performance, identify opportunities for improvement, and implement strategies to enhance ROI and reduce costs."
    },
    {
      question: "What's the difference between Google Ads and social media advertising?",
      answer: "Google Ads target users actively searching for your products/services (intent-based), while social media ads target users based on demographics, interests, and behaviors (interest-based). Both have unique advantages and work best when used together strategically."
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
                  <a href="https://www.flaticon.com/free-icons/app" title="app icons"></a>
                  <MdCampaign className="text-5xl text-blue-500" />
                  <h1 className="text-5xl md:text-5xl font-bold text-green-600">
                    Paid Advertising
                  </h1>
                </div>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Drive instant traffic and qualified leads with strategic paid advertising campaigns. 
                  We maximize your ad spend ROI through expert Google Ads, Facebook Ads, and 
                  multi-platform advertising management.
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Paid Advertising & PPC Marketing"
                  height={600}
                  width={500}
                  className=" h-[400px] rounded-tl-[100px] rounded-br-[100px]  object-cover shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-102  z-20"
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
        <section className=" px-4 md:px-12 ">
          <div className="max-w-7xl mx-auto bg-white md:p-10 p-3 shadow-xl rounded-4xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center mb-16">
              <div className="text-green-500 font-semibold text-sm uppercase tracking-wider mb-4">
                OUR PAID ADVERTISING SERVICES
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Campaigns That Convert & Scale
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
                    Google Ads & Search Marketing
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We create high-converting Google Ads campaigns with strategic keyword research, compelling ad copy, and optimized landing pages. Our data-driven approach ensures maximum visibility when your customers are actively searching for your services.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Social Media Advertising
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Leverage Facebook, Instagram, LinkedIn, and other social platforms to reach your ideal audience. We craft engaging ad creatives and precisely target demographics, interests, and behaviors to drive qualified traffic and conversions.
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
                    Performance Analytics & Reporting
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive tracking and transparent reporting keep you informed of campaign performance. We monitor key metrics like CTR, conversion rates, and ROI, providing actionable insights to continuously improve your advertising results.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.4 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Audience Targeting & Retargeting
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    We implement sophisticated audience targeting strategies including demographic, geographic, and behavioral targeting. Our retargeting campaigns re-engage visitors who showed interest, significantly improving conversion rates and customer acquisition.
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
                    Campaign Optimization & A/B Testing
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Continuous optimization through systematic A/B testing of ad copy, creatives, landing pages, and targeting parameters. We identify what works best for your audience and scale successful elements while eliminating underperforming components.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.6 }}
                  className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    Budget Management & ROI Optimization
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Strategic budget allocation across platforms and campaigns to maximize return on ad spend. We monitor cost-per-click, cost-per-acquisition, and lifetime value metrics to ensure every dollar generates maximum impact for your business growth.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

=

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
                Find answers to common questions about our paid advertising services and process
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
