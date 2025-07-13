
import { Card, CardContent } from '@/components/ui/card';

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6">
            Development Philosophy
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building digital solutions that help businesses scale and adapt in fast-changing markets
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <Card className="hover-glow border-portfolio-blue/20 bg-gradient-to-br from-background to-muted/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-portfolio-blue">My Approach</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With over 5 years of hands-on experience, I design and build digital solutions that help businesses scale and adapt in fast-changing markets. My philosophy blends proven engineering practices with emerging technologies like AI, blockchain, and cloud platforms to deliver reliable, future-ready products.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Throughout my career, I've collaborated with startups and established teams to launch 10+ MVPs, enterprise dashboards, and cross-platform applications. By combining deep expertise in React.js, Node.js, and Web3 development with a strong focus on UI/UX, I aim to create software that is both intuitive and impactful.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Whether it's crafting smart contracts, integrating AI-powered workflows, or optimizing backend performance, I approach every project with a commitment to clean code, thoughtful design, and measurable business results.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '10+', label: 'Projects Delivered' },
                { number: '5+', label: 'Years Experience' },
                { number: '10+', label: 'MVPs Launched' },
                { number: '100%', label: 'Client Satisfaction' }
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
