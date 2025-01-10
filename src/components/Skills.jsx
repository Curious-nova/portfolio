import { motion } from 'framer-motion';
import { 
  SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, 
  SiExpress, SiMongodb, SiPostgresql, SiGit, 
  SiAdobexd, SiPostman, SiDocker,
  SiCplusplus,
  SiC,
  SiPython,
  SiBootstrap,
  SiMysql,
  SiTailwindcss
} from 'react-icons/si';

const skills = [
  { name: 'C++', icon: SiCplusplus },
  { name: 'C', icon: SiC },
  { name: 'Python', icon: SiPython },
  { name: 'HTML', icon: SiHtml5 },
  { name: 'CSS', icon: SiCss3 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: SiReact },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  {name:'Bootstrap', icon:SiBootstrap},
  {name:'Tailwind', icon:SiTailwindcss},
  {name:'MySQL', icon:SiMysql},
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Git', icon: SiGit },
  { name: 'RESTful APIs', icon: SiPostman },
  
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">My Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg border-2 border-purple-500 p-4 mb-2">
              <skill.icon className="w-12 h-12 text-purple-600 dark:text-purple-400" />
            </div>
            <span className="text-sm font-medium text-center">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

