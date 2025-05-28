"use client";
import { useState } from "react";

const services = [
  "Maternity & Women’s Health (Normal Deliveries)",
  "Cesarean (C-section) Deliveries",
  "Uterus Operations",
  "Cryotherapy for Uterine Conditions",
  "Pediatric Care (Newborn and Child Healthcare)",
  "In-house Intensive Care Unit (ICU)",
  "Diagnostics & Support (Ultrasound Scanning)",
  "Support for Children with Complex Health Needs",
  "Intensive Pediatric Care",
  "Jaundice Treatment (Phototherapy)",
  "Prenatal & Postnatal Care Guidance",
];

export default function DoctorContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    address: "",
    department: "",
    date: "",
    reason: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
    alert("Appointment submitted!");
    // You can post to API here
  };

  return (
    <section id="appointment" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-semibold text-blue-700 mb-10">
          Doctor Contact Form
        </h3>

        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-4 text-left"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={handleChange}
            className="w-full p-3 border border-white rounded bg-gray-900"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 border border-white rounded bg-gray-900"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full p-3 border border-white rounded bg-gray-900"
            required
          />

          <select
            name="gender"
            onChange={handleChange}
            className="w-full p-3 border border-white rounded bg-gray-900"
            required
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <textarea
            name="address"
            placeholder="Address"
            rows="2"
            onChange={handleChange}
            className="w-full p-3 border border-white rounded bg-gray-900"
          ></textarea>

          <select
            name="department"
            onChange={handleChange}
            className="w-full p-3 border border-white rounded bg-gray-900"
            required
          >
            <option value="">Select Department</option>
            {services.map((title, index) => (
              <option key={index} value={title}>
                {title}
              </option>
            ))}
          </select>

          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="w-full p-3 border border-white rounded bg-gray-900"
            required
          />

          <textarea
            name="reason"
            placeholder="Reason for Appointment / Symptoms"
            rows="3"
            onChange={handleChange}
            className="w-full p-3 border border-white rounded bg-gray-900"
          ></textarea>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="consent"
              onChange={handleChange}
              className="w-5 h-5"
              required
            />
            <label htmlFor="consent" className="text-sm">
              I agree to the terms and privacy policy.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
