
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Smartphone } from "lucide-react";

const Index = () => {
  const skills = [
    "React.js", "Next.js", "Node.js", "MongoDB", "Express.js", 
    "TypeScript", "JavaScript", "Tailwind CSS", "Lovable", "v0 by Vercel"
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack MERN application with user authentication, payment integration, and admin dashboard.",
      tech: ["React.js", "Node.js", "MongoDB", "Express.js", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool built with Next.js and real-time updates.",
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "#",
      live: "#"
    },
    {
      title: "AI-Powered Chat Application",
      description: "Real-time chat app with AI integration built using modern web technologies.",
      tech: ["React.js", "Node.js", "OpenAI API", "WebSockets"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b dark:bg-slate-900/80">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DevPortfolio
            </h1>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
              <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Full Stack Developer
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Passionate MERN stack developer with expertise in building scalable web applications 
            using React.js, Next.js, Node.js, and modern development tools like Lovable and v0.
          </p>
          <div className="flex gap-4 justify-center mb-12">
            <Button asChild size="lg">
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          <div className="flex gap-6 justify-center">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">About Me</h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                I'm a passionate full-stack developer specializing in the MERN stack with extensive 
                experience in building modern, scalable web applications. My expertise spans across 
                React.js, Next.js, Node.js, and cutting-edge development tools.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                I love creating seamless user experiences and robust backend systems. Whether it's 
                rapid prototyping with Lovable and v0 or building production-ready applications, 
                I'm always excited to tackle new challenges.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-medium">Frontend Expert</span>
                </div>
                <div className="flex items-center gap-2">
                  <Server className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">Backend Specialist</span>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-purple-600" />
                  <span className="text-sm font-medium">Database Design</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20 bg-white/50 dark:bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Featured Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Let's Work Together</h3>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-12">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6">
              <Mail className="h-8 w-8 mx-auto mb-4 text-blue-600" />
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="text-slate-600 dark:text-slate-300">your.email@example.com</p>
            </Card>
            
            <Card className="text-center p-6">
              <Github className="h-8 w-8 mx-auto mb-4 text-slate-800 dark:text-slate-200" />
              <h4 className="font-semibold mb-2">GitHub</h4>
              <Button variant="link" asChild className="p-0 h-auto">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </Button>
            </Card>
            
            <Card className="text-center p-6">
              <Linkedin className="h-8 w-8 mx-auto mb-4 text-blue-600" />
              <h4 className="font-semibold mb-2">LinkedIn</h4>
              <Button variant="link" asChild className="p-0 h-auto">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  Connect
                </a>
              </Button>
            </Card>
          </div>

          <Button size="lg" asChild>
            <a href="mailto:your.email@example.com">
              <Mail className="h-5 w-5 mr-2" />
              Send Message
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Developer Portfolio. Built with React.js and Lovable.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
