export default function About() {
    return <section className="min-h-screen w-full bg-primary-500 flex flex-col xl:flex-row gap-10 md:gap-20 justify-center items-center py-20 md:py-0">
        <div className=" relative w-80 md:w-96 aspect-square">
            <img
                src="/homepage/about.jpg" alt=""
                className="absolute z-10 w-full h-full object-cover"
            />
            <div className="hidden xl:block absolute content-[''] inset-0 bg-primary-100 -translate-x-10 translate-y-10"></div>
        </div>
        <div className="w-80 md:w-2/4 xl:w-1/3 space-y-4 flex flex-col justify-center items-center xl:items-start">
            <h2>A BIT ABOUT MY STORY</h2>
            <div className="baskerville space-y-4">
                <p>Hello bestie,</p>
                <p>I'm Aya a Level 3 personal trainer from Morocco. Thanks for stopping by!</p>
                <p>My journey into the fitness world was never about the perfect body, it was about making a positive change to feel better mentally and physically.</p>
                <p>My mission now is clear: empowering women to reach their full potential. With personalized online coaching, I'm here to offer tailored support and motivation.</p>
            </div>
        </div>
    </section>
}