export default function Hero() {
    return <section className="relative h-screen">
        <video
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-cover"
        >
            <source src="/homepage/hero.webm" type="video/webm" />
        </video>
        <div className="bg-black absolute w-full h-full inset-0 bg-opacity-20">
            <div className="h-full flex flex-col gap-6 justify-center items-center">
                <h1 className="text-white md:w-2/3 xl:w-1/2">YOUR BEST SELF STARTS TODAY</h1>
                <button className="baskerville">Start Your Journey Now</button>
            </div>
        </div>
    </section>
}