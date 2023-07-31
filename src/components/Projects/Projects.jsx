import SectionTitle from '@/common/SectionTitle';
import React, { useState, useEffect } from 'react';
import { projects } from './data';
import Image from 'next/image';
import styles from './styles.module.scss';
import { Tilt } from 'react-tilt';

const Projects = () => {

    const defaultOptions = {
        reverse:        false,  // reverse the tilt direction
        max:            35,     // max tilt rotation (degrees)
        perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale:          1,    // 2 = 200%, 1.5 = 150%, etc..
        speed:          1000,   // Speed of the enter/exit transition
        transition:     true,   // Set a transition on enter/exit.
        axis:           null,   // What axis should be disabled. Can be X or Y.
        reset:          true,    // If the tilt effect has to be reset on exit.
        easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
  // Array of predefined colors to choose from
  const colors = ['#71797E', '#808080','#36454F', '#8A9A5B','#7393B3', "#36454F"];

  // Function to get a random color from the colors array
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  // State to store the border colors for each project div
  const [borderColors, setBorderColors] = useState([]);

  // Generate random border colors for each project div
  useEffect(() => {
    const randomColors = projects.map(() => getRandomColor());
    setBorderColors(randomColors);
  }, []);

  return (
    <div id="projects" className="w-full flex justify-center mt-20">
      <div className="w-full flex flex-col xl:w-[70%]">
        <div className="w-full">
          <SectionTitle title="PROJECTS" subtitle="WHAT I HAVE DONE SO FAR" />
        </div>
        <div className={styles.main}>
          {projects.map((project, i) => (
            <Tilt key={`project-${i}`}options={defaultOptions}>
            <div className={styles.project} >
              <div
                className={styles.projectDivImage}
                style={{ borderColor: borderColors[i] }}
              >
                <Image
                  className={styles.projectImage}
                  src={project.image}
                  width={200}
                  height={200}
                  alt={`projectImage${i}`}
                />
              </div>
              <p className={styles.projectname}>{project.name}</p>
              <p className={styles.projectDescription}>{project.description}</p>
              
              {project.keywords && project.keywords.length > 0 && (
                <div className={styles.projectKeywords}>
                  {project.keywords.map((keyword, j) => (
                    <p   style={{ backgroundColor: borderColors[i], width:"100%",padding:"5px" }} key={`keyword-${j}`}>{keyword}</p>
                  ))}
                </div>
              )}
              
              <a href={project.url} target='_blank'>
                {project.url}
              </a>
            </div>
            </Tilt>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
