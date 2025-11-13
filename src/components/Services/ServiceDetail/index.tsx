import React from 'react'
import Image from 'next/image'

interface ServiceDetailProps {
  service: {
    icon: string
    title: string
    slug: string
    description: string
  }
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  // Dummy detailed data for each service
  const serviceDetails: Record<string, {
    overview: string
    features: string[]
    benefits: string[]
    process: string[]
  }> = {
    'ux-product-design': {
      overview: 'Our UX & Product Design service focuses on creating intuitive, user-centered experiences that drive engagement and conversion. We combine research, strategy, and design to deliver products that users love.',
      features: [
        'User Research & Persona Development',
        'Wireframing & Prototyping',
        'User Journey Mapping',
        'Usability Testing',
        'Design System Creation',
        'Interactive Prototypes'
      ],
      benefits: [
        'Increased user satisfaction and retention',
        'Reduced development costs through early validation',
        'Improved conversion rates',
        'Enhanced brand perception',
        'Data-driven design decisions'
      ],
      process: [
        'Discovery & Research',
        'Strategy & Planning',
        'Design & Prototyping',
        'Testing & Iteration',
        'Handoff & Documentation'
      ]
    },
    'performance-optimization': {
      overview: 'Performance Optimization ensures your applications run smoothly, load quickly, and provide an exceptional user experience. We identify bottlenecks and implement solutions to maximize efficiency.',
      features: [
        'Code Optimization & Minification',
        'Image & Asset Optimization',
        'Caching Strategies',
        'Database Query Optimization',
        'CDN Integration',
        'Performance Monitoring'
      ],
      benefits: [
        'Faster page load times',
        'Improved SEO rankings',
        'Better user experience',
        'Reduced server costs',
        'Higher conversion rates'
      ],
      process: [
        'Performance Audit',
        'Bottleneck Identification',
        'Optimization Implementation',
        'Testing & Validation',
        'Monitoring & Maintenance'
      ]
    },
    'ux-products-design': {
      overview: 'UX & Products Design service delivers comprehensive design solutions for digital products. We create cohesive experiences across all touchpoints, ensuring consistency and usability.',
      features: [
        'Product Strategy & Roadmap',
        'Multi-platform Design',
        'Design System Development',
        'Accessibility Compliance',
        'Responsive Design',
        'Design-to-Development Handoff'
      ],
      benefits: [
        'Consistent brand experience',
        'Faster time to market',
        'Scalable design solutions',
        'Accessible to all users',
        'Reduced design debt'
      ],
      process: [
        'Product Discovery',
        'Design Exploration',
        'Design System Setup',
        'Design Implementation',
        'Quality Assurance'
      ]
    }
  }

  const details = serviceDetails[service.slug] || {
    overview: service.description,
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
    process: ['Step 1', 'Step 2', 'Step 3']
  }

  return (
    <section className='md:py-24 py-16 dark:bg-darkmode bg-section dark:bg-darklight'>
      <div className='container mx-auto max-w-6xl px-4'>
        {/* Service Header */}
        <div className='flex flex-col md:flex-row items-center md:items-start gap-8 mb-16'>
          <div className='flex-shrink-0'>
            <Image
              src={service.icon}
              alt={service.title}
              width={120}
              height={120}
              className='w-30 h-30'
            />
          </div>
          <div className='flex-1 text-center md:text-left'>
            <h1 className='text-4xl md:text-5xl font-bold text-midnight_text dark:text-white mb-4'>
              {service.title}
            </h1>
            <p className='text-xl text-grey dark:text-white/70'>
              {service.description}
            </p>
          </div>
        </div>

        {/* Overview Section */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-midnight_text dark:text-white mb-6'>
            Overview
          </h2>
          <p className='text-lg text-secondary dark:text-white/70 leading-relaxed max-w-4xl'>
            {details.overview}
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-12 mb-16'>
          {/* Features Section */}
          <div className='bg-white dark:bg-darkmode p-8 rounded-lg shadow-service'>
            <h2 className='text-2xl font-bold text-midnight_text dark:text-white mb-6'>
              Key Features
            </h2>
            <ul className='space-y-4'>
              {details.features.map((feature, index) => (
                <li key={index} className='flex items-start gap-3'>
                  <span className='w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0'></span>
                  <span className='text-base text-secondary dark:text-white/70'>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits Section */}
          <div className='bg-white dark:bg-darkmode p-8 rounded-lg shadow-service'>
            <h2 className='text-2xl font-bold text-midnight_text dark:text-white mb-6'>
              Benefits
            </h2>
            <ul className='space-y-4'>
              {details.benefits.map((benefit, index) => (
                <li key={index} className='flex items-start gap-3'>
                  <span className='w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0'></span>
                  <span className='text-base text-secondary dark:text-white/70'>
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process Section */}
        <div className='bg-white dark:bg-darkmode p-8 rounded-lg shadow-service'>
          <h2 className='text-2xl font-bold text-midnight_text dark:text-white mb-6'>
            Our Process
          </h2>
          <div className='grid md:grid-cols-5 gap-6'>
            {details.process.map((step, index) => (
              <div key={index} className='text-center'>
                <div className='w-16 h-16 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center mx-auto mb-4'>
                  <span className='text-2xl font-bold text-primary'>
                    {index + 1}
                  </span>
                </div>
                <p className='text-base font-medium text-midnight_text dark:text-white'>
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className='mt-16 text-center bg-primary/5 dark:bg-primary/10 p-8 rounded-lg'>
          <h2 className='text-2xl font-bold text-midnight_text dark:text-white mb-4'>
            Ready to Get Started?
          </h2>
          <p className='text-lg text-secondary dark:text-white/70 mb-6'>
            Let's discuss how we can help you achieve your goals with our {service.title} service.
          </p>
          <a
            href='/contact'
            className='inline-block px-8 py-3 bg-primary text-white rounded-md hover:bg-blue-700 transition duration-300 font-medium'>
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServiceDetail

