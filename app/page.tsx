import Header from './components/Header';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Process from './components/Process';
import Specializations from './components/Specializations';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Technologies />
      <Portfolio />
      <Services />
      <Process />
      <Specializations />
      <Footer />
    </main>
  );
}
