// app/find-doctor/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";

const doctors = [
 {
  name: "Dr. Peddabbayi Vellaturi",
  image: "/VIVEK .K IMAG.jpeg",
  specialty: "Interventional Cardiologist",
  interests:
    "Coronary Angioplasty, Complex Cardiac Interventions, Hypertension Management, Heart Failure, Preventive Cardiology, Cardiac Imaging",
  gender: "Male",
  experience: "52",
}
,
 {
  name: "Dr. Kishore Vellaturi MBBS, DCh",
  image: "/VIVEK .K IMAG.jpeg",
  specialty: "Paediatrician",
  interests:
    "Child Nutrition, Pediatric Cardiology, Neonatal Care, Childhood Asthma, Immunization, Preventive Pediatric Care",
  gender: "Male",
  experience: "48",
},

{
  name: "Dr. Rani Vellaturi MBBS, DGO",
  image: "/VIVEK .K IMAG.jpeg",
  specialty: "Obstetrician and Gynaecologist",
  interests:
    "Prenatal Care, High-Risk Pregnancy, Menstrual Disorders, Menopause Management, Fertility Support, Preventive Women's Health",
  gender: "Female",
  experience: "45",
},

];

const headings = [
  "Meet Our Medical Experts",
  "Trusted Specialists for Your Care",
  "Compassionate & Experienced Doctors",
  "Your Health, Our Priority",
  "Excellence in Medical Care",
];

function DoctorCard({ doctor }) {
  return (
    <div className="max-w-4xl mx-auto p-6  border-b ">
      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        <Image
          src={doctor.image}
          alt={doctor.name}
          width={140}
          height={140}
          className="rounded-md object-cover"
        />
        <div className="flex-1 text-center sm:text-left">
          <h1 className="text-2xl font-bold text-blue-900">{doctor.name}</h1>
          <div className="my-4">
            <Link href="#appointment">
              <button className="bg-blue-900 text-white font-semibold px-4 py-2 rounded hover:bg-blue-800">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-center sm:justify-between gap-6 text-center sm:text-left">
        <div className="sm:flex-1 min-w-[150px]">
          <h2 className="font-bold text-blue-900">Specialty</h2>
          <p>{doctor.specialty}</p>
        </div>
        <div className="sm:flex-1 min-w-[150px]">
          <h2 className="font-bold text-blue-900">Clinical Interests</h2>
          <p>{doctor.interests}</p>
        </div>
        <div className="sm:flex-1 min-w-[150px]">
          <h2 className="font-bold text-blue-900">Gender</h2>
          <p>{doctor.gender}</p>
        </div>
        <div className="sm:flex-1 min-w-[150px]">
          <h2 className="font-bold text-blue-900">Years of Experience</h2>
          <p>{doctor.experience}</p>
        </div>
      </div>
    </div>
  );
}

export default function DoctorProfile() {
  const randomHeading = useMemo(() => {
    return headings[Math.floor(Math.random() * headings.length)];
  }, []);

  return (
    <>
      <h3 className="text-4xl sm:text-5xl font-semibold text-gray-900 bg-blue-100 rounded-xl  mb-10  py-10 text-center">
        {randomHeading}
      </h3>

      {doctors.map((doctor, index) => (
        <DoctorCard key={index} doctor={doctor} />
      ))}
    </>
  );
}
