
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import AnimatedSection from "./AnimatedSection";
import { GraduationCapIcon, BriefcaseIcon, CodeIcon, HeartIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function Resume() {
  return (
    <section id="resume" className="section-padding">
      <div className="container px-4 mx-auto">
        <AnimatedSection>
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Resume</h2>
            <div className="w-20 h-1 bg-primary rounded mb-6"></div>
            <p className="text-muted-foreground max-w-3xl mx-auto text-balance">
              My academic journey, technical skills, and professional experiences
            </p>
          </div>
        </AnimatedSection>
        
        <Tabs defaultValue="education" className="w-full">
          <AnimatedSection>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 md:grid-cols-4 mb-12">
              <TabsTrigger value="education">
                <GraduationCapIcon className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Education</span>
              </TabsTrigger>
              <TabsTrigger value="skills">
                <CodeIcon className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Skills</span>
              </TabsTrigger>
              <TabsTrigger value="experience">
                <BriefcaseIcon className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Experience</span>
              </TabsTrigger>
              <TabsTrigger value="interests">
                <HeartIcon className="h-4 w-4 mr-2" />
                <span className="hidden md:inline">Interests</span>
              </TabsTrigger>
            </TabsList>
          </AnimatedSection>
          
          <TabsContent value="education" className="space-y-8">
            <AnimatedSection animation="fadeIn" delay={200}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <span className="tag mb-2">2021-2025</span>
                      <h3 className="text-xl font-bold">B.Tech in CSE - AI & ML</h3>
                      <p className="text-muted-foreground">Kakinada Institute of Engineering & Technology</p>
                    </div>
                    <span className="mt-2 md:mt-0 font-semibold text-primary">CGPA: 8.00</span>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fadeIn" delay={300}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <span className="tag mb-2">2019-2021</span>
                      <h3 className="text-xl font-bold">Intermediate</h3>
                      <p className="text-muted-foreground">Aditya Junior College</p>
                    </div>
                    <span className="mt-2 md:mt-0 font-semibold text-primary">Percentage: 56.4%</span>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fadeIn" delay={400}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                    <div>
                      <span className="tag mb-2">2018-2019</span>
                      <h3 className="text-xl font-bold">SSC</h3>
                      <p className="text-muted-foreground">M.V.R. Montessori EM School</p>
                    </div>
                    <span className="mt-2 md:mt-0 font-semibold text-primary">CGPA: 8.3</span>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </TabsContent>
          
          <TabsContent value="skills" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection animation="fadeInLeft" delay={200}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
                    <div className="space-y-6">
                      {[
                        { name: "Core Java", value: 85 },
                        { name: "Python Basics", value: 70 },
                        { name: "SQL", value: 75 },
                        { name: "Problem Solving", value: 80 },
                      ].map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.value}%</span>
                          </div>
                          <Progress value={skill.value} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeInRight" delay={300}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
                    <div className="space-y-6">
                      {[
                        { name: "Communication", value: 90 },
                        { name: "Teamwork", value: 85 },
                        { name: "Microsoft Excel", value: 75 },
                        { name: "Leadership", value: 80 },
                      ].map((skill) => (
                        <div key={skill.name} className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.value}%</span>
                          </div>
                          <Progress value={skill.value} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
            
            <AnimatedSection animation="fadeIn" delay={400}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Certifications</h3>
                  <ul className="space-y-4">
                    {[
                      "Career Edge Young Professional by TCS ION",
                      "Basics of Python by GUVI",
                      "Developer Job Simulation by Accenture",
                      "Foundations of Machine Learning by IIIT-Hyderabad",
                    ].map((cert, index) => (
                      <li key={index} className="flex items-start">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                          <span className="text-primary text-sm font-bold">{index + 1}</span>
                        </div>
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </TabsContent>
          
          <TabsContent value="experience" className="space-y-8">
            <AnimatedSection animation="fadeIn" delay={200}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4 justify-between mb-4">
                    <div>
                      <span className="tag mb-2">8 weeks</span>
                      <h3 className="text-xl font-bold">Salesforce Developer Virtual Internship</h3>
                      <p className="text-muted-foreground">Remote</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Gained hands-on experience with Salesforce development platform, learned about CRM solutions and cloud applications.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fadeIn" delay={300}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-4 justify-between mb-4">
                    <div>
                      <span className="tag mb-2">10 weeks</span>
                      <h3 className="text-xl font-bold">Java Full Stack Virtual Internship</h3>
                      <p className="text-muted-foreground">AICTE</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Developed full-stack web applications using Java, Spring Boot, and modern frontend technologies. Worked on real-world projects and improved coding practices.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fadeIn" delay={400}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Hackathons & Workshops</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm font-bold">1</span>
                      </div>
                      <span>Overnight Hackathon Conducted by College</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-primary text-sm font-bold">2</span>
                      </div>
                      <span>Mobile Application Development Workshop</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </TabsContent>
          
          <TabsContent value="interests" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Playing Cricket",
                  description: "Enjoy playing cricket with friends and following professional matches.",
                  icon: "🏏",
                  delay: 200,
                },
                {
                  title: "Driving",
                  description: "Love exploring new places and enjoy the freedom of the open road.",
                  icon: "🚗",
                  delay: 300,
                },
                {
                  title: "Street Photography",
                  description: "Capturing candid moments and urban scenes through the lens of a camera.",
                  icon: "📷",
                  delay: 400,
                },
              ].map((interest, index) => (
                <AnimatedSection key={index} animation="fadeIn" delay={interest.delay}>
                  <Card className="card-hover h-full">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-3xl">
                        {interest.icon}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{interest.title}</h3>
                      <p className="text-sm text-muted-foreground">{interest.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
            
            <AnimatedSection animation="fadeIn" delay={500}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Co-Curricular Activities</h3>
                  <div className="flex items-start">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <CodeIcon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold">Team Leader</h4>
                      <p className="text-sm text-muted-foreground">
                        Currently serving as a Team Leader for a final year project, coordinating team efforts and ensuring project milestones are met on time.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default Resume;
