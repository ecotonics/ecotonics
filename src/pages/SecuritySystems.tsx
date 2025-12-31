import { Shield } from 'lucide-react';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import serviceSecurity from '@/assets/service-security.jpg';

const features = [
  {
    title: '4K Surveillance Cameras',
    description: 'Crystal-clear video monitoring with night vision, wide-angle lenses, and AI-powered motion detection.',
  },
  {
    title: 'Smart Door Locks',
    description: 'Keyless entry with fingerprint, PIN, and smartphone access. Grant temporary access to guests remotely.',
  },
  {
    title: 'Intrusion Detection',
    description: 'Advanced sensors for doors, windows, and glass break detection with instant mobile alerts.',
  },
  {
    title: '24/7 Professional Monitoring',
    description: 'Optional round-the-clock monitoring by security professionals with emergency dispatch services.',
  },
  {
    title: 'Video Doorbell Systems',
    description: 'See, hear, and speak to visitors from anywhere. Two-way audio with HD video streaming.',
  },
  {
    title: 'Smart Garage Control',
    description: 'Monitor and control your garage door remotely. Receive alerts if left open.',
  },
];

const benefits = [
  'Deter break-ins with visible security infrastructure',
  'Monitor your home from anywhere in the world',
  'Receive instant alerts for any suspicious activity',
  'Protect your family with professional emergency response',
  'Lower home insurance premiums with certified systems',
  'Maintain complete records with cloud video storage',
];

const process = [
  {
    step: '01',
    title: 'Security Audit',
    description: 'Comprehensive assessment of vulnerabilities and entry points in your property.',
  },
  {
    step: '02',
    title: 'Custom Design',
    description: 'We create a security plan that addresses your specific concerns and requirements.',
  },
  {
    step: '03',
    title: 'Installation',
    description: 'Discreet, professional installation by certified security technicians.',
  },
  {
    step: '04',
    title: 'Activation',
    description: 'System activation, testing, and training to ensure complete peace of mind.',
  },
];

const SecuritySystems = () => {
  return (
    <ServicePageLayout
      title="Security Systems"
      subtitle="Protect What Matters"
      description="Safeguard your home and loved ones with our comprehensive security solutions. From advanced surveillance to smart access control, we provide complete peace of mind with cutting-edge protection technology."
      heroImage={serviceSecurity}
      icon={Shield}
      features={features}
      benefits={benefits}
      process={process}
    />
  );
};

export default SecuritySystems;
