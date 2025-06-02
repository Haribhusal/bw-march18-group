import { ChevronDown, CirclePlay, Hamburger, Menu, Search } from 'lucide-react'
import React, { useState } from 'react'
import { NavLink } from 'react-router';

const Header = () => {

    const [showMenu, setShowMenu] = useState(true);
    // State variable

    return (
        <header className='shadow bg-white py-1 sticky top-0'>
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <NavLink className="logo flex items-center gap-3">
                    <img src="./logo.png" className='h-16' alt="" />
                    <h1 className='text-2xl hidden md:block'>ABC News</h1>
                </NavLink>
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
                                            <NavLink to="#" className='hover:text-red-500'>Latest News</NavLink>
                                            <NavLink to="#" className='hover:text-red-500'>Popular News</NavLink>
                                            <NavLink to="#" className='hover:text-red-500'>For you</NavLink>
                                        </div>
                                    </div>
                                </div>
                                <NavLink to="#">Ukraine War</NavLink>
                                <NavLink to="#">Features</NavLink>
                                <NavLink to="economy">Economy</NavLink>
                                <NavLink to="openion">Openion</NavLink>
                                <NavLink to="video">Video</NavLink>
                                <div className='group relative'>
                                    <div className='flex'>
                                        More
                                        <span>
                                            <ChevronDown />
                                        </span>
                                    </div>
                                    <div className="dropdown bg-white absolute shadow-2xl px-5 py-3 rounded w-64 hidden group-hover:block">
                                        <div className="flex flex-col">
                                            <NavLink to="#" className='hover:text-red-500'>Latest News</NavLink>
                                            <NavLink to="#" className='hover:text-red-500'>Popular News</NavLink>
                                            <NavLink to="#" className='hover:text-red-500'>For you</NavLink>
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


