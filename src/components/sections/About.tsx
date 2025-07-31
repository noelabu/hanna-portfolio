import Link from "next/link";
import { ScrollFadeInSection } from "@/components/ui/ScrollFadeInSection";

const experiences = [
  {
    title: "Senior Accountant",
    company: "Freelance Accounting Services", 
    dates: "2023 – Present",
    location: "Remote",
    description: "Providing comprehensive accounting services to diverse clients, including bookkeeping, financial reporting, tax preparation, and business advisory. Managing portfolios for small businesses and startups."
  },
  {
    title: "Accountant II",
    company: "Thompson & Associates CPA",
    dates: "2020 – 2023",
    location: "New York, NY", 
    description: "Managed financial reporting for portfolio of 20+ clients. Prepared corporate tax returns, conducted financial audits, and implemented cost-saving strategies resulting in average 15% reduction in tax liabilities."
  },
  {
    title: "Staff Accountant",
    company: "Global Finance Solutions",
    dates: "2018 – 2020",
    location: "Chicago, IL",
    description: "Handled accounts payable/receivable, monthly reconciliations, and financial statement preparation. Assisted with year-end audits and maintained general ledger accuracy."
  },
  {
    title: "Junior Accountant",
    company: "Regional Accounting Firm",
    dates: "2016 – 2018",
    location: "Boston, MA",
    description: "Supported senior accountants with bookkeeping, data entry, and tax return preparation. Gained experience in QuickBooks, Excel modeling, and financial analysis."
  },
];

const skills = [
  { category: "Financial Management", items: ["Financial Reporting", "Tax Preparation", "Budgeting & Forecasting", "Audit Procedures", "Cash Flow Management", "Financial Analysis", "Risk Assessment"] },
  { category: "Compliance & Regulations", items: ["GAAP", "Tax Law Compliance", "SOX Compliance", "Internal Controls", "Financial Auditing", "Regulatory Reporting", "Ethics Standards"] },
  { category: "Tools & Software", items: ["QuickBooks", "Excel Advanced", "SAP", "Sage", "TaxSlayer Pro", "Xero", "Power BI"] },
];

const education = [
  {
    degree: "Master of Business Administration - Accounting",
    school: "University of Chicago Booth School",
    dates: "2014 – 2016",
    location: "Chicago, IL",
    honors: "Beta Gamma Sigma Honor Society"
  },
  {
    degree: "Bachelor of Science - Accounting",
    school: "Boston University",
    dates: "2011 – 2014",
    location: "Boston, MA",
    honors: "Magna Cum Laude, Dean's List"
  }
];

const awards = [
  {
    title: "CPA Certification",
    organization: "AICPA",
    year: "2017",
    category: "Professional Certification"
  },
  {
    title: "Excellence in Financial Reporting",
    organization: "State CPA Society",
    year: "2021",
    category: "Professional Achievement"
  },
  {
    title: "QuickBooks ProAdvisor",
    organization: "Intuit",
    year: "2020",
    category: "Advanced Certification"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-light-gray">
      <ScrollFadeInSection>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-center text-primary-pink text-[48px] font-bold leading-tight mb-4">
            Resume
          </h2>
          <p className="text-center text-medium-gray text-lg mb-16 max-w-2xl mx-auto">
            Accountant • Professional Experience
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              {/* Professional Summary */}
              <section>
                <h3 className="text-primary-orange text-[28px] font-bold mb-6 border-b-2 border-primary-orange pb-2">
                  Professional Summary
                </h3>
                <div className="text-dark-gray text-lg leading-relaxed space-y-4">
                  <p>
                    Dedicated Accountant with extensive experience in financial management, tax preparation, 
                    and regulatory compliance. Specialized in providing comprehensive accounting services to small 
                    and medium-sized businesses, ensuring accurate financial reporting and strategic financial planning.
                  </p>
                  <p>
                    Expertise spans financial analysis, budgeting, auditing, and implementing efficient accounting 
                    systems that drive business growth while maintaining strict compliance with accounting standards 
                    and regulations.
                  </p>
                </div>
              </section>

              {/* Experience Section */}
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

              {/* Education Section */}
              <section>
                <h3 className="text-primary-orange text-[28px] font-bold mb-6 border-b-2 border-primary-orange pb-2">
                  Education
                </h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-primary-orange pl-6">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                        <div>
                          <h4 className="text-xl text-dark-gray font-bold">{edu.degree}</h4>
                          <h5 className="text-primary-orange font-semibold text-lg">{edu.school}</h5>
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
            </div>

            {/* Sidebar - Skills & Awards */}
            <div className="space-y-12">
              {/* Skills */}
              <section>
                <h3 className="text-primary-pink text-[28px] font-bold mb-6 border-b-2 border-primary-pink pb-2">
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
                            className="inline-block px-3 py-1 bg-primary-orange/10 text-dark-gray text-sm rounded-full border border-primary-orange/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Awards */}
              <section>
                <h3 className="text-primary-pink text-[28px] font-bold mb-6 border-b-2 border-primary-pink pb-2">
                  Awards & Recognition
                </h3>
                <div className="space-y-4">
                  {awards.map((award, index) => (
                    <div key={index} className="border border-primary-orange/20 rounded-lg p-4 bg-white/50">
                      <h4 className="text-dark-gray font-bold text-lg">{award.title}</h4>
                      <p className="text-primary-orange font-semibold">{award.organization}</p>
                      <div className="text-medium-gray text-sm">
                        <span>{award.year}</span> • <span>{award.category}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Contact */}
              <section>
                <h3 className="text-primary-pink text-[28px] font-bold mb-6 border-b-2 border-primary-pink pb-2">
                  Let's Connect
                </h3>
                <div className="space-y-3">
                  <Link
                    href="mailto:hanna.sauquillo@email.com"
                    className="block text-dark-gray hover:text-primary-orange transition-colors"
                  >
                    hanna.sauquillo@email.com
                  </Link>
                  <Link
                    href="#contact"
                    className="block text-primary-orange font-semibold hover:text-primary-pink transition-colors"
                  >
                    Message Me
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </ScrollFadeInSection>
    </section>
  );
};

export default About;