import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Villas from '@/components/Villas';
import Overview from '@/components/Overview';
import MasterLayout from '@/components/MasterLayout';
import Plans from '@/components/Plans';
import Amenities from '@/components/Amenities';
import Location from '@/components/Location';
import Specifications from '@/components/Specifications';
import Gallery from '@/components/Gallery';
import MapSection from '@/components/MapSection';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Villas />
        <Overview />
        <MasterLayout />
        <Plans />
        <Amenities />
        <Location />
        <Specifications />
        <Gallery />
        <MapSection />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
