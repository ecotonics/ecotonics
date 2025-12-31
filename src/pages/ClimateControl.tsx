import { Thermometer } from 'lucide-react';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import serviceClimate from '@/assets/service-climate.jpg';

const features = [
  {
    title: 'Smart Thermostats',
    description: 'AI-powered temperature control that learns your preferences and optimizes comfort automatically.',
  },
  {
    title: 'Zoned Climate Control',
    description: 'Independent temperature settings for different rooms, ensuring personalized comfort throughout.',
  },
  {
    title: 'Air Quality Monitoring',
    description: 'Real-time tracking of humidity, CO2 levels, and particulates with automated ventilation response.',
  },
  {
    title: 'Geofencing Technology',
    description: 'System automatically adjusts when you leave or approach home, saving energy without sacrificing comfort.',
  },
  {
    title: 'Integration with HVAC',
    description: 'Seamless connection with existing heating and cooling systems for unified smart control.',
  },
  {
    title: 'Energy Usage Reports',
    description: 'Detailed analytics on energy consumption with actionable insights to reduce costs.',
  },
];

const benefits = [
  'Reduce heating and cooling costs by up to 30%',
  'Maintain perfect temperature in every room',
  'Improve indoor air quality for better health',
  'Control climate from anywhere via smartphone',
  'Extend HVAC system lifespan with smart optimization',
  'Reduce carbon footprint with efficient operation',
];

const process = [
  {
    step: '01',
    title: 'Climate Analysis',
    description: 'We assess your home\'s thermal characteristics and current HVAC setup.',
  },
  {
    step: '02',
    title: 'System Design',
    description: 'Custom climate control solution designed for optimal efficiency and comfort.',
  },
  {
    step: '03',
    title: 'Installation',
    description: 'Professional integration with your existing HVAC infrastructure.',
  },
  {
    step: '04',
    title: 'Optimization',
    description: 'Fine-tuning and calibration to achieve perfect climate balance.',
  },
];

const ClimateControl = () => {
  return (
    <ServicePageLayout
      title="Climate Control"
      subtitle="Perfect Comfort, Always"
      description="Experience ideal temperature and air quality in every room. Our intelligent climate systems adapt to your preferences, weather conditions, and occupancy patterns for ultimate comfort and efficiency."
      heroImage={serviceClimate}
      icon={Thermometer}
      features={features}
      benefits={benefits}
      process={process}
    />
  );
};

export default ClimateControl;
