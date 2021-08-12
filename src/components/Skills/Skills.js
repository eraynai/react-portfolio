import React from 'react';
import { skills } from '../Data/Data';
import { BadgeCheckIcon, ChipIcon } from '@heroicons/react/solid';

export default function Skills() {
	return (
		<React.Fragment>
			<section id='projects' className='text-gray-400 bg-regal-blue'>
				<div className='container px-5 py-10 mx-auto'>
					<div className='text-center mb-20'>
						<ChipIcon className='w-10 inline-block mb-4' />
						<h1 className='sm:text-4xl text-3xl font-medium title-font text-white mb-4'>
							Skills &amp; Technologies
						</h1>
						<p className='text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
							perferendis consectetur dolor officiis est harum, a, velit ipsam
							soluta numquam quam voluptas inventore non incidunt iure eveniet,
							dolore error repudiandae.
						</p>
					</div>
					<div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 '>
						{skills.map((skill) => (
							<div key={skill} className='p-2 sm:w-1/2 w-full'>
								<div className='bg-gray-600 rounded flex p-4 h-full items-center'>
									<BadgeCheckIcon className='text-green-400 w-6 h-6 flex-shrink-0 mr-4' />
									<span className='title-font font-medium text-white'>
										{skill}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</React.Fragment>
	);
}