import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Tooltip } from 'react-tooltip'

export const Home = () => {

    return (
        <div>
            <div className="grid grid-cols-2 gap-4">
                <div className=' bg-blue-500 '>
                    <div className='text-center'>
                        <h1 className='text-5xl'>Mario Rodriguez</h1>
                        <h2 className='text-3xl'>Web Developer</h2>
                    </div>
                    <div className=''>
                        <GitHubCalendar
                            username="mariorodrigueeez"
                            theme={{
                                light: ['#fff', '#ab9680', '#917561', '#644c44', '#4b3b38'],
                                dark: ['#fff', '#ab9680', '#917561', '#644c44', '#4b3b38'],
                            }}
                            renderBlock={(block, activity) => (
                                <a
                                    data-tooltip-id="my-tooltip"
                                    data-tooltip-content={`${activity.count} activities on ${activity.date}`}
                                >
                                    {block}
                                </a>
                            )}
                        />
                        <Tooltip id="my-tooltip" />
                    </div>
                </div>
                <div className='bg-green-400 m-auto'>
                    <img src="" alt="IMG" className='bg-slate-600 m-10' height='400px' width='400px' />
                </div>
            </div>
        </div>
    );
};
