import React from 'react';
import { FaCss3Alt, FaCube, FaAsterisk, FaLaptopCode, FaMobileAlt, FaCloud } from 'react-icons/fa';
import AppHeader from '../../Component/appHeader/AppHeader';
import Footer from '../../Component/footer/Footer';

const Services = () => {
  const services = [
    
    {
      title: 'Refreshing Design',
      description: 'Clean and creative UI that captures user attention and improves experience.',
      icon: <FaAsterisk className="text-5xl text-blue-600" />,
    },
    {
      title: 'Based on Tailwind CSS',
      description: 'Modern utility-first styling for faster and scalable development.',
      icon: <FaCss3Alt className="text-5xl text-blue-600" />,
    },
    {
      title: '300+ Components',
      description: 'Reusable and consistent components for faster app building.',
      icon: <FaCube className="text-5xl text-blue-600" />,
    },
    {
      title: 'Responsive Web Apps',
      description: 'Build mobile-friendly and fully responsive applications.',
      icon: <FaLaptopCode className="text-5xl text-blue-600" />,
    },
    {
      title: 'Cross-Platform UI',
      description: 'Seamless UI across mobile, tablet, and desktop screens.',
      icon: <FaMobileAlt className="text-5xl text-blue-600" />,
    },
    {
      title: 'Cloud Integration',
      description: 'Easily deploy, manage and scale your apps on the cloud.',
      icon: <FaCloud className="text-5xl text-blue-600" />,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      <AppHeader headerTitle={'Our Services'} />

      <div className="text-center px-4 sm:px-0 mt-16">
        <p className="text-orange-600 font-semibold uppercase">Our Services</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">What We Offer</h2>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto text-sm sm:text-base">
          We offer a variety of modern tech solutions tailored to your project needs.
        </p>
      </div>

      <div className="grid grid-cols-1 my-16 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-10 mt-16 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white  p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 text-center transition-all duration-200"
          >
            <div className="flex justify-center mb-5">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>

      <Footer/>
    </div>
  );
};

export default Services;
