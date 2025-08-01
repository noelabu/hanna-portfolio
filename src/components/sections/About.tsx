
import { ScrollFadeInSection } from "@/components/ui/ScrollFadeInSection";
import Image from "next/image";

const experiences = [
  {
    title: "Adscale Admin",
    company: "Remote", 
    dates: "Present",
    location: "Remote",
    description: "Performs admin and financial coordination for e-commerce advertising. Handles reporting, scheduling, and customer follow-up. Supports digital operations and database upkeep."
  },
  {
    title: "Junior Accounting Assistant (OJT)",
    company: "Office of the City Councilor, Las Piñas",
    dates: "2024",
    location: "Las Piñas City", 
    description: "Supported accounting functions including data entry, document management, and report preparation. Assisted with financial reporting and compliance tracking. Collaborated with administrative team on audit preparation and budgeting tasks."
  },
];

const skills = [
  { category: "Core Competencies", items: ["Communication", "Accounting", "Marketing & Finance", "Technical & Administration"] },
  { category: "Software & Tools", items: ["Microsoft Excel", "QuickBooks", "Xero", "Microsoft 365", "Digital Marketing Tools"] },
  { category: "Professional Skills", items: ["Bookkeeping", "Financial Reporting", "Budget Analysis", "Data Entry", "Document Management", "Compliance Tracking"] },
];

const education = [
  {
    degree: "Bachelor of Science in Accountancy",
    school: "Lyceum of Alabang",
    dates: "Graduated: July 30, 2025",
    location: "Alabang",
    honors: ""
  },
  {
    degree: "Bachelor of Science in Accountancy",
    school: "Emilio Aguinaldo College – Manila",
    dates: "2021 – 2024",
    location: "Manila",
    honors: "Academic Scholar • JPIA VP for Finance (2023–2024) • JPIA VP for Information and Publicity (2022–2023)"
  },
  {
    degree: "Senior High School",
    school: "Saint Marks Institute Main",
    dates: "2021",
    location: "",
    honors: "Valedictorian • With High Honors • Full Scholarship"
  },
  {
    degree: "Junior High School",
    school: "Saint Francis of Assisi College",
    dates: "2019",
    location: "",
    honors: "With Honors • Full Scholarship"
  },
  {
    degree: "Elementary",
    school: "Almanza Elementary School",
    dates: "2015",
    location: "",
    honors: "With Honors • Regional Dish Gardening Champion • Division Balagtasan Runner-Up • 9th Parol Festival Runner-Up"
  }
];

const awards = [
  {
    title: "Microsoft Office Specialist (Excel Expert Microsoft 365 Apps)",
    organization: "Microsoft",
    year: "2025",
    category: "Microsoft Office Specialist",
    image: "/certificates/microsoft.jpeg"
  },
  {
    title: "Xero Advisor Certified",
    organization: "Xero",
    year: "2025",
    category: "Professional Certification",
    image: "/certificates/xero.jpeg"
  },
  {
    title: "Intuit Bookkeep Certification",
    organization: "Intuit",
    year: "2025",
    category: "Online Certification",
    image: "/certificates/bookkeeper.jpeg"
  },
  {
    title: "Quickbooks ONline Accountant Certification",
    organization: "Intuit",
    year: "2025",
    category: "Online Certification",
    image: "/certificates/quickbooks.jpeg"
  },
  {
    title: "Digital Body Language",
    organization: "LinkedIn Learning",
    year: "2024",
    category: "Professional Development",
    url: "https://www.linkedin.com/learning/certificates/23b06a9d68fd02b0a0bcd921da2472eef345265a8545b2eb24e819d415bbbad6"
  },
  {
    title: "Learning Microsoft 365 Copilot",
    organization: "LinkedIn Learning",
    year: "2023",
    category: "Professional Development",
    url: "https://www.linkedin.com/learning/certificates/317d52a3d9174bb3e2d5dda39d8f52218d3c37b0b952aa7b254806c868668a85"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-light-gray">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <ScrollFadeInSection>
          <h2 className="text-center text-primary-pink text-[48px] font-bold leading-tight mb-4">
            About Me
          </h2>
          </ScrollFadeInSection>

          
          <div className="space-y-16 max-w-4xl mx-auto">
              {/* Professional Summary */}
              <ScrollFadeInSection>
              <section>
                <div className="text-dark-gray text-lg leading-relaxed space-y-4">
                  <p>
                    An Accountant and Licensed Financial Advisor with expertise in financial management, compliance, and strategic financial planning. Proven track record in government accounting through comprehensive training at the Office of the City Councilor in Las Piñas, combined with current experience in digital business financial coordination. Committed to delivering accurate financial solutions and helping clients achieve their business objectives through sound financial practices.
                  </p>
                </div>
              </section>
              </ScrollFadeInSection>

              {/* Experience Section */}
              <ScrollFadeInSection>
              <section>
                <h3 className="text-primary-orange text-[28px] font-bold mb-6 border-b-2 border-primary-orange pb-2">
                  Experience
                </h3>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div key={index} className="border-l-4 border-primary-pink pl-6 pb-6 last:pb-0">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                        <div>
                          <h4 className="text-xl text-dark-gray font-bold">{exp.title}</h4>
                          <h5 className="text-primary-pink font-semibold text-lg">{exp.company}</h5>
                        </div>
                        <div className="text-right mt-2 sm:mt-0">
                          <span className="text-medium-gray text-sm">{exp.dates}</span>
                          <br />
                          <span className="text-medium-gray text-sm italic">{exp.location}</span>
                        </div>
                      </div>
                      <ul className="space-y-2 mt-4 text-dark-gray text-base leading-relaxed">
                        {exp.description.split('. ').filter(sentence => sentence.trim()).map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-primary-pink text-sm mr-2 mt-1">•</span>
                            <span>{item}.</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>
              </ScrollFadeInSection>

              {/* Education Section */}
              <ScrollFadeInSection>
              <section>
                <h3 className="text-primary-orange text-[28px] font-bold mb-6 border-b-2 border-primary-orange pb-2">
                  Education
                </h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-primary-pink pl-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                        <div>
                          <h4 className="text-xl text-dark-gray font-bold">{edu.degree}</h4>
                          <h5 className="text-primary-pink font-semibold text-lg">{edu.school}</h5>
                          <p className="text-medium-gray text-sm italic mt-1">{edu.honors}</p>
                        </div>
                        <div className="text-right mt-2 sm:mt-0">
                          <span className="text-medium-gray text-sm">{edu.dates}</span>
                          <br />
                          <span className="text-medium-gray text-sm italic">{edu.location}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              </ScrollFadeInSection>
              {/* Skills */}
              <ScrollFadeInSection>
              <section>
                <h3 className="text-primary-orange text-[28px] font-bold mb-6 border-b-2 border-primary-orange pb-2">
                  Skills & Expertise
                </h3>
                <div className="space-y-6">
                  {skills.map((skillGroup, index) => (
                    <div key={index}>
                      <h4 className="text-dark-gray font-bold text-lg mb-3">{skillGroup.category}</h4>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="inline-block px-3 py-1 bg-primary-pink/10 text-dark-gray text-sm rounded-full border border-primary-pink/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              </ScrollFadeInSection>

              {/* Awards */}
              <ScrollFadeInSection>
              <section>
                <h3 className="text-primary-orange text-[28px] font-bold mb-6 border-b-2 border-primary-orange pb-2">
                  Certificates
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {awards.map((award, index) => (
                    <div key={index} className="border border-primary-pink/20 rounded-lg overflow-hidden bg-white/50 hover:shadow-lg transition-shadow">
                      {award.image && (
                        <div className="relative h-48 w-full bg-gray-100">
                          <Image
                            src={award.image}
                            alt={award.title}
                            fill
                            className="object-contain p-4"
                          />
                        </div>
                      )}
                      <div className="p-4">
                        <h4 className="text-dark-gray font-bold text-lg">{award.title}</h4>
                        <p className="text-primary-pink font-semibold">{award.organization}</p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-medium-gray text-sm">{award.year}</span>
                          {award.url && (
                            <a 
                              href={award.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary-pink text-sm font-medium hover:text-primary-orange transition-colors"
                            >
                              View Certificate →
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              </ScrollFadeInSection>

          </div>
        </div>
    </section>
  );
};

export default About;