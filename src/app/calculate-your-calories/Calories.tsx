'use client';

import { useState } from "react";

export default function Calories(){

    const [maintainWeight, setMaintainWeight] = useState(0);
    const [gainWeight, setGainWeight] = useState(0);
    const [loseWeight, setLoseWeight] = useState(0);

    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [gender, setGender] = useState('none');
    const [activity, setActivity] = useState('none');

    const [ageError, setAgeError] = useState('');
    const [weightError, setWeightError] = useState('');
    const [heightError, setHeightError] = useState('');
    const [genderError, setGenderError] = useState('');
    const [activityError, setActivityError] = useState('');

    const handleAge = (e:React.ChangeEvent<HTMLInputElement>) => setAge(e.target.value);
    const handleWeight = (e:React.ChangeEvent<HTMLInputElement>) => setWeight(e.target.value);
    const handleHeight = (e:React.ChangeEvent<HTMLInputElement>) => setHeight(e.target.value);
    const handleGender = (e:React.ChangeEvent<HTMLSelectElement>) => setGender(e.target.value);
    const handleActivity = (e:React.ChangeEvent<HTMLSelectElement>) => setActivity(e.target.value);

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!age){
            setAgeError('Please enter your age');
        }else setAgeError('');

        if(!weight){
            setWeightError('Please enter your weight');
        }else setWeightError('');

        if(!height){
            setHeightError('Please enter your height');
        }else setHeightError('');

        if(!['male', 'female'].includes(gender)){
            setGenderError('Please choose a gender');
        }else setGenderError('');

        if(!(['Sedentary', 'Lightly Active', 'Moderately Active', 'Very Active', 'Extra Active'].includes(activity))){
            setActivityError('Please choose an activity level');
        }else setActivityError('');

        if(age && weight && height && ['male', 'female'].includes(gender) && ['Sedentary', 'Lightly Active', 'Moderately Active', 'Very Active', 'Extra Active'].includes(activity)){
            let BMR = 0;
            switch(gender){
                case 'male':
                    BMR = (10 * Number(weight)) + (6.25 * Number(height)) - (5 * Number(age)) + 5;
                    break;
                case 'female':
                    BMR = (10 * Number(weight)) + (6.25 * Number(height)) - (5 * Number(age)) - 161;
                    break;
            }

            switch(activity){
                case 'Sedentary':
                    BMR = BMR * 1.2;
                    break;
                case 'Lightly Active':
                    BMR = BMR * 1.375;
                    break;
                case 'Moderately Active':
                    BMR = BMR * 1.55;
                    break;
                case 'Very Active':
                    BMR = BMR * 1.725;
                    break;
                case 'Extra Active':
                    BMR = BMR * 1.9;
                    break;
            }
            setMaintainWeight(Math.round(BMR));
            setGainWeight(Math.round(BMR + 320));
            setLoseWeight(Math.round(BMR - 320));
            
        }
    }
    return <section className="flex flex-col xl:flex-row justify-center items-center gap-10">
        <form className="flex flex-col" onSubmit={handleSubmit}>
            
            <div className="input-holder">
                <label htmlFor="age">Age <sub>(years)</sub></label>
                <input
                    type="text" placeholder="Enter your age in years"
                    name="age" id="age"
                    value={age} onChange={handleAge}
                />
                <span>{ageError}</span>
            </div>

            <div className="input-holder">
                <label htmlFor="weight">Weight <sub>(kg)</sub></label>
                <input
                    type="text" placeholder="Enter your weight in kg"
                    name="weight" id="weight"
                    value={weight} onChange={handleWeight}
                />
                <span>{weightError}</span>
            </div>

            <div className="input-holder">
                <label htmlFor="height">Height <sub>(cm)</sub></label>
                <input
                    type="text" placeholder="Enter your height in cm"
                    name="height" id="height"
                    value={height} onChange={handleHeight}
                />
                <span>{heightError}</span>
            </div>

            <div className="input-holder">
                <label htmlFor="gender">Gender</label>
                <select name="gender" id="gender" value={gender} onChange={handleGender}>
                    <option value="none">Choose a gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <span>{genderError}</span>
            </div>

            <div className="input-holder">
                <label htmlFor="activity">Activity level</label>
                <select name="activity" id="activity" value={activity} onChange={handleActivity}>
                    <option value="none">Choose an activity level</option>
                    <option value="Sedentary">Little to no exercise</option>
                    <option value="Lightly Active">Light exercise 1-3 times per week</option>
                    <option value="Moderately Active">Moderate exercise 3-5 times per week</option>
                    <option value="Very Active">Heavy physical exercise 5-6 times per week</option>
                    <option value="Extra Active">Extreme physical exercise 6-7 times per week</option>
                </select>
                <span>{activityError}</span>
            </div>

            <button className="w-full mt-4">Calculate Your Calories</button>

        </form>

        <section className="flex flex-col gap-4 text-center xl:text-left mx-6 xl:mx-0">
            <h3>Your BMR is: {maintainWeight} calories</h3>
            <h3>To maintain your weight, you need: {maintainWeight} calories</h3>
            <h3>To gain weight, you need: {gainWeight} calories</h3>
            <h3>To lose weight, you need: {loseWeight} calories</h3>
        </section>
    </section>
}