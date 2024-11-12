/* eslint-disable react/prop-types */

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "./Marquee";
import Card from "./Card";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/navigation";
// import "swiper/css/pagination";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function ProjectShowcase() {
  const projectShowRef = useRef(null);
  const projects = [
    {
      id: 1,
      title: "Amalinyc",
      link:"https://www.amalinyc.com/",
      image: "/recent_project1.png",
    },
    {
      id: 2,
      title: "Dffrntera",
      link: "https://www.dffrntera.com/",
      image: "/recent_project2.png",
    },
    {
      id: 3,
      title: "Get Repeat",
      link: "https://getrepeat.io/",
      image: "/recent_project3.png",
    },
    {
      id: 4,
      title: "Sea Cats",
      link: "https://seacat.rossinavi.it/",
      image: "/recent_project4.png",
    },
    {
      id: 5,
      title: "Cure",
      link:"https://cure.org/",
      image: "/recent_project5.png",
    },
    {
      id: 6,
      title: "Tim Blog",
      link:"https://tim.blog/",
      image: "/recent_project6.png",
    },
  ];
  return (
    <div
      ref={projectShowRef}
      className="bg-black  text-white pt-6 pb-6 md:pt-16 md:pb-16 w-full h-fit md:h-screen overflow-hidden"
    >
      <div className="max-w-full mx-auto">
        <h2 className="text-xs uppercase tracking-wider mb-8 text-center">
          Freelance Showcase
        </h2>
        <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Explore more projects
        </h3>
        <div className="hidden md:block" >
        <Marquee cards={projects} />
        </div>

        {/* mobile version */}
        <div className="md:hidden">
        <div className="md:hidden">
      <Swiper
         spaceBetween={10}
         slidesPerView={1}
         // pagination= {{clickable:true}}
         loop={true}
         speed={1000}
         autoplay={{
           delay: 500,
           disableOnInteraction: true,
         }}
         // disableOnInteraction={true}
         navigation={true}
         modules={[Autoplay, Pagination,Navigation]}
      >
        {projects.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="cell">
              <Card link={card?.link} title={card.title} image={card.image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
            
        </div>
      </div>
    </div>
  );
}