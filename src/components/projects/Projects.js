import React from "react";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
//swiper style
import "swiper/css";
import "swiper/css/pagination";

import todo from "../../asset/2022-04-20 (6).png";
import store from "../../asset/2022-04-20 (4).png";
import exchange from "../../asset/2022-04-20 (2).png";

//components
import Project from "./Project";

const Projects = () => {
  const data = [
    {
      image: store,
      name: "Msud Store",
      href: "https://msud-store.netlify.app/",
    },
    {
      image: exchange,
      name: "Msud Exchange",
      href: "https://msud-exchange.netlify.app/",
    },
    {
      image: todo,
      name: "Todo App",
      href: "https://msud-todo.netlify.app/",
    },
  ];

  return (
    <div id="projects" className="">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-screen  my-4 max-w-5xl"
      >
        {data.map((project) => (
          <SwiperSlide className="flex h-1/2 w-52 center select-none">
              <Project data={project}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
