import styles from './style.module.scss';
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity } from './animation';
export default function Description() {

    const phrase = "I am a software engineer with a focus on full-stack development. I have experience working with a range of technologies, including React, Three js , React3Fiber, Python, and Solidity. I am constantly striving to learn and improve my skills, and I am excited to continue growing and developing as a software engineer.";
    const description = useRef(null);
    const isInView = useInView(description)
    return (
        <div ref={description} className={styles.description}>
            <div className={styles.body}>
                <p>
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span className={styles.mask} key={`phrase${index}`}><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.p  variants={opacity}  animate={isInView ? "open" : "closed"}>The combination of my passion for design, code & interaction positions me in a unique place in the Software Engineering world.</motion.p>
         
            </div>
        </div>
    )
}
