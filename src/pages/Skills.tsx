import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Brain, Beaker, GitBranch, Cloud } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: "Python", level: 95, description: "Primary language for data science, ML, and research" },
        { name: "R", level: 88, description: "Statistical analysis and bioinformatics" },
        { name: "Perl/PHP", level: 82, description: "Web development and visualization" },
        { name: "SQL", level: 85, description: "Database querying and management" },
        { name: "Bash/Shell", level: 75, description: "System administration and automation" }
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: "Deep Learning", level: 92, description: "Neural networks, CNNs, RNNs, Transformers" },
        { name: "Machine Learning", level: 95, description: "Supervised, unsupervised, and reinforcement learning" },
        { name: "TensorFlow/Keras", level: 88, description: "Deep learning framework proficiency" },
        { name: "PyTorch", level: 85, description: "Research-oriented deep learning" },
        { name: "Scikit-learn", level: 92, description: "Classical ML algorithms and preprocessing" }
      ]
    },
    {
      title: "Computational Biology",
      icon: <Beaker className="h-6 w-6" />,
      skills: [
        { name: "Cheminformatics", level: 95, description: "Chemical data analysis and drug discovery" },
        { name: "Bioinformatics", level: 90, description: "Biological sequence analysis and genomics" },
        { name: "Drug Discovery", level: 88, description: "QSAR, molecular docking, virtual screening" },
        { name: "Metabolomics", level: 85, description: "Metabolite identification and pathway analysis" },
        { name: "Systems Biology", level: 82, description: "Network analysis and modeling" }
      ]
    },
    {
      title: "Data Science & Analytics",
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: "Data Visualization", level: 90, description: "Matplotlib, Seaborn, Plotly, ggplot2" },
        { name: "Statistical Analysis", level: 88, description: "Hypothesis testing, regression, time series" },
        { name: "Big Data Processing", level: 82, description: "Pandas, NumPy, data preprocessing" },
        { name: "Feature Engineering", level: 85, description: "Feature selection and dimensionality reduction" },
        { name: "Data Mining", level: 87, description: "Pattern recognition and knowledge discovery" }
      ]
    },
    {
      title: "Development & Tools",
      icon: <GitBranch className="h-6 w-6" />,
      skills: [
        { name: "Git/GitHub", level: 88, description: "Version control and collaboration" },
        { name: "Docker", level: 82, description: "Containerization and deployment" },
        { name: "Jupyter/IPython", level: 95, description: "Interactive development and research" },
        { name: "Linux/Unix", level: 95, description: "System administration and command line" },
        { name: "CI/CD", level: 75, description: "Automated testing and deployment" }
      ]
    },
  ];

  const frameworks = [
    "TensorFlow", "PyTorch", "Keras", "Scikit-learn", "Pandas", "NumPy", 
    "RDKit", "OpenMM", "BioPython", "Matplotlib", "Seaborn", "Plotly",
    "PyMol", "Gromacs", "Modeller", "AutoDock", "MGLtools", "Open Babel", "Docker"
  ];

  const databases = [
    "ChEMBL", "PubChem", "UniProt", "PDB", "KEGG", "DrugBank",
    "ZINC", "NCBI", "Ensembl", "STRING", "Gene Ontology"
  ];

  const getLevelColor = (level: number) => {
    if (level >= 90) return "bg-green-500";
    if (level >= 80) return "bg-blue-500";
    if (level >= 70) return "bg-yellow-500";
    return "bg-gray-500";
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-tech-purple bg-clip-text text-transparent">
            Technical Skills & Expertise
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technical skills in computational biology, data science, and software development
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-12 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-semibold">{skill.name}</h4>
                        <span className="text-sm font-medium">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Frameworks & Tools */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Tools & Frameworks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((framework) => (
                  <Badge 
                    key={framework} 
                    variant="secondary" 
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {framework}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Databases & Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {databases.map((database) => (
                  <Badge 
                    key={database} 
                    variant="outline" 
                    className="hover:bg-tech-purple hover:text-white hover:border-tech-purple transition-colors"
                  >
                    {database}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;