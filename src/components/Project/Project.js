import React, { useState, useEffect } from 'react';
import sanityClient from '../../client';
import { CodeIcon } from '@heroicons/react/solid';

export default function Project() {
	const [projectData, setProjectData] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == 'project'] | order(order asc){
			projectTitle,
			codeRepo,
			date,
			place,
			description,
			websiteLink,
			githubLink,
			tags,
			technologies,
			projectType, 
			mainImage{
				asset->{
					_id,
					url
				},
				alt
			}
		}`
			)
			.then((data) => setProjectData(data))
			.catch(console.error);
	}, []);

	return (
		<React.Fragment>
			<main>
				<section id='projects' className='text-gray-400 bg-regal-blue'>
					<div className='container px-5 py-10 mx-auto text-center lg:px-40'>
						<div className='flex flex-col w-full w-10 mb-4'>
							<CodeIcon className='mx-auto inline-block w-10 mb-4' />
							<h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
								Apps I've Built
							</h1>
							<p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
								These are a selection of some of the most exciting projects that
								I worked on over the past year.
							</p>
						</div>
					</div>
					<div className=' min-h-screen py-5 px-10'>
						<div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 lg:px-10'>
							{projectData &&
								projectData.map((project, index) => (
									<div className='bg-gray-100 container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300'>
										<img
											src={project.mainImage.asset.url}
											alt={project.mainImage.alt}
											className='rounded-t-lg w-full'
										/>
										<div className='p-6'>
											<a
												href={project.websiteLink}
												alt={project.projectTitle}
												key={index}
												target='_blank'
												rel='noopener noreferrer'
											>
												<h1 className='md:text-1xl text-xl text-center hover:text-yellow-500 transition duration-200 font-bold text-gray-900'>
													{project.projectTitle}
												</h1>
											</a>
											<a
												href={project.githubLink}
												alt={project.codeRepo}
												key={index}
												target='_blank'
												rel='noopener noreferrer'
											>
												<h2 className='md:text-1xl text-md text-center hover:text-yellow-500 transition duration-200 font-bold text-gray-900'>
													{project.codeRepo}
												</h2>
											</a>
											<p className='text-gray-700 my-2 hover-text-900'>
												{project.description}
											</p>
											<h2 className='text-gray-900'>
												<strong>Finished On:</strong>{' '}
												{new Date(project.date).toLocaleDateString()}
											</h2>
											<h2 className='text-gray-900'>
												<strong>Type:</strong> {project.projectType}
											</h2>
											<h2 className='text-gray-900'>
												<strong>Technologies Used:</strong>
											</h2>
											<ul className='list-disc px-6 py-3 text-gray-900'>
												{project.tags.map((tag) => (
													<li>{tag}</li>
												))}
											</ul>
										</div>
									</div>
								))}
						</div>
					</div>
				</section>
			</main>
		</React.Fragment>
	);
}
