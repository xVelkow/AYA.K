'use client';
export default function Newsletter(){
    const handleNewsletter = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    return <section>
        <div className="bg-pink-400 text-white flex flex-col justify-center items-center gap-6 py-20">
            <h2 className="w-5/6 text-center">Sending You Weekly FITNESS & NUTRITION Tips</h2>
            <h4 className="text-center w-5/6 lg:w-1/2">Subscribe to our newsletter for the latest fitness and nutrition tips and exclusive services. Stay informed and elevate your wellness journey today.</h4>
            <form onSubmit={handleNewsletter} className="flex flex-col gap-6 w-5/6 lg:w-1/2">
                <input type="email" placeholder="Email Address" className="py-2 pl-4 outline-none rounded-md text-black" />
                <button className="bg-white text-pink-400 p-2 rounded-md">Subscribe</button>
            </form>
        </div>
    </section>
}