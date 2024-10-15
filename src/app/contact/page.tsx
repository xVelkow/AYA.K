'use client';

import Image from "next/image";
import { useState } from "react";
import emailjs from 'emailjs-com';

export default function Contact(){
    
    const [email, setEmail] = useState('');
    const [service, setService] = useState('none');

    const [emailError, setEmailError] = useState('');
    const [serviceError, setServiceError] = useState('');
    
    const [response, setResponse] = useState<boolean | undefined>(undefined);

    const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handleService = (e:React.ChangeEvent<HTMLSelectElement>) => setService(e.target.value);

    // email validation
    
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if(!emailPattern.test(email)){
            setEmailError('Please enter a valid email');
        }else setEmailError('');
        
        if(service === 'none'){
            setServiceError('Please choose a service');
        }else setServiceError('');
        
        if(emailPattern.test(email) && service !== 'none'){
            emailjs.send(
                process.env.NEXT_PUBLIC_EMAIL_SERVICE || '',
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE || '',
                {
                    email: email,
                    service: service,
                },
                process.env.NEXT_PUBLIC_EMAIL_APIKEY || ''
            ).then(()=> {
                setResponse(true);
                setTimeout(()=>{
                    setResponse(undefined)
                }, 3000)
            }).catch(()=> {
                setResponse(false);
                setTimeout(()=>{
                    setResponse(undefined)
                }, 3000)
            }).finally(()=>{
                setEmail('');
                setService('none');
            });
        }
        
    }

    return <main className="grid place-items-center py-10 bg-primary-500">
    <div className="inline-block border-2 border-pink-400 rounded-md overflow-hidden mx-8 bg-white">
        <div className="flex flex-col md:flex-row gap-5 md:gap-0">
            <Image src="/contact/contact.jpg" width={300} height={300} alt="training" className="block w-full md:w-80 xl:w-96 xl:h-[calc(100vh-6em)] object-cover"/>
            <section className="flex flex-col justify-center items-center px-4 py-4 xl:w-96">
                <h2 className="text-center">Choose Your Plan NOW</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-holder">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text" placeholder="Example@gmail.com"
                            name="email" id="email"
                            value={email} onChange={handleEmail}
                        />
                        <span>{emailError}</span>
                    </div>

                    <div className="input-holder">
                        <label htmlFor="service">Service</label>
                        <select name="service" id="service" value={service} onChange={handleService}>
                            <option value="none">Choose a service</option>
                            <option value="Nutrition">Nutrition</option>
                            <option value="Training">Training</option>
                            <option value="Training & Nutrition">Training & Nutrition</option>
                        </select>
                        <span>{serviceError}</span>
                    </div>
                    <div className="mt-4 space-y-2 text-center">
                        <button className="w-full">Confirm Your Choice</button>
                        <span className={`${response ? 'text-green-400' : 'text-red-400'}`}>
                            {response && 'Email sent!'}
                            {response === false && 'Email not sent!'}
                            {response === undefined && ''}
                        </span>
                    </div>
                </form>
            </section>
        </div>
    </div>
</main>
}