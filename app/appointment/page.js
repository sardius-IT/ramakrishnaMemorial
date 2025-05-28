"use client";
import { useState } from "react";

export default function OPAppointmentForm() {
  const services = [
    {
      title: "Maternity & Women’s Health (Normal Deliveries)",
      description:
        "Safe and supportive care for natural childbirth, ensuring the health of both mother and baby.",
    },
    {
      title: "Cesarean (C-section) Deliveries",
      description:
        "Specialized surgical childbirth procedures prioritizing maternal and newborn safety.",
    },
    {
      title: "Uterus Operations",
      description:
        "Advanced surgical interventions for conditions like fibroids, endometriosis, and uterine abnormalities.",
    },
    {
      title: "Cryotherapy for Uterine Conditions",
      description:
        "Minimally invasive cold therapy used to treat cervical and uterine tissue abnormalities.",
    },
    {
      title: "Pediatric Care (Newborn and Child Healthcare)",
      description:
        "Comprehensive medical care for infants, children, and adolescents from birth through early adulthood.",
    },
    {
      title: "In-house Intensive Care Unit (ICU)",
      description:
        "24/7 critical care unit equipped to manage life-threatening conditions with advanced monitoring and treatment.",
    },
    {
      title: "Diagnostics & Support (Ultrasound Scanning)",
      description:
        "Accurate imaging services to monitor fetal health and diagnose a variety of gynecological and abdominal issues.",
    },
    {
      title: "Support for Children with Complex Health Needs",
      description:
        "Individualized care plans and long-term support for children with chronic or rare medical conditions.",
    },
    {
      title: "Intensive Pediatric Care",
      description:
        "Specialized care for critically ill infants and children requiring constant monitoring and intervention.",
    },
    {
      title: "Jaundice Treatment (Phototherapy)",
      description:
        "Effective light therapy for managing newborn jaundice and preventing complications.",
    },
    {
      title: "Prenatal & Postnatal Care Guidance",
      description:
        "Expert guidance and healthcare support before, during, and after childbirth for both mother and child.",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    date: "",
    department: "",
    doctor: "",
    reason: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");
    try {
      const res = await fetch("/api/op-appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit");

      const result = await res.json();
      setMessage(result.message || "Appointment submitted successfully.");
      setFormData({
        name: "",
        age: "",
        gender: "",
        phone: "",
        date: "",
        department: "",
        doctor: "",
        reason: "",
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-20 text-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/medical.avif')`,
      }}
    >
      <h2 className="text-6xl font-bold mb-4"> Appointment</h2>

      <div className="max-w-xl mx-auto p-6 bg-white text-black shadow rounded mt-10">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            aria-label="Patient Name"
            placeholder="Patient Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <input
            name="age"
            aria-label="Age"
            placeholder="Age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <select
            name="gender"
            aria-label="Gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input
            name="phone"
            aria-label="Phone Number"
            placeholder="Phone Number"
            type="tel"
            pattern="[0-9]{10}"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded"
          />
          <input
            name="date"
            aria-label="Appointment Date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            required
            className="w-full border p-2 rounded"
          />
          <select
            name="department"
            aria-label="Department"
            value={formData.department}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded bg-gray-100"
          >
            <option value="">Select Department</option>
            {services.map((service, index) => (
              <option key={index} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
          <input
            name="doctor"
            aria-label="Doctor (optional)"
            placeholder="Doctor (optional)"
            value={formData.doctor}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <textarea
            name="reason"
            aria-label="Reason for Visit"
            placeholder="Reason for Visit"
            value={formData.reason}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>

          {message && <p className="text-green-600 mt-2">{message}</p>}
          {error && <p className="text-red-600 mt-2">{error}</p>}
        </form>
      </div>
    </section>
  );
}
