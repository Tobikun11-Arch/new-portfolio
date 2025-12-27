const specializations = [
  {
    title: "Responsive UI",
    description:
      "Creating interfaces that adapt seamlessly across all devices and screen sizes.",
  },
  {
    title: "Ethical Branding",
    description:
      "Building authentic brand identities that resonate with your audience and values.",
  },
  {
    title: "Documentation & Transparency",
    description:
      "Comprehensive documentation ensuring maintainability and clear communication.",
  },
  {
    title: "Freelance-ready Prototypes",
    description:
      "Delivering production-ready prototypes that can scale with your business needs.",
  },
];

export default function Specializations() {
  return (
    <section className="py-24 lg:py-32 bg-white text-black">
      <div className="px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16 gap-8">
          <div className="flex-1">
            <div className="w-16 h-1 bg-[#FF6B35] mb-4"></div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">
              What I Specialize In
            </h2>
          </div>
          <div className="flex-1 lg:max-w-xl">
            <p className="text-lg text-black/70">
              Focused expertise in key areas that drive successful web projects
              and digital experiences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {specializations.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-black/5 rounded-lg hover:bg-black/10 transition-all duration-300 border border-black/10"
            >
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-black/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

