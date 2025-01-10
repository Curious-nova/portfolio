import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Github } from 'lucide-react';
import cms from "../assets/LandingPage.png"
import stock from "../assets/stock.svg"
import chat from "../assets/ChatGeniee.png"
const projects = [
  {
    title: 'Projects Course Management System',
    description: 'A full-stack application for university-level operations, focusing on the Student Module with features like role-based authentication, fee management, and assignment uploads using Cloudinary.',
    techStack: ['MERN Stack', 'Zustand', 'JWT'],
    highlights: [
      'Developed a comprehensive student module',
      'Built key components like Student Dashboard and Global Navbar',
      'Implemented secure file uploads with Cloudinary'
    ],
    link: 'https://github.com/Ompatel28102004/Course-Management-System.git',
    image: cms
  },
  {
    title: 'Stock Prediction with Sentimental Analysis',
    description: 'An advanced stock prediction system combining ARIMA model with sentiment analysis of tweets to provide comprehensive market insights.',
    techStack: ['Python', 'ARIMA', 'Sentiment Analysis', 'Jupyter Notebook'],
    highlights: [
      'Implemented ARIMA model for price predictions',
      'Integrated sentiment analysis of tweets',
      'Developed in Jupyter Notebook for interactive analysis'
    ],
    link: 'https://github.com/Curious-nova/Stock-Prediction-with-sentimental-analysis.git',
    image: stock
  },
  {
    title: 'Chat Geniee',
    description: 'Chat Geniee is an advanced AI-powered chat application built using the Gemini API. It offers real-time messaging with a focus on seamless user experience and robust security. The application is designed to be user-friendly, with a sleek interface crafted using React.js and Bootstrap. Firebase serves as the backend, ensuring reliable performance and data integrity.',
    techStack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'JWT', 'bcrypt'],
    highlights: [
      'Real-time messaging powered by the Gemini API.',
      'Intuitive and responsive user interface',
      
    ],
    link: 'https://github.com/Curious-nova/ChatGeniee',
    image: chat
  }
];

const cardVariants = {
  offscreen: {
    y: 300,
    scale: 0.95,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)"
  },
  onscreen: {
    y: 0,
    scale: 1,
    boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  },
  hover: {
    scale: 1.02,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const imageVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.4,
      ease: "easeInOut"
    }
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-purple-600 dark:text-purple-400">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            whileHover="hover"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
            className="h-full"
          >
            <Card className="overflow-hidden h-full flex flex-col transition-colors duration-300 hover:bg-gray-50 dark:hover:bg-gray-800">
              <div className="overflow-hidden">
                <motion.img 
                  variants={imageVariants}
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-purple-600 dark:text-purple-400 transition-colors duration-300 hover:text-purple-700 dark:hover:text-purple-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <CardDescription className="transition-colors duration-300 mb-4">
                  {project.description}
                </CardDescription>
                <div className="mt-auto">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700 transition-all duration-300 hover:scale-105 hover:bg-purple-200 dark:hover:bg-purple-800"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button 
                    onClick={() => window.open(project.link, '_blank')}
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-colors duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}