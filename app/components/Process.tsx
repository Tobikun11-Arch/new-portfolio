const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand client goals",
  },
  {
    number: "02",
    title: "Define",
    description: "Scope and tech stack",
  },
  {
    number: "03",
    title: "Design",
    description: "Wireframes and UI",
  },
  {
    number: "04",
    title: "Develop",
    description: "Code and test",
  },
  {
    number: "05",
    title: "Deliver",
    description: "Launch and document",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-gray-100 text-gray-900">
      <div className="px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-16 gap-8">
          <div className="flex-1">
            <div className="w-16 h-1 bg-[#FF6B35] mb-4"></div>
            <h2 className="text-4xl lg:text-6xl font-bold mb-4">
              My Process, Step by Step
            </h2>
          </div>
          <div className="flex-1 lg:max-w-xl">
            <p className="text-lg text-gray-600">
              A structured approach to every project, ensuring clarity,
              efficiency, and exceptional results from start to finish.
            </p>
          </div>
        </div>

        <div className="space-y-8 lg:space-y-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12 group"
            >
              <div className="flex-shrink-0">
                <div className="text-6xl lg:text-8xl font-bold text-[#FF6B35] opacity-50 group-hover:opacity-100 transition-opacity">
                  {step.number}
                </div>
              </div>
              <div className="flex-1 pt-4">
                <h3 className="text-3xl lg:text-4xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

