import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Brain, LineChart, ArrowRight, MessageCircle, CheckCircle, DollarSign, Book } from 'lucide-react';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('skills');
  const [isMobile, setIsMobile] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setNavbarVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);


  const projects = [
    {
      title: "Blockchain Education Platform",
      description: "Decentralized learning management system built on Internet Computer Protocol",
      tech: ["Motoko", "React", "ICP", "TypeScript"],
      category: "blockchain",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "AI Insurance Underwriting",
      description: "Machine learning model for automated risk assessment and policy pricing",
      tech: ["Python", "TensorFlow", "Django", "PostgreSQL"],
      category: "ai",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Endocare",
      description: "Mobile health records management system for endocrinology clinics",
      tech: ["Kotlin", "React Native", "Firebase", "Node.js"],
      category: "mobile",
      githubUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Social Analytics Dashboard",
      description: "Real-time social media analytics and sentiment analysis platform",
      tech: ["React", "Power BI", "Python", "MongoDB"],
      category: "analytics",
      githubUrl: "#",
      demoUrl: "#"
    }
  ];

  const skills = {
    languages: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Kotlin", level: 80 },
      { name: "Motoko", level: 75 },
      { name: "SQL", level: 85 }
    ],
    frameworks: [
      { name: "React", level: 90 },
      { name: "Django", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "TensorFlow", level: 75 }
    ]
  };

  const blogs = [
    {
      title: "Building Scalable dApps on ICP",
      date: "Jan 2025",
      preview: "Exploring the future of decentralized applications..."
    },
    {
      title: "AI in Healthcare: A Deep Dive",
      date: "Dec 2024",
      preview: "How machine learning is transforming patient care..."
    },
    {
      title: "Modern Mobile Development",
      date: "Nov 2024",
      preview: "Cross-platform development strategies..."
    }
  ];

  const steps = [
    { icon: MessageCircle, text: "Contact me" },
    { icon: Book, text: "Give me the project" },
    { icon: CheckCircle, text: "Allow me to do the job" },
    { icon: DollarSign, text: "Make your payment" }
  ];

  const SkillBar = ({ name, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <div 
          className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${isVisible ? level : 0}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* 3D Animated Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        navbarVisible ? 'top-0' : '-top-20'
      } bg-gray-800/80 backdrop-blur-md`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              CM
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'Projects', 'Skills', 'Blog', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative px-3 py-2 group"
                >
                  <span className="relative z-10 text-gray-300 group-hover:text-white transition-colors">
                    {item}
                  </span>
                  <span className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 rounded-lg" />
                </a>
              ))}
            </div>
            <div className="md:hidden">
              <Menu className="w-6 h-6" />
            </div>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <div className={`h-screen flex items-center justify-center transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            CYNTHIA MUEMI
          </h1>
          <p className="text-xl text-gray-400 mb-8">Multidisciplinary Tech Enthusiast</p>
          <div className="flex space-x-4 mb-8">
            <button className="px-6 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
              Portfolio
            </button>
            <button className="px-6 py-2 border border-blue-600 rounded-full hover:bg-blue-600/10 transition-colors">
              Resume
            </button>
          </div>
          <div className="flex space-x-4 text-gray-400">
            <Github className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
            <Linkedin className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
            <Mail className="w-6 h-6 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg hover:scale-105 transition-transform">
              <Code className="w-8 h-8 mb-4 text-blue-400" />
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-400">React, Tailwind, Node.js, Django</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg hover:scale-105 transition-transform">
              <Database className="w-8 h-8 mb-4 text-purple-400" />
              <h3 className="text-xl font-semibold mb-4">Backend</h3>
              <p className="text-gray-400">MongoDB, Firebase, SQL</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg hover:scale-105 transition-transform">
              <Brain className="w-8 h-8 mb-4 text-green-400" />
              <h3 className="text-xl font-semibold mb-4">AI/ML</h3>
              <p className="text-gray-400">TensorFlow, PyTorch, NLP</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg hover:scale-105 transition-transform">
              <LineChart className="w-8 h-8 mb-4 text-yellow-400" />
              <h3 className="text-xl font-semibold mb-4">Data Analytics</h3>
              <p className="text-gray-400">Power BI, Python, R</p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="p-6 bg-gray-800 rounded-lg group hover:scale-105 transition-transform relative"
              >
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between mt-4">
                  <a href={project.demoUrl} className="flex items-center text-blue-400 hover:text-blue-300">
                    View Project <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                  <a href={project.githubUrl} className="flex items-center text-blue-400 hover:text-blue-300">
                    GitHub <Github className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blog Section */}
      <div className="py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Latest Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div 
                key={index}
                className="bg-gray-800 rounded-lg p-6 hover:scale-105 transition-transform cursor-pointer"
              >
                <div className="text-sm text-blue-400 mb-2">{blog.date}</div>
                <h3 className="text-xl font-semibold mb-4">{blog.title}</h3>
                <p className="text-gray-400">{blog.preview}</p>
                <ArrowRight className="mt-4 w-5 h-5 text-blue-400" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Skills Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Skills & Expertise</h2>
          <div className="flex gap-4 mb-8">
            <button 
              className={`px-4 py-2 rounded-full ${activeSection === 'skills' ? 'bg-blue-600' : 'bg-gray-800'}`}
              onClick={() => setActiveSection('skills')}
            >
              Programming Languages
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${activeSection === 'frameworks' ? 'bg-blue-600' : 'bg-gray-800'}`}
              onClick={() => setActiveSection('frameworks')}
            >
              Frameworks & Tools
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(activeSection === 'skills' ? skills.languages : skills.frameworks).map((skill, index) => (
              <SkillBar key={index} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>

      {/* Get Started Section */}
      <div className="py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to get in touch?</h2>
          <p className="text-xl text-gray-400 mb-12">100% satisfaction guaranteed</p>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            We will give you an experience that will echo through your memory. Maximum satisfaction for my customers is what we sincerely crave for.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative">
                <step.icon className="w-12 h-12 text-blue-400 mb-4" />
                <p className="text-gray-300">{step.text}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-4 top-1/2 w-6 h-6 text-gray-600 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
              View My Resume
            </button>
            <button className="px-8 py-3 border border-blue-600 rounded-full hover:bg-blue-600/10 transition-colors">
              Start Conversation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;