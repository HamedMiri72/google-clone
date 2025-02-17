import WebSearchResults from '@/components/WebSearchResults';
import Link from 'next/link';
import React from 'react'

export default async function WebSearchPage({searchParams}) {

    const startIndex = searchParams.start || '1';
    const { searchTerm } = await searchParams;

    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchTerm}&start=${startIndex}`);

    if (!response.ok) throw new Error("Something went wrong");

    const data = await response.json();
    const results = data.items;

    if(!results){
        return (
            <div className='flex flex-col justify-center items-center pt-10'>
                <h1 className='text-3xl mb-4'>No Results found for {searchParams.searchTerm}</h1>
                <p className='text-lg '>Try Searching the web or images for somthing else</p>
                <Link href={'/'} className='text-blue-600  hover:underline'>
                    Home
                </Link>
            </div>
        )
    }
    

  return (
    <div>
        
        {results && <WebSearchResults results={data}/>} 
    </div>
  )
}
