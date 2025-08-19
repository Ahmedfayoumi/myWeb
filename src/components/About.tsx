import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

const About = () => {
  const skills = [
    "JavaScript/TypeScript", "React/Next.js", "Node.js", "Python", 
    "SQL/NoSQL", "AWS/Azure", "Docker", "Git", "REST APIs", "GraphQL"
  ];

  const achievements = [
    { icon: Award, text: "5+ Years Experience", color: "text-blue-500" },
    { icon: Users, text: "50+ Projects Completed", color: "text-green-500" },
    { icon: Clock, text: "24/7 Support", color: "text-purple-500" },
    { icon: CheckCircle, text: "100% Satisfaction Rate", color: "text-orange-500" }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate software developer with over 5 years of experience creating 
              digital solutions that make a difference. I specialize in full-stack development, 
              focusing on modern technologies and best practices to deliver exceptional results.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From small business websites to enterprise applications, I work closely with 
              clients to understand their unique needs and transform ideas into powerful, 
              scalable software solutions.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                  <span className="text-sm font-medium text-foreground">{achievement.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Card className="bg-gradient-card border-border shadow-elegant">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="justify-center py-2 bg-secondary/50 text-secondary-foreground hover:bg-secondary transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-accent/30 rounded-lg border border-accent">
                <h4 className="font-semibold text-foreground mb-2">Why Choose Me?</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Clean, maintainable code</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Regular communication & updates</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>On-time delivery guaranteed</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Post-launch support included</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;