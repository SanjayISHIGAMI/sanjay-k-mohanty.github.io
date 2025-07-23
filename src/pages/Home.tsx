import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Award, Users, Github, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const highlights = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "10+ Publications",
      description: "High-impact journals including Nature Chemical Biology, eLife, Cell Reports",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "DST INSPIRE Fellow",
      description: "Gold medalist and top performer in academic excellence",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Teaching Experience",
      description: "TA for Machine Learning, Computational Gastronomy, and Quantitative Biology",
    },
  ];

  const skills = [
    "Python", "R", "Machine Learning", "Deep Learning", "Cheminformatics", 
    "Drug Discovery", "Bioinformatics", "Data Science", "AI/ML", "Docker"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/90" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-tech-purple to-primary bg-clip-text text-transparent animate-pulse">
            Sanjay Kumar Mohanty
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            Computational Biology Researcher & Data Scientist
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            Ph.D. researcher specializing in cheminformatics, drug discovery, and AI-driven metabolite 
            functional elucidation. Passionate about revolutionizing pharmaceutical science through 
            computational approaches.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-tech-purple hover:opacity-90 transition-opacity">
              <Link to="/research">
                View Research <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/contact">
                Get In Touch <Mail className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-tech-purple bg-clip-text text-transparent">
            Research Highlights
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4 group-hover:bg-primary/20 transition-colors">
                    <div className="text-primary">{highlight.icon}</div>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-tech-purple bg-clip-text text-transparent">
            Technical Expertise
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skills.map((skill) => (
              <Badge 
                key={skill} 
                variant="secondary" 
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
          
          <Button asChild variant="outline" size="lg">
            <Link to="/skills">
              View All Skills <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-tech-purple/10 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Collaborate?</h3>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss how computational approaches can solve complex biological problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="https://github.com/SanjayISHIGAMI" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub Profile
              </a>
            </Button>
            
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">
                Contact Me
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;