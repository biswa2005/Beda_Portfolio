import { motion } from "motion/react";
import { ExternalLink, Briefcase, Users, FileText, Rocket } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import pragatiImage from "figma:asset/3cb1e2bee31d11b13ba4b74787a645aea5fcdbb0.png";
import sanjeevaniImage from "figma:asset/2286c74dd8306eb7dca8d4f5a3d01970d2ec35f3.png";
import beyondPoweredImage from "figma:asset/0cda6dfd74b4168f2caf7f9109f61481ceba7f18.png";
import trinetraImage from "figma:asset/8dc8072048bb3f90297fa1444268559bab2cd961.png";

/* ---------- TYPES ---------- */

type Project = {
  title: string;
  description: string;
  image: string;
  tools: string[];
  role: string;
  gradient: string;
  link?: string;
  badge?: string;
  inProgress?: boolean;
};

type ProjectCategory = {
  id: string;
  title: string;
  icon: any;
  gradient: string;
  projects: Project[];
};

export function Projects() {
  const projectCategories: ProjectCategory[] = [
    {
      id: "freelance",
      title: "Freelance Projects",
      icon: Briefcase,
      gradient: "from-cyan-500 to-blue-500",
      projects: [
        {
          title: "Pragati Coaching Centre",
          description:
            "Complete UI design and full frontend development for an educational coaching center. Features modern design, responsive layout, and smooth animations.",
          image: pragatiImage,
          tools: ["Figma", "React.js", "Tailwind CSS", "Motion"],
          role: "UI/UX Design • Frontend Development",
          gradient: "from-cyan-500 to-blue-500",
          link: "https://www.pragatilive.com/",
        },
        {
          title: "Freelance 3D Design Projects",
          description:
            "Collection of 3D design work including product visualization, branding assets, and interactive web elements for various clients.",
          image:
            "https://images.unsplash.com/photo-1723447772874-e2cf86096ec4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          tools: ["Spline", "3D Modeling", "Web Integration"],
          role: "3D Design • Web Integration",
          gradient: "from-yellow-500 to-orange-500",
        },
        {
          title: "Manab Sewa Charitable Trust",
          description:
            "Professional website design and development for a charitable organization.",
          image:
            "https://images.unsplash.com/photo-1559027615-cd4628902d4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          tools: ["Figma", "React.js", "Tailwind CSS"],
          role: "UI/UX Design • Frontend Development",
          gradient: "from-green-500 to-emerald-500",
        },
      ],
    },
    {
      id: "teamwork",
      title: "Teamwork Projects",
      icon: Users,
      gradient: "from-purple-500 to-pink-500",
      projects: [
        {
          title: "Sanjeevani",
          description:
            "AI-powered healthcare chatbot providing medical information and assistance.",
          image: sanjeevaniImage,
          tools: ["AI/ML", "NLP", "Healthcare APIs"],
          role: "AI Development • UX Design",
          gradient: "from-green-500 to-teal-500",
          link: "https://sanjeevani-five.vercel.app/",
        },
        {
          title: "Trinetra",
          description: "AI assistant designed for the visually impaired.",
          image: trinetraImage,
          tools: ["Computer Vision", "AI/ML", "Voice API"],
          role: "AI Development • Product Design",
          gradient: "from-purple-500 to-pink-500",
        },
        {
          title: "AI Career Guidance Chatbot",
          description:
            "Intelligent chatbot providing personalized career guidance.",
          image:
            "https://images.unsplash.com/photo-1658806283210-6d7330062704?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          tools: ["AI/ML", "Natural Language Processing"],
          role: "AI Development • UX Design",
          gradient: "from-orange-500 to-red-500",
        },
      ],
    },
    {
      id: "research",
      title: "Research Works",
      icon: FileText,
      gradient: "from-orange-500 to-red-500",
      projects: [
        {
          title: "Face Mask Detection System Research",
          description:
            'Research paper on "Artificial Vision in a Masked World".',
          image:
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
          tools: ["Computer Vision", "Deep Learning", "Research"],
          role: "Research • AI Development",
          gradient: "from-indigo-500 to-purple-500",
          badge: "Published",
        },
      ],
    },
    {
      id: "startup",
      title: "Startup Project",
      icon: Rocket,
      gradient: "from-orange-500 to-pink-500",
      projects: [
        {
          title: "BEYOND POWERED",
          description: "Digital services & consultancy startup platform.",
          image: beyondPoweredImage,
          tools: ["Business", "Branding", "Web Development"],
          role: "Founder • Full Development",
          gradient: "from-indigo-500 to-purple-500",
          inProgress: true,
        },
      ],
    },
  ];

  return (
    <section id="projects" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-4 bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </motion.div>

        <div className="space-y-20">
          {projectCategories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <div key={category.id}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  className="mb-8 flex items-center space-x-4"
                >
                  <CategoryIcon size={24} />
                  <h3 className="text-3xl">{category.title}</h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
                    >
                      {project.inProgress && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-orange-500 rounded-full text-xs text-white">
                          In Progress
                        </div>
                      )}

                      {project.badge && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 rounded-full text-xs text-white">
                          {project.badge}
                        </div>
                      )}

                      <div className="h-56 overflow-hidden">
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl text-white mb-2">
                          {project.title}
                        </h3>

                        <p className="text-gray-400 text-sm mb-4">
                          {project.description}
                        </p>

                        <div className="mb-4 text-sm text-cyan-400">
                          {project.role}
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {project.tools.map((tool, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full text-gray-300"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>

                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center mt-4 text-cyan-400"
                          >
                            <ExternalLink size={16} className="mr-2" />
                            Visit
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
