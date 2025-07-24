import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      // EmailJS configuration - you'll need to replace these with your actual EmailJS credentials
      const serviceId = 'service_portfolio'; // Replace with your EmailJS service ID
      const templateId = 'template_sqp90rl'; // Replace with your EmailJS template ID
      const publicKey = 'UN24_s2P-MLVJ18lF'; // Replace with your EmailJS public key

      const templateParams = {
        to_email: 'kumeres741@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        subject: 'Message from portfolio',
        message: `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject || 'No subject provided'}

Message:
${formData.message}
        `.trim()
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "kumeres741@gmail.com",
      secondary: "sanjaym@iiitd.ac.in",
      link: "mailto:kumeres741@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 9861267547",
      link: "tel:+919861267547"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Markandeswara Shahi, Puri",
      secondary: "Odisha, India - 752001"
    }
  ];

  const professionalProfiles = [
    {
      platform: "GitHub",
      username: "SanjayISHIGAMI",
      url: "https://github.com/SanjayISHIGAMI",
      icon: <Github className="h-5 w-5" />,
      description: "Code repositories and open-source contributions"
    },
    {
      platform: "ORCiD",
      username: "0000-0002-1375-2223",
      url: "https://orcid.org/0000-0002-1375-2223",
      icon: <ExternalLink className="h-5 w-5" />,
      description: "Academic profile and research publications"
    },
    {
      platform: "PyPI",
      username: "MohantyS",
      url: "https://pypi.org/user/MohantyS/",
      icon: <ExternalLink className="h-5 w-5" />,
      description: "Python package contributions"
    },
    {
      platform: "Docker Hub",
      username: "sanjayk741",
      url: "https://hub.docker.com/u/sanjayk741",
      icon: <ExternalLink className="h-5 w-5" />,
      description: "Container images and deployment tools"
    }
  ];

  const collaborationAreas = [
    "Computational Biology Research",
    "Drug Discovery Projects",
    "Cheminformatics Applications",
    "Machine Learning in Healthcare",
    "Bioinformatics Tool Development",
    "Academic Teaching & Mentoring",
    "Scientific Writing & Publications",
    "Grant Proposal Collaboration"
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-tech-purple bg-clip-text text-transparent">
            Contact & Collaboration
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss research opportunities, collaborations, or academic partnerships
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-primary mt-1">{contact.icon}</div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{contact.label}</h4>
                      {contact.link ? (
                        <a 
                          href={contact.link}
                          className="text-primary hover:underline"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{contact.value}</p>
                      )}
                      {contact.secondary && (
                        <p className="text-sm text-muted-foreground">{contact.secondary}</p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Professional Profiles */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Professional Profiles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {professionalProfiles.map((profile, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted/80 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="text-primary">{profile.icon}</div>
                      <div>
                        <h4 className="font-semibold">{profile.platform}</h4>
                        <p className="text-sm text-muted-foreground">{profile.description}</p>
                      </div>
                    </div>
                    <Button asChild variant="outline" size="sm">
                      <a href={profile.url} target="_blank" rel="noopener noreferrer">
                        Visit Profile
                      </a>
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Collaboration Areas */}
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>Collaboration Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {collaborationAreas.map((area, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 bg-muted/30 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{area}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name *</label>
                    <Input 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name" 
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email *</label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com" 
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input 
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Research collaboration inquiry" 
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message *</label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your research interests, collaboration ideas, or any questions you have..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-primary to-tech-purple hover:opacity-90 transition-opacity"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
              
              <div className="mt-8 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-semibold mb-2">Quick Response Times</h4>
                <p className="text-sm text-muted-foreground">
                  I typically respond to research inquiries within 24-48 hours. For urgent matters, 
                  please feel free to contact me directly via email or phone.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;