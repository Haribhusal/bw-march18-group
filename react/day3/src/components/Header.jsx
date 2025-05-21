import { ChevronDown, CirclePlay, Search } from 'lucide-react'
import React from 'react'

const Header = () => {
    return (
        <header>

            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <div className="logo">
                    <img src="./logo.png" className='h-20' alt="" />
                </div>
                <nav className='flex gap-5 items-center'>
                    <div className='group relative'>
                        <div className='flex'>
                            News
                            <span>
                                <ChevronDown />
                            </span>
                        </div>
                        <div className="dropdown bg-white absolute shadow-2xl px-5 py-3 rounded w-64 hidden group-hover:block">
                            <div className="flex flex-col">
                                <a href="#" className='hover:text-red-500'>Latest News</a>
                                <a href="#" className='hover:text-red-500'>Popular News</a>
                                <a href="#" className='hover:text-red-500'>For you</a>
                            </div>
                        </div>
                    </div>
                    <a href="#">Ukraine War</a>
                    <a href="#">Features</a>
                    <a href="#">Economy</a>
                    <a href="#">Openion</a>
                    <a href="#">Video</a>
                    <div className='group relative'>
                        <div className='flex'>
                            More
                            <span>
                                <ChevronDown />
                            </span>
                        </div>
                        <div className="dropdown bg-white absolute shadow-2xl px-5 py-3 rounded w-64 hidden group-hover:block">
                            <div className="flex flex-col">
                                <a href="#" className='hover:text-red-500'>Latest News</a>
                                <a href="#" className='hover:text-red-500'>Popular News</a>
                                <a href="#" className='hover:text-red-500'>For you</a>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="buttons flex gap-3">
                    <button className='flex gap-1'>
                        <CirclePlay />
                        Live
                    </button>

                    <button>
                        <Search />
                    </button>
                </div>
            </div>

        </header>
    )
}

export default Header


