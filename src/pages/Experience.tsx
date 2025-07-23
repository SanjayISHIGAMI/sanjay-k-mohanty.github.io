import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, Award, Calendar } from "lucide-react";

const Experience = () => {
  const teachingExperience = [
    {
      course: "Computational Gastronomy",
      semester: "Monsoon 2020-2021",
      institution: "Indraprastha Institute of Information Technology, New Delhi",
      description: "Assisted in teaching computational approaches to culinary science, including food chemistry modeling and nutritional analysis algorithms.",
      skills: ["Python", "Data Analysis", "Food Science", "Algorithm Design"]
    },
    {
      course: "Communication Skills (English)",
      semester: "Winter 2020-2021", 
      institution: "Indraprastha Institute of Information Technology, New Delhi",
      description: "Helped students develop technical writing and presentation skills essential for scientific communication.",
      skills: ["Technical Writing", "Presentation", "Scientific Communication"]
    },
    {
      course: "Machine Learning for Biomedical Applications",
      semester: "Monsoon 2021-2022",
      institution: "Indraprastha Institute of Information Technology, New Delhi",
      description: "Guided students in applying ML techniques to solve biomedical problems, including drug discovery and medical image analysis.",
      skills: ["Machine Learning", "Biomedical Data", "Python", "TensorFlow"]
    },
    {
      course: "Introduction to Quantitative Biology",
      semester: "Winter 2021-2022",
      institution: "Indraprastha Institute of Information Technology, New Delhi",
      description: "Introduced students to mathematical and computational approaches in biological research and data analysis.",
      skills: ["Quantitative Biology", "Statistics", "R", "Mathematical Modeling"]
    }
  ];

  const researchExperience = [
    {
      position: "PhD Research Scholar",
      duration: "2020 - Present",
      institution: "IIIT Delhi",
      focus: "Computational Biology & Cheminformatics",
      achievements: [
        "Published 11 research papers in high-impact journals",
        "Developed AI models for drug discovery and metabolite analysis",
        "Collaborated on interdisciplinary projects with international researchers",
        "Received DST INSPIRE Fellowship for outstanding research"
      ]
    },
    {
      position: "Research Assistant",
      duration: "2018 - 2020",
      institution: "Central University of South Bihar",
      focus: "Bioinformatics & Data Analysis",
      achievements: [
        "Graduated as Gold Medalist with 9.54 CGPA",
        "Specialized in genomic data analysis and computational biology",
        "Contributed to multiple collaborative research projects",
        "Developed expertise in statistical genomics"
      ]
    }
  ];

  const keyResponsibilities = [
    "Conduct laboratory sessions and provide hands-on training",
    "Grade assignments and provide constructive feedback",
    "Assist in curriculum development and course material preparation",
    "Mentor undergraduate and graduate students in research projects",
    "Organize workshops and seminars on emerging technologies",
    "Collaborate with faculty to improve teaching methodologies"
  ];

  const teachingPhilosophy = [
    "Emphasize practical application of theoretical concepts",
    "Encourage critical thinking and problem-solving approaches",
    "Foster collaborative learning environments",
    "Integrate real-world examples and case studies",
    "Support diverse learning styles and backgrounds",
    "Promote ethical considerations in scientific research"
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-tech-purple bg-clip-text text-transparent">
            Experience & Teaching
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive academic and research experience in computational biology and data science education
          </p>
        </div>

        {/* Teaching Experience */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <Users className="h-8 w-8 text-primary" />
            Teaching Assistant Experience
          </h2>
          <div className="grid gap-6">
            {teachingExperience.map((experience, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-primary">{experience.course}</CardTitle>
                      <p className="text-muted-foreground">{experience.institution}</p>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {experience.semester}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {experience.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Research Experience */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
            <BookOpen className="h-8 w-8 text-primary" />
            Research Experience
          </h2>
          <div className="space-y-8">
            {researchExperience.map((experience, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl">{experience.position}</CardTitle>
                      <p className="text-muted-foreground">{experience.institution}</p>
                      <p className="text-sm text-primary font-medium">{experience.focus}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <Badge variant="outline">{experience.duration}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Responsibilities & Teaching Philosophy */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Key Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {keyResponsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                Teaching Philosophy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {teachingPhilosophy.map((principle, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-tech-purple rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm text-muted-foreground">{principle}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Experience;