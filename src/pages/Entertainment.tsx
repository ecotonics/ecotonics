import { Tv } from 'lucide-react';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import serviceEntertainment from '@/assets/service-entertainment.jpg';

const features = [
  {
    title: 'Whole-Home Audio',
    description: 'Premium multi-room audio systems with synchronized playback or independent zone control.',
  },
  {
    title: 'Home Theater Design',
    description: 'Custom theater rooms with 4K/8K projection, Dolby Atmos sound, and acoustic optimization.',
  },
  {
    title: 'Outdoor Entertainment',
    description: 'Weather-resistant speakers, TVs, and lighting for perfect outdoor gatherings.',
  },
  {
    title: 'Streaming Integration',
    description: 'Unified access to all streaming services through a single, intuitive interface.',
  },
  {
    title: 'Gaming Room Setup',
    description: 'Optimized gaming environments with low-latency displays, surround sound, and ambient lighting.',
  },
  {
    title: 'Voice & App Control',
    description: 'Control all entertainment systems with voice commands or our elegant mobile app.',
  },
];

const benefits = [
  'Enjoy cinema-quality experiences at home',
  'Fill every room with rich, clear audio',
  'Simplify control with one unified system',
  'Impress guests with seamless entertainment',
  'Increase home value with premium installations',
  'Access all content from any room instantly',
];

const process = [
  {
    step: '01',
    title: 'Consultation',
    description: 'We discuss your entertainment preferences and vision for the space.',
  },
  {
    step: '02',
    title: 'Design',
    description: 'Custom audio-visual design with equipment selection and room optimization.',
  },
  {
    step: '03',
    title: 'Installation',
    description: 'Clean, professional installation with concealed wiring and components.',
  },
  {
    step: '04',
    title: 'Calibration',
    description: 'Professional tuning and calibration for optimal audio and video performance.',
  },
];

const Entertainment = () => {
  return (
    <ServicePageLayout
      title="Entertainment Systems"
      subtitle="Immersive Experiences"
      description="Create unforgettable entertainment experiences with our premium audio-visual solutions. From dedicated home theaters to whole-home audio, we design systems that bring joy to every moment."
      heroImage={serviceEntertainment}
      icon={Tv}
      features={features}
      benefits={benefits}
      process={process}
    />
  );
};

export default Entertainment;
