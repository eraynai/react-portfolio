import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/elli_logo_v2.svg';
import { SocialIcon } from 'react-social-icons';
import { FcViewDetails } from 'react-icons/fc';
import CV from '../../images/cv.pdf';

export default function Navbar({ fixed }) {
	return (
		<React.Fragment>
			<header className='text-white bg-yellow-500 body-font w-full'>
				<div class='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
					<nav className='flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto mt-2'>
						<NavLink
							className='mr-5 cursor-pointer border-b border-transparent hover:opacity-75 text-white font-bold'
							to='/'
						>
							Home
						</NavLink>
						<NavLink
							className='mr-5 cursor-pointer border-b border-transparent hover:opacity-75 text-white font-bold'
							to='/project'
						>
							Projects
						</NavLink>
						<NavLink
							className='mr-5 cursor-pointer border-b border-transparent hover:opacity-75 text-white font-bold'
							to='/skills'
						>
							Skills
						</NavLink>
						<NavLink
							className='mr-5 cursor-pointer border-b border-transparent hover:opacity-75 text-white font-bold'
							to='/contact'
						>
							Contact
						</NavLink>
					</nav>
					<div className=' flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0'>
						<img
							style={{ height: 40, marginTop: 10, marginBottom: 10 }}
							src={Logo}
							alt='Workflow'
							className='mr-2'
						/>
						<NavLink to='/' className='font-bold text-xl uppercase text-white'>
							Full Stack Developer
						</NavLink>
					</div>
					<div className='lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 mt-2'>
						<SocialIcon
							url='https://www.linkedin.com/in/elliraynai/'
							className='hover:opacity-75'
							target='_blank'
							fgColor='#fff'
							style={{ height: 35, width: 35 }}
						></SocialIcon>
						<SocialIcon
							url='https://github.com/eraynai'
							className='ml-4 hover:opacity-75'
							target='_blank'
							fgColor='#fff'
							style={{ height: 35, width: 35 }}
						></SocialIcon>
						<a href={CV} target='_blank' rel='noopener noreferrer'>
							<FcViewDetails
								style={{ height: 36, width: 36 }}
								className='ml-4 hover:opacity-75'
							></FcViewDetails>
						</a>
					</div>
				</div>
			</header>
		</React.Fragment>
	);
}
