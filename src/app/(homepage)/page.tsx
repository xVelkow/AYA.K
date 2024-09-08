import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main>
            <Hero />
            <div className="bg-pink-400 text-white py-4 text-center text-lg baskerville">Training & Nutrition</div>
            <About />
            <div className="bg-pink-400 text-white py-4 text-center text-lg baskerville">I did it, so YOU CAN DO IT</div>
            <Services />
            <Footer />
        </main>
    );
}
