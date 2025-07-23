import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, FileText, Eye } from "lucide-react";

const CV = () => {
  const handleDownload = () => {
    // You'll need to replace this with your actual CV PDF URL
    const cvUrl = "/Sanjay_Kumar_Mohanty_CV.pdf";
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Sanjay_Kumar_Mohanty_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-tech-purple to-primary bg-clip-text text-transparent">
            Curriculum Vitae
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Download my complete academic and professional CV detailing my research experience, 
            publications, and achievements in computational biology and data science.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* CV Preview Card */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Academic CV</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                A list of references, including recent collaborators who can attest to my skills and experience, is available on the third page of my CV
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Format:</span>
                  <span className="font-medium">PDF</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Last Updated:</span>
                  <span className="font-medium">July 2025</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Pages:</span>
                  <span className="font-medium">3 pages</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions Card */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <CardTitle>Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                onClick={handleDownload}
                className="w-full bg-gradient-to-r from-primary to-tech-purple hover:opacity-90 transition-opacity"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV (PDF)
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                size="lg"
                onClick={() => {
                  // You'll need to replace this with your actual CV PDF URL
                  window.open("/Sanjay_Kumar_Mohanty_CV.pdf", "_blank");
                }}
              >
                <Eye className="mr-2 h-4 w-4" />
                Preview CV
              </Button>

              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground text-center">
                  For specific inquiries about my experience or collaborations, 
                  feel free to reach out through the contact page.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* PDF Viewer Placeholder */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>CV Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-[3/4] bg-muted/50 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
                <iframe
                    src="/Sanjay_Kumar_Mohanty_CV.pdf"
                    title="CV Preview"
                    className="w-full h-full rounded-lg"
                    style={{ minHeight: 500 }}
                />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CV;