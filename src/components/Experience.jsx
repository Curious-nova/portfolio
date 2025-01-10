import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { BriefcaseIcon, CalendarIcon, MapPinIcon } from 'lucide-react';

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "YADS Technologies",
    location: "Ahmedabad, Gujarat",
    duration: "June 2024 - July 2024",
    description: "Worked as a Full Stack Developer Intern, contributing to both backend and frontend development while also serving as Project Coordinator to facilitate team communication and project progress.",
    highlights: [
      "Developed a Python script for retrieving articles via API calls based on specific keywords",
      "Designed and implemented a PostgreSQL database for efficient data management and integrity",
      "Created responsive web pages using HTML and Bootstrap CSS for dynamic article display",
      "Built backend infrastructure using Node.js and Express for seamless data handling",
      "Served as Project Coordinator, managing team communication and project progress"
    ],
    skills: ["Python", "PostgreSQL", "HTML", "Bootstrap CSS", "Node.js", "Express.js", "Project Management"]
  },
  
];

const cardVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1
    }
  }
};

export default function Experience() {
  return (
    <section id="experiences" className="py-20 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-purple-600 dark:text-purple-400">
        Experiences
      </h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <Card className="relative overflow-hidden border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-purple-600 dark:text-purple-400">
                      {experience.title}
                    </CardTitle>
                    <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                      {experience.company}
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">
                  {experience.description}
                </CardDescription>
                <ul className="space-y-3 mb-6">
                  {experience.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <BriefcaseIcon className="w-5 h-5 text-purple-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill, idx) => (
                    <Badge 
                      key={idx}
                      variant="outline" 
                      className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700 transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}