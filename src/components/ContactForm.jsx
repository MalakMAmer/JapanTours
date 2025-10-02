
import React, { useState } from 'react';
import emailjs from "emailjs-com";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {

    const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: ''
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // validate inputs
  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.comment.trim()) newErrors.comment = "Comment is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // send via EmailJS
      emailjs
        .send(
        "service_megml8e",
        "template_kmu85p4",
        {
            name: formData.name,
            email: formData.email,
            comment: formData.comment,
        },
        "B-8HGLhhRdRlt7Q2-" 
        )
        .then(
        (result) => {
            console.log("Company email sent:", result.text);

            return emailjs.send(
            "service_megml8e",
            "template_glzukua",
            {
                name: formData.name,
                email: formData.email,
                comment: formData.comment,
            },
            "B-8HGLhhRdRlt7Q2-"
            );
        }
        )
        .then(
        (result) => {
            console.log("User auto-reply sent:", result.text);
            toast.success("Your request was sent successfully!");
            setSuccessMessage(
            "Your request has been submitted! Check your email for confirmation."
            );
            setFormData({ name: "", email: "", comment: "" });
        },
        (error) => {
            console.log("Error:", error.text);
            setSuccessMessage("Oops! Something went wrong. Try again.");
            toast.error("Failed to send message. Please try again.");
        }
        );
    }
  };

  return (

    <>
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col gap-3 p-10 rounded-xl bg-white/5 backdrop-blur-sm text-white sm:w-120 md:w-150 shadow-lg" noValidate
      >
        <h4 className='text-3xl text-white pb-4'>Want to join us,<span className='block'> but still have questions?</span></h4>
        <legend className="text-xl font-semibold opacity-70 pt-1 ps-1">Leave a request</legend>

        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 bg-transparent border-b border-white/40 focus:outline-none focus:border-white transition"
        />
        {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 bg-transparent border-b border-white/40 focus:outline-none focus:border-white transition"
        />
        {errors.email && <p className="text-red-400 text-sm">{errors.email}</p>}

        <textarea
          name="comment"
          placeholder="Comment"
          value={formData.comment}
          onChange={handleChange}
          rows="4"
          className="p-3 rounded-lg bg-transparent border border-white/40 focus:outline-none focus:border-white transition max-h-25"
        />
        {errors.comment && <p className="text-red-400 text-sm">{errors.comment}</p>}

        <button 
          type="submit" 
          className="mt-2 cursor-pointer bg-white text-black hover:bg-white/80 transition-all p-3 rounded-lg font-medium"
        >
          Submit
        </button>
        {successMessage && (
          <p className="text-green-400 text-sm mt-2">{successMessage}</p>
        )}
      </form>

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
    

    
  )
}

export default ContactForm