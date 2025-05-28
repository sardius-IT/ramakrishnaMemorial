'use client';
import { useState } from 'react';

export default function OPAppointmentForm() {
  const [formData, setFormData] = useState({
    name: '', age: '', gender: '', phone: '',
    date: '', department: '', doctor: '', reason: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/op-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      alert(result.message);
    } catch (err) {
      alert('Something went wrong.');
      console.error(err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-800 shadow rounded mt-10">
      <h2 className="text-xl font-bold mb-4 text-center">OP Appointment Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Patient Name" onChange={handleChange} required className="w-full border p-2 rounded" />
        <input name="age" placeholder="Age" type="number" onChange={handleChange} required className="w-full border p-2 rounded" />
        <select name="gender" onChange={handleChange} required className="w-full border p-2 rounded">
          <option value="">Select Gender</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
        <input name="phone" placeholder="Phone Number" type="tel" pattern="[0-9]{10}" onChange={handleChange} required className="w-full border p-2 rounded" />
        <input name="date" type="date" onChange={handleChange} required className="w-full border p-2 rounded" />
        <select name="department" onChange={handleChange} required className="w-full border p-2 rounded">
          <option value="">Select Department</option>
          <option>General</option>
          <option>ENT</option>
          <option>Orthopedics</option>
        </select>
        <input name="doctor" placeholder="Doctor (optional)" onChange={handleChange} className="w-full border p-2 rounded" />
        <textarea name="reason" placeholder="Reason for Visit" onChange={handleChange} className="w-full border p-2 rounded" />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
}
