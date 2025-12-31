import { Lightbulb } from 'lucide-react';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import serviceLighting from '@/assets/service-lighting.jpg';

const features = [
  {
    title: 'Circadian Rhythm Support',
    description: 'Lights that automatically adjust color temperature throughout the day to support your natural sleep-wake cycle.',
  },
  {
    title: 'Scene Automation',
    description: 'Create and save custom lighting scenes for any occasion - dinner parties, movie nights, or relaxation.',
  },
  {
    title: 'Motion-Activated Lighting',
    description: 'Intelligent sensors that detect movement and illuminate pathways, enhancing safety and convenience.',
  },
  {
    title: 'Voice Control Integration',
    description: 'Seamless integration with Alexa, Google Home, and Siri for effortless voice-controlled lighting.',
  },
  {
    title: 'Energy Monitoring',
    description: 'Real-time tracking of energy consumption with automated optimization to reduce electricity costs.',
  },
  {
    title: 'Outdoor Lighting Control',
    description: 'Extend smart lighting to your garden, patio, and driveway with weather-resistant solutions.',
  },
];

const benefits = [
  'Reduce energy consumption by up to 60% with intelligent automation',
  'Enhance home security with automated presence simulation',
  'Improve sleep quality with circadian-aware lighting',
  'Control all lights from a single app or voice command',
  'Increase property value with modern smart infrastructure',
  'Enjoy personalized ambiance for every moment',
];

const process = [
  {
    step: '01',
    title: 'Assessment',
    description: 'We evaluate your space and lighting needs to create a customized plan.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Our experts design a comprehensive lighting system tailored to your lifestyle.',
  },
  {
    step: '03',
    title: 'Installation',
    description: 'Professional installation with minimal disruption to your daily routine.',
  },
  {
    step: '04',
    title: 'Training',
    description: 'We ensure you\'re comfortable using all features of your new system.',
  },
];

const SmartLighting = () => {
  return (
    <ServicePageLayout
      title="Smart Lighting"
      subtitle="Illuminate Your Life"
      description="Transform your home with intelligent lighting that adapts to your lifestyle. Our smart lighting solutions combine elegance with cutting-edge technology to create the perfect ambiance for every moment."
      heroImage={serviceLighting}
      icon={Lightbulb}
      features={features}
      benefits={benefits}
      process={process}
    />
  );
};

export default SmartLighting;
