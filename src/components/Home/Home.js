import React from 'react'
import HeroImg from '../../images/elli_pic.svg'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <React.Fragment>
      <section id='about'>
        <div className='container mx-auto flex px-10 py-10 md:flex-row flex-col items-center mt-20 '>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <div className='text-animation'>
              <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white backSpace'>
                Hi, I'm Elli.
                <br className='hidden lg:inline-block backSpace' /> I love to
                build amazing apps.
              </h1>
              <p className='mb-8 leading-relaxed text-base text-gray-400 backSpace'>
                I am a highly motivated, collaborative, and communicative,
                Toronto-based, full stack developer with a passion for making
                apps that have an impact on people's lives. I am a recent
                graduate of General Assembly's Software Engineering Immersive
                Bootcamp and have an advanced diploma in User Experience Design
                and Development from George Brown College. On a personal note, I
                am passionate about future technologies such as VR/AR and have
                made several projects in these emerging fields.
              </p>
            </div>
            <div className='flex justify-center button-animation backSpace'>
              <Link
                to='/contact'
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

          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 face-animation backSpace'>
            <img
              className='object-cover object-center rounded'
              alt='hero'
              src={HeroImg}
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
