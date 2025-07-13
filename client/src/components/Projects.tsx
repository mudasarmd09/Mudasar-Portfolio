import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Web3 Trading Dashboard",
      description:
        "A professional Web3 analytics platform built with React.js, TypeScript, and Web3.js. Features real-time blockchain data visualization, smart contract interactions, and DeFi portfolio tracking with secure wallet integration.",
      image: "/assets/placeholder.svg",
      technologies: ["React.js", "TypeScript", "Web3.js", "Solidity", "Node.js", "PostgreSQL"],
      githubUrl: "https://github.com/mudasarmd09",
      metrics: ["Real-time Analytics", "Secure Integration", "Modern UI/UX"],
      category: "Blockchain & Web3"
    },
    {
      title: "AI Content Management System",
      description:
        "An intelligent content management platform integrating OpenAI APIs for automated content generation and optimization. Built with React.js, Node.js, and Python. Features AI-powered workflows, content analytics, and automated publishing capabilities.",
      image: "/assets/placeholder.svg",
      technologies: ["React.js", "Node.js", "Python", "OpenAI API", "MongoDB", "Express"],
      githubUrl: "https://github.com/mudasarmd09",
      metrics: ["AI Integration", "Automated Workflows", "Content Analytics"],
      category: "AI & Machine Learning"
    },
    {
      title: "E-Commerce Mobile App",
      description:
        "A modern mobile application for iOS and Android built with React Native. Features include user authentication, product catalog, shopping cart, payment integration, and real-time order tracking with a clean, intuitive interface.",
      image: "/assets/placeholder.svg",
      technologies: ["React Native", "Node.js", "MongoDB", "Express", "Firebase", "TypeScript"],
      githubUrl: "https://github.com/mudasarmd09",
      metrics: ["Cross-Platform", "Payment Integration", "Real-time Updates"],
      category: "Mobile Development"
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of professional applications built with modern technologies and best practices
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group glass-card premium-hover border-portfolio-blue/20 hover:border-portfolio-purple/40 overflow-hidden animate-slide-up" 
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-portfolio-blue/20 via-portfolio-purple/20 to-portfolio-cyan/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-portfolio-blue to-portfolio-purple flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{project.title.split(' ')[0][0]}{project.title.split(' ')[1] ? project.title.split(' ')[1][0] : ''}</span>
                    </div>
                    <Badge className="bg-portfolio-blue/20 text-portfolio-blue border-portfolio-blue/30">
                      {project.category}
                    </Badge>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-portfolio-blue transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-3 gap-2 my-4">
                  {project.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center p-2 glass-card rounded-lg">
                      <div className="text-sm font-semibold text-portfolio-blue">{metric}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} className="skill-badge hover:bg-portfolio-blue/30 transition-colors duration-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                    className="flex items-center gap-2 glass-card glow-border flex-1 hover:bg-portfolio-blue/10"
                  >
                    <Github className="w-4 h-4" />
                    View Code
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                    className="flex items-center gap-2 bg-gradient-to-r from-portfolio-blue to-portfolio-purple hover:from-portfolio-purple hover:to-portfolio-cyan flex-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
