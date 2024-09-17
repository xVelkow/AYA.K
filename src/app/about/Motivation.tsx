export default function Motivation() {
    return <section className="flex flex-col-reverse xl:flex-row justify-center items-center py-10 gap-4">
        <div className="mx-4 xl:w-1/2">
            <p className="text-center xl:text-left text-xl font-semibold">Her motivation</p>
            <h1 className="text-5xl md:text-7xl xl:text-left text-pink-400">&ldquo;Helping you step into the strong, capable woman that you are&rdquo;</h1>
        </div>
        <video
            autoPlay
            muted
            playsInline
            loop
            className="w-5/6 xl:w-80 xl:h-[calc(100vh-10em)] object-cover rounded-3xl"
        >
            <source src="/aboutpage/motivation.webm" type="video/webm" />
        </video>
    </section>
}