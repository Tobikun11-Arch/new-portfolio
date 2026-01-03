'use client';

import {
  Code,
  Database,
  FileCode,
  Palette,
  Github,
  Zap,
  Server,
  Layers,
  Coffee,
  Globe,
  Brackets,
  Atom,
  Network,
  Type,
  Bolt,
  Box,
  Terminal,
  Cpu,
  Flame,
  Workflow,
  CheckSquare,
  Gem
} from 'lucide-react';

interface Technology {
  name: string;
  icon: React.ReactNode;
  tooltip: string;
}

const technologies: Technology[] = [
  {
    name: 'Next.js',
    icon: <Zap className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Express.js',
    icon: <Server className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'MongoDB',
    icon: <Database className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Tailwind CSS',
    icon: <Palette className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Figma',
    icon: <FileCode className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'GitHub',
    icon: <Github className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'PostgreSQL',
    icon: <Database className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Vercel',
    icon: <Layers className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Java',
    icon: <Coffee className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'HTML5',
    icon: <Globe className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'CSS3',
    icon: <Palette className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'JavaScript',
    icon: <Brackets className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'React',
    icon: <Atom className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Axios',
    icon: <Network className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'TypeScript',
    icon: <Type className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Vite',
    icon: <Bolt className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Svelte',
    icon: <Box className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Go',
    icon: <Terminal className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Node.js',
    icon: <Cpu className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'NestJS',
    icon: <Layers className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'MySQL',
    icon: <Database className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Firebase',
    icon: <Flame className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'GraphQL',
    icon: <Workflow className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Jira',
    icon: <CheckSquare className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Prisma',
    icon: <Gem className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Next.js',
    icon: <Zap className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Express.js',
    icon: <Server className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'MongoDB',
    icon: <Database className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Tailwind CSS',
    icon: <Palette className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Figma',
    icon: <FileCode className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'GitHub',
    icon: <Github className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'PostgreSQL',
    icon: <Database className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Vercel',
    icon: <Layers className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Java',
    icon: <Coffee className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'HTML5',
    icon: <Globe className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'CSS3',
    icon: <Palette className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'JavaScript',
    icon: <Brackets className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'React',
    icon: <Atom className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Axios',
    icon: <Network className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'TypeScript',
    icon: <Type className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Vite',
    icon: <Bolt className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Svelte',
    icon: <Box className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Go',
    icon: <Terminal className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Node.js',
    icon: <Cpu className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'NestJS',
    icon: <Layers className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'MySQL',
    icon: <Database className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Firebase',
    icon: <Flame className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'GraphQL',
    icon: <Workflow className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Jira',
    icon: <CheckSquare className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  },
  {
    name: 'Prisma',
    icon: <Gem className="w-12 h-12" />,
    tooltip: 'Used in 10+ projects'
  }
];

export default function Technologies() {
  return (
    <section className="py-24 lg:py-32 bg-gray-100 text-gray-900">
      <div className="px-6 lg:px-12">
        <div className="mb-16">
          <div className="w-16 h-1 bg-[#FF6B35] mb-4"></div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-4">
            My Technologies
          </h2>
        </div>

        <div className="overflow-hidden relative">
          <div className="flex animate-scroll">
            {technologies.map((tech, index) => (
              <div
                key={`first-${index}`}
                className="group relative flex flex-col items-center justify-center p-6 rounded-lg transition-all duration-300 cursor-pointer shrink-0 w-[150px] md:w-[180px]"
              >
                <div className="text-gray-700 group-hover:text-[#FF6B35] transition-colors mb-4">
                  {tech.icon}
                </div>
                <p className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                  {tech.name}
                </p>
              </div>
            ))}
            {technologies.map((tech, index) => (
              <div
                key={`second-${index}`}
                className="group relative flex flex-col items-center justify-center p-6 rounded-lg transition-all duration-300 cursor-pointer shrink-0 w-[150px] md:w-[180px]"
              >
                <div className="text-gray-700 group-hover:text-[#FF6B35] transition-colors mb-4">
                  {tech.icon}
                </div>
                <p className="text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
