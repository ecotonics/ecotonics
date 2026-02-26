import { Lightbulb, Shield, Thermometer, Tv } from 'lucide-react';
import ServicePageLayout from '@/components/ServicePageLayout';

const servicesData = {
  'smart-lighting': {
    title: 'Smart Lighting',
    subtitle: 'Intelligent Lighting Solutions',
    description:
      'Transform your home with adaptive lighting that responds to your lifestyle. Our smart lighting systems blend seamlessly into your space while delivering unparalleled control and energy efficiency.',
    heroImage: '/service-lighting.jpg',
    icon: Lightbulb,
    features: [
      {
        title: 'Automated Scheduling',
        description: 'Set lighting schedules that adapt to your daily routine automatically.',
      },
      {
        title: 'Voice Control',
        description: 'Control every light in your home using simple voice commands.',
      },
      {
        title: 'Scene Creation',
        description: 'Create and save custom lighting scenes for any mood or occasion.',
      },
      {
        title: 'Energy Monitoring',
        description: 'Track energy usage in real time and reduce your electricity bills.',
      },
      {
        title: 'Motion Sensing',
        description: 'Lights that automatically turn on and off based on occupancy.',
      },
      {
        title: 'Remote Access',
        description: 'Control your lighting from anywhere in the world via mobile app.',
      },
    ],
    benefits: [
      'Up to 80% reduction in lighting energy costs',
      'Seamless integration with all major smart home platforms',
      'Professional installation with minimal disruption',
      'Lifetime software updates and feature additions',
      'Compatible with existing switches and fixtures',
      '24/7 dedicated support and maintenance',
    ],
    process: [
      {
        step: '01',
        title: 'Site Assessment',
        description: 'Our team visits your home to assess your current setup and lighting needs.',
      },
      {
        step: '02',
        title: 'Custom Design',
        description: 'We design a lighting plan tailored to your space and lifestyle.',
      },
      {
        step: '03',
        title: 'Installation',
        description: 'Expert technicians install and configure all hardware and software.',
      },
      {
        step: '04',
        title: 'Handover & Training',
        description: 'We walk you through the system and ensure you are fully comfortable.',
      },
    ],
  },

  'security-systems': {
    title: 'Security Systems',
    subtitle: 'Advanced Home Security',
    description:
      'Protect what matters most with our state-of-the-art security solutions. From smart cameras to intelligent access control, we deliver complete peace of mind for your home and family.',
    heroImage: '/service-security.jpg',
    icon: Shield,
    features: [
      {
        title: 'HD Surveillance',
        description: '4K cameras with night vision and wide-angle coverage for every corner.',
      },
      {
        title: 'Smart Access Control',
        description: 'Keyless entry with fingerprint, PIN, and mobile app authentication.',
      },
      {
        title: 'Real-time Alerts',
        description: 'Instant notifications on your phone for any suspicious activity.',
      },
      {
        title: 'Cloud Storage',
        description: 'Secure cloud backup of all footage with 30-day retention.',
      },
      {
        title: 'AI Detection',
        description: 'Intelligent recognition that distinguishes people, pets, and vehicles.',
      },
      {
        title: '24/7 Monitoring',
        description: 'Professional monitoring team watching your property around the clock.',
      },
    ],
    benefits: [
      'Deters up to 60% of break-in attempts',
      'Insurance premium reductions up to 20%',
      'Remote monitoring from anywhere in the world',
      'Seamless integration with smart locks and lighting',
      'Tamper-proof hardware and encrypted communications',
      'Rapid emergency response coordination',
    ],
    process: [
      {
        step: '01',
        title: 'Security Audit',
        description: 'We assess your property for vulnerabilities and coverage gaps.',
      },
      {
        step: '02',
        title: 'System Design',
        description: 'A custom security plan is created based on your property layout.',
      },
      {
        step: '03',
        title: 'Installation',
        description: 'Certified technicians install and test all cameras and access points.',
      },
      {
        step: '04',
        title: 'Activation & Support',
        description: 'We activate monitoring and provide full training on the system.',
      },
    ],
  },

  'climate-control': {
    title: 'Climate Control',
    subtitle: 'Intelligent HVAC Management',
    description:
      'Achieve perfect comfort in every room with our intelligent climate control systems. Smart thermostats and zoned HVAC management ensure optimal temperature while dramatically reducing energy costs.',
    heroImage: '/service-climate.jpg',
    icon: Thermometer,
    features: [
      {
        title: 'Smart Thermostats',
        description: 'Learning thermostats that adapt to your schedule and preferences.',
      },
      {
        title: 'Zone Control',
        description: 'Independent temperature management for every room in your home.',
      },
      {
        title: 'Air Quality Monitoring',
        description: 'Real-time tracking of humidity, CO2, and air quality levels.',
      },
      {
        title: 'Energy Reports',
        description: 'Detailed monthly reports showing consumption and savings.',
      },
      {
        title: 'Weather Integration',
        description: 'Automatically adjusts based on local weather forecasts.',
      },
      {
        title: 'Remote Control',
        description: 'Adjust temperature from anywhere using our mobile app.',
      },
    ],
    benefits: [
      'Up to 30% reduction in heating and cooling costs',
      'Consistent comfort in every room at all times',
      'Improved indoor air quality and ventilation',
      'Compatible with all major HVAC brands',
      'Automated adjustments while you sleep or travel',
      'Detailed energy usage insights and reporting',
    ],
    process: [
      {
        step: '01',
        title: 'Home Evaluation',
        description: 'We assess your existing HVAC system and insulation quality.',
      },
      {
        step: '02',
        title: 'Zoning Plan',
        description: 'A custom zoning layout is designed for maximum efficiency.',
      },
      {
        step: '03',
        title: 'Installation',
        description: 'Smart thermostats and sensors are installed throughout your home.',
      },
      {
        step: '04',
        title: 'Calibration',
        description: 'The system is fine-tuned and you are trained on all controls.',
      },
    ],
  },

  'entertainment': {
    title: 'Entertainment',
    subtitle: 'Immersive Audio-Visual Experiences',
    description:
      'Elevate your entertainment experience with cinema-quality audio and visuals throughout your home. From dedicated home theatres to whole-home audio, we create immersive environments tailored to you.',
    heroImage: '/service-entertainment.jpg',
    icon: Tv,
    features: [
      {
        title: 'Home Theatre',
        description: 'Dedicated cinema rooms with 4K projection and Dolby Atmos surround sound.',
      },
      {
        title: 'Whole-Home Audio',
        description: 'High-fidelity speakers in every room controlled from one app.',
      },
      {
        title: 'Streaming Integration',
        description: 'All major streaming platforms unified in a single intuitive interface.',
      },
      {
        title: 'Smart TV Control',
        description: 'Universal control of all screens and devices from one remote.',
      },
      {
        title: 'Outdoor AV',
        description: 'Weather-resistant speakers and displays for outdoor entertainment.',
      },
      {
        title: 'Gaming Setup',
        description: 'Ultra-low latency displays and audio optimised for gaming.',
      },
    ],
    benefits: [
      'Cinema-grade experience in the comfort of your home',
      'Seamless multi-room audio and video distribution',
      'Single app control for all entertainment systems',
      'Professional acoustic design and calibration',
      'Future-proof hardware with software upgrades',
      'Dedicated support from AV specialists',
    ],
    process: [
      {
        step: '01',
        title: 'Consultation',
        description: 'We discuss your entertainment goals and assess your available spaces.',
      },
      {
        step: '02',
        title: 'AV Design',
        description: 'Our specialists design an acoustic and visual layout for each room.',
      },
      {
        step: '03',
        title: 'Installation',
        description: 'All equipment is installed, calibrated, and integrated seamlessly.',
      },
      {
        step: '04',
        title: 'Demo & Handover',
        description: 'We demonstrate the full system and ensure you love every detail.',
      },
    ],
  },
};

type ServiceKey = keyof typeof servicesData;

// Next.js 15: searchParams is a Promise and must be awaited
export default async function ServiceDetailPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;
  const key = (service ?? 'smart-lighting') as ServiceKey;
  const data = servicesData[key] ?? servicesData['smart-lighting'];

  return <ServicePageLayout {...data} />;
}