'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Description from '../components/Description';
import SlidingImages from '../components/SlidingImages';
import Contact from '../components/Contact';
import ModelLaptop from '@/components/ModelLaptop/ModelLaptop';
import Skills from '@/components/Skills/Skills';
import MarqueeCards from '@/common/Marquee/MarqueeCard';
import Hero from '@/components/Hero/Hero';
import SkillsComponent from '@/components/Skills/SkillComponent';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Hero/>
      <Description />
       <SkillsComponent/>

      {/* <Projects /> */}
      {/* <SlidingImages /> */}
      {/* <Contact /> */}
    </main>
  )
}
