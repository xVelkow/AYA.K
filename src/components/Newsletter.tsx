'use client';

import { useState } from "react";
import emailjs from 'emailjs-com';

export default function Newsletter(){

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [response, setResponse] = useState<boolean | undefined>(undefined);

    const handleEmail = (e:React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handleNewsletter = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if(!emailPattern.test(email)){
            setEmailError('Please enter a valid email!');
        }else setEmailError('');

        if(emailPattern.test(email)){
            emailjs.send(
                process.env.NEXT_PUBLIC_EMAIL_SERVICE || '',
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE || '',
                {
                    email: email,
                    service: 'Newsletter',
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
            });
        }

    }
    return <section>
        <div className="bg-pink-400 text-white flex flex-col justify-center items-center gap-6 py-20">
            <h2 className="w-5/6 text-center">Sending You Weekly FITNESS & NUTRITION Tips</h2>
            <h4 className="text-center w-5/6 lg:w-1/2">Subscribe to my newsletter for the latest fitness and nutrition tips and exclusive services.</h4>
            <form onSubmit={handleNewsletter} className="flex flex-col gap-6 w-5/6 lg:w-1/2">
                <div className="flex flex-col">
                    <input
                        type="email" placeholder="Email Address"
                        className="py-2 pl-4 outline-none rounded-md text-black"
                        value={email} onChange={handleEmail}
                    />
                    <span className="text-red-500">{emailError}</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <button className={
                        `
                            w-full p-2 rounded-md
                            ${response && 'text-green-500 border border-green-500 bg-green-200'}
                            ${response === false && 'text-red-500 border border-red-500 bg-red-200'}
                            ${response === undefined && 'text-pink-400 bg-white border border-pink-400'}
                        `}>
                        {response && 'Email sent!'}
                        {response === false && 'Email not sent!'}
                        {response === undefined && 'Subscribe'}
                    </button>
                </div>
            </form>
        </div>
    </section>
}