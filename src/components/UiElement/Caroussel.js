import React, { useState, useRef, useEffect } from 'react';

import Card from './Card'
import data from './data.json';

export default function Caroussel() {
    const items = [];
    
    const maxScrollWidth = useRef(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carousel = useRef(null);

    const movePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };

    const moveNext = () => {
        if (
            carousel.current !== null &&
            carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
        ) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const isDisabled = (direction) => {
        if (direction === 'prev') {
            return currentIndex <= 0;
        }

        if (direction === 'next' && carousel.current !== null) {
            return (
                carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
            );
        }

        return false;
    };

    useEffect(() => {
        if (carousel !== null && carousel.current !== null) {
            carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
        }
    }, [currentIndex]);

    useEffect(() => {
        maxScrollWidth.current = carousel.current
            ? carousel.current.scrollWidth - carousel.current.offsetWidth
            : 0;
    }, []);

    return (
        <React.Fragment>
            <div className='2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-6'>
            <div className="flex gap-3 justify-end absolute top-9 right-6 md:top-4 md:right-6 w-full h-full">
                    <button
                        onClick={movePrev}
                        className="hover:bg-blue-900/75 text-gray-600 w-9 sm:w-14 h-9 sm:h-14 text-center bg-white rounded-full shadow-lg shadow-slate-300 opacity-75 hover:bg-purple-500 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('prev')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="sm:h-10 sm:w-10 h-4 w-4 p-0 ml-2 sm:ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        <span className="sr-only">Prev</span>
                    </button>
                    <button
                        onClick={moveNext}
                        className="hover:bg-blue-900/75 text-gray-600 w-9 sm:w-14 h-9 sm:h-14 text-center bg-white rounded-full shadow-lg shadow-slate-300 opacity-75 hover:bg-purple-500 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
                        disabled={isDisabled('next')}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="sm:h-10 sm:w-10 h-4 w-4 p-0 ml-2 sm:ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                        <span className="sr-only">Next</span>
                    </button>
                </div>
                <div className="carousel my-8 mx-auto">
                    <div className="overflow-hidden">

                        <div
                            ref={carousel}
                            className="relative flex gap-6 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
                        >
                            {data.resources.map((resource, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="carousel-item relative w-64 h-96 snap-start"
                                    >
                                        <Card />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    );
}
