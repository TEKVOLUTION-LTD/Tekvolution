import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import ContactImage from '../assets/ContactImage.jpg';

const ContactUs = () => {
  // Create refs for each form input
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const messageRef = useRef();

  // State for controlling the visibility of the success message
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Function to handle form submission and send email
  const sendEmail = (e) => {
    e.preventDefault();

    // EmailJS parameters
    const templateParams = {
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      message: messageRef.current.value,
    };

    emailjs
      .sendForm(
        'service_35olwxh', // Replace with your EmailJS Service ID
        'template_wan66kp', // Replace with your EmailJS Template ID
        e.target,
        'zLbX2mQq89Jn4A_OP' // Replace with your EmailJS User ID
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setShowSuccessMessage(true); // Show success message
        e.target.reset(); // Reset the form after submission
      })
      .catch((error) => {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again.');
      });
  };

  // Code for restricting just letters in the firstname and lastname input boxes
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Allow only letters (uppercase and lowercase)
    const sanitizedValue = value.replace(/[^A-Za-z]/g, "");
    setFormData({
      ...formData,
      [name]: sanitizedValue,
    });
  };

  // Code restricting length of phone numbers longer than 11 digits
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChanges = (e) => {
    const { value } = e.target;

    // Allow only digits and restrict length to 11
    const sanitizedValue = value.replace(/\D/g, ""); // Remove non-digit characters
    if (sanitizedValue.length <= 11) {
      setPhoneNumber(sanitizedValue);
    }
  };

  return (
    <div className="max-w-6xl lg:flex sm:block md:flex justify-between gap-10">
      {showSuccessMessage ? (
        <div className="bg-white-400 border border-pink-400 text-[#C823ED] px-4 py-3 rounded relative mx-10 lg:mx-0">
          <p>Your message has been sent successfully!</p>
          <button
            onClick={() => setShowSuccessMessage(false)}
            className="mt-4 bg-[#C823ED] lg:ml-[4.2rem] hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-3xl  justify-center items-center"
          >
            Dismiss
          </button>
        </div>
      ) : (
        <>
          {/* Contact Form */}
          <div className="lg:w-1/2 mx-10 lg:mx-0 border-4 border-[#C823ED] mb-4 p-4 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Contact Us
            </h2>

            <form onSubmit={sendEmail}>
              <div className="flex justify-between mb-4">
                <div className="w-1/2 mr-2">
                  <label className="block text-gray-600 mb-2">First Name</label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    ref={firstNameRef}
                    className="block w-full bg-gray-100 rounded-lg p-2 border-2 outline-[#e290f4] border-[#C823ED]"
                    required
                    value={formData.first_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-1/2 ml-2">
                  <label className="block text-gray-600 mb-2">Last Name</label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    ref={lastNameRef}
                    className="block w-full bg-gray-100 rounded-lg p-2 border-2 outline-[#e290f4] border-[#C823ED]"
                    required
                    value={formData.last_name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  name="user_email"
                  ref={emailRef}
                  className="block w-full bg-gray-100 rounded-lg p-2 border-2 outline-[#e290f4] border-[#C823ED]"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">Phone Number</label>
                <input
                  type="number"
                  id="user_phone"
                  name="user_phone"
                  ref={phoneRef}
                  className="block w-full bg-gray-100 rounded-lg p-2 border-2 outline-[#e290f4] border-[#C823ED]"
                  value={phoneNumber}
                  onChange={handleChanges}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-600 mb-2">
                  What do you have in mind? Max 300 characters
                </label>
                <textarea
                  rows="5"
                  type="text"
                  name="message"
                  ref={messageRef}
                  className="block w-full bg-gray-100 rounded-lg p-2 border-2 outline-[#e290f4] border-[#C823ED]"
                  required
                />
              </div>
              <div className="block text-center justify-center">
                <button
                  type="submit"
                  className="bg-[#C823ED] hover:bg-pink-500 text-white font-bold py-2 px-4 rounded-3xl"
                >
                  Let's Talk About Your Idea
                </button>
              </div>
            </form>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 sm:w-full items-center justify-center mx-10 lg:mx-0">
            <img
              src={ContactImage}
              alt="ContactImage"
              className="w-full lg:w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-dark lg:px-[5rem] px-[3rem] my-10 text-center text-xl">
              Looking for the solution that best fits your business needs?
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ContactUs;
