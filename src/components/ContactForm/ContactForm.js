import React, { useState } from 'react';

export default function Contact() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	function encode(data) {
		return Object.keys(data)
			.map(
				(key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
			)
			.join('&');
	}

	function handleSubmit(e) {
		e.preventDefault();
		fetch('/contact', {
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: encode({ 'form-name': 'contact', name, email, message }),
		});
	}
	return (
		<section id='contact' className='relative'>
			<div className='container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap'>
				<form
					netlify
					name='contact'
					onSubmit={handleSubmit}
					className='lg:w-1/3 md:w-1/2 flex flex-col md:m-auto w-full md:py-8 mt-8 md:mt-0'
				>
					<h2 className='text-white sm:text-4xl text-3xl mb-1 font-medium title-font'>
						Hire Me
					</h2>
					<p className='leading-relaxed mb-5 text-gray-400'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
						suscipit officia aspernatur veritatis. Asperiores, aliquid?
					</p>
					<div className='relative mb-4'>
						<label htmlFor='name' className='leading-7 text-sm text-gray-400'>
							Name
						</label>
						<input
							type='text'
							id='name'
							name='name'
							className='w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className='relative mb-4'>
						<label htmlFor='email' className='leading-7 text-sm text-gray-400'>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							className='w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='relative mb-4'>
						<label
							htmlFor='message'
							className='leading-7 text-sm text-gray-400'
						>
							Message
						</label>
						<textarea
							id='message'
							name='message'
							className='w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
							onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
					<button
						type='submit'
						className='text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 rounded text-lg'
					>
						Submit
					</button>
				</form>
			</div>
		</section>
	);
}
