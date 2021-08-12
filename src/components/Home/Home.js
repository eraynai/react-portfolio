import React from 'react';
import HeroImg from '../../images/elli_pic.svg';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<React.Fragment>
			<section id='about'>
				<div className='container mx-auto flex px-10 py-20 md:flex-row flex-col items-center mt-20'>
					<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
						<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
							Hi, I'm Elli.
							<br className='hidden lg:inline-block' /> I love to build amazing
							apps.
						</h1>
						<p className='mb-8 leading-relaxed text-base text-gray-400'>
							I am a highly motivated, collaborative, and communicative Toronto
							based fullstack developer with a passion for making apps that have
							an impact on people's lives. I am a graduate of General Assembly's
							Software Engineering Immersive bootcamp and I have a diploma in
							user experience design. On a personal note, I am passionate about
							future technologies such as virtual and augmented reality and have
							made several projects in the immersive field.
						</p>
						<div className='flex justify-center'>
							<Link
								to='/about'
								className='inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg'
							>
								Work With Me
							</Link>
							<Link
								to='/project'
								className='ml-4 inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 hover:text-white rounded text-lg'
							>
								See My Projects
							</Link>
						</div>
					</div>

					<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
						<img
							className='object-cover object-center rounded'
							alt='hero'
							src={HeroImg}
						/>
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}
