import Header from './components/Header';
import Hero from './components/Hero';
import Technologies from './components/Technologies';
import Works from './components/Works';
import Services from './components/Services';
import Process from './components/Process';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Technologies />
      <Services />
      <Works />
      <Process />
      <Portfolio />
      <Footer />
    </main>
  );
}
