import React, { useState } from 'react';
import Socials from './components/Socials';
import emailjs from 'emailjs-com';
import face from '../../assets/icons8-facebook.gif'
import insta from '../../assets/icons8-instagram.gif'
import twi from '../../assets/icons8-twitter.gif'

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation (check for @ and .)
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

// Send email using EmailJS
try {
  await emailjs.send("service_jttgk3s", "template_ai5ey4f", {
    from_name: name,
    from_email: email,
    message: message,
  }, 'dvagDdk5VEitKIysa'); // Replace 'YOUR_USER_ID' with your EmailJS Public Key

  setFormSubmitted(true);
  setError(null); // Clear any previous errors
  setName('');
  setEmail('');
  setMessage('');
} catch (error) {
  console.error('Error sending email:', error);
  setError('An error occurred. Please try again later.');
}

  };

  return (
    <div className="w-full flex flex-col mx-auto py-16 px-4">
    <div className=" w-full  flex flex-row items-center justify-center mb-7">
    <div className="bg-primary text-white w-8/12 h-20  rounded-2xl flex items-center text-center ">
        <h2 className=" text-3xl font-bold text-center pl-96 ">Contact us </h2>
    </div>
    </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Social media section */}
        <div className="flex flex-col items-center space-y-4">
          <Socials
            image={face}
            text="Follow us on Facebook"
            url="https://www.facebook.com/"
          />
          <Socials
            image={twi}
            text="Follow us on Twitter"
            url="https://www.twitter.com/"
          />
          <Socials
            image={insta}
            text="Follow us on Instagram"
            url="https://www.instagram.com/"
          />
        </div>

        {/* Contact form section */}
        <div className="flex flex-col space-y-4">
          {formSubmitted ? (
            <p className="text-green-500 text-center">
              Thank you for your message! We'll get back to you soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-primary font-medium">
                  Name (required)
                </label>
                <input
                  type="text"
                  id="name"
                  className="rounded-md border border-primary px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-primary font-medium">
                  Email (required)
                </label>
                <input
                  type="email"
                  id="email"
                  className="rounded-md border border-primary px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-primary font-medium">
                  Message (required)
                </label>
                <textarea
                  id="message"
                  className="rounded-md border border-primary px-3 py-2 h-24 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center mt-6 px-4 py-2 bg-primary text-white rounded-md hover:bg-white hover:scale-110 hover:text-primary border hover:border-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
