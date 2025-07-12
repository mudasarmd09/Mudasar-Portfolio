import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'JavaScript', level: 92 },
        { name: 'TypeScript', level: 88 },
        { name: 'CSS3', level: 90 },
        { name: 'HTML', level: 95 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 82 },
      ]
    },
    {
      title: 'Blockchain & AI',
      skills: [
        { name: 'Web3.js', level: 80 },
        { name: 'Solidity', level: 75 },
        { name: 'Machine Learning', level: 70 },
        { name: 'Artificial Intelligence', level: 72 },
      ]
    },
    {
      title: 'Tools & Design',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'UI/UX Design', level: 85 },
        { name: 'Figma', level: 88 },
        { name: 'Project Management', level: 80 },
      ]
    }
  ];

  const technologies = [
    'React.js', 'Node.js', 'JavaScript', 'TypeScript', 'CSS3', 'HTML', 
    'Express.js', 'MongoDB', 'PostgreSQL', 'Git/GitHub', 'REST APIs', 
    'Web3.js', 'Solidity', 'Blockchain Development', 'Artificial Intelligence (AI)', 
    'Machine Learning', 'UI/UX Design', 'Full-Stack Development', 
    'Mobile Application Development', 'Project Management'
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 animate-fade-in">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-portfolio-blue to-portfolio-purple mx-auto rounded-full"></div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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
