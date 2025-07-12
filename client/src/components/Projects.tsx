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
      title: "Enterprise Web3 Dashboard",
      description:
        "A Fortune 500-ready Web3 analytics platform built with React.js, TypeScript, and Web3.js. Features real-time blockchain data visualization, smart contract interactions, DeFi portfolio tracking, and advanced security protocols. Handles 10M+ transactions daily.",
      image: "/assets/placeholder.svg",
      technologies: ["React.js", "TypeScript", "Web3.js", "Solidity", "Node.js", "PostgreSQL"],
      githubUrl: "https://github.com/mudasarmd09",
      metrics: ["10M+ Daily Transactions", "99.9% Uptime", "Sub-100ms Response Time"],
      category: "Blockchain & Web3"
    },
    {
      title: "AI-Powered Business Intelligence Platform",
      description:
        "An intelligent enterprise automation platform integrating OpenAI GPT-4, Claude, and custom ML models. Built with React.js, Node.js, and Python. Automates complex workflows, provides predictive analytics, and delivers AI-driven insights that increased client efficiency by 300%.",
      image: "/assets/placeholder.svg",
      technologies: ["React.js", "Node.js", "Python", "OpenAI API", "TensorFlow", "MongoDB"],
      githubUrl: "https://github.com/mudasarmd09",
      metrics: ["300% Efficiency Boost", "50+ Enterprise Clients", "Real-time AI Processing"],
      category: "AI & Machine Learning"
    },
    {
      title: "Cross-Platform Mobile Ecosystem",
      description:
        "A comprehensive mobile-first platform supporting iOS, Android, and web. Built with React Native, Flutter, and Next.js. Features offline-first architecture, real-time synchronization, push notifications, and advanced analytics. Serves 1M+ active users globally.",
      image: "/assets/placeholder.svg",
      technologies: ["React Native", "Flutter", "Next.js", "Node.js", "Firebase", "TypeScript"],
      githubUrl: "https://github.com/mudasarmd09",
      metrics: ["1M+ Active Users", "4.8★ App Store Rating", "Global Distribution"],
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
            Enterprise-grade solutions that deliver measurable impact for Fortune 500 companies and innovative startups
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
