import Link from 'next/link';
import React from 'react'

export default async function WebSearchPage({searchParams}) {

    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`);

    if(!response.ok) throw new Error("Somthing went Wrong");
    const data = await response.json();
    const results = data.items;

    if(!results){
        return (
            <div className='flex flex-col justify-center items-center pt-10'>
                <h1 children className='text-3xl mb-4'>No Results found for {searchParams.searchTerm}</h1>
                <p className='text-lg '>Try Searching the web or images for somthing else</p>
                <Link href={'/'} className='text-blue-600  hover:underline'>
                    Home
                </Link>
            </div>
        )
    }
    

  return (
    <div>
        {results && results.map((result) => (
            <h1>{result.title}</h1>
        ))}
    </div>
  )
}
