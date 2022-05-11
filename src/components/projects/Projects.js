import React from "react";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Pagination } from "swiper";
//swiper style
import "swiper/css";
import "swiper/css/pagination";

import { useTranslation } from "react-i18next";

//components
import Project from "./Project";

const Projects = ({ data }) => {
  const { t, i18n } = useTranslation();

  return (
    <div id="projects" className=" dark:bg-gray-800">
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper h-screen  my-4 max-w-5xl"
      >
        {data.map((project) => (
          <SwiperSlide
            className="flex h-1/2 w-52 center select-none"
            key={project.id}
          >
            <Project data={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
