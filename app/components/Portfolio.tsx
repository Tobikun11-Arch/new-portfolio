import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Building Seamless Restaurant Ordering Systems",
    image: "/projects/startup.jpeg",
    description:
      "A comprehensive ordering platform with real-time updates and seamless user experience",
  },
  {
    title: "Designing Scalable Wholesale Platforms",
    image: "/projects/bags.jpeg",
    description:
      "Enterprise-grade wholesale management system with advanced inventory tracking",
  },
  {
    title: "Recent Work: LinkPoint Portfolio Showcase",
    image: "/projects/gym.jpeg",
    description:
      "Modern portfolio platform showcasing digital services and creative solutions",
  },
  {
    title: "E-Commerce Solutions",
    image: "/projects/shoes.jpeg",
    description:
      "Full-featured e-commerce platform with payment integration and analytics",
  },
  {
    title: "Real Estate Management Platform",
    image: "/projects/real_estate.jpeg",
    description:
      "Comprehensive real estate platform with property listings and management tools",
  },
];

export default function Portfolio() {
  return (
    <section id="works" className="py-24 lg:py-32 bg-white text-gray-900">
      <div className="px-6 lg:px-12">
        <div className="mb-16">
          <div className="w-16 h-1 bg-[#FF6B35] mb-4"></div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            Designing Bold Brands That Leave a Lasting Impression
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Each project is crafted with attention to detail, focusing on
            scalability, performance, and user experience.
          </p>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="relative w-full h-[500px] lg:h-[600px] rounded-lg overflow-hidden group">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>

              <div className="flex-1 w-full">
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                  {project.title}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {project.description}
                </p>
                <Link
                  href="#"
                  className="inline-block px-6 py-3 bg-[#FF6B35] hover:bg-[#FF8555] text-white font-medium rounded-full transition-colors"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

