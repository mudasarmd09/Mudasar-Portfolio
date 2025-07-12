
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            About Mudasar MD
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforming complex business challenges into elegant, scalable solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <Card className="hover-glow border-portfolio-blue/20 bg-gradient-to-br from-background to-muted/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-portfolio-blue">Enterprise Innovation</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  <span className="text-portfolio-blue font-semibold">Problem Solver by Nature</span> | <span className="text-portfolio-purple font-semibold">Full Stack Developer by Practice</span> | <span className="text-portfolio-cyan font-semibold">Tech Collaborator by Choice</span>. 
                  With 5+ years of experience, I've architected solutions for Fortune 500 companies and innovative startups.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My expertise spans building enterprise Web3 dashboards processing 10M+ daily transactions, AI-powered platforms increasing efficiency by 300%, 
                  and mobile ecosystems serving 1M+ active users. I specialize in React.js, Node.js, Web3, Blockchain, and AI/ML integration.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond coding, I contribute to open-source projects, mentor developers, and stay at the forefront of emerging technologies 
                  like quantum computing and decentralized autonomous organizations (DAOs).
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '100+', label: 'Projects Delivered' },
                { number: '5+', label: 'Years Experience' },
                { number: '50+', label: 'Enterprise Clients' },
                { number: '99.9%', label: 'Uptime' }
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
