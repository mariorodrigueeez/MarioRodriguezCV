import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Tooltip } from 'react-tooltip'

export const GithubCalendar = () => {

    return (
        <div>
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
    );
};
