"use client";
import OurSpecialists from "./Components/Our Specialists";
import About from "./Components/About";
import WeTreat from "./Components/WeTreat";
import WhyChoose from "./Components/WhyChoose";
import Navbar from "./navBar";
import Footer from "./shared/Footer";
import Testimonials from "./Components/testimonials";
import MakingTheWorldBetter from "./Components/worldBetter";
import NewsEventsBlogs from "./Components/Blog";

export default function Home() {
  return (
    <div className="">
      <About />
      <WeTreat />
      <WhyChoose/>
      <OurSpecialists />
      <Testimonials/>
     < NewsEventsBlogs/>
     < MakingTheWorldBetter/>
      <Footer/>
    </div>
  );
}
