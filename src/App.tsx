/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Expertise from "./components/Expertise";
import Process from "./components/Process";
import ServiceTypes from "./components/ServiceTypes";
import Ebooks from "./components/Ebooks";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-pastel-orange/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Process />
        <ServiceTypes />
        <Ebooks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
