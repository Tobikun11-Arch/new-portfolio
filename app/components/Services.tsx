import Link from "next/link";
import { Code, Search, Wrench } from "lucide-react";

const services = [
  {
    title: "Fullstack Web Development",
    description:
      "End-to-end web solutions from frontend to backend, ensuring seamless integration and optimal performance.",
    icon: <Code className="w-8 h-8" />,
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your search engine rankings and visibility with data-driven SEO strategies and technical optimization.",
    icon: <Search className="w-8 h-8" />,
  },
  {
    title: "Technical Troubleshooting & Optimization",
    description:
      "Identify and resolve performance issues, optimize code, and enhance your application&apos;s efficiency.",
    icon: <Wrench className="w-8 h-8" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white text-gray-900">
      <div className="px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16 gap-8">
          <div className="flex-1">
            <div className="w-16 h-1 bg-[#FF6B35] mb-4"></div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">
              What I Can Help You With
            </h2>
          </div>
          <div className="flex-1 lg:max-w-xl">
            <p className="text-lg text-gray-600 mb-6">
              Comprehensive web development services tailored to your business
              needs, from concept to deployment.
            </p>
            <Link
              href="#contact"
              className="inline-block px-6 py-3 bg-[#FF6B35] hover:bg-[#FF8555] text-white font-medium rounded-full transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-300 border border-gray-200"
            >
              <div className="text-[#FF6B35] mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

