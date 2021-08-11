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
				<section id='projects' className='text-gray-400 bg-gray-100'>
					<div className='container px-5 py-10 mx-auto text-center lg:px-40'>
						<div className='flex flex-col w-full w-10 mb-4'>
							<CodeIcon className='mx-auto inline-block w-10 mb-4' />
							<h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
								Apps I've Built
							</h1>
							<p className='lg:w-2/3 mx-auto leading-relaxed text-base'>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum
								tempore libero iusto, voluptatibus neque ipsa tempora blanditiis
								nam at illo expedita voluptatem sapiente et error! Voluptatum
								suscipit quod porro ad.
							</p>
						</div>
					</div>
					<div className='bg-gray-100 min-h-screen py-5 px-10'>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 xl-grid-cols-4 gap-y-10 gap-x-6 lg:px-10'>
							{projectData &&
								projectData.map((project, index) => (
									<div className='container mx-auto shadow-lg rounded-lg max-w-md hover:shadow-2xl transition duration-300'>
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
											{/* <a
											className='sm:w-1/2 w-100 p-4'
											href={project.websiteLink}
											alt={project.projectTitle}
											key={index}
											target='_blank'
											rel='noopener noreferrer'
										> */}
											{/* <div className='flex relative'>
											<img
												src={project.mainImage.asset.url}
												alt={project.mainImage.alt}
												className='absolute inset-0 w-full h-full object-cover object center'
											/> */}
											{/* <div className='px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100'>
												<h1 className='title-font text-lg font-medium text-white'>
													{project.projectTitle}
												</h1>
												<p className='leading-relaxed'>{project.description}</p>
											</div> */}
											{/* </div> */}
											{/* </a> */}
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
