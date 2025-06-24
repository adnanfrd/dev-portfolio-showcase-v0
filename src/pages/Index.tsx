
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Smartphone, ArrowRight, Download } from "lucide-react";

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
      github: "https://github.com/adnanfrd/",
      live: "https://www.ayurvedicherbalproducts.com/"
    },
    {
      title: "Event Management App",
      description: "Collaborative project management tool built with Next.js and real-time updates.",
      tech: ["Next.js", "TypeScript", "Prisma", "Socket.io"],
      github: "https://github.com/adnanfrd/",
      live: "https://eventbookingandmanage.vercel.app/"
    },
    {
      title: "AI-Powered Chat Application",
      description: "Real-time chat app with AI integration built using modern web technologies.",
      tech: ["React.js", "Node.js", "OpenAI API", "WebSockets"],
      github: "https://github.com/adnanfrd/",
      live: "https://barry-ai-three.vercel.app/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/20 dark:bg-slate-900/70 dark:border-slate-700/50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              DevPortfolio
            </h1>
            <div className="flex gap-6">
              <a href="#about" className="hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#projects" className="hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center relative">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Full Stack Developer
               </h2>
            <div className="relative">
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Passionate <span className="font-semibold text-blue-600">MERN stack developer</span> with expertise in building scalable web applications 
                using React.js, Next.js, Node.js, and modern development tools like <span className="font-semibold text-purple-600">Lovable</span> and <span className="font-semibold text-indigo-600">v0</span>.
              </p>
            </div>
          </div>
          
         <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center mb-12 animate-fade-in">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-2 border-slate-300 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 transform hover:scale-105 transition-all duration-300">
              <a href="#contact" className="flex items-center gap-2">
                Get In Touch
                <Mail className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-slate-300 hover:border-green-400 hover:bg-green-50 dark:hover:bg-slate-800 transform hover:scale-105 transition-all duration-300">
              <Download className="h-4 w-4 mr-2" />
              Resume
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center animate-fade-in">
            <Button variant="ghost" size="icon" asChild className="hover:bg-blue-100 dark:hover:bg-slate-800 hover:scale-110 transition-all duration-300 rounded-full">
              <a href="https://github.com/adnanfrd/" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-blue-100 dark:hover:bg-slate-800 hover:scale-110 transition-all duration-300 rounded-full">
              <a href="https://www.linkedin.com/in/adnanfrd/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20 relative">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent dark:from-white dark:to-slate-300">
            About Me
           </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I'm a passionate full-stack developer specializing in the <span className="font-semibold text-blue-600">MERN stack</span> with extensive 
                experience in building modern, scalable web applications. My expertise spans across 
                React.js, Next.js, Node.js, and cutting-edge development tools.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                I love creating seamless user experiences and robust backend systems. Whether it's 
                rapid prototyping with <span className="font-semibold text-purple-600">Lovable</span> and <span className="font-semibold text-indigo-600">v0</span> or building production-ready applications, 
                I'm always excited to tackle new challenges.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200/50 dark:border-blue-700/50 transform hover:scale-105 transition-all duration-300">
                  <Code className="h-6 w-6 text-blue-600" />
                  <span className="text-sm font-medium">Frontend Expert</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200/50 dark:border-green-700/50 transform hover:scale-105 transition-all duration-300">
                  <Server className="h-6 w-6 text-green-600" />
                  <span className="text-sm font-medium">Backend Specialist</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200/50 dark:border-purple-700/50 transform hover:scale-105 transition-all duration-300">
                  <Database className="h-6 w-6 text-purple-600" />
                  <span className="text-sm font-medium">Database Design</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 dark:border-slate-700/50">
                <h4 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technical Skills</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/50 dark:hover:to-purple-900/50 transition-all duration-300 transform hover:scale-105 border border-slate-200/50 dark:border-slate-600/50">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30 dark:from-slate-800/30 dark:to-slate-700/30 rounded-3xl"></div>
        <div className="max-w-6xl mx-auto relative">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent dark:from-white dark:to-slate-300">
            Featured Projects
           </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/20 dark:border-slate-700/50 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative">
                  <CardTitle className="group-hover:text-blue-600 transition-colors duration-300 text-xl">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-slate-300 dark:border-slate-600 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild className="flex-1 hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-300 transform hover:scale-105">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <ExternalLink className="h-4 w-4" />
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
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent dark:from-white dark:to-slate-300">
            Let's Work Together
           </h3>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200/50 dark:border-blue-700/50">
              <Mail className="h-10 w-10 mx-auto mb-4 text-blue-600" />
              <h4 className="font-semibold mb-2 text-lg">Email</h4>
              <p className="text-slate-600 dark:text-slate-300">adnanfrd.work@gmail.com</p>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-700/50 border border-slate-200/50 dark:border-slate-600/50">
              <Github className="h-10 w-10 mx-auto mb-4 text-slate-800 dark:text-slate-200" />
              <h4 className="font-semibold mb-2 text-lg">GitHub</h4>
              <Button variant="link" asChild className="p-0 h-auto text-blue-600 hover:text-blue-700">
                <a href="https://github.com/adnanfrd/" target="_blank" rel="noopener noreferrer">
                  View Profile
                </a>
              </Button>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200/50 dark:border-blue-700/50">
              <Linkedin className="h-10 w-10 mx-auto mb-4 text-blue-600" />
              <h4 className="font-semibold mb-2 text-lg">LinkedIn</h4>
              <Button variant="link" asChild className="p-0 h-auto text-blue-600 hover:text-blue-700">
                <a href="https://linkedin.com/in/adnanfrd/" target="_blank" rel="noopener noreferrer">
                  Connect
                </a>
              </Button>
            </Card>
          </div>

          <Button size="lg" asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <a href="mailto:adnanfrd.work@gmail.com" className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Send Message
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <p className="text-lg">&copy; 2025 Developer Portfolio. Built with React.js and Lovable.</p>
          <p className="text-slate-400 mt-2">Crafted with ❤️ by <span class="font-semibold text-purple-600">M Adnan Fareed</span></p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
