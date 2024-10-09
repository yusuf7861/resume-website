'use client'


import { Button } from "@/components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail, Twitter } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ResumeWebsite() {
  const [activeSection, setActiveSection] = useState('hero')
  // const [theme, setTheme] = useState('light')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'education', 'skills', 'portfolio', 'testimonials', 'contact']
      const scrollPosition = window.scrollY

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetTop + offsetHeight - 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }


  return (
    <div className={`min-h-screen bg-gray-50 text-gray-800`}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <ul className="flex justify-center items-center space-x-6">
            {['Home', 'About', 'Experience', 'Education', 'Skills', 'Portfolio', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.toLowerCase() ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {item}
                </button>
              </li>
            ))}

          </ul>
        </nav>
      </header>

      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
        <p>&copy; {new Date().getFullYear()} Yusuf Jamal. All rights reserved.</p>
      </footer>
    </div>
  )
}

function HeroSection() {
  const [isDownloading, setIsDownloading] = useState(false)


  const handleDownload = async () => {
    setIsDownloading(true)
    const driveUrl = 'https://drive.google.com/uc?export=download&id=1GOnYOmRuzs2MZ3vxG-aUK7uNhIa_eqb3'
    
    try {
      const response = await fetch(driveUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.style.display = 'none'
      a.href = url
      a.download = 'John_Doe_Resume.pdf'
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download failed:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <section id="hero" className="bg-white py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          className="mb-8 mx-auto"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/placeholder.svg?height=200&width=200"
            alt="John Doe"
            className="rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 object-cover mx-auto"
          />
        </motion.div>
        <motion.h1
          className="mb-4 text-3xl sm:text-4xl font-bold"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          John Doe
        </motion.h1>
        <motion.h2
          className="mb-6 text-lg sm:text-xl text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Full Stack Developer
        </motion.h2>
        <motion.p
          className="mb-8 max-w-2xl mx-auto text-gray-600 text-sm sm:text-base"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Passionate about creating elegant, efficient, and user-friendly web applications. 
          With 5+ years of experience in full-stack development, I specialize in React, Node.js, and cloud technologies.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button onClick={handleDownload} disabled={isDownloading}>
            <Download className="mr-2 h-4 w-4" />
            {isDownloading ? 'Downloading...' : 'Download Resume'}
          </Button>
          <Button variant="outline">
            <Mail className="mr-2 h-4 w-4" /> Contact Me
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold text-center">About Me</h2>
        <div className="max-w-3xl mx-auto">
          <p className="mb-6 text-gray-600">
            I&apos;m a Full Stack Developer with a passion for building scalable and efficient web applications. 
            With a strong foundation in both front-end and back-end technologies, I strive to create 
            seamless user experiences while ensuring robust and maintainable codebases.
          </p>
          <p className="mb-6 text-gray-600">
            My journey in software development began 5 years ago, and since then, I&apos;ve had the opportunity 
            to work on diverse projects ranging from e-commerce platforms to data-intensive applications. 
            I&apos;m constantly learning and adapting to new technologies to stay at the forefront of web development.
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {['JavaScript', 'React', 'Node.js', 'Python'].map((skill) => (
              <div key={skill} className="bg-white p-4 rounded-lg shadow-sm text-center">
                <p className="font-medium">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovators Inc.',
      duration: 'Jan 2020 - Present',
      description: 'Lead development of scalable web applications using React and Node.js. Implemented microservices architecture, improving system efficiency by 40%.',
    },
    {
      title: 'Full Stack Developer',
      company: 'WebSolutions Co.',
      duration: 'Mar 2018 - Dec 2019',
      description: 'Developed and maintained multiple client websites. Integrated payment gateways and implemented responsive designs, increasing mobile traffic by 25%.',
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Dynamics',
      duration: 'Jun 2016 - Feb 2018',
      description: 'Assisted in front-end development using HTML, CSS, and JavaScript. Collaborated with the design team to implement UI/UX improvements.',
    },
  ]

  return (
    <section id="experience" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold text-center">Work Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((job, index) => (
            <motion.div
              key={index}
              className="mb-8 bg-gray-50 p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-gray-600 mb-2">{job.company} | {job.duration}</p>
              <p className="text-gray-700">{job.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EducationSection() {
  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'Tech University',
      year: '2016',
    },
    {
      degree: 'Bachelor of Science in Software Engineering',
      school: 'State University',
      year: '2014',
    },
  ]

  const certifications = [
    'AWS Certified Developer - Associate',
    'MongoDB Certified Developer',
    'Google Cloud Professional Developer',
  ]

  return (
    <section id="education" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold text-center">Education & Certifications</h2>
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="font-medium">{edu.degree}</h4>
                <p className="text-gray-600">{edu.school}, {edu.year}</p>
              </motion.div>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <ul className="list-disc list-inside text-gray-700">
              {certifications.map((cert, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {cert}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  const technicalSkills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 70 },
  ]

  const softSkills = ['Communication', 'Teamwork', 'Problem Solving', 'Adaptability', 'Time Management']

  return (
    <section id="skills" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold text-center">Skills & Tools</h2>
        <div className="max-w-3xl mx-auto">
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">Technical Skills</h3>
            {technicalSkills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{skill.name}</span>
                  <span>{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <motion.div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  
  )
}

function PortfolioSection() {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Redux'],
      image: '/placeholder.svg?height=200&width=300',
      link: 'https://github.com/johndoe/ecommerce-platform',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates.',
      techStack: ['Vue.js', 'Firebase', 'Vuex'],
      image: '/placeholder.svg?height=200&width=300',
      link: 'https://github.com/johndoe/task-management-app',
    },
    {
      title: 'Weather Forecast Dashboard',
      description: 'An interactive weather dashboard with data visualization.',
      techStack: ['React', 'D3.js', 'OpenWeather API'],
      image: '/placeholder.svg?height=200&width=300',
      link: 'https://github.com/johndoe/weather-dashboard',
    },
  ]

  return (
    <section id="portfolio" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold text-center">Portfolio</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "John is an exceptional developer with a keen eye for detail. His ability to solve complex problems is truly impressive.",
      author: "Sarah Johnson",
      title: "CTO, Tech Innovators Inc.",
    },
    {
      quote: "Working with John was a pleasure. He consistently delivered high-quality code and was always willing to go the extra mile.",
      author: "Michael Chen",
      title: "Project Manager, WebSolutions Co.",
    },
    {
      quote: "John's expertise in full-stack development significantly improved our project's performance and user experience.",
      author: "Emily Rodriguez",
      title: "Lead Developer, StartUp Dynamics",
    },
  ]

  return (
    <section id="testimonials" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold text-center">Testimonials</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-gray-600 mb-4">&quot;{testimonial.quote}&quot;</p>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold text-center">Contact Me</h2>
        <div className="max-w-3xl mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <Input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <Input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <Textarea id="message" name="message" rows={4} required />
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">john.doe@example.com</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}