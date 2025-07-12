import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Mastery',
      icon: '🎨',
      color: 'from-portfolio-blue to-portfolio-cyan',
      skills: [
        { name: 'React.js', level: 98 },
        { name: 'Next.js', level: 95 },
        { name: 'TypeScript', level: 95 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Three.js', level: 85 },
      ]
    },
    {
      title: 'Backend Excellence',
      icon: '⚙️',
      color: 'from-portfolio-purple to-portfolio-blue',
      skills: [
        { name: 'Node.js', level: 96 },
        { name: 'Express.js', level: 94 },
        { name: 'MongoDB', level: 90 },
        { name: 'PostgreSQL', level: 88 },
        { name: 'GraphQL', level: 85 },
      ]
    },
    {
      title: 'Web3 & Blockchain',
      icon: '🔗',
      color: 'from-portfolio-cyan to-portfolio-emerald',
      skills: [
        { name: 'Solidity', level: 88 },
        { name: 'Web3.js', level: 90 },
        { name: 'Smart Contracts', level: 85 },
        { name: 'DeFi Protocols', level: 82 },
        { name: 'IPFS', level: 80 },
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: '🤖',
      color: 'from-portfolio-orange to-portfolio-pink',
      skills: [
        { name: 'OpenAI API', level: 92 },
        { name: 'TensorFlow', level: 85 },
        { name: 'LangChain', level: 88 },
        { name: 'Computer Vision', level: 80 },
        { name: 'NLP', level: 82 },
      ]
    }
  ];

  const technologies = [
    'React.js', 'Node.js', 'JavaScript', 'TypeScript', 'CSS3', 'HTML', 'Express.js', 'MongoDB', 'Git/GitHub', 'REST APIs', 'Web3.js', 'Solidity', 'Blockchain Development', 'Artificial Intelligence (AI)', 'Machine Learning', 'UI/UX Design', 'Full-Stack Development', 'Mobile Application Development', 'Project Management'
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-6 animate-fade-in">
            Technical Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mastering cutting-edge technologies to deliver enterprise-grade solutions
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className={`hover-glow border-portfolio-blue/20 bg-gradient-to-br from-background to-muted/30 animate-scale-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-portfolio-purple">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 animate-fade-in">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3 animate-slide-in-left">
            {technologies.map((tech, index) => (
              <span 
                key={tech}
                className={`skill-badge animate-scale-in`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
