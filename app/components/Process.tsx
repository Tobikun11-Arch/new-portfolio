const steps = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand client goals'
  },
  {
    number: '02',
    title: 'Define',
    description: 'Scope and tech stack'
  },
  {
    number: '03',
    title: 'Design',
    description: 'Wireframes and UI'
  },
  {
    number: '04',
    title: 'Develop',
    description: 'Code and test'
  },
  {
    number: '05',
    title: 'Deliver',
    description: 'Launch and document'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-gray-100 text-gray-900">
      <div className="px-6 lg:px-48 w-full">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          <div>
            <span className="text-sm font-semibold tracking-widest text-[#FF6B35] uppercase">
              Step-by-Step
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold mt-3">
              My Process, Step by Step
            </h2>
          </div>

          <p className="text-2xl text-black leading-relaxed w-full">
            A structured approach to every project, ensuring clarity,
            efficiency, and exceptional results from start to finish.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-6 ">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group rounded-2xl px-8 py-10 flex flex-col lg:flex-row lg:items-center gap-8 transition-all hover:bg-orange-500 hover:text-white ${
                step.number === '02' || step.number === '04' ? 'bg-white' : ''
              }`}
            >
              {/* Left number + accent */}
              <div className="flex items-center gap-6 flex-shrink-0">
                <div className="w-1 h-14 bg-[#FF6B35] rounded-full" />
                <span className="text-5xl lg:text-6xl font-bold ">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 grid lg:grid-cols-2 gap-6 items-center ">
                <h3 className="text-2xl lg:text-3xl font-bold">{step.title}</h3>
                <p className="text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
