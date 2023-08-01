import React from 'react'


import { m, LazyMotion, domAnimation } from "framer-motion";
import { skills } from '@/Constants/constants';
import Image from 'next/image';


const Skills = () => {

  return (
    <div className="flex">
    <LazyMotion features={domAnimation} strict>

      {skills.map((skill, index) => (
        <m.div
          initial={{ scale: 0.8 }}
          animate={{
            rotate: [0, 10, 0],
        
          }}
          whileHover={
            {
              rotate:[0,0,0]
            }
          }
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          style={{ zIndex: `${index + 1}`, transition: "all 0.6s" }}
          key={index}
          className="card w-[300px] h-[300px] flex flex-col items-center  bg-primary-900 rounded-xl border-4 border-primary-700 cursor-pointer"
        >
          <div className="w-full h-[60px] flex items-center gap-2 p-1 flex-col">
        
            <Image src={skill.icon} width={30} height={30} />
            <span
              className="text-grayscale-50"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "bold",
              }}
            >
              {skill.title}
            </span>
            <span
              className="text-center bg-primary-900 text-grayscale-50 rounded-xl text-sm p-4"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: "400",
              }}
            >
              {skill.description}
            </span>
          </div>
        </m.div>
      ))}
    </LazyMotion>
    </div>
  );
};

export default Skills;