import Companies from "@/components/Companies";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurValue from "@/components/OurValue";
import Residencies from "@/components/Residencies";
import VideoPlayer from "@/components/VideoCanvas";
import TawkTo from "@/components/Tawk";

const Home = () => {
  return (
    <main className="relative overflow-x-clip">
      <section className="relative bg-slate-200 pb-8 transition-all ease-in dark:bg-primary-black">
        <div className="gradient absolute left-[100px] h-80 w-80 bg-black/20 blur-[100px] dark:bg-white/10" />
        <Navbar />
        <TawkTo/>
        <Hero />
        <Companies />
        <VideoPlayer />
        <Residencies />
        <div className="relative">
          <div className="gradient absolute -top-24 right-[100px] h-80 w-80 bg-indigo-600/30 blur-[100px]" />
          <OurValue />
          <ContactUs />
        </div>
        <GetStarted />
        <footer>
          <Footer />
        </footer>
      </section>
    </main>
  );
};
export default Home;
