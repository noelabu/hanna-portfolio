'use client';

import { useState } from 'react';
import { ScrollFadeInSection } from '@/components/ui/ScrollFadeInSection';

type Project = {
  title: string;
  description: string;
  categories: string[];
  imagePlaceholder: boolean;
};

const projectsData: Project[] = [
  {
    title: "Tech Startup Financial Restructuring",
    description: "Complete financial overhaul resulting in 40% cost reduction",
    categories: ["Financial Analysis"],
    imagePlaceholder: true,
  },
  {
    title: "Multi-State Tax Optimization",
    description: "Strategic tax planning across 5 states saving $2M annually",
    categories: ["Tax Services", "Business Advisory"],
    imagePlaceholder: true,
  },
  {
    title: "E-commerce Platform Audit",
    description: "Comprehensive audit identifying revenue leakage points",
    categories: ["Financial Analysis"],
    imagePlaceholder: true,
  },
  {
    title: "Manufacturing Cost Analysis",
    description: "Detailed cost breakdown leading to 25% margin improvement",
    categories: ["Tax Services"],
    imagePlaceholder: true,
  },
  {
    title: "Non-Profit Financial Systems",
    description: "Implemented new accounting systems for transparency",
    categories: ["Tax Services", "Business Advisory"],
    imagePlaceholder: true,
  },
  {
    title: "Real Estate Portfolio Management",
    description: "Financial oversight for $50M property portfolio",
    categories: ["Tax Services"],
    imagePlaceholder: true,
  },
  {
    title: "Healthcare Practice Consolidation",
    description: "Merger accounting for 3 medical practices",
    categories: ["Tax Services"],
    imagePlaceholder: true,
  },
  {
    title: "Retail Chain Budget Forecasting",
    description: "5-year financial projections and scenario planning",
    categories: ["Tax Services", "Business Advisory"],
    imagePlaceholder: true,
  },
  {
    title: "Small Business Tax Strategy",
    description: "Customized tax strategies for 30+ small businesses",
    categories: ["Tax Services", "Financial Analysis"],
    imagePlaceholder: true,
  },
];

const filters = ["All", "Tax Services", "Financial Analysis", "Business Advisory"];

const ProjectCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white shadow-md group cursor-pointer">
    <div className="bg-zinc-200 aspect-square w-full">
      {/* Image placeholder */}
    </div>
    <div className="p-6">
      <h4 className="font-bold text-dark-gray text-lg mb-2">{title}</h4>
      <p className="text-medium-gray text-base leading-snug">{description}</p>
    </div>
  </div>
);

const ProjectsGrid = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projectsData.filter(project =>
    activeFilter === 'All' || project.categories.includes(activeFilter)
  );

  return (
    <section id="work" className="w-full bg-light-gray py-20 lg:py-24">
      <ScrollFadeInSection>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 text-sm font-medium transition-colors duration-300 rounded-full ${
                  activeFilter === filter
                    ? "bg-zinc-200 !text-dark-gray"
                    : "bg-transparent text-medium-gray hover:bg-zinc-100"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} title={project.title} description={project.description} />
            ))}
          </div>
        </div>
      </ScrollFadeInSection>
    </section>
  );
};

export default ProjectsGrid;