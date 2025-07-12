import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const projects = [
    {
      title: "Web3 Dashboard",
      description:
        "A modern, responsive Web3 dashboard built with React.js and Node.js. Features real-time blockchain data visualization, smart contract interactions, and seamless wallet integration for DeFi applications.",
      image: "/assets/devfolio.png",
      technologies: ["React.js", "Node.js", "Web3.js", "Solidity"],
      githubUrl: "https://github.com/mudasarmd09",
      web: "https://mudasarmd09.github.io/",
    },
    {
      title: "AI-Powered Business Tools",
      description:
        "Smart business automation platform integrating OpenAI APIs for intelligent document processing, chatbot assistance, and data analysis. Built with modern React.js frontend and robust Node.js backend.",
      image: "/assets/newsy.png",
      technologies: ["React.js", "Node.js", "OpenAI API", "MongoDB"],
      githubUrl: "https://github.com/mudasarmd09",
    },
    {
      title: "Mobile-First E-commerce Platform",
      description:
        "Cross-platform mobile application built with React Native and Flutter. Features real-time inventory management, secure payment integration, and optimized user experience across all devices.",
      image: "/assets/poolart.png",
      technologies: ["React Native", "Flutter", "Express.js", "PostgreSQL"],
      githubUrl: "https://github.com/mudasarmd09",
      web: "https://mudasarmd09.github.io/",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-muted/30 to-background"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 animate-fade-in">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto animate-fade-in">
            Here are some of my recent projects that showcase my skills in full-stack development, 
            Web3 technology, AI integration, and mobile application development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`hover-glow border-portfolio-blue/20 bg-gradient-to-br from-background to-muted/30 group animate-scale-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-portfolio-blue group-hover:text-portfolio-purple transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-portfolio-blue/10 text-portfolio-blue border-portfolio-blue/20 hover:bg-portfolio-purple/10 hover:text-portfolio-purple hover:border-portfolio-purple/20 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.githubUrl && (
                    <Button
                      onClick={() => window.open(project.githubUrl, "_blank")}
                      size="sm"
                      className="flex-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple hover:from-portfolio-purple hover:to-portfolio-cyan transition-all duration-300 text-white"
                    >
                      GitHub
                    </Button>
                  )}

                  {project.web && (
                    <Button
                      onClick={() => window.open(project.web, "_blank")}
                      size="sm"
                      variant="outline"
                      className="flex-1 text-portfolio-blue border-portfolio-blue hover:bg-portfolio-blue/10"
                    >
                      Live Demo
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
