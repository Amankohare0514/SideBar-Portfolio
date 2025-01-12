'use client'

import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function About() {
  return (
    <div className="min-h-screen bg-background px-8 py-12 md:px-24 lg:py-18">
      <div className="container transition-colors duration-300">

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto"
          >
            <p className="text-md text-muted-foreground text-start leading-relaxed">
              Hello! I'm Aman Kohare, a passionate web developer and designer with over 1 year of experience in creating beautiful, functional websites. I specialize in React, Next.js, and Tailwind CSS, and I love bringing ideas to life through code.
            </p>
            <p className="mt-4 text-md text-muted-foreground text-start leading-relaxed">
              I completed my Bachelor of Technology (B.Tech) in Information Technology from Barkatullah University, Bhopal. I am a self-taught programmer on a quest to explore the exciting world of technology, constantly learning and honing my skills.
            </p>
            <p className="mt-4 text-md text-muted-foreground text-start leading-relaxed">
              Throughout my career, I've had the opportunity to work with some amazing companies:
            </p>
            <ul className="mt-4 text-md text-muted-foreground text-start leading-relaxed">
              <li><strong>Nexocide Private Limited:</strong> Led the development of a high-performance web application using React, enhancing cross-platform compatibility and user experience. Optimized UI components for a 25% improvement in application responsiveness.</li>
              <li><strong>NextOpson.in:</strong> Spearheaded the development of cross-platform mobile apps using React Native, achieving a consistent user experience across Android platforms.</li>
              <li><strong>SalesQueen Software Solution:</strong> Led the development of a responsive website using HTML, CSS, JavaScript, and React. Optimized website performance and enhanced user experience through code refactoring.</li>
            </ul>
            <p className="mt-4 text-md text-muted-foreground text-start leading-relaxed">
              When not coding, I enjoy watching TV shows and movies, playing games with friends, or hanging out. I'm also constantly listening to music. According to Spotify Wrapped, I listened to 989 minutes of music in 2023 and 3047 in 2022. I also have a keen interest in playing cricket.
            </p>
            <p className="mt-4 text-md text-muted-foreground text-start leading-relaxed">
              Some of my recent projects include:
            </p>
            <ul className="mt-4 text-md text-muted-foreground text-start leading-relaxed">
              <li><strong>Dhakad Technosoft Website:</strong> Developed a responsive and user-friendly website for Dhakad Technosoft using Next.js, React.js, and Tailwind CSS, implementing SEO best practices and optimized images.</li>
              <li><strong>NextOpson.in App:</strong> Led the development of a Real Estate mobile application using React Native and Expo, delivering a seamless cross-platform experience for Android users.</li>
            </ul>
            <p className="mt-4 text-md text-muted-foreground text-start leading-relaxed">
              My technical skill set includes:
            </p>
            <ul className="mt-4 text-md text-muted-foreground text-start leading-relaxed">
              <li><strong>Languages:</strong> JavaScript, TypeScript</li>
              <li><strong>Frontend:</strong> HTML5, CSS3, React.js, Next.js, Material-UI, React Native, Tailwind CSS, Bootstrap</li>
              <li><strong>Backend:</strong> Node.js, Express.js, MongoDB, Firebase</li>
              <li><strong>Tools:</strong> Redux, GitHub, Postman, Insomnia, Canva</li>
            </ul>
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}

export default About
