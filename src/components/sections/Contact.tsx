import React from 'react';
import { ImageIcon } from 'lucide-react';
import { ScrollFadeInSection } from '@/components/ui/ScrollFadeInSection';

const contactItems = [
  {
    label: 'Call or text:',
    text: '(555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    label: 'Email me:',
    text: 'hanna.sauquillo@email.com',
    href: 'mailto:hanna.sauquillo@email.com',
  },
  {
    label: "Let's connect:",
    text: 'hanna-sauquillo',
    href: 'https://www.linkedin.com/in/hanna-sauquillo/',
    isExternal: true,
  },
  {
    label: 'Grab my CV:',
    text: 'Download',
    href: '#',
    isExternal: true,
  },
];

const Contact = () => {
  return (
    <section id="contacts" className="bg-white py-32 lg:py-40">
      <ScrollFadeInSection>
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-20">
            {/* Left: Image placeholder */}
            <div className="flex justify-center items-center mb-12 lg:mb-0 lg:w-1/2">
              <div className="bg-light-gray flex items-center justify-center shadow-md aspect-square w-40 h-40">
                <ImageIcon className="text-medium-gray w-16 h-16" />
              </div>
            </div>

            {/* Right: Text, heading, and contact */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-[32px] font-bold text-primary-pink">Have a project in mind?</h2>
              <p className="mt-6 text-lg text-medium-gray">
                Let's work together to achieve your
                <br />
                financial goals and business success
              </p>
              <div className="grid grid-cols-1 gap-y-10 mt-14 max-w-md mx-auto lg:mx-0">
                {contactItems.map((item) => (
                  <div key={item.label}>
                    <p className="text-sm text-medium-gray">{item.label}</p>
                    <a
                      href={item.href}
                      target={item.isExternal ? '_blank' : undefined}
                      rel={item.isExternal ? 'noopener noreferrer' : undefined}
                      className="mt-1 inline-block text-lg font-medium text-dark-gray transition-colors duration-300 hover:text-primary-orange"
                    >
                      {item.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ScrollFadeInSection>
    </section>
  );
};

export default Contact;