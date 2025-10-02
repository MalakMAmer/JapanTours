import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    people: 1,
    date: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form inputs
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    if (!formData.people || formData.people < 1) newErrors.people = 'At least 1 person required';
    if (!formData.date) newErrors.date = 'Select a date';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    // to company
    emailjs
      .send(
        'service_megml8e', 
        'template_kmu85p4', 
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          people: formData.people,
          date: formData.date,
        },
        'B-8HGLhhRdRlt7Q2-' 
      )
      .then(
        (result) => {
          console.log('Company email sent:', result.text);

          // auto-reply to user
          return emailjs.send(
            'service_megml8e',
            'template_glzukua',
            {
              name: formData.name,
              email: formData.email,
              people: formData.people,
              date: formData.date,
            },
            'B-8HGLhhRdRlt7Q2-'
          );
        }
      )
      .then(
        (result) => {
          console.log('User auto-reply sent:', result.text);
          toast.success("Your request was sent successfully!");
          setSuccessMessage('Booking submitted! Check your email for confirmation.');
          setFormData({ name: '', email: '', phone: '', people: 1, date: '' });
        },
        (error) => {
          console.error('EmailJS Error:', error.text);
          toast.error("Failed to send message. Please try again.");
          setSuccessMessage('Oops! Something went wrong. Try again.');
        }
      );
  };

  return (

    <>
      <div className="min-h-screen bg-cover bg-center relative" style={{ backgroundImage: "url('/girl.jpeg')" }}>
      {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Page content */}
        <div className="relative z-10 flex flex-col md:flex-row justify-center items-start gap-10 p-4 sm:p-8">
          
          {/* Booking Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg text-white w-full md:w-1/2 flex flex-col gap-3"
            noValidate
          >
            <h2 className="text-3xl mb-4 uppercase text-yellow-400">Book Your Tour Now!</h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 bg-transparent border-b border-white/40 focus:outline-none focus:border-yellow-400 transition"
            />
            {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 bg-transparent border-b border-white/40 focus:outline-none focus:border-yellow-400 transition"
            />
            {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 bg-transparent border-b border-white/40 focus:outline-none focus:border-yellow-400 transition"
            />
            {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}

            <input
              type="number"
              name="people"
              placeholder="Number of People"
              min="1"
              value={formData.people}
              onChange={handleChange}
              className="p-3 bg-transparent border-b border-white/40 focus:outline-none focus:border-yellow-400 transition"
            />
            {errors.people && <p className="text-red-400 text-sm">{errors.people}</p>}

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="p-3 bg-transparent border-b border-white/40 focus:outline-none focus:border-yellow-400 transition"
            />
            {errors.date && <p className="text-red-400 text-sm">{errors.date}</p>}

            <button
              type="submit"
              className="mt-2 cursor-pointer bg-yellow-400 text-black hover:bg-yellow-500 transition-all p-3 rounded-lg font-medium"
            >
              Submit Booking
            </button>

            {successMessage && <p className="text-green-400 mt-2">{successMessage}</p>}
          </form>

          {/* Tour Summary */}
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-lg text-white w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-3 uppercase">Tour Summary</h3>
            <p>10-day tour across Japan: <span className="text-yellow-400">Osaka, Kyoto, Tokyo</span></p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Accommodation in premium hotels</li>
              <li>All meals included</li>
              <li>Transport and guided tours covered</li>
              <li>Photography opportunities at iconic spots</li>
            </ul>
          </div>

        </div>
      </div>

      <ToastContainer
          position="bottom-right"
          autoClose={5000}
          limit={2}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Zoom} />
    </>
    
  );
}

export default Booking;
