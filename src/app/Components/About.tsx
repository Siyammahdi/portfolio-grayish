"use client";

import { ScrollArea } from '@/components/ui/scroll-area';
import React, { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { FaUserTie, FaWallet } from 'react-icons/fa';

// Stagger container for the main div
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12, // Stagger each child element
    },
  },
};

// Stagger item for each element
const staggerItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <ScrollArea className="h-[70vh] md:h-[74vh] w-full">
      <motion.div
        className="flex items-center justify-center text-gray-200"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
      >
        <div className="w-full max-w-3xl p-1 md:p-8 font-light pb-0">
          {/* Main Heading */}
          <motion.h1 className="text-3xl lg:text-5xl font-bold text-gray-300 mb-6" variants={staggerItem}>
            Empowering Startups with Talent
          </motion.h1>

          {/* Intro Paragraph */}
          <motion.p className="text-sm lg:text-lg leading-relaxed text-gray-100 mb-4" variants={staggerItem}>
            We connect ambitious startups with skilled developers from around the world. Our platform ensures you find the right talent to bring your business vision to life.
          </motion.p>

          {/* Why use full-time developers? Section */}
          <div className="py-12">
            <div className="">
              <div className="space-y-8">
                <motion.h2
                  className="text-3xl font-bold text-gray-300"
                  variants={staggerItem}
                >
                  Why use full-time developers from Uqidev?
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature) => (
                    <motion.div
                      key={feature.id}
                      className="p-6 text-left"
                      variants={staggerItem}
                    >
                      <div className='flex items-center gap-3'>
                        <div className="flex justify-center items-center w-8 h-8 mb-1 bg-gray-300 rounded-full">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                      </div>
                      <p className="mt-2 text-sm text-gray-300 ml-11">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <motion.h2 className="text-3xl font-bold text-gray-300 mt-8 mb-4" variants={staggerItem}>
            Guiding Principles & Core Values
          </motion.h2>
          <motion.p className="text-sm lg:text-lg leading-relaxed text-gray-300 mb-4" variants={staggerItem}>
            At Uqidev, our core values drive everything we do. We focus on creating meaningful relationships with clients, delivering exceptional results, and empowering our team to innovate and excel. Our guiding principles reflect our commitment to excellence, collaboration, and integrity in every project.
          </motion.p>

          {/* Core Values List */}
          <motion.ul
            className="list-inside list-disc text-base space-y-3"
            variants={staggerItem}
          >
            <motion.li className="text-gray-300" variants={staggerItem}>
              <strong className='font-semibold text-gray-200'>Innovation:</strong> We embrace new ideas to drive continuous progress and advancement.
            </motion.li>
            <motion.li className="text-gray-300" variants={staggerItem}>
              <strong className='font-semibold text-gray-200'>Collaboration:</strong> Working closely with clients and developers ensures optimal results.
            </motion.li>
            <motion.li className="text-gray-300" variants={staggerItem}>
              <strong className='font-semibold text-gray-200'>Integrity:</strong> We believe in transparency, trust, and accountability in all our interactions.
            </motion.li>
            <motion.li className="text-gray-300" variants={staggerItem}>
              <strong className='font-semibold text-gray-200'>Excellence:</strong> We are dedicated to delivering the highest standards in every aspect.
            </motion.li>
          </motion.ul>

          {/* Our Goals Section */}
          <motion.h2 className="text-3xl font-bold text-gray-300 mt-8 mb-4" variants={staggerItem}>
            Our Goals
          </motion.h2>
          <motion.p className="text-sm lg:text-lg leading-relaxed text-gray-300 mb-4" variants={staggerItem}>
            At Uqidev, we are dedicated to helping businesses succeed by providing customized, high-quality software solutions. Our goals focus on empowering your business, fostering innovation, and ensuring long-term success. We aim to bridge the gap between technology and business growth, delivering scalable, reliable, and cost-effective development services.
          </motion.p>

          {/* Goals List */}
          <motion.ul
            className="list-inside list-disc text-base space-y-3"
            variants={staggerItem}
          >
            <motion.li className="text-gray-300" variants={staggerItem}>
              <strong className='font-semibold text-gray-200'>Empower Growth:</strong> Providing flexible development teams to help your business grow.
            </motion.li>
            <motion.li className="text-gray-300" variants={staggerItem}>
              <strong className='font-semibold text-gray-200'>Foster Innovation:</strong> Continuously evolving with the latest techs to meet your digital needs.
            </motion.li>
            <motion.li className="text-gray-300" variants={staggerItem}>
              <strong className='font-semibold text-gray-200'>Ensure Success:</strong> Delivering top-notch quality and customer satisfaction at every stage.
            </motion.li>
          </motion.ul>

          {/* Our Strategies Section */}
          <motion.h2 className="text-3xl font-bold text-gray-300 mt-8 mb-4" variants={staggerItem}>
            Our Strategies
          </motion.h2>
          <motion.p className="text-sm lg:text-lg leading-relaxed text-gray-300 mb-4" variants={staggerItem}>
            We believe in transparency, quality, and dedication to excellence. Our approach is client-centered, ensuring that every project is completed to the highest standards while meeting our clients’ goals. We value continuous learning and adaptation, always staying up-to-date with the latest industry trends.
          </motion.p>
        </div>
      </motion.div>
    </ScrollArea>
  );
};

export default About;

// Features Data for Cards
const features = [
  {
    id: 1,
    icon: <FaUserTie className="text-gray-600" />,
    title: "Your Team, Amplified",
    description:
      "Our senior full-time developers seamlessly integrate with your team, giving you full control while building your dream team."
  },

  {
    id: 2,
    icon: <FaWallet className="text-gray-600" />,
    title: "Grow better for less",
    description:
      "Highly skilled developers are more affordable in Bangladesh. That way you can grow better, with less risk and more profit.",
  },

];
