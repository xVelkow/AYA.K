import Image from 'next/image';
export default function About() {
    return <section className="w-full bg-primary-500 flex flex-col xl:flex-row gap-10 xl:gap-20 justify-center items-center py-10">
        <div className="relative w-3/4 md:w-96 xl:w-80 aspect-square">
            <Image
                src="/homepage/about.jpg" alt="" width={500} height={500}
                className="absolute z-10 w-full md:w-96 xl:w-72 aspect-square object-cover"
            />
            <div className="hidden xl:block absolute content-[''] inset-0 w-3/4 xl:w-72 aspect-square bg-primary-100 -translate-x-10 translate-y-10"></div>
        </div>
        <div className="w-4/5 md:w-96 xl:w-1/3 space-y-4 flex flex-col justify-center items-center xl:items-start">
            <h2 className='mx-2'>A BIT ABOUT MY STORY</h2>
            <div className="baskerville space-y-4 mx-2">
                <p>Hello bestie,</p>
                <p>I&apos;m Aya a Level 3 personal trainer from Morocco. Thanks for stopping by!</p>
                <p>My journey into the fitness world was never about the perfect body, it was about making a positive change to feel better mentally and physically.</p>
                <p> My mission is simple: to help women unlock their full potential. Through personalized online coaching, I’m here to provide the support and motivation you need to achieve your goals.</p>
            </div>
        </div>
    </section>
}