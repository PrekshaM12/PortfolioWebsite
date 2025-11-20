"use client"

import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
import { BookOpen, Calendar, ExternalLink } from "lucide-react"
import { Button } from "./ui/button"

const publicationsData = [
    {
    title:
      "Hierarchical Attention-Enhanced Multihead CNN and Level Sets Segmentation: A Proposed Approach to Enhance the Cyclone Intensity Estimation",
    journal: "Advances in Space Research - Elsevier Journal",
    date: "October 2025",
    status: "Published",
    tags: ["CNN", "Attention Mechanisms", "Cyclone Intensity", "Segmentation"],
    doi: "https://www.sciencedirect.com/science/article/pii/S0273117725011329?via%3Dihub",
  },
  {
    title:
      "Enhanced remote sensing and deep learning aided water quality detection in the Ganges River, India supporting monitoring of aquatic environments",
    journal: "Results in Engineering (RINENG), Elsevier Journal",
    date: "November 2024",
    status: "Published",
    tags: ["Remote Sensing", "Deep Learning", "Water Quality", "Environmental Monitoring"],
    doi: "https://www.sciencedirect.com/science/article/pii/S2590123024018474",
  },

  {
    title: "Quantitative Nuclei Analysis for Accurate Detection of Breast Abnormalities through Machine Learning",
    conference: "IEEE Global Conference on Information Technologies and Communications",
    date: "December 2023",
    status: "Presented",
    paperId: "GCCIT2023-394",
    isFirstAuthor: true,
    tags: ["Medical Imaging", "Machine Learning", "Breast Cancer Detection"],
    conferenceLink: "https://ieeexplore.ieee.org/document/10426527",
  },
    {
    title: "Parallelization of Molecular Dynamics Simulations",
    conference: "International Conference on MAchine inTelligence for Research Innovation (MAiTRI-2023 Summit)",
    date: "August 2023",
    status: "Presented",
    isFirstAuthor: true,
    tags: ["Molecular Dynamics", "Parallelization", "High Performance Computing"],
    conferenceLink: "https://link.springer.com/chapter/10.1007/978-981-99-8129-8_22",
  },
]

const Publications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="publications" className="py-20 bg-gradient-to-b from-background to-muted/30 relative">
      <div className="absolute inset-0 code-pattern opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-2 gradient-text inline-block">Publications</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-coolBlue-500 to-techPurple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {publicationsData.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-md transition-all duration-300 hover:shadow-coolBlue-500/20 bg-card/80 backdrop-blur-sm border border-coolBlue-500/20 group-hover:border-coolBlue-500/40">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-coolBlue-500 to-techPurple-500 p-3 rounded-full">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                        <h3 className="text-xl font-semibold text-coolBlue-500 dark:text-coolBlue-400 group-hover:text-techPurple-500 dark:group-hover:text-techPurple-400 transition-colors duration-300">
                          {pub.title}
                        </h3>
                        <div className="flex items-center gap-1 text-sm text-foreground/60">
                          <Calendar className="h-4 w-4 text-techPurple-500" />
                          <span>{pub.date}</span>
                        </div>
                      </div>

                      <div className="mb-3">
                        <p className="text-foreground/80">{pub.journal ? pub.journal : pub.conference}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge
                            variant="outline"
                            className="bg-coolBlue-500/20 text-coolBlue-700 dark:text-coolBlue-300 border-coolBlue-500/30 font-medium"
                          >
                            {pub.status}
                          </Badge>
                          {pub.isFirstAuthor && (
                            <Badge
                              variant="outline"
                              className="bg-techPurple-500/20 text-techPurple-700 dark:text-techPurple-300 border-techPurple-500/30 font-medium"
                            >
                              First Author
                            </Badge>
                          )}
                          {pub.manuscriptId && (
                            <Badge
                              variant="outline"
                              className="bg-muted/50 text-foreground/80 border-foreground/20 font-medium"
                            >
                              Manuscript ID: {pub.manuscriptId}
                            </Badge>
                          )}
                          {pub.paperId && (
                            <Badge
                              variant="outline"
                              className="bg-muted/50 text-foreground/80 border-foreground/20 font-medium"
                            >
                              Paper ID: {pub.paperId}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {pub.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-muted/70 text-foreground/80 hover:bg-muted transition-colors duration-300 font-medium"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex justify-end">
                        {pub.doi && (
                          <Button
                            size="sm"
                            variant="outline"
                            asChild
                            className="border-coolBlue-500/50 text-coolBlue-600 dark:text-coolBlue-300 hover:bg-coolBlue-500/10 transition-all duration-300"
                          >
                            <a href={pub.doi} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View DOI
                            </a>
                          </Button>
                        )}
                        {pub.preprint && (
                          <Button
                            size="sm"
                            variant="outline"
                            asChild
                            className="border-coolBlue-500/50 text-coolBlue-600 dark:text-coolBlue-300 hover:bg-coolBlue-500/10 transition-all duration-300 ml-2"
                          >
                            <a href={pub.preprint} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View Preprint
                            </a>
                          </Button>
                        )}
                        {pub.conferenceLink && (
                          <Button
                            size="sm"
                            variant="outline"
                            asChild
                            className="border-coolBlue-500/50 text-coolBlue-600 dark:text-coolBlue-300 hover:bg-coolBlue-500/10 transition-all duration-300 ml-2"
                          >
                            <a href={pub.conferenceLink} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              View Proceedings
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Publications
