import React from 'react';
import Image from 'next/image';
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
    href: '/resume.pdf',
    isExternal: true,
  },
];

const Contact = () => {
  return (
    <section id="contacts" className="bg-white py-32 lg:py-40">
      <ScrollFadeInSection>
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2 className="text-[32px] font-bold text-primary-pink">Let's Connect</h2>
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
            <div className="order-1 lg:order-2">
              <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                <Image
                  src="/portfolio-image.jpeg"
                  alt="Hanna Louisa Sauquillo"
                  width={600}
                  height={800}
                  className="rounded-lg shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </ScrollFadeInSection>
    </section>
  );
};

export default Contact;