import { ChevronDown, CirclePlay, Hamburger, Menu, Search } from 'lucide-react'
import React, { useState } from 'react'

const Header = ({ title }) => {

    const [showMenu, setShowMenu] = useState(true);
    // State variable

    return (
        <header className='relative'>
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <div className="logo flex items-center gap-3">
                    <img src="./logo.png" className='h-20' alt="" />
                    <h1 className='text-2xl hidden md:block'>{`This is ${title}`}</h1>
                </div>
                <nav className=''>
                    <div className="toggle md:hidden">
                        <Menu onClick={() => setShowMenu(!showMenu)} />
                    </div>
                    {showMenu &&
                        <div className="menu fixed md:static left-0 w-full bg-white">
                            <div className="flex gap-5 flex-col md:flex-row items-center">
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
                            </div>
                        </div>
                    }

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


