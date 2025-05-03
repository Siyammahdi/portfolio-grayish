"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

import { FreeMode, Autoplay } from 'swiper/modules';
import Image from 'next/image';

export default function SkillSlider() {
  const skills = [
    { image: '/html.png', name: 'HTML', expertise: 'Expert' },
    { image: '/css.png', name: 'CSS', expertise: 'Expert' },
    { image: '/tailwind.png', name: 'Tailwind', expertise: 'Expert' },
    { image: '/js.png', name: 'JavaScript', expertise: 'Expert' },
    { image: '/typescript.png', name: 'TypeScript', expertise: 'Intermediate' },
    { image: '/react.png', name: 'React', expertise: 'Expert' },
    { image: '/node.png', name: 'Node.js', expertise: 'Intermediate' },
    { image: '/express.png', name: 'Express.js', expertise: 'Intermediate' },
    { image: '/firebase.png', name: 'Firebase', expertise: 'Intermediate' },
    { image: '/mongo.png', name: 'MongoDB', expertise: 'Intermediate' },
    { image: '/postgress.png', name: 'PostgreSQL', expertise: 'Beginner' },
    { image: '/prisma.png', name: 'Prisma', expertise: 'Intermediate' },
    { image: '/next.png', name: 'Next.js', expertise: 'Expert' },
    { image: '/formik.png', name: 'Formik', expertise: 'Familiar' },
    { image: '/linux.png', name: 'Linux', expertise: 'Intermediate' },
  ];

  return (
    <div className="relative overflow-hidden">
      <Swiper
        slidesPerView={10}
        spaceBetween={30}
        freeMode={true}
        autoplay={{
          delay: 1, // Setting to 1ms instead of 0 to ensure continuous animation
          disableOnInteraction: false,
        }}
        speed={5000} // Slower speed for smoother continuous movement
        loop={true}
        modules={[FreeMode, Autoplay]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          400: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
          580: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
          680: {
            slidesPerView: 8,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 25,
          },
          1200: {
            slidesPerView: 7,
            spaceBetween: 30,
          },
          1300: {
            slidesPerView: 8,
            spaceBetween: 30,
          },
          1500: {
            slidesPerView: 9,
            spaceBetween: 30,
          },
          1920: {
            slidesPerView: 10,
            spaceBetween: 30,
          },
        }}
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <div className="relative p-4 bg-black/70 border rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group w-20 md:w-28 lg:w-40 grayscale hover:grayscale-0">
              <div className="flex justify-center items-center">
                <Image 
                  src={`/skills${skill.image}`} 
                  alt={skill.name} 
                  height={100} 
                  width={100} 
                  className="w-6 h-6 md:w-10 md:h-10 lg:w-16 lg:h-16 object-contain transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              <h3 className="text-center text-[10px] md:text-lg lg:text-xl mt-2">{skill.name}</h3>
              <p className="text-center text-[8px] md:text-sm text-gray-400">{skill.expertise}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
