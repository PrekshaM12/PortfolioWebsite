"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { Progress } from "./ui/progress"

const skills = {
  languages: [
    { name: "Python", level: 95 },
    { name: "SQL", level: 90 },
    { name: "R", level: 90 },
    { name: "Java", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "C/C++", level: 80 },
  ],
  aiml: [
    "Scikit-Learn",
    "XGBoost",
    "LightGBM",
    "TensorFlow",
    "PyTorch",
    "Keras",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "PySpark",
    "OpenCV",
  ],
  concepts: [
    "Supervised Learning",
    "Unsupervised Learning",
    "NLP",
    "Deep Learning",
    "Computer Vision",
    "Anomaly Detection",
    "Feature Engineering",
    "Model Optimization",
    "MLOps",
    "Data Manipulation",
    "Object-Oriented Programming",
    "CI/CD Pipelines",
    "Big Data",
    "Agile Development",
    "Distributed Systems",
    "System Design",
    "DevOps",
    "Automation",
    "REST APIs",
    "Full-Stack Development",
    "AWS",
    "NoSQL and Relational Databases"
  ],
}

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30 relative">
      <div className="absolute inset-0 code-pattern opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 gradient-text inline-block">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-coolBlue-500 to-techPurple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2"
          >
            <h3 className="text-2xl font-semibold mb-4 text-coolBlue-500 dark:text-coolBlue-400">Who I Am</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-6">
              <div className="md:col-span-1">
                <div className="rounded-full overflow-hidden border-4 border-techPurple-500 shadow-lg shadow-techPurple-500/20 w-48 h-48 mx-auto group transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-techPurple-500/40 hover:border-coolBlue-500">
                  <img
                    src="/Preksha Mathur_pic.jpg?height=200&width=200"
                    alt="Preksha Mathur"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-foreground/80 mb-4">
                  I'm a dedicated and determined graduate student pursuing Masters in Computer Science at the University of California, Riverside, with a strong
                  foundation in AI, Machine Learning, and Data Science. My academic journey has equipped me with both
                  theoretical knowledge and practical skills in developing innovative solutions.
                </p>
                <p className="text-foreground/80 mb-4">
                  With experience in AI-driven security systems, computer vision applications, and machine learning
                  research, I'm passionate about leveraging technology to solve real-world problems. My work spans from
                  developing anomaly detection systems to optimizing deep learning models for various applications.
                </p>
                <p className="text-foreground/80">
                  I'm constantly exploring new technologies and methodologies to enhance my skills and contribute
                  meaningfully to the field of Computer Science.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 text-coolBlue-500 dark:text-coolBlue-400">
                Programming Languages
              </h3>
              <div className="space-y-4">
                {skills.languages.map((lang, index) => (
                  <div key={lang.name} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="font-medium">{lang.name}</span>
                      <span className="text-sm text-foreground/70">{lang.level}%</span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${lang.level}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                    >
                      <Progress
                        value={lang.level}
                        className="h-2 bg-muted"
                        indicatorClassName="bg-gradient-to-r from-coolBlue-500 to-techPurple-500"
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="border border-coolBlue-500/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-coolBlue-500/10 bg-card/80 backdrop-blur-sm">
  <CardContent className="p-6">
    <h3 className="text-2xl font-semibold mb-4 text-coolBlue-500 dark:text-coolBlue-400">Skills</h3>

  
    {/* Tools and Frameworks */}
    <div className="mb-4">
      <h4 className="text-lg font-medium mb-2">Tools/Frameworks</h4>
      <div className="flex flex-wrap gap-2">
        {[
          "Tailwind CSS", "React", "Django", "Node.js", "GIT", "PostgreSQL", "Vercel", "MongoDB", "Linux", 
          "SPARK", "Hadoop", "AWS", "Docker", "Google Cloud", "Agile Development"
        ].map((tool) => (
          <Badge
            key={tool}
            variant="outline"
            className="bg-coolBlue-500/10 text-coolBlue-500 dark:text-coolBlue-400 border-coolBlue-500/30 hover:bg-coolBlue-500/20 transition-colors duration-300"
          >
            {tool}
          </Badge>
        ))}
      </div>
    </div>
      {/* AI/ML Libraries */}
      <div className="mb-4">
      <h4 className="text-lg font-medium mb-2">AI/ML Libraries</h4>
      <div className="flex flex-wrap gap-2">
        {skills.aiml
          .filter((skill) => !["PyTorch", "TensorFlow", "Scikit"].includes(skill))  // Remove duplicates
          .map((skill) => (
            <Badge
              key={skill}
              variant="outline"
              className="bg-coolBlue-500/10 text-coolBlue-500 dark:text-coolBlue-400 border-coolBlue-500/30 hover:bg-coolBlue-500/20 transition-colors duration-300"
            >
              {skill}
            </Badge>
          ))}
      </div>
    </div>


    {/* Concepts */}
    <div>
      <h4 className="text-lg font-medium mb-2">Concepts</h4>
      <div className="flex flex-wrap gap-2">
        {skills.concepts.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="bg-techPurple-500/10 text-techPurple-500 dark:text-techPurple-400 hover:bg-techPurple-500/20 transition-colors duration-300"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>

    {/* Currently Learning */}
    <div className="mt-8 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-coolBlue-500/10 to-techPurple-500/10 rounded-lg animate-pulse-slow"></div>
      <div className="relative p-4 border border-coolBlue-500/20 rounded-lg bg-card/80 backdrop-blur-sm">
        <h4 className="text-lg font-medium mb-2 text-techPurple-500 dark:text-techPurple-400">
          Currently Learning
        </h4>
        <ul className="space-y-2 text-foreground/80">
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-coolBlue-500"></span>
            Large Language Models
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-coolBlue-500"></span>
            Generative AI
          </li>
          <li className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-coolBlue-500"></span>
            Reinforcement Learning
          </li>
        </ul>
      </div>
    </div>
  </CardContent>
</Card>

            {/* <Card className="border border-coolBlue-500/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-coolBlue-500/10 bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-coolBlue-500 dark:text-coolBlue-400">Skills</h3>

                <div className="mb-4">
                  <h4 className="text-lg font-medium mb-2">AI/ML Libraries</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.aiml.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="bg-coolBlue-500/10 text-coolBlue-500 dark:text-coolBlue-400 border-coolBlue-500/30 hover:bg-coolBlue-500/20 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-medium mb-2">Concepts</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.concepts.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-techPurple-500/10 text-techPurple-500 dark:text-techPurple-400 hover:bg-techPurple-500/20 transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-coolBlue-500/10 to-techPurple-500/10 rounded-lg animate-pulse-slow"></div>
                  <div className="relative p-4 border border-coolBlue-500/20 rounded-lg bg-card/80 backdrop-blur-sm">
                    <h4 className="text-lg font-medium mb-2 text-techPurple-500 dark:text-techPurple-400">
                      Currently Learning
                    </h4>
                    <ul className="space-y-2 text-foreground/80">
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-coolBlue-500"></span>
                        Large Language Models
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-coolBlue-500"></span>
                        Generative AI
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-coolBlue-500"></span>
                        Reinforcement Learning
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card> */}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
