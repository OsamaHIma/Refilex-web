import Companies from "@/components/Companies";
// import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import OurServices from "@/components/OurServices";
import VideoPlayer from "@/components/VideoCanvas";
// import TawkTo from "@/components/Tawk";

const Home = () => {
  return (
    <main className="relative overflow-x-clip">
      <section className="relative bg-slate-200 pb-8 transition-all ease-in dark:bg-primary-black">
        <div className="gradient absolute left-[100px] h-80 w-80 bg-black/20 blur-[100px] dark:bg-white/10" />
        <Navbar />
        {/* <TawkTo/> */}
        <Hero />
        <Companies />
        <VideoPlayer />
     
          <div className="gradient absolute -top-24 right-[100px] h-80 w-80 bg-indigo-600/30 blur-[100px]" />
          <OurServices />
          {/* <SocialIcons /> */}
          {/* <ContactUs /> */}
        
        <GetStarted />
        <div className="gradient absolute top-[50%] -z-1 left-[40%] h-80 w-80 bg-orange-400/30 blur-[100px]" />
        <div className="gradient absolute bottom-0 -z-1 left-0 h-80 w-80 bg-indigo-500/30 blur-[100px]" />

        <footer>
          <Footer />
        </footer>
     
      </section>
    </main>
  );
};
export default Home;
