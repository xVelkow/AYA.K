import Hero from "./Hero";
import About from "./About";
import Services from "../../components/Services";

export default function Home() {
    return (
        <main>
            <Hero />
            <div className="hidden xl:flex xl:justify-around bg-pink-400 text-white py-4 text-center text-lg baskerville font-bold">
                <span>FITNESS COACHING FOR WOMEN</span>
                <span>✨</span>
                <span>PERSONALIZED NUTRITION PLANS</span>
                <span>✨</span>
                <span>HEALTHY LIFESTYLE GUIDANCE</span>
            </div>
            <About />
            <Services />
        </main>
    );
}
