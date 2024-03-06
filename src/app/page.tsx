"use client";
import About from "./Components/About";
import WeTreat from "./Components/WeTreat";
import WhyChoose from "./Components/WhyChoose";
import Footer from "./shared/Footer";
import Testimonials from "./Components/testimonials";
import MakingTheWorldBetter from "./Components/worldBetter";
import NewsEventsBlogs from "./Components/Blog";
import Specialists from "./Components/Specialists";

export default function Home() {
  return (
    <div className="">
      <About/>
      <WeTreat/>
      <WhyChoose/>
      <Specialists />
      <Testimonials/>
     < NewsEventsBlogs/>
     < MakingTheWorldBetter/>
      <Footer/>
    </div>
  );
}
