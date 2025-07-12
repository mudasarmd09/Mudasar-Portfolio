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
        "A modern Web3 dashboard built with React.js and Web3.js. Features blockchain integration, smart contract interactions, and real-time cryptocurrency data visualization with a responsive UI.",
      image: "/assets/placeholder.svg",
      technologies: ["React.js", "Web3.js", "Solidity", "Node.js"],
      githubUrl: "https://github.com/mudasarmd09",
    },
    {
      title: "AI-Powered Business Tool",
      description:
        "An intelligent business automation platform integrating OpenAI APIs. Built with React.js and Node.js, it streamlines workflows with AI-powered assistants and smart data processing.",
      image: "/assets/placeholder.svg",
      technologies: ["React.js", "Node.js", "OpenAI API", "MongoDB"],
      githubUrl: "https://github.com/mudasarmd09",
    },
    {
      title: "Mobile-First Platform",
      description:
        "A cross-platform mobile application built with Flutter and React Native. Features responsive design, real-time data sync, and optimized performance across iOS and Android devices.",
      image: "/assets/placeholder.svg",
      technologies: ["Flutter", "React Native", "Firebase", "TypeScript"],
      githubUrl: "https://github.com/mudasarmd09",
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
            Here are some of my recent projects that showcase my skills and
            passion for creating amazing web experiences.
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
