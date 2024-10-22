'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Blogs(){
    const blogs = [
        {
            id: 1,
            title: "Why Training is Important for Women's Health",
            image: "1.jpg"
        },
        {
            id: 2,
            title: "5 Tips for you to Start Your Fitness Journey",
            image: "1.jpg"
        },
        {
            id: 3,
            title: "The Best Workout Playlist: These Songs Will Motivate You",
            image: "1.jpg"
        },
    ];

    const blogsPerPage = 15;
    const totalPages = Math.ceil(blogs.length / blogsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog).reverse();

    return <main className="py-10 space-y-10">
        <div className="text-4xl xl:text-5xl font-bold text-center mx-2">Discover Health & Fitness Content</div>
        <div className="grid place-items-center px-10 xl:px-20 gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {
                currentBlogs.map( blog => {return (
                    <Link key={blog.id} href={`/blogs/${blog.id}`} className="bg-primary-500 rounded-md">
                        <Image src={`/blogs/${blog.image}`} alt={blog.title.slice(0,10)} width={500} height={500}
                            className="w-full h-54 object-cover rounded-t-md"
                        />
                        <p className="text-lg font-medium my-2 mx-4 line-clamp-2 md:line-clamp-1 xl:line-clamp-2">{blog.title}..</p>
                    </Link>
                )})
            }
        </div>
        <div className="flex justify-center items-center gap-5">
            <button disabled={currentPage === 1} onClick={()=>setCurrentPage(currentPage-1)} className="bg-pink-400 text-white py-2 px-4 rounded-md disabled:bg-gray-300">Previous</button>
            <button disabled={currentPage === totalPages} onClick={()=>setCurrentPage(currentPage+1)} className="bg-pink-400 text-white py-2 px-4 rounded-md disabled:bg-gray-300">Next</button>
        </div>
    </main>
}