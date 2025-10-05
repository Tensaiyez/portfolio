"use client";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, Code, Palette, Database, Smartphone, Sun, Moon, Download, ArrowUp } from "lucide-react";
import { useTheme } from "@/lib/theme-context";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [mounted, setMounted] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "projects", "articles", "contact"];
      const scrollPosition = window.scrollY + 150;

      // Show back to top button after scrolling 300px
      setShowBackToTop(window.scrollY > 300);

      // Find the section that's currently in view
      let currentSection = "home";
      
      // Check each section to see which one is most visible
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          const sectionTop = offsetTop;
          const sectionBottom = offsetTop + offsetHeight;
          
          // If we're past the middle of this section, it's likely the active one
          if (scrollPosition >= sectionTop + (offsetHeight / 2)) {
            currentSection = section;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Immediately set the active section when clicking
      setActiveSection(sectionId);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Loading state
  if (!mounted) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
          <div className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Loading Portfolio...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-all duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                TZ
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-1 bg-slate-100 dark:bg-slate-800 rounded-full p-1">
                {[
                  { id: "home", label: "Home" },
                  { id: "about", label: "About" },
                  { id: "experience", label: "Experience" },
                  { id: "projects", label: "Projects" },
                  { id: "articles", label: "Articles" },
                  { id: "contact", label: "Contact" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeSection === item.id 
                        ? "bg-foreground text-background shadow-sm" 
                        : "text-muted-foreground hover:text-foreground hover:bg-slate-200 dark:hover:bg-slate-700"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <button
                onClick={toggleTheme}
                className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 group"
                aria-label="Toggle theme"
                title="Manual theme toggle (overrides time-based theme)"
              >
                {theme === "light" ? (
                  <Moon className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors" />
                ) : (
                  <Sun className="w-5 h-5 text-slate-400 group-hover:text-slate-200 transition-colors" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 dark:bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div className="text-left">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  Available for opportunities
                </span>
                <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6">
                  <span className="block text-foreground">Tensaiye</span>
                  <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Zelealem
                  </span>
                </h1>
              </div>
              
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-4">
                  Software Engineer
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                  Building secure, scalable systems and blockchain solutions at Intel. 
                  Passionate about distributed systems, cloud security, and AI technologies.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="group px-8 py-4 bg-foreground text-background rounded-xl font-semibold hover:bg-foreground/90 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  <span className="flex items-center gap-2">
                    View Projects
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-8 py-4 border-2 border-foreground/20 rounded-xl font-semibold hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-300"
                >
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Right side - Visual element */}
            <div className="relative">
              <div className="relative w-full h-96 lg:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl transform rotate-3"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl transform -rotate-2"></div>
                <div className="absolute inset-4 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      <Code className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Blockchain & Cloud Security</h3>
                    <p className="text-muted-foreground text-sm">Specialized in secure systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              About Me
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a Software Engineer with a passion for building secure, scalable systems and blockchain solutions. 
                Currently working at Intel on Cloud Security & AI, I specialize in distributed systems 
                and blockchain technologies.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                With experience at Intel, VMware, and Coinbase, I've worked on everything from secure federated AI systems 
                to blockchain platforms and NFT marketplaces. I hold an M.S. in Computer Science from NYU and love solving 
                complex technical challenges.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://github.com/Tensaiyez"
            target="_blank"
            rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  <Github size={20} />
                  GitHub
          </a>
          <a
                  href="https://www.linkedin.com/in/tensaiye-zelealem/"
            target="_blank"
            rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border hover-scale hover:shadow-lg transition-all duration-300 group">
                <Code className="w-8 h-8 text-blue-600 group-hover:text-purple-600 transition-colors duration-300 mb-4 float" />
                <h3 className="font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">Languages</h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Go, Java, Python, JavaScript, TypeScript, SQL, Solidity
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border hover-scale hover:shadow-lg transition-all duration-300 group">
                <Database className="w-8 h-8 text-blue-600 group-hover:text-purple-600 transition-colors duration-300 mb-4 float" />
                <h3 className="font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">Backend & Systems</h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Distributed Systems, Blockchain, Microservices, BFT
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border hover-scale hover:shadow-lg transition-all duration-300 group">
                <Palette className="w-8 h-8 text-blue-600 group-hover:text-purple-600 transition-colors duration-300 mb-4 float" />
                <h3 className="font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">Infrastructure</h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Docker, Kubernetes, Azure, CI/CD, Intel SGX
                </p>
              </div>
              <div className="bg-card p-6 rounded-lg border border-border hover-scale hover:shadow-lg transition-all duration-300 group">
                <Smartphone className="w-8 h-8 text-blue-600 group-hover:text-purple-600 transition-colors duration-300 mb-4 float" />
                <h3 className="font-semibold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">Security & AI</h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  Cryptographic Key Management, Secure Federated AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Professional Experience
            </h2>
          </div>
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-8 hover-scale hover:shadow-xl transition-all duration-500 group">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <p className="text-3xl font-bold text-foreground group-hover:text-blue-600 transition-colors duration-300 mb-2">Intel | Cloud, Security & AI</p>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">Software Engineer (Grade 6)</h3>
                </div>
                <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">May 2023 – July 2025</div>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Integrated SFAI (Secure Federated AI) with Dynatrace, improving anomaly detection speed by over 95%</li>
                <li>• Built cross-platform onboarding tooling for SFAI, cutting manual setup time by over 60%</li>
                <li>• Developed ITP SDK for Intel's Ledger as a Service (LaaS) with Trusted Execution Environment (TEE)</li>
                <li>• Implemented cryptographic key management using SGX-sealed Ed25519 keys</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover-scale hover:shadow-xl transition-all duration-500 group">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <p className="text-3xl font-bold text-foreground group-hover:text-blue-600 transition-colors duration-300 mb-2">VMware | Cloud & Blockchain</p>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">Software Engineer (MTS 2)</h3>
                </div>
                <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">Feb 2022 – May 2023</div>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Deployed VMware blockchain on Azure Cloud platform supporting 4 regions</li>
                <li>• Designed generic testing framework for ERC20 and ERC721 smart contracts, increasing test coverage to 75-90%</li>
                <li>• Integrated mTLS protocol across 4+ dApps, ensuring SOC2 compliance</li>
                <li>• Applied TDD to raise test coverage from 44% to 90%, reducing post-deployment defects by 28%</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover-scale hover:shadow-xl transition-all duration-500 group">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <p className="text-3xl font-bold text-foreground group-hover:text-blue-600 transition-colors duration-300 mb-2">Coinbase</p>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">Software Engineer Intern</h3>
                </div>
                <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">Sep 2021 – Dec 2021</div>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Engineered backend search functionality and NFT features for newly released platform</li>
                <li>• Platform garnered 1.1 million users during initial three-day early access release</li>
                <li>• Implemented like/unlike features and account following capabilities</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-lg p-8 hover-scale hover:shadow-xl transition-all duration-500 group">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <p className="text-3xl font-bold text-foreground group-hover:text-blue-600 transition-colors duration-300 mb-2">VMware</p>
                  <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">Blockchain Engineer Intern</h3>
                </div>
                <div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">May 2021 – Aug 2021</div>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Engineered an end-to-end NFT smart contract interface/platform using VMware blockchain technology</li>
                <li>• Designed the backend architecture for a Digital Art NFT platform</li>
                <li>• Enabled users to mint and transfer Digital Art NFTs on the blockchain</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Impact Ledger",
                description: "A clean, fast PWA-first dashboard for transparent aid tracking. Built with Next.js 14, TypeScript, and blockchain technology for end-to-end verifiable aid distribution tracking.",
                tech: ["Next.js", "TypeScript", "Tailwind CSS", "Blockchain"],
                image: "/api/placeholder/400/300",
                link: "https://github.com/Tensaiyez/impact-ledger"
              },
              {
                title: "Blockchain Voting System",
                description: "A decentralized voting application built on Ethereum blockchain for secure, transparent elections. Features smart contracts, MetaMask integration, and real-time vote tracking to prevent election fraud.",
                tech: ["Solidity", "Ethereum", "MetaMask", "Node.js"],
                image: "/api/placeholder/400/300",
                link: "https://github.com/Tensaiyez/Undergrad-SeniorProjectPaper/tree/master"
              },
              {
                title: "Moviester",
                description: "Android app that allows users to browse through highest rated, most popular and upcoming movies with detailed descriptions and reviews.",
                tech: ["Java", "Android", "REST API", "Material Design"],
                image: "/api/placeholder/400/300",
                link: "https://github.com/Tensaiyez/Moviester"
              }
            ].map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200/50 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50">
                  {/* Project Image/Visual */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 group-hover:from-blue-500/30 group-hover:via-purple-500/30 group-hover:to-pink-500/30 transition-all duration-500"></div>
                    
                    {/* Floating elements */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 dark:bg-slate-700/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                      {project.title === "Impact Ledger" && <Database className="w-6 h-6 text-blue-600" />}
                      {project.title === "Blockchain Voting System" && <Database className="w-6 h-6 text-green-600" />}
                      {project.title === "Moviester" && <Smartphone className="w-6 h-6 text-pink-600" />}
                    </div>
                    
                    {/* Project title overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-y-[-4px] transition-transform duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action button */}
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-semibold group/link"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Articles & Research
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Blockchain Technology: A Comprehensive Overview",
                description: "A detailed research paper exploring blockchain fundamentals, consensus mechanisms, and real-world applications including a practical voting system implementation.",
                category: "Research Paper",
                date: "2020",
                link: "https://github.com/Tensaiyez/Undergrad-SeniorProjectPaper/tree/master",
                readTime: "45 min read"
              }
            ].map((article, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200/50 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50 dark:hover:shadow-slate-900/50">
                  {/* Article Visual */}
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 group-hover:from-blue-500/30 group-hover:via-purple-500/30 group-hover:to-pink-500/30 transition-all duration-500"></div>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/20 dark:bg-slate-700/20 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                        {article.category}
                      </span>
                    </div>
                    
                    {/* Read time */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/20 dark:bg-slate-700/20 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                        {article.readTime}
                      </span>
                    </div>
                    
                    {/* Article title overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:translate-y-[-4px] transition-transform duration-300">
                        {article.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {article.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                      <a
                        href={article.link}
                        className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-semibold group/link"
                      >
                        Read Article
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
          </div>
          <p className="text-lg text-muted-foreground mb-12">
            Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="mailto:taz231@nyu.edu"
              className="flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail size={20} />
              Send Email
        </a>
        <a
              href="https://www.linkedin.com/in/tensaiye-zelealem/"
          target="_blank"
          rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 border border-border rounded-lg font-medium hover:bg-accent transition-colors"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
        </a>
        <a
              href="/resume.pdf"
              download="Tensaiye_Zelealem_Resume.pdf"
              className="group flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Download size={20} className="group-hover:translate-y-[-2px] transition-transform" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>&copy; 2025 Tensaiye Zelealem. All rights reserved.</p>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:translate-y-[-2px] transition-transform" />
        </button>
      )}
    </div>
  );
}
