'use client'

import { motion } from 'framer-motion'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'


function About() {
  return (
    <div className="min-h-screen bg-background px-8 py-12 md:px-56 lg:py-18">
      <div className="container transition-colors duration-300">

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Avatar className="w-48 h-48 mx-auto mb-8">
            <AvatarImage src="/your-photo.jpg" alt="Aman Kohare" />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl font-bold mb-4">Aman Kohare</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">Web developer</p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto"
          >
            <p className="text-md text-muted-foreground text-start leading-relaxed">
              Hello! I'm Aman, a passionate web developer and designer with over 1 year of experience in creating beautiful, functional websites. I specialize in React, Next.js, and Tailwind CSS, and I love bringing ideas to life through code.
            </p>
            <p className="mt-4 text-md text-muted-foreground text-start leading-relaxed">
              I completed my Bachelor of Technology (B.Tech) in Information Technology from Barkatullah University, Bhopal. Programming Journey: I'm a self-taught programmer on a quest to explore the exciting world of technology.
            </p>
            <p className="mt-4 text-md text-muted-foreground text-start leading-relaxed">
            When not coding, I enjoy watching TV shows and movies, playing games with friends, or hanging out. I'm also constantly listening to music. According to Spotify Wrapped, I listened to 989 minutes of music in 2023 and 3047 in 2022. I also have a keen interest in playing cricket.
            </p>
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}

export default About