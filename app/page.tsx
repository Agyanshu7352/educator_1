import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import InstitutionsMarquee from '@/components/InstitutionsMarquee';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks';
import CollegesCount from '@/components/CollegesCount';
import FeaturedColleges from '@/components/FeaturedColleges';
import Testimonials from '@/components/Testimonials';
import CtaBanner from '@/components/CtaBanner';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#FDFDFE]">
      <Navbar />
      <Hero />
      <InstitutionsMarquee />
      <WhyChooseUs />
      <HowItWorks />
      <CollegesCount />
      <FeaturedColleges />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </main>
  );
}
