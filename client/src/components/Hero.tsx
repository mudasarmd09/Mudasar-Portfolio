import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import BackgroundParticles from "@/components/BackgroundParticles";
export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden pt-20 pb-10 px-4 sm:px-6">
      <BackgroundParticles />
      {/* Premium Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/5 via-portfolio-purple/5 to-portfolio-cyan/5 animate-gradient"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-portfolio-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-portfolio-purple/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Avatar and Name Section */}
          <div className="flex flex-col items-center mb-8 animate-scale-in">
            <div className="relative group">
              <Avatar className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-4 sm:mb-6 ring-2 sm:ring-4 ring-portfolio-blue/30 hover:ring-portfolio-purple/50 transition-all duration-500 hover:scale-110 premium-hover animate-glow-pulse">
                <AvatarImage
                  src="/images/mudasar-profile.png"
                  alt="Muhammad Mudasar"
                  className="object-cover"
                />
                <AvatarFallback className="text-3xl font-bold gradient-text glass-card">
                  MM
                </AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/20 to-portfolio-purple/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl xl:text-9xl font-bold gradient-text mb-4 sm:mb-6 tracking-tight">
              Mudasar MD
            </h1>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {[
              { name: "React.js", color: "from-portfolio-blue to-portfolio-purple" },
              { name: "Node.js", color: "from-portfolio-purple to-portfolio-cyan" },
              { name: "Web3", color: "from-portfolio-cyan to-portfolio-emerald" },
              { name: "Blockchain", color: "from-portfolio-emerald to-portfolio-blue" },
              { name: "AI/ML", color: "from-portfolio-blue to-portfolio-orange" },
              { name: "UI/UX", color: "from-portfolio-purple to-portfolio-pink" },
            ].map((skill, index) => (
              <div
                key={skill.name}
                className={`glass-card px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 rounded-full bg-gradient-to-r ${skill.color} text-white font-semibold text-sm sm:text-base md:text-lg hover:scale-110 transition-all duration-300 animate-fade-in premium-hover shadow-lg`}
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                {skill.name}
              </div>
            ))}
          </div>

          <div className="glass-card p-6 rounded-2xl max-w-4xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-xl text-muted-foreground leading-relaxed text-center">
              <span className="text-portfolio-blue font-semibold">Problem Solver by Nature</span> | 
              <span className="text-portfolio-purple font-semibold"> Full Stack Developer by Practice</span> | 
              <span className="text-portfolio-cyan font-semibold"> Tech Collaborator by Choice</span>
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-center mt-4">
              I turn early-stage ideas into scalable products — building modern Web3 dashboards, 
              mobile-first platforms, and integrating AI into smart business tools using cutting-edge technologies.
            </p>
          </div>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="glass-card bg-gradient-to-r from-portfolio-blue to-portfolio-purple hover:from-portfolio-purple hover:to-portfolio-cyan transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-portfolio-blue/40 px-8 py-6 text-lg font-semibold text-white border-0"
            >
              <span className="relative z-10 text-white">View My Work</span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="glass-card glow-border hover:bg-portfolio-blue/10 transition-all duration-500 hover:scale-110 px-8 py-6 text-lg font-semibold border-portfolio-blue/30 hover:border-portfolio-purple/50"
            >
              <span className="relative z-10">Get In Touch</span>
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
