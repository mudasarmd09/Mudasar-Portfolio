import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import BackgroundParticles from "@/components/BackgroundParticles";
import mudasarAvatar from "/assets/mudasar-profile.png";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden pt-24 md:pt-20">
      {" "}
      <BackgroundParticles />
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/5 via-portfolio-purple/5 to-portfolio-cyan/5 animate-pulse"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Avatar and Name Section */}
          <div className="flex flex-col items-center mb-8 animate-fade-in">
          <Avatar className="w-40 h-30 mb-6 ring-4 ring-portfolio-blue/30 hover:ring-portfolio-purple/50 transition-all duration-300 hover:scale-105">

              <AvatarImage
                src={mudasarAvatar}
                alt="Muhammad Mudasar"
                className="object-cover"
              />

              <AvatarFallback className="text-2xl font-bold gradient-text bg-gradient-to-br from-portfolio-blue/20 to-portfolio-purple/20">
                MM
              </AvatarFallback>
            </Avatar>

            <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
              Muhammad Mudasar
            </h1>
          </div>

          <h2
            className="text-2xl md:text-3xl text-muted-foreground font-medium mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Full Stack Developer | React.js • Node.js • Web3 • Blockchain • AI/ML | UI/UX Wizard | Building Scalable, Modern Web Apps
          </h2>

          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Problem Solver by Nature | Full Stack Developer by Practice | Tech Collaborator by Choice. Over the past years, I've worked closely with designers, developers, and AI experts to turn early-stage ideas into real products — whether that meant building modern Web3 dashboards, mobile-first platforms, or integrating OpenAI into smart business tools. My primary stack revolves around React.js, Node.js, MongoDB, and PostgreSQL, and I've been diving deeper into blockchain technology.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple hover:from-portfolio-purple hover:to-portfolio-cyan transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-portfolio-blue/25"
            >
              View My Work
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="border-portfolio-blue/30 hover:border-portfolio-purple/50 hover:bg-portfolio-blue/10 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>

          <div
            className="flex items-center justify-center gap-6 mb-16 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            {[
              {
                icon: Github,
                href: "https://github.com/mudasarmd09",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://linkedin.com/in/mudasarmd",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:mudasar077689@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }, index) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full bg-gradient-to-r from-muted/50 to-muted/30 hover:from-portfolio-blue/20 hover:to-portfolio-purple/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-portfolio-blue/25 group"
                aria-label={label}
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              >
                <Icon className="w-6 h-6 text-muted-foreground group-hover:text-portfolio-blue transition-colors duration-300" />
              </a>
            ))}
          </div>

          <div className="animate-bounce-slow">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scrollToSection("about")}
              className="rounded-full hover:bg-portfolio-blue/10 transition-all duration-300"
            >
              <ChevronDown className="w-6 h-6 text-muted-foreground" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
