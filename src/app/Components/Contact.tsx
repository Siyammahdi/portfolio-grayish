"use client";

import React, { useState, useRef } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { motion, useInView, useAnimation } from "framer-motion";
import { HiMail, HiChatAlt } from "react-icons/hi";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaFacebook } from "react-icons/fa";

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, type: "spring", stiffness: 100 } },
};

interface FocusStates {
  name: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
}

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  subject: Yup.string().required("Please select a subject"),
  message: Yup.string().required("Message is required"),
});

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const [focusStates, setFocusStates] = useState<FocusStates>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const handleFocus = (field: keyof FocusStates, isFocused: boolean): void => {
    setFocusStates((prevState) => ({
      ...prevState,
      [field]: isFocused,
    }));
  };

  type EmailValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  
  const sendEmail = (values: EmailValues) => {
    emailjs
      .send(
        "service_ss4ik74",
        "template_0y5zmld",
        {
          name: values.name,
          email: values.email,
          service: values.subject, // Map to existing template
          budget: "Not Applicable", // Keep compatibility with existing template
          details: values.message, // Map to existing template
        },
        "ycgCwEGp7HO-UI5AW"
      )
      .then(
        (result) => {
          console.log("Email successfully sent:", result.text);
          alert("Message sent successfully! I'll get back to you soon.");
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("An error occurred while sending your message. Please try again.");
        }
      );
  };
  
  return (
    <div className="h-[70vh] md:h-[74vh] w-full overflow-auto">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10 -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <motion.div
        className="container mx-auto px-4 py-8 md:py-12 text-gray-200"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
      >
        {/* Header Badge */}
        <motion.div
          variants={staggerItem}
          className="flex justify-center mb-8"
        >
          <span className="relative inline-block px-3 py-1 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-blue-500/20 before:to-purple-500/20 before:rounded-md">
            <span className="relative text-sm font-medium text-blue-400">GET IN TOUCH</span>
          </span>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info Section */}
            <motion.div 
              variants={staggerItem}
              className="w-full lg:w-2/5 flex flex-col"
            >
              <motion.h1 
                variants={staggerItem}
                className="text-3xl md:text-4xl font-bold text-white mb-6 relative"
              >
                <span className="relative z-10">Let&apos;s</span>
                <span className="relative z-10 ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Connect</span>
                <span className="absolute -top-6 left-0 text-7xl text-gray-800/20 font-bold -z-10 opacity-20">CONTACT</span>
              </motion.h1>
              
              <motion.p 
                variants={staggerItem}
                className="text-gray-300 mb-8 leading-relaxed"
              >
                I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision. Feel free to reach out with any questions!
              </motion.p>
              
              {/* Contact Methods */}
              <motion.div 
                variants={staggerItem}
                className="space-y-6 mb-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                    <HiMail size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Email</h3>
                    <p className="text-gray-400">siyammahdi1@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                    <HiChatAlt size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Response Time</h3>
                    <p className="text-gray-400">Within 2 hours</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Social Links */}
              <motion.div 
                variants={staggerItem}
                className="space-y-2"
              >
                <h3 className="text-white font-medium mb-3">Find me on</h3>
                <div className="flex gap-3">
                  <a 
                    href="https://www.facebook.com/siyammahdi911" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-full flex items-center justify-center text-gray-300 hover:text-blue-400 hover:border-blue-400/50 transition-colors"
                  >
                    <FaFacebook size={18} />
                  </a>
                  <a 
                    href="https://github.com/Siyammahdi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:border-white/50 transition-colors"
                  >
                    <BsGithub size={18} />
                  </a>
                  <a 
                    href="https://twitter.com/siyam_mahdi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800/50 border border-gray-700/50 rounded-full flex items-center justify-center text-gray-300 hover:text-blue-400 hover:border-blue-400/50 transition-colors"
                  >
                    <BsTwitterX size={18} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div 
              variants={staggerItem}
              className="w-full lg:w-3/5"
            >
              <div className="relative p-6 md:p-8 bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700/50 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-blue-500/10 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-purple-500/10 blur-xl"></div>
                <div className="absolute top-0 right-0 w-2 h-2 bg-blue-400/70 rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 bg-purple-400/70 rounded-full"></div>
                
                <h2 className="text-xl font-bold text-white mb-6">Send a Message</h2>
                
                <Formik
                  initialValues={{
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                  }}
                  validationSchema={validationSchema}
                  onSubmit={(values, { resetForm }) => {
                    sendEmail(values);
                    resetForm();
                  }}
                >
                  {({ setFieldValue, handleBlur }) => (
                    <Form className="space-y-6 relative z-10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div className="relative">
                          <label
                            htmlFor="name"
                            className={`absolute left-0 top-3 text-sm transition-all duration-200 ${
                              focusStates.name ? "text-blue-400" : "text-gray-400"
                            } ${focusStates.name ? "-translate-y-5 scale-90" : "translate-y-0 scale-100"}`}
                          >
                            Name
                          </label>
                          <Field
                            type="text"
                            name="name"
                            onFocus={() => handleFocus("name", true)}
                            onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                              handleFocus("name", e.target.value !== "");
                              handleBlur(e);
                            }}
                            className="w-full border-b border-gray-600 bg-transparent focus:border-blue-400 focus:outline-none focus:ring-0 text-base font-light text-gray-200 p-2 pt-4"
                          />
                          <ErrorMessage name="name" component="div" className="text-red-400 text-xs mt-1" />
                        </div>

                        {/* Email Field */}
                        <div className="relative">
                          <label
                            htmlFor="email"
                            className={`absolute left-0 top-3 text-sm transition-all duration-200 ${
                              focusStates.email ? "text-blue-400" : "text-gray-400"
                            } ${focusStates.email ? "-translate-y-5 scale-90" : "translate-y-0 scale-100"}`}
                          >
                            Email
                          </label>
                          <Field
                            type="email"
                            name="email"
                            onFocus={() => handleFocus("email", true)}
                            onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                              handleFocus("email", e.target.value !== "");
                              handleBlur(e);
                            }}
                            className="w-full border-b border-gray-600 bg-transparent focus:border-blue-400 focus:outline-none focus:ring-0 text-base font-light text-gray-200 p-2 pt-4"
                          />
                          <ErrorMessage name="email" component="div" className="text-red-400 text-xs mt-1" />
                        </div>
                      </div>

                      {/* Subject Field */}
                      <div className="relative group">
                        <label
                          className={`absolute left-0 -top-2 text-sm transition-all duration-200 ${
                            focusStates.subject ? "text-blue-400" : "text-gray-400"
                          } ${focusStates.subject ? "scale-90" : "opacity-0 scale-95"}`}
                        >
                          Subject
                        </label>
                        <Select
                          onValueChange={(value) => {
                            setFieldValue("subject", value);
                            handleFocus("subject", value !== "");
                          }}
                        >
                          <SelectTrigger
                            onFocus={() => handleFocus("subject", true)}
                            onBlur={(e: React.FocusEvent<HTMLButtonElement>) =>
                              handleFocus("subject", e.target.value !== "")
                            }
                            className="w-full bg-transparent focus:outline-none focus:ring-0 rounded-none text-gray-200 px-0 py-3 border-b border-gray-600 focus:border-blue-400 hover:border-gray-400 transition-colors !border-t-0 !border-r-0 !border-l-0 flex items-center font-light [&>svg]:hidden"
                          >
                            <SelectValue placeholder="Select a subject" className="text-gray-400 placeholder:text-gray-500" />
                            <div className="ml-auto bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full p-0.5 transition-transform group-hover:scale-110">
                              <div className="h-5 w-5 flex items-center justify-center rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-blue-400 transition-colors">
                                  <path d="m6 9 6 6 6-6"/>
                                </svg>
                              </div>
                            </div>
                          </SelectTrigger>
                          <SelectContent className="bg-gray-900/95 backdrop-blur-lg border border-gray-700 rounded-xl shadow-xl overflow-hidden p-1 animate-in fade-in-80 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95">
                            <div className="py-1 px-1 text-xs uppercase text-gray-500 tracking-wider">Choose one</div>
                            <SelectItem 
                              value="collaboration" 
                              className="rounded-lg text-gray-200 hover:text-white text-sm pl-2 pr-6 relative py-2 my-0.5 focus:bg-blue-500/10 hover:bg-gray-800 cursor-pointer data-[state=checked]:bg-blue-500/10 data-[state=checked]:text-blue-400 data-[state=checked]:font-medium"
                            >
                              <span className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 opacity-0 data-[state=checked]:opacity-100"></span>
                                Collaboration
                              </span>
                            </SelectItem>
                            <SelectItem 
                              value="job-opportunity" 
                              className="rounded-lg text-gray-200 hover:text-white text-sm pl-2 pr-6 relative py-2 my-0.5 focus:bg-blue-500/10 hover:bg-gray-800 cursor-pointer data-[state=checked]:bg-blue-500/10 data-[state=checked]:text-blue-400 data-[state=checked]:font-medium"
                            >
                              <span className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-purple-400 opacity-0 data-[state=checked]:opacity-100"></span>
                                Job Opportunity
                              </span>
                            </SelectItem>
                            <SelectItem 
                              value="project-inquiry" 
                              className="rounded-lg text-gray-200 hover:text-white text-sm pl-2 pr-6 relative py-2 my-0.5 focus:bg-blue-500/10 hover:bg-gray-800 cursor-pointer data-[state=checked]:bg-blue-500/10 data-[state=checked]:text-blue-400 data-[state=checked]:font-medium"
                            >
                              <span className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-teal-400 opacity-0 data-[state=checked]:opacity-100"></span>
                                Project Inquiry
                              </span>
                            </SelectItem>
                            <SelectItem 
                              value="other" 
                              className="rounded-lg text-gray-200 hover:text-white text-sm pl-2 pr-6 relative py-2 my-0.5 focus:bg-blue-500/10 hover:bg-gray-800 cursor-pointer data-[state=checked]:bg-blue-500/10 data-[state=checked]:text-blue-400 data-[state=checked]:font-medium"
                            >
                              <span className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 opacity-0 data-[state=checked]:opacity-100"></span>
                                Other
                              </span>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <ErrorMessage name="subject" component="div" className="text-red-400 text-xs mt-1" />
                      </div>

                      {/* Message Field */}
                      <div className="relative">
                        <label
                          htmlFor="message"
                          className={`absolute left-0 top-3 text-sm transition-all duration-200 ${
                            focusStates.message ? "text-blue-400" : "text-gray-400"
                          } ${focusStates.message ? "-translate-y-5 scale-90" : "translate-y-0 scale-100"}`}
                        >
                          Message
                        </label>
                        <Field
                          as="textarea"
                          name="message"
                          rows={4}
                          onFocus={() => handleFocus("message", true)}
                          onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) =>
                            handleFocus("message", e.target.value !== "")
                          }
                          className="w-full border-b border-gray-600 bg-transparent focus:border-blue-400 focus:outline-none focus:ring-0 text-base font-light text-gray-200 p-2 pt-4"
                        />
                        <ErrorMessage name="message" component="div" className="text-red-400 text-xs mt-1" />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-4">
                        <button
                          type="submit"
                          className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 px-6 py-2.5 text-white shadow-md transition-all hover:shadow-lg"
                        >
                          <span className="relative z-10 font-medium">Send Message</span>
                          <div className="absolute inset-0 -translate-y-full bg-gradient-to-br from-blue-600 to-purple-700 transition-transform duration-300 ease-out group-hover:translate-y-0"></div>
                        </button>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
