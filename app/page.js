"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

import Header from "./components/navbar";
import Hero from "./components/Hero";
import Services from "./services/page";
import Doctors from "./find-doctor/page";
import AppointmentForm from "./appointment/page";
import Footer from "./components/Footer";
import AlertCards from "./components/AlertCards";
import QuickLinks from "./components/QuickLinks";
import Locations from "./locations/page";

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/man-being-sad-about-his-ill-wife.jpg",
      title: "Fertility Support – Helping Families Grow Since 1972",
      subtitle: "REPRODUCTIVE HEALTH",
      description: `At Ramakrishna Memorial Nursing Home, we understand the emotional journey of trying to conceive. With over 52 years of trusted care, we offer expert guidance, evaluation, and support for couples on the path to parenthood.`,
    },
    {
      image:
        "/happy-black-pediatrician-talking-little-girl-who-came-with-mother-clinic-covid19-pandemic.jpg",
      title: "Paediatric Care & Child Wellness",
      subtitle: "CHILD HEALTH",
      description: `Comprehensive medical care for infants, children, and adolescents—focusing on prevention, growth, development, and early treatment.`,
    },
    {
      image:
        "/young-doctor-supporting-his-patient.jpg",
      title: "Obstetrics & Gynaecology Care",
      subtitle: "WOMEN'S HEALTH",
      description: `Expert care in women's reproductive health, including pregnancy, childbirth, menstrual disorders, fertility treatments, and menopausal support.`,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <main className="overflow-x-hidden">
        <Hero />

        {/* Highlights Carousel Section */}
        <div className="bg-[#00294d] text-white py-8 px-4 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 px-2">
            A Legacy of Life and Love – Since 1972.
          </h2>

          <div className="relative w-full max-w-6xl flex items-center justify-center p-4 md:p-16">
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-0 z-10"
            >
              <ArrowLeftCircle
                size={36}
                className="text-white hover:text-gray-400"
              />
            </button>

            {/* Slide Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-white text-black rounded-lg overflow-hidden shadow-lg w-full">
              <div className="relative w-full h-60 sm:h-80 md:h-96">
                <Image
                  src={slides[currentSlide].image}
                  alt="Highlight Image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="p-6">
                <p className="uppercase font-semibold text-sm text-gray-600">
                  {slides[currentSlide].subtitle}
                </p>
                <h3 className="text-xl md:text-2xl font-bold my-4">
                  {slides[currentSlide].title}
                </h3>
                <p className="text-sm md:text-base text-gray-800">
                  {slides[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-0 z-10"
            >
              <ArrowRightCircle
                size={36}
                className="text-white hover:text-red-400"
              />
            </button>
          </div>

          {/* Dots */}
          <div className="flex space-x-2 mt-4">
            {slides.map((_, index) => (
              <span
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentSlide ? "bg-white scale-110" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* Sections */}
        <AlertCards />
        <Services />

        {/* Centered Responsive QuickLinks */}
        <div className="flex justify-center px-4 py-8 bg-gray-50">
          <QuickLinks />
        </div>

        <AppointmentForm />
        <Locations />
      </main>
      <Footer />
    </>
  );
}

