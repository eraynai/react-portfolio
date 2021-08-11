import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/elli_logo_v2.svg';
import { SocialIcon } from 'react-social-icons';

export default function Navbar({ fixed }) {
	const [navbarOpen, setNavbarOpen] = useState(false);
	return (
		<>
			<nav className='relative flex flex-wrap items-center justify-between px-2 py-3 bg-yellow-500'>
				<div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
					<div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
						<div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
							<img
								className='block lg:block h-8 w-auto mr-4'
								src={Logo}
								alt='Workflow'
							/>

							<NavLink
								to='/'
								className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white'
								href='#pablo'
							>
								Elli Raynai - Fullstack Developer
							</NavLink>
						</div>
						<button
							className='text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
							type='button'
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<i className='fas fa-bars'></i>
						</button>
					</div>
					<div
						className={
							'lg:flex flex-grow items-center md:p-3' +
							(navbarOpen ? ' flex' : ' hidden')
						}
						id='example-navbar-danger'
					>
						<ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
							<li className='nav-item'>
								<NavLink
									className='lg:px-12 md:px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
									to='/project'
								>
									Projects
								</NavLink>
							</li>
							{/* <li className='nav-item'>
								<NavLink
									className='lg:px-12 md:px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
									href='#pablo'
									to='/post'
								>
									Blog Posts
								</NavLink>
							</li> */}
							<li className='nav-item'>
								<NavLink
									className='lg:px-12 md:px-2 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75'
									href='#pablo'
									to='/about'
								>
									About Me
								</NavLink>
							</li>
							<li className='nav-item md:pt-2 lg:pt-0'>
								<SocialIcon
									url='https://www.linkedin.com/in/elliraynai/'
									className='px-3 flex items-center text-xs leading-snug hover:opacity-75'
									target='_blank'
									fgColor='#fff'
									style={{ height: 35, width: 35 }}
								></SocialIcon>
							</li>
							<li className='nav-item pt-3 md:pt-2 lg:pt-0'>
								<SocialIcon
									url='https://github.com/eraynai'
									className='px-3 lg:ml-4 md:ml-0 flex items-center text-xs leading-snug hover:opacity-75'
									target='_blank'
									fgColor='#fff'
									style={{ height: 35, width: 35 }}
								></SocialIcon>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
