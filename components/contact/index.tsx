"use client";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import SocialLinks from "../SocialLinks";
import "./index.css";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const [errors, setErrors] = useState<{
    username?: string;
    userEmail?: string;
    message?: string;
  }>({});
  const [formValues, setFormValues] = useState({
    username: "",
    userEmail: "",
    message: ""
  });

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!formValues.username.trim()) {
      newErrors.username = "Name is required";
    } else if (formValues.username.length < 2) {
      newErrors.username = "Name must be at least 2 characters";
    }

    if (!formValues.userEmail.trim()) {
      newErrors.userEmail = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(formValues.userEmail)) {
      newErrors.userEmail = "Invalid email format";
    }

    if (!formValues.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formValues.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    const form = e.currentTarget;
    setStatus("loading");

    const formData = new FormData(form);

    const response = await fetch(
      "https://formspree.io/p/2047778179661168386/f/contactForm",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      }
    );

    if (response.ok) {
      setStatus("success");
      setFormValues({ username: "", userEmail: "", message: "" });
      setErrors({});
    } else {
      setStatus("error");
    }
  };
  return (
    <form
      id="contact"
      className="w-full lg:w-3/5 mx-auto flex flex-col items-center text-center mt-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold underline">
        Let’s chat!
      </h2>
      <p className="text-lg md:text-2xl font-bold my-2">
        Looking for a developer? Send me a message!
      </p>
      <label className="labelInput" htmlFor="username">
        What is your name?
        <input
          type="text"
          className="input"
          id="username"
          name="username"
          value={formValues.username}
          onChange={handleChange}
          placeholder="Name"
        />
        {errors.username && (
          <p className="text-red-600 dark:text-red-500 text-sm">{errors.username}</p>
        )}
      </label>
      <label className="labelInput" htmlFor="email">
        Email Address
        <input
          type="email"
          className="input"
          id="email"
          name="userEmail"
          value={formValues.userEmail}
          onChange={handleChange}
          placeholder="email@gmail.com"
        />
        {errors.userEmail && (
          <p className="text-red-600 dark:text-red-500 text-sm">{errors.userEmail}</p>
        )}
      </label>
      <label className="labelInput" htmlFor="message">
        Send me your message
        <textarea
          name="message"
          className="input w-full resize-y overflow-x-hidden break-words"
          id="message"
          value={formValues.message}
          onChange={handleChange}
          placeholder="Enter text here"
        />
        {errors.message && (
          <p className="text-red-600 dark:text-red-500 text-sm">{errors.message}</p>
        )}
      </label>
      {status === "success" && (
        <p className="dark:text-green-400 text-green-700 font-bold lg:text-xl mt-2">
          Message sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 dark:text-red-500 font-bold lg:text-xl mt-2">
          Something went wrong. Try again.
        </p>
      )}
      <button
        className="inline-flex items-center gap-2 cursor-pointer my-2 text-lg px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-full shadow-lg hover:scale-105 transform transition duration-300"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </button>
      <p id="formspreeLink">
        Powered by
        <a
          href="https://formspree.io/"
          target="_blank"
          rel="noopener noreferrer"
          id="formspree"
        >
          Formspree
          <FiExternalLink size="20px" color="#ff2441" />
        </a>
      </p>
      <p className="">
        Or send me an email to{" "}
        <a
          href="mailto:axelss369@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-300 text-xl underline font-semibold transition duration-300 mt-2"
        >
          axelss369@gmail.com
        </a>
      </p>
      <SocialLinks />
    </form>
  );
};

export default ContactForm;
