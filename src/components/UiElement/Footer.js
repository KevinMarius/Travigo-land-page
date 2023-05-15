import React from 'react';

import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { BiSend } from 'react-icons/bi';

export default function Footer() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 bottom-0 left-0 right-0'>
            <div className='py-4'>
                <h3 className='text-2xl font-semibold py-4'>Travigo</h3>
                <p className='text-sm font-normal py-4 text-slate-400'>We always make our customer happy by providing as many choice as possible</p>
                <div className='flex gap-5 items-center px-1 py-4'>
                    <a href='#'><FaInstagram className=' text-purple-700' /></a>
                    <a href='#'><FaFacebook className='text-3xl text-purple-700' /></a>
                    <a href='#'><FaTwitter className=' text-purple-700' /></a>
                </div>
            </div>
            <div className='py-4 px-10'>
                <h3 className='text-lg text-slate-700 font-semibold py-4'>About</h3>
                <ul className='text-sm text-slate-400'>
                    <li className='py-2'><a href='#'>About us</a></li>
                    <li className='py-2'><a href='#'>Features</a></li>
                    <li className='py-2'><a href='#'>News</a></li>
                    <li className='py-2'><a href='#'>Menu</a></li>
                </ul>
            </div>
            <div className='py-4 px-10'>
                <h3 className='text-lg text-slate-700 font-semibold py-4'>Company</h3>
                <ul className='text-sm text-slate-400'>
                    <li className='py-2'><a href='#'>Why Travigo ?</a></li>
                    <li className='py-2'><a href='#'>Partner with us</a></li>
                    <li className='py-2'><a href='#'>FAQ</a></li>
                    <li className='py-2'><a href='#'>Blog</a></li>
                </ul>
            </div>
            <div className='py-4 px-10'>
                <h3 className='text-lg text-slate-700 font-semibold py-4'>Support</h3>
                <ul className='text-sm text-slate-400'>
                    <li className='py-2'><a href='#'>Account</a></li>
                    <li className='py-2'><a href='#'>Support center</a></li>
                    <li className='py-2'><a href='#'>Feedback</a></li>
                    <li className='py-2'><a href='#'>Contact us</a></li>
                    <li className='py-2'><a href='#'>Accesbility</a></li>
                </ul>
            </div>
            <div className='py-4 col-span-1 sm:col-span-2 lg:col-span-1 px-2'>
                <h3 className='text-lg text-slate-700 font-semibold py-4'>Get in touch</h3>
                <p className='text-sm text-slate-400'>Question or feedback ?</p>
                <p className='text-sm text-slate-400 mb-4'>We'd love to hear from you</p>
                <form>
                    <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email</label>
                    <div className="relative">
                        <input type="search" id="search" className="block w-full p-3 pl-4 text-sm placeholder:text-gray-400 text-gray-600 border border-gray-200 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email address" required />
                        <button type="submit" className="text-white absolute right-2 bottom-2 bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><BiSend className='w-4 h-4' /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}
