import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

export default function Home() {
    return (
        <main>
            <Hero />
            <div className="hidden xl:block bg-pink-400 text-white py-4 text-center text-lg baskerville font-bold">FITNESS COACHING FOR WOMEN ✨ PERSONALIZED NUTRITION PLANS ✨ HEALTHY LIFESTYLE GUIDANCE</div>
            <About />
            {/* <div className="bg-pink-400 text-white py-4 text-center text-lg baskerville">YOU GOT THIS</div> */}
            <Services />
            <Newsletter />
            <Footer />
        </main>
    );
}
