import React, { useState } from 'react'
import Button from '../components/button'
import searchIcon from "../assets/search.svg"
import picData from "../data/picturesData"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderComponent from '../components/sliderComponent';
import SVG from '../components/svg';
const Header = () => {

    const data1 = [
        {
            location: 'Canmore',
            rentalType: 'Vacation rentals'
        },
        {
            location: 'BenalMadena',
            rentalType: 'Beach house rentals'
        },
        {
            location: 'Marbella',
            rentalType: 'Apartment rentals'
        },
        {
            location: 'Mijas',
            rentalType: 'Apartment rentals'
        },
        {
            location: 'Prescott',
            rentalType: 'Cottage rentals'
        },
        {
            location: 'Scottsdales',
            rentalType: 'Apartment rentals'
        },
        {
            location: 'Tucson',
            rentalType: 'Apartment rentals'
        },
        {
            location: 'Jasper',
            rentalType: 'Vacation rentals'
        },
        {
            location: 'Mountain View',
            rentalType: 'Cabin rentals'
        },
        {
            location: 'Devonport',
            rentalType: 'Vacation rentals'
        },
        {
            location: 'MallaCotta',
            rentalType: 'Vacation rentals'
        },
        {
            location: 'Ibiza',
            rentalType: 'Apartment rentals'
        },
        {
            location: 'Anaheim',
            rentalType: 'Beach House rentals'
        },
        {
            location: 'Monterey',
            rentalType: 'Apartment rentals'
        },

        {
            location: 'Paso Robles',
            rentalType: 'House rentals'
        },
        {
            location: 'Santa Barbra',
            rentalType: 'Vacation rentals'
        },
        {
            location: 'Sonoma',
            rentalType: 'Rentals with pools'
        },
    ];


    const data2 = [
        {
            title: "Support",
            items: [
                "Help Center",
                "Air=Cover",
                "Anti-discrimination",
                "Disability support",
                "Cancellation options",
                "Report neighborhood concern",
            ],
        },
        {
            title: "Hosting",
            items: [
                "Airbnb your home",
                "AirCover for Hosts",
                "Hosting resources",
                "Community forum",
                "Hosting responsibly",
                "Airbnb-friendly apartments",
            ],
        },]

    return (
        <div className="rounded-md">
            <div className="flex lg:w-full bg-gray-100 h-16">
                <span className="text-lg underline m-auto">Learn about Guest Favorites, the most loved homes on Airbnb</span>
            </div>
            <div className=" shadow-sm h-32 m-8">
                <div className="flex flex-row ml-12">
                    <img
                        className="w-28"
                        src="https://s3-alpha-sig.figma.com/img/3764/0204/d9db35f46d0e258b7b07ac83a5018eeb?Expires=1707091200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eB1BfYhPGuUmO80ANCerOMkN~h3oGxzskp~YBYeXTYL-2rW8gVm7MFlebhUzlqiJJW-e66zIvEFoJhLhBQ9O4GLOgCTR4-xsTQIZURHFeMiMRWNKs3AwKjKz1lVc71LfNsNf83RbSAsMzhA30wIo1IVdDiy2O5X4rqhXMr-SsiyAmbcVnzG5-UNYEaa4Ad4NLKzzpf~9Bmgrf9ptYzhUzQVwG3beP1lZNH7VJIKThOeAFCJVkdx-KSto1f2jT4EK4t7bgwOz9bpbcs2Ng2v20KEeffm39UzBDJHXf4-YhazasyoOclKV7KfPMYF5jzyDfOa668ozf58WlF656VvvKw__"
                    />
                    <span className="flex ml-[580px]">
                        <Button text={"Stays"} className={"h-12 w-28 text-black font-medium text-lg hover:bg-gray-100 hover:rounded-3xl hover:text-gray-800"} />
                        <Button text={"Experiences"} className={"h-12 w-28 text-gray-400 text-lg hover:bg-gray-100 hover:rounded-3xl hover:text-gray-800"} />
                        <Button text={"Online Experiences"} className={"h-12 w-60 text-gray-400 text-lg hover:bg-gray-100 hover:rounded-3xl hover:text-gray-800"} />
                    </span>
                    <div className="flex-1 flex items-center justify-end space-x-4 text-gray-500">
                        <a className="hidden md:inline" href="#">
                            Become a host
                        </a>
                        <svg
                            className="h-6 cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        <div className="flex space-x-2 border-2 rounded-full p-2">
                            <svg
                                className="h-6 cursor-pointer"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg
                                className="h-6 cursor-pointer"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='w-[900px] flex flex-row h-16  rounded-full m-auto mt-4' style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                    <div className='    border-r-2 h-16  w-[270px] ' >
                        <Button text={"Where"} className={"h-16  w-[270px]  text-balck text-lg hover:bg-gray-200 hover:rounded-3xl hover:text-gray-800"} />
                    </div>

                    <div className='   border-r-2  h-16  w-48 ' >
                        <Button text={"Check In"} className={"h-16   w-48 text-balck text-lg hover:bg-gray-200 hover:rounded-3xl hover:text-gray-800"} />
                    </div>
                    <div className='   border-r-2  h-16  w-48 ' >
                        <Button text={"Check Out"} className={"h-16   w-48 text-balck text-lg hover:bg-gray-200 hover:rounded-3xl hover:text-gray-800"} />
                    </div>

                    <div className='     h-16  w-[330px]  relative flex ' >
                        <Button text={"Who"} className={"h-16  w-[270px]  text-balck text-lg hover:bg-gray-200 hover:rounded-3xl hover:text-gray-800"} />
                        <img className=" mt-[3px] h-14 w-14 mr-2 " src={searchIcon} />
                    </div>
                </div>
            </div>
            <div className='flex flex-row'>

                <div className='flex flex-row  h-content w-3/4  border-2 border-red-500 ml-20 space-x-12'>
                    <div className='w-20 h-20 flex flex-col space-y-[4px] justify-center'>
                        <img className="w-8 h-8" src='https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg' />
                        <p className='text-xs font-semibold'>Countryside</p>
                    </div>
                     <div className='w-20 h-20 flex flex-col space-y-[4px] justify-center '>
                        <img className="w-8 h-8" src='https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg' />
                        <p className='text-xs font-semibold'>arctic</p>
                    </div>

                    <div className='w-20 h-20 flex flex-col space-y-[4px] justify-center'>
                        <img className="w-8 h-8" src='https://a0.muscache.com/pictures/ed8b9e47-609b-44c2-9768-33e6a22eccb2.jpg' />
                        <p className='text-xs font-semibold'>Iconic cities</p>
                    </div>

                    <div className='w-20 h-20 flex flex-col space-y-[4px] justify-center'>
                        <img className="w-8 h-8" src='https://a0.muscache.com/pictures/c027ff1a-b89c-4331-ae04-f8dee1cdc287.jpg' />
                        <p className='text-xs font-semibold'>Houseboats</p>
                    </div>

                    <div className='w-20 h-20 flex flex-col space-y-[4px] justify-center'>
                        <img className="w-8 h-8" src='https://a0.muscache.com/pictures/3726d94b-534a-42b8-bca0-a0304d912260.jpg' />
                        <p className='text-xs font-semibold'>Trending</p>
                    </div>

                    <div className='w-20 h-20 flex flex-col space-y-[4px] justify-center'>
                        <img className="w-8 h-8" src='https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg' />
                        <p className='text-xs font-semibold'>Islands</p>
                    </div>

                    <div className='w-20 h-20 flex flex-col space-y-[4px] justify-center'>
                        <img className="w-8 h-8" src='https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg' />
                        <p className='text-xs font-semibold'>Farms</p>
                    </div>

                    <div className='w-20 h-20 flex flex-col space-y-[4px] justify-center'>
                        <img className="w-8 h-8" src='https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg' />
                        <p className='text-xs font-semibold'>Lakefront</p>
                    </div>

                    <div className='w-20 h-20 flex flex-col space-y-[4px] justify-center'>
                        <img className="w-8 h-8" src='https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg' />
                        <p className='text-xs font-semibold'>Amazing views</p>
                    </div>
                    <div className='w-20 h-20 flex flex-col space-y-[4px] justify-center'>
                        <img className="w-8 h-8" src='https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg' />
                        <p className='text-xs font-semibold'>Bed and Breakfast</p>
                    </div>
                    <div className='w-20 h-20 flex flex-col space-y-[4px] justify-center'>
                        <img className="w-8 h-8" src='https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg' />
                        <p className='text-xs font-semibold'>Design</p>
                    </div>
                    <div className='w-20 h-20 flex flex-col space-y-[4px] justify-center'>
                        <img className="w-8 h-8" src='https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg' />
                        <p className='text-xs font-semibold'>Cabins</p>
                    </div>
                    <div className='w-20 h-20 flex flex-col space-y-[4px] justify-center'>
                        <img className="w-8 h-8" src='https://a0.muscache.com/pictures/31c1d523-cc46-45b3-957a-da76c30c85f9.jpg' />
                        <p className='text-xs font-semibold'>Campers</p>
                    </div>
                    <div className='w-20 h-20 flex flex-col space-y-[4px] justify-center'>
                        <img className="w-8 h-8" src='https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg' />
                        <p className='text-xs font-semibold'>National Parks </p>
                    </div>
                </div>
                <div className=' mt-4 h-12 w-28  shadow-lg rounded-xl  ml-4 flex flex-row' style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}>
                    <SVG
                        width={32}
                        height={24}
                        viewBox="0 0 32 32"
                        pathName="filterIcon"
                        fill="LightGray"
                        strokeColor="gray"
                        strokeLinecap="round"
                        className=" flex   m-auto"

                    />
                    <p className='m-auto'> Filters</p>
                </div>
                <div className=' mt-4 h-12 w-56  shadow-lg rounded-xl  ml-2 flex flex-row' style={{ boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)' }}>
                    <p className='m-auto'> Display total befor taxes</p>

                    <input
                        className="mr-2 mt-[1rem]  h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                        type="checkbox"
                        role="switch" />

                </div>
            </div>
              <div className="w-[1800px]  py-8  grid grid-cols-6 ml-20 gap-8  ">
                {picData.map((item, index) => (
                    <div key={item.id} className="text-gray-800   ">

                        <div className="z-40 flex items-center justify-center relative">
                            <SVG
                                width={44}
                                height={44}
                                viewBox="0 0 32 32"
                                pathName="Wishlist"
                                fill="LightGray"
                                strokeColor="gray"
                                strokeLinecap="round"
                                className=" flex ml-60 absolute mt-10 mr-2"
                            />
                        </div>
                        <SliderComponent images={item.images || item.urls} />

                        <h2 className="font-bold">{item.name}</h2>
                        <p>{item.distance}</p>
                        <p>{item.date}</p>
                        <p>{item.price}</p>
                    </div>
                ))}
            </div>
            <footer className="bg-gray-100 text-xs">
                <div className="max-w-7xl mx-auto px-24 py-14 md:px-32 grid grid-cols-6 md:grid-cols-6 gap-16">
                    <div className="grid grid-cols-6 gap-4 w-[1200px]">
                        {data1.map((rental) => (
                            <div key={rental.location} className="text-gray-800">
                                <Button
                                    text={rental.location}
                                    className={"h-8 w-auto font-bold text-lg hover:bg-gray-200 hover:rounded-2xl"}
                                />
                                <p className="text-sm">{rental.rentalType}</p>
                            </div>
                        ))}
                        <Button text={"Show more.."} className={"h-8 w-32 font-bold text-lg hover:bg-gray-100 hover:rounded-2xl"} />
                    </div>
                </div>
            </footer>
            <div className="max-w-7xl ml-96 px-24 py-14 md:px-32 grid grid-cols-2 md:grid-cols-3 gap-16">
                {data2.map((item) => (
                    <div key={item.title} className="text-gray-800 ">
                        <h5 className="font-bold ml-20">{item.title}</h5>
                        <div className="flex flex-col space-y-2 mt-4">          {item.items.map((subItem) => (
                            <Button key={subItem} text={subItem} className="w-60 text-gray-800 border-none outline-none hover:bg-gray-100 hover:rounded-sm" />
                        ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Header;