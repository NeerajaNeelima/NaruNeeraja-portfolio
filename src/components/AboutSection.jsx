"use client";
import React, { useTransition, useState } from "react";

import TabButton from "./TabButton";
import { motion } from "framer-motion";

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration:0.9,
      staggerChildren: 0.35, 
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="list-disc pl-2"
      >
        {[
          "Node.js",
          "Express",
          "Mongo DB",
          "PostgreSQL",
          "Sequelize",
          "JavaScript",
          "React",
          "DSA",
          "Machine Learning",
          "Deep Learning",
        ].map((skill, index) => (
          <motion.li key={index} variants={itemVariants}>
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="list-disc pl-2"
      >
        <motion.li>
          Jawaharlal Nehru Technological University, Gurajada Vizianagaram (CSE) - 8.4
        </motion.li>
      </motion.ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <motion.ul
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="list-disc pl-2"
      >
        {[
          "NPTEL Big Data Computation",
          "NPTEL Natural Language Processing",
          "NPTEL Data Science and Engineering",
          "Responsive Web Design Certification",
          "freeCodeCamp Frontend Development Libraries (React)",
          "freeCodeCamp Trained in React.js, TypeScript, Node.js, Agile Methodologies SDE",
        ].map((cert, index) => (
          <motion.li key={index} variants={itemVariants}>
            {cert}
          </motion.li>
        ))}
      </motion.ul>
    ),
  },
];




const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [ startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <motion.div
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/images/about-image.png"
            width={500}
            height={500}
            alt="About Me"
            className="rounded-md"
          />
        </motion.div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-base lg:text-lg"
          >
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
            Contributed to secure blockchain platforms and optimized UI
            performance. Delivered a 30% boost in user retention at CGB Org.
            Open to relocation.
          </motion.p>

          
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>

          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
