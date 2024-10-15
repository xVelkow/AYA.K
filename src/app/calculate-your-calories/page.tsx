import Calories from "./Calories";

export default function CalculateYourCalories(){
    return <main className="flex flex-col justify-center items-center gap-4 py-10">
        <h1>CALCULATE YOUR CALORIES</h1>
        <h4 className="text-center w-2/3">To calculate your daily caloric needs and macro goals, fill out the information below! This macrocalculator gives you an estimated calorie intake based on the Mifflin St Jeor Equation and your provided values, this should be used wisely. If you are not sure how to apply this information, seek advise from your healthcare professional.</h4>
        <Calories />
    </main>
}