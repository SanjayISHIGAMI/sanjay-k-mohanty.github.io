import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, GraduationCap, Award } from "lucide-react";
import profilePhoto from "../assets/profile-photo.jpg";

const About = () => {
  const education = [
    {
      degree: "Ph.D. Computational Biology",
      institution: "Indraprastha Institute of Information Technology-Delhi",
      duration: "2020-Present",
      grade: "CGPA: 9.35",
      status: "Current"
    },
    {
      degree: "M.Sc. Bioinformatics",
      institution: "Central University of South Bihar, Gaya",
      duration: "2018-2020",
      grade: "CGPA: 9.54",
      status: "Completed"
    },
    {
      degree: "B.Sc Botany (Honors)",
      institution: "Utkal University, Bhubaneswar",
      duration: "2015-2018",
      grade: "72.17%",
      status: "Completed"
    }
  ];

  const awards = [
    {
      year: "2023",
      title: "Gold Medalist (Best Graduate)",
      institution: "School of Earth, Environmental and Biological Science, CUSB"
    },
    {
      year: "2023",
      title: "Gold Medalist",
      institution: "Department of Bioinformatics, CUSB"
    },
    {
      year: "2021",
      title: "DST INSPIRE Fellowship",
      institution: "DST/INSPIRE/03/2021/001936"
    },
    {
      year: "2020",
      title: "CUSB Semester Topper Merit Scholarship",
      institution: "2019/2020"
    },
    {
      year: "2019",
      title: "CUSB Semester Topper Merit Scholarship",
      institution: "2018/2019"
    }
  ];

  const languages = [
    { language: "English", proficiency: "Full Professional Proficiency" },
    { language: "Hindi", proficiency: "Full Professional Proficiency" },
    { language: "Odia", proficiency: "Native Language" }
  ];

  const profiles = [
    { platform: "ORCiD", id: "0000-0002-1375-2223" },
    { platform: "GitHub", id: "SanjayISHIGAMI" },
    { platform: "PyPI", id: "MohantyS" },
    { platform: "Docker", id: "sanjayk741" }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-tech-purple bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about revolutionizing pharmaceutical science through computational approaches
          </p>
        </div>

        {/* Personal Info & Research Interest */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Born: May 30, 1998</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">Markandeswara Shahi, Puri, Odisha, India</span>
              </div>
              <div className="pt-4">
                <h4 className="font-semibold mb-2">Professional Profiles</h4>
                <div className="grid grid-cols-2 gap-2">
                  {profiles.map((profile) => (
                    <div key={profile.platform} className="text-sm">
                      <span className="font-medium">{profile.platform}:</span> {profile.id}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-primary">Research Interest</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                I am a data scientist by training, and I am presently pursuing my Ph.D. in 
                Computational Biology with a research specialization in cheminformatics, 
                metabolite functional elucidation, and drug discovery. With strong computational 
                literacy, I aim to revolutionize pharmaceutical science by unraveling complex 
                biochemical interactions and generating novel insights.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Education */}
        <Card className="mb-12 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary/20 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="font-semibold text-lg">{edu.degree}</h4>
                    <Badge variant={edu.status === "Current" ? "default" : "secondary"}>
                      {edu.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground mb-1">{edu.institution}</p>
                  <div className="flex flex-col sm:flex-row sm:gap-4 text-sm text-muted-foreground">
                    <span>{edu.duration}</span>
                    <span className="font-medium text-primary">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Awards & Languages */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Awards & Fellowships
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {awards.map((award, index) => (
                  <div key={index} className="border-b border-border/50 pb-3 last:border-b-0">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium">{award.title}</h4>
                        <p className="text-sm text-muted-foreground">{award.institution}</p>
                      </div>
                      <Badge variant="outline" className="ml-2">{award.year}</Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium">{lang.language}</span>
                    <Badge variant="secondary">{lang.proficiency}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;