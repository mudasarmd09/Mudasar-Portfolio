import { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function Skills() {
  const skillCategories = useMemo(() => [
    {
      title: 'Frontend Mastery',
      icon: '🎨',
      color: 'from-portfolio-blue to-portfolio-cyan',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'JavaScript', level: 95 },
      ]
    },
    {
      title: 'Backend Excellence',
      icon: '⚙️',
      color: 'from-portfolio-purple to-portfolio-blue',
      skills: [
        { name: 'Node.js', level: 92 },
        { name: 'Express.js', level: 90 },
        { name: 'MongoDB', level: 88 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'REST APIs', level: 90 },
      ]
    },
    {
      title: 'Web3 & Blockchain',
      icon: '🔗',
      color: 'from-portfolio-cyan to-portfolio-emerald',
      skills: [
        { name: 'Solidity', level: 85 },
        { name: 'Web3.js', level: 88 },
        { name: 'Ethers.js', level: 85 },
        { name: 'Smart Contracts', level: 82 },
        { name: 'DeFi Development', level: 80 },
      ]
    },
    {
      title: 'AI & Machine Learning',
      icon: '🤖',
      color: 'from-portfolio-orange to-portfolio-pink',
      skills: [
        { name: 'OpenAI API', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'AI Integration', level: 85 },
        { name: 'Machine Learning', level: 80 },
        { name: 'Data Processing', level: 82 },
      ]
    }
  ], []);

  const technologies = useMemo(() => [
    { name: 'React.js', color: 'from-blue-500 to-cyan-400' },
    { name: 'Next.js', color: 'from-gray-700 to-gray-900' },
    { name: 'Node.js', color: 'from-green-500 to-emerald-400' },
    { name: 'Express', color: 'from-gray-600 to-gray-800' },
    { name: 'JavaScript', color: 'from-yellow-400 to-orange-400' },
    { name: 'TypeScript', color: 'from-blue-600 to-blue-800' },
    { name: 'MongoDB', color: 'from-green-600 to-green-800' },
    { name: 'PostgreSQL', color: 'from-blue-400 to-indigo-600' },
    { name: 'Tailwind CSS', color: 'from-cyan-400 to-blue-500' },
    { name: 'Git', color: 'from-orange-500 to-red-500' },
    { name: 'Web3.js', color: 'from-purple-500 to-pink-500' },
    { name: 'Solidity', color: 'from-gray-500 to-gray-700' },
    { name: 'Ethers.js', color: 'from-indigo-500 to-purple-600' },
    { name: 'OpenAI APIs', color: 'from-green-400 to-teal-500' },
    { name: 'Python', color: 'from-yellow-500 to-blue-500' },
    { name: 'Docker', color: 'from-blue-500 to-blue-700' },
    { name: 'Firebase', color: 'from-orange-400 to-yellow-400' },
    { name: 'Figma', color: 'from-purple-400 to-pink-400' },
    { name: 'UI/UX Design', color: 'from-pink-500 to-rose-500' }
  ], []);

  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6 animate-fade-in">
            Technical Excellence
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Mastering cutting-edge technologies to deliver enterprise-grade solutions
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
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
                key={tech.name}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 animate-fade-in hover:scale-105 hover:shadow-lg bg-gradient-to-r ${tech.color} text-white shadow-md`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
