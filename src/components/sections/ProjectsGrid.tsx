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
    title: "City Government Accounting Support",
    description: "On-the-Job Training experience with financial reporting and compliance",
    categories: ["Government Accounting"],
    imagePlaceholder: true,
  },
  {
    title: "E-commerce Financial Coordination",
    description: "Admin and financial support for digital advertising operations",
    categories: ["Digital Business", "Financial Admin"],
    imagePlaceholder: true,
  },
  {
    title: "JPIA Financial Leadership",
    description: "VP for Finance managing student organization budget and activities",
    categories: ["Student Leadership"],
    imagePlaceholder: true,
  },
  {
    title: "Bookkeeping Certification Project",
    description: "TESDA NCII & NCIII certification with practical applications",
    categories: ["Professional Development"],
    imagePlaceholder: true,
  },
  {
    title: "Excel Financial Modeling",
    description: "Microsoft Office Specialist certification focused on accounting applications",
    categories: ["Technical Skills"],
    imagePlaceholder: true,
  },
  {
    title: "QuickBooks & Xero Implementation",
    description: "Hands-on experience with cloud accounting software",
    categories: ["Accounting Software"],
    imagePlaceholder: true,
  },
  {
    title: "Academic Excellence Projects",
    description: "Multiple Dean's List recognitions and scholarship achievements",
    categories: ["Academic Achievement"],
    imagePlaceholder: true,
  },
  {
    title: "Community Leadership",
    description: "Regional competitions and student organization management",
    categories: ["Leadership"],
    imagePlaceholder: true,
  },
  {
    title: "Digital Finance Training",
    description: "LinkedIn Learning certifications in digital tools and AI",
    categories: ["Professional Development"],
    imagePlaceholder: true,
  },
];

const filters = ["All", "Student Leadership", "Professional Development", "Technical Skills", "Academic Achievement"];

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