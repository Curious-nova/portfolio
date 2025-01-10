import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-white dark:bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-purple-600 dark:text-purple-400">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          Hey there! I’m <span className="font-semibold text-purple-600 dark:text-purple-400">Jayesh Belsare</span>, a tech enthusiast who’s 
          passionate about Full Stack Development and Machine Learning. I love bringing ideas to life by building web apps that are functional, 
          interactive, and user-focused.
        </p>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          I wouldn't call myself a master of the <span className="font-semibold">MERN stack</span> (MongoDB, ExpressJs, ReactJs, NodeJs),  but I’ve got a pretty good handle on it. 
          From crafting responsive frontends to building solid backends, I enjoy connecting the dots. 
          One of my favorite projects so far has been a <span className="font-semibold text-purple-600 dark:text-purple-400">Course Management System</span>, 
          where I had the chance to dive into both technical problem-solving and user experience design.
        </p>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
          Lately, I’ve been exploring the fascinating world of Machine Learning, and it’s been an exciting journey to see how tech can get 
          smarter and more impactful. <br /> <br /> If you’re here, it probably means we share a love for creating cool things—so let’s make something amazing together!
        </p>
      </motion.div>
    </section>
  )
}
