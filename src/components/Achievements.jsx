import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Trophy, Code2, Award, Star } from 'lucide-react';

const achievementVariants = {
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
      duration: 0.8
    }
  }
};

const platforms = [
  {
    name: "LeetCode",
    icon: <Code2 className="w-6 h-6" />,
    stats: [
      { label: "Global Rank", value: "Add your rank" },
      { label: "Problems Solved", value: "Add count" },
      { label: "Contest Rating", value: "Add rating" }
    ],
    className: "bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10"
  },
  {
    name: "CodeChef",
    icon: <Trophy className="w-6 h-6" />,
    stats: [
      { label: "Current Rating", value: "Add rating" },
      { label: "Highest Rating", value: "Add max rating" },
      { label: "Global Rank", value: "Add rank" }
    ],
    className: "bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/10 dark:to-blue-900/10"
  }
];

const hackathons = [
  {
    name: "Add Hackathon Name",
    position: "Add Position/Achievement",
    description: "Brief description of the project and achievement",
    date: "Month Year"
  }
  // Add more hackathons
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-purple-600 dark:text-purple-400">
        Achievements
      </h2>

      {/* Competitive Programming Section */}
      <div className="max-w-6xl mx-auto mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <Trophy className="w-6 h-6 text-purple-500" />
          Competitive Programming
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={achievementVariants}
            >
              <Card className={`${platform.className} hover:shadow-lg transition-shadow duration-300`}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl text-purple-600 dark:text-purple-400">
                    {platform.icon}
                    {platform.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {platform.stats.map((stat, idx) => (
                      <div key={idx} className="text-center p-2 rounded-lg bg-white/50 dark:bg-gray-800/50">
                        <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                        <div className="font-bold text-gray-800 dark:text-gray-200">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hackathons Section */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <Award className="w-6 h-6 text-purple-500" />
          Hackathons
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hackathons.map((hackathon, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={achievementVariants}
            >
              <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-xl text-purple-600 dark:text-purple-400">{hackathon.name}</span>
                    <Badge variant="outline" className="bg-purple-100 dark:bg-purple-900">
                      {hackathon.date}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{hackathon.position}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{hackathon.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}