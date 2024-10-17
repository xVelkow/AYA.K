import Image from "next/image";
import Link from "next/link";
export default function Services(){
    return <section className="bg-white flex flex-col justify-center items-center py-10 gap-10">
        <h1 className="text-primary-600 mx-4">YOU GOT THIS!</h1>
        <h2 className="text-neutral-900 text-center">Start Your Fitness Journey</h2>
        <div className="flex flex-col xl:flex-row justify-center items-center xl:items-stretch gap-10 md:gap-20">
            <div className="w-3/4 md:w-2/3 xl:w-1/4 space-y-2 flex flex-col justify-start items-start bg-primary-600 py-4 px-4 rounded-xl">
                <Image
                    src="/homepage/fitness.jpg" alt="" width={500} height={500}
                    className="service-img"
                />
                <h3 className="text-white">Fitness</h3>
                <div className="text-white space-y-2">
                    <p>- Customized workout routine according to your goal.</p>
                    <p>- Flexible workout plan : to do at home or in a gym.</p>
                    <p>- Weekly check-ins for feedback and adjustments.</p>
                </div>
            </div>
            <div className="w-3/4 md:w-2/3 xl:w-1/4 space-y-2 flex flex-col justify-start items-start bg-primary-600 py-4 px-4 rounded-xl">
                <Image
                    src="/homepage/nutrition.jpg" alt="" width={500} height={500}
                    className="service-img"
                />
                <h3 className="text-white">Nutrition</h3>
                <div className="text-white space-y-2">
                    <p>- Nutrition plan focused on weight loss, muscle gain, or improved performance.</p>
                    <p>- Personalized meal plan based on your caloric needs and macronutrient requirements.</p>
                    <p>- Recipes and meal prep guide.</p>
                    <p>- Email/chat support for nutritional guidance.</p>
                </div>
            </div>
            <div className="w-3/4 md:w-2/3 xl:w-1/4 space-y-2 flex flex-col justify-start items-start bg-primary-600 py-4 px-4 rounded-xl">
                <Image
                    src="/homepage/fitness-nutrition.jpg" alt="" width={500} height={500}
                    className="service-img"
                />
                <h3 className="text-white">Fitness & Nutrition</h3>
                <div className="text-white h-full space-y-2">
                    <p>- Customized workout routine.</p>
                    <p>- Personalized meal plan aligned with your fitness goal.</p>
                    <p>- Personalized Grocery shopping list.</p>
                    <p>- Teach you how to track your calories.</p>
                    <p>- Weekly check-ins for Performance Tracking.</p>
                </div>
            </div>
        </div>
        <Link href="/contact" className="rounded-full"><button className="text-xl py-3 px-9 uppercase">Book a Strategy Call NOW!</button></Link>
    </section>
}