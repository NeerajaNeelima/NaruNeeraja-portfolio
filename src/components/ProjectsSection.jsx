"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 11,
    title: "Screate Reveal Animation",
    description: "When Hover on the content then encrpted message starts decryption",
    image: "/images/projects/Screate-reveal.png",
    tag: ["Animations","All"],
    gitUrl: "https://github.com/NeerajaNeelima/secrate-reveal-animation",
    previewUrl: "https://secrate-reveal-animation.vercel.app/",
  },
  {
    id: 12,
    title: "Scroll highlight Animation",
    description: "When scroll down then image start highlighting",
    image: "/images/projects/scroll-hightlight.png",
    tag: ["Animations","All"],
    gitUrl: "https://github.com/NeerajaNeelima/scroll-highlight-animation",
    previewUrl: "https://scroll-highlight-animation.vercel.app/",
  },
  {
    id: 13,
    title: "Website Scroll Animation",
    description: "While scroll in to this website then images starts animating",
    image: "/images/projects/scroll-animation.png",
    tag: ["Animations","All"],
    gitUrl: "https://github.com/NeerajaNeelima/Website-scroll-animation",
    previewUrl: "https://website-scroll-animation.vercel.app/",
  },
  {
    id: 14,
    title: "3D Scroll Animation",
    description: "3D scroll Animation on image and text",
    image: "/images/projects/3d-scroll.png",
    tag: ["Animations","All"],
    gitUrl: "https://github.com/NeerajaNeelima/3d-scroll-animation",
    previewUrl: "https://3d-scroll-animation-ten.vercel.app/",
  },
  {
    id: 15,
    title: "Next Image reveal Animation",
    description: "When scroll down then next image start revealing animation",
    image: "/images/projects/next-image-releave.png",
    tag: ["Animations","All"],
    gitUrl: "https://github.com/NeerajaNeelima/next-image-reveal-animation",
    previewUrl: "https://next-image-reveal-animation.vercel.app/",
  },
  {
    id: 16,
    title: "Ear Buds Carousel Animation",
    description: "Parallex Animation",
    image: "/images/projects/Earbuds.png",
    tag: ["Animations","All"],
    gitUrl: "https://github.com/NeerajaNeelima/earbuds-carousel-animation",
    previewUrl: "https://earbuds-carousel-animation.vercel.app/",
  },
  {
    id: 17,
    title: "Animal Carousel Animation",
    description: "When scroll down then image start highlighting",
    image: "/images/projects/Animal.png",
    tag: ["Animations","All"],
    gitUrl: "https://github.com/NeerajaNeelima/Animal-Carousel-Animation",
    previewUrl: "https://animal-carousel-animation.vercel.app/",
  },
  {
    id: 18,
    title: "3rd Dimension Animation",
    description: "While scroll in to this website then images starts animating",
    image: "/images/projects/3rd-dimension.png",
    tag: ["Animations","All"],
    gitUrl: "https://github.com/NeerajaNeelima/3d-dimension-animation",
    previewUrl: "https://3d-dimension-animation.vercel.app/",
  },
  {
    id: 19,
    title: "3D Rotate Animation",
    description: "3D scroll Animation on image and text",
    image: "/images/projects/3d-rotate.png",
    tag: ["Animations","All"],
    gitUrl: "https://github.com/NeerajaNeelima/3d-rotate-animation",
    previewUrl: "https://3d-rotate-animation.vercel.app/",
  },
  {
    id: 20,
    title: "StarBucks Animation",
    description: "When scroll down then next image start revealing animation",
    image: "/images/projects/Starbucks.png",
    tag: ["Animations","All"],
    gitUrl: "https://github.com/NeerajaNeelima/Starbucks-carousel-animation",
    previewUrl: "https://starbucks-carousel-animation.vercel.app/",
  },{
    id: 21,
    title: "Maggie Animation",
    description: "Maggie website animation",
    image: "/images/projects/maggie.png",
    tag: ["Animations","All"],
    gitUrl: "https://github.com/NeerajaNeelima/Maggie-Animation",
    previewUrl: "https://maggie-animation.vercel.app/",
  },
  {
    id: 22,
    title: "Lamborghinir Car Animation",
    description: "Lamborghini Car sliding animation",
    image: "/images/projects/lamborginir.png",
    tag: ["Animations","All"],
    gitUrl: "https://github.com/NeerajaNeelima/Lamborghini_Slider",
    previewUrl: "https://lamborghini-slider.vercel.app/",
  },
  {
    id: 23,
    title: "Lead Flow CRM",
    description: "HR reference lead flow crm to track user prfoile from selection process to qualified stage",
    image: "/images/projects/lead-flow.png",
    tag: ["Web","All"],
    gitUrl: "https://github.com/NeerajaNeelima/lead_flow_crm",
    previewUrl: "https://lead-flow-crm-delta.vercel.app/",
  },
  
  {
    id: 1,
    title: "React Portfolio Website",
    description: "React portfolio design",
    image: "/images/projects/porfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NeerajaNeelima/Profile_task",
    previewUrl: "https://portpolio-dusky.vercel.app/",
  },
  {
    id: 2,
    title: "Gallery App Website",
    description: "Gallery App",
    image: "/images/projects/galleryapp.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "WhiteBoard Online Website",
    description: "Online WhiteBoard Website",
    image: "/images/projects/white-board.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NeerajaNeelima/Whiteboard_online",
    previewUrl: "https://whiteboard-online.vercel.app/",
  },
  {
    id: 4,
    title: "Weather App",
    description: "Weather App",
    image: "/images/projects/weatherapp.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NeerajaNeelima/weatherapp",
    previewUrl: "https://weather-app-five-theta-75.vercel.app/",
  },
  {
    id: 5,
    title: "Friends Recommendation System",
    description: "Friends Recommendation System",
    image: "/images/projects/friends-recommendation-system.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Movie Recommendation System",
    description: "IMDB Movie Recommedation System",
    image: "/images/projects/movie.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Aesop Landing page",
    description: "Landing Page",
    image: "/images/projects/aesrop.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NeerajaNeelima/aesop",
    previewUrl: "https://aesop-rose.vercel.app/",
  },
  {
    id: 8,
    title: "Advanced To-do list",
    description: "Advanced To-do List",
    image: "/images/projects/to-do-list.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NeerajaNeelima/React_To_Do_List",
    previewUrl: "https://react-to-do-list-8t8p.vercel.app/",
  },
  {
    id: 9,
    title: "Spin Wheel",
    description: "Spin Wheel for prize winning game",
    image: "/images/projects/spin-wheel.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NeerajaNeelima/spin-wheel",
    previewUrl: "https://spin-wheel-rouge.vercel.app/",
  },
  {
    id: 10,
    title: "Play Song Card Design",
    description: "Music Card Design",
    image: "/images/projects/play-list.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/NeerajaNeelima/play_list",
    previewUrl: "https://joyful-cheesecake-05b0b2.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        {/* <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        /> */}
        <ProjectTag
          onClick={handleTagChange}
          name="Animations"
          isSelected={tag === "Animations"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
