import React from 'react';
import Github_icon from '../../assets/Github_icon.png'
import Linkedin_icon from '../../assets/Linkedin_icon.png'
import Email_icon from '../../assets/Email_icon.png'
import Avatar400 from '../../assets/Avatar400.png'
import { GithubCalendar } from '../../components/githubCalendar/GithubCalendar';

export const Home = () => {

    return (
        <div>
            <div className="grid grid-cols-2 gap-4 bg-red-200">
                <div className=' bg-blue-500 m-auto text-center'>
                    <h1 className='text-5xl m-1'>Mario Rodriguez</h1>
                    <h2 className='text-3xl m-1'>Frontend Developer</h2>
                    <p className='text-lg m-1'>Technology lover, prepared to take all your ideas to production</p>
                </div>
                <div className='bg-green-400 m-auto'>
                    <img src={Avatar400} alt="IMG" className='h-2/4'  />
                </div>
            </div>
            <GithubCalendar/>
        </div>
    );
};
