
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 animate-fade-in">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <Card className="hover-glow border-portfolio-blue/20 bg-gradient-to-br from-background to-muted/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-portfolio-blue">My Development Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Problem Solver by Nature | Full Stack Developer by Practice | Tech Collaborator by Choice. Over the past years, I've worked closely with designers, developers, and AI experts to turn early-stage ideas into real products.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Whether building modern Web3 dashboards, mobile-first platforms, or integrating OpenAI into smart business tools, my primary stack revolves around React.js, Node.js, MongoDB, and PostgreSQL. I've been diving deeper into blockchain technologies and AI/ML integration.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring the latest trends in Web3, contributing to open-source projects, or designing intuitive user experiences in Figma.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '10+', label: 'MVPs Delivered' },
                { number: '1+', label: 'Years Experience' },
                { number: '15+', label: 'Happy Clients' },
                { number: '100%', label: 'Commitment' }
              ].map((stat, index) => (
                <Card 
                  key={index} 
                  className={`text-center hover-glow border-portfolio-purple/20 bg-gradient-to-br from-portfolio-blue/5 to-portfolio-purple/5 animate-scale-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
