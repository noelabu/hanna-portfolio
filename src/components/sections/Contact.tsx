import React from 'react';
import { ScrollFadeInSection } from '@/components/ui/ScrollFadeInSection';

const contactItems = [
  {
    label: 'Call or text:',
    text: '0915-406-4564',
    href: 'tel:+639154064564',
  },
  {
    label: 'Email me:',
    text: 'sauquillohannalouisa@gmail.com',
    href: 'mailto:sauquillohannalouisa@gmail.com',
  },
  {
    label: 'Location:',
    text: 'Las Piñas City',
    href: '#',
  },
  {
    label: 'Grab my CV:',
    text: 'Download',
    href: '/Hanna Sauquillo Resume.pdf',
    isExternal: true,
  },
];

const Contact = () => {
  return (
    <section id="contacts" className="bg-white py-32 lg:py-40">
      <ScrollFadeInSection>
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-[32px] font-bold text-primary-pink">Let's Connect</h2>
              <p className="mt-6 text-lg text-medium-gray">
                Let's work together to achieve your
                <br />
                financial goals and business success
              </p>
              <div className="grid grid-cols-1 gap-y-10 mt-14 max-w-md mx-auto">
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
      </ScrollFadeInSection>
    </section>
  );
};

export default Contact;