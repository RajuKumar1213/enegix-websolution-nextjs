"use client";

import { useEffect, useState } from "react";
import ServicesSection from "@/components/services-section";
import TechStackSimple from "@/components/tech-stack-simple";
import CountriesWeServe from "@/components/countries-we-serve";
import WhyChooseUsSection from "../components/why-choose-us";
import Footer from "@/components/footer";
import ScrollToTopButton from "@/components/scroll-to-top";
import ScrollFix from "@/components/scroll-fix";
import { enablePageScroll } from "@/utils/scroll-helper";
import Navbar from "@/components/navbar";
import { Toaster } from "react-hot-toast";
import ReviewSection from "@/components/new-review-section";
import FAQSearch from "@/components/faq-search";
import HeroSectionNew from "@/components/hero-section-new";
import NewReviewSection from "@/components/new-review-section";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  // Only run client-side effects after hydration
  useEffect(() => {
    setIsClient(true);

    // Enable page scrolling and fix scroll issues
    enablePageScroll();
    // Clear any transform styles that might be affecting scroll
    const mainContent =
      document.getElementById("__next") || document.querySelector("main");
    if (mainContent) {
      mainContent.style.transform = "none";
    }

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      if (
        anchor &&
        anchor.hash &&
        anchor.href.includes(window.location.pathname)
      ) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          window.scrollTo({
            top:
              targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: "smooth",
          });
        }
      }
    };

    document.body.addEventListener("click", handleAnchorClick);
    return () => document.body.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <div className="">
      <Toaster position="top-right" reverseOrder={false} />
      {/* {isClient && <LoadingScreen />} */}
      {isClient && <ScrollFix />}
      <Navbar />


      <HeroSectionNew />

      <ServicesSection />
      <CountriesWeServe />
      <NewReviewSection />
      <TechStackSimple />
      <WhyChooseUsSection />
      <FAQSearch />
      {/* <VideoShowcase /> */}
      {/* <ContactCTA /> */}
      <Footer />
      {isClient && <ScrollToTopButton />}
    </div>
  );
}
