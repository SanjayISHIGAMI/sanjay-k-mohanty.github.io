import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Users, Star } from "lucide-react";

const Research = () => {
  const publications = [
    {
      year: 2025,
      title: "Deep Learning Reveals Endogenous Sterols as Allosteric Modulators of the GPCR-Gα Interface",
      authors: "Mohanty, S. K., Mittal, A., Gaur, A., Duari, S., Solanki, S., Sharma, A. K., ... & Ahuja, G.",
      journal: "eLife",
      volume: "14",
      impact: 6.4,
      type: "First Author",
      status: "accepted"
    },
    {
      year: 2025,
      title: "scCamAge: A context-aware prediction engine for cellular age, aging-associated bioactivities, and morphometrics",
      authors: "Gautam, V., Duari, S., Solanki, S., Gupta, M., Mittal, A., Arora, S., ...Mohanty, S. K.…& Ahuja, G.",
      journal: "Cell Reports",
      volume: "44(2)",
      impact: 9.9,
      type: "Co-author",
      status: "accepted"
    },
    {
      year: 2024,
      title: "Discovering geroprotectors through the explainable artificial intelligence-based platform AgeXtend",
      authors: "Arora S, Mittal A, Duari S, Chauhan S, Dixit NK, Mohanty SK, Sharma A, Solanki S, et al.",
      journal: "Nature Publishing Group",
      impact: 17.0,
      type: "Co-author",
      status: "published"
    },
    {
      year: 2024,
      title: "Unlocking The Mysteries of DNA Adducts with Artificial Intelligence",
      authors: "Arora S, Satija S, Mittal A, Solanki S, Mohanty SK, Srivastava V, et al.",
      journal: "ChemBioChem",
      volume: "25(1):e202300577",
      impact: 3.468,
      type: "Co-author",
      status: "published"
    },
    {
      year: 2022,
      title: "Transcriptional advantage influence odorant receptor gene choice",
      authors: "Mohanty, S. K., Maryam, S., Gautam, V., Mittal, A., Gupta, K., Arora, R., et al.",
      journal: "Briefings in Functional Genomics",
      impact: 4.8,
      type: "First Author",
      status: "published"
    },
    {
      year: 2022,
      title: "Artificial intelligence uncovers carcinogenic human metabolites",
      authors: "Mittal, A.†, Mohanty, S. K.†, Gautam, V.†, Arora, S.†, et al.",
      journal: "Nature Chemical Biology",
      impact: 16.3,
      type: "Shared First Author",
      status: "published"
    },
    {
      year: 2022,
      title: "deepGraphh: AI-driven web service for graph-based quantitative structure-activity relationship analysis",
      authors: "Gautam, V., Gupta, R., Gupta, D., Ruhela, A., Mittal, A., Mohanty, S. K., et al.",
      journal: "Briefings in Bioinformatics",
      volume: "23",
      impact: 13.9,
      type: "Co-author",
      status: "published"
    },
    {
      year: 2021,
      title: "OdoriFy: A conglomerate of Artificial Intelligence-driven prediction engines for olfactory decoding",
      authors: "Gupta, R., Mittal, A., Agrawal, V., Gupta, S., Gupta, K., Jain, R. R., Garg, P., Mohanty, S. K., et al.",
      journal: "Journal of Biological Chemistry",
      volume: "100956",
      impact: 5.5,
      type: "Co-author",
      status: "published"
    },
    {
      year: 2021,
      title: "EcTracker: Tracking and elucidating ectopic expression leveraging large-scale scRNA-seq studies",
      authors: "Gautam, V., Mittal, A., Kalra, S., Mohanty, S. K., Gupta, K., Rani, K., et al.",
      journal: "Briefings in Bioinformatics",
      impact: 13.9,
      type: "Co-author",
      status: "published"
    },
    {
      year: 2021,
      title: "Machine-OlF-Action: A unified framework for developing and interpreting machine-learning models for chemosensory research",
      authors: "Gupta, A.†, Choudhary, M.†, Mohanty, S. K.†, Mittal, A.†, et al.",
      journal: "Bioinformatics",
      impact: 6.9,
      type: "Shared First Author",
      status: "published"
    },
    {
      year: 2020,
      title: "The Cellular basis of the loss of smell in 2019-nCoV-infected individuals",
      authors: "Gupta, K.†, Mohanty, S. K.†, Mittal, A., Kalra, S., Kumar, S., et al.",
      journal: "Briefings in Bioinformatics",
      impact: 13.9,
      type: "Shared First Author",
      status: "published"
    }
  ];

  const conferences = [
    {
      year: 2025,
      title: "European Molecular Biology Organization PhD course",
      location: "IISER Pune, Pune, India"
    },
    {
      year: 2024,
      title: "Cell Symposia: Chemical biology in drugging the undrugged 2024",
      location: "UCSF, San Francisco, USA"
    },
    {
      year: 2024,
      title: "ICGB-5: 5th International Conference on Genome Biology",
      location: "MKU, Madurai, India"
    },
    {
      year: 2024,
      title: "EMBO Lecture Course, Post-transcriptional regulation in ageing and age-related diseases",
      location: "SNU, UP, India"
    },
    {
      year: 2023,
      title: "Algorithms that Transformed Molecular Biology (ATMB)",
      location: "IIIT Delhi, New Delhi, India"
    },
    {
      year: 2022,
      title: "DBT-sponsored workshop on 'AI in Modern Biology'",
      location: "ICGEB, New Delhi, India"
    },
    {
      year: 2019,
      title: "Workshop Series on Machine Learning",
      location: "IIT Patna, Bihar, India"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "First Author": return "bg-primary text-primary-foreground";
      case "Shared First Author": return "bg-tech-purple text-white";
      case "Co-author": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getImpactColor = (impact: number) => {
    if (impact >= 10) return "text-green-600 font-bold";
    if (impact >= 5) return "text-blue-600 font-semibold";
    return "text-muted-foreground";
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-tech-purple bg-clip-text text-transparent">
            Research & Publications
          </h1>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold">11 Publications</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-tech-purple" />
              <span className="text-lg font-semibold">138 Citations</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold">Multiple High-Impact Journals</span>
            </div>
          </div>
        </div>

        {/* Publications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Publications</h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight mb-2">
                        {pub.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground mb-2">
                        {pub.authors}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className={getTypeColor(pub.type)}>
                        {pub.type}
                      </Badge>
                      <span className="text-sm font-medium">{pub.year}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="font-semibold text-primary">
                        {pub.journal}
                      </span>
                      {pub.volume && (
                        <span className="text-sm text-muted-foreground">
                          Vol. {pub.volume}
                        </span>
                      )}
                      <span className={`text-sm ${getImpactColor(pub.impact)}`}>
                        Impact Factor: {pub.impact}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Conferences */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Conferences & Workshops</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {conferences.map((conf, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-lg leading-tight">{conf.title}</h3>
                    <Badge variant="outline">{conf.year}</Badge>
                  </div>
                  <p className="text-muted-foreground">{conf.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;