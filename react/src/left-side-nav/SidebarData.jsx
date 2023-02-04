import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
    {
        title:'Home',
        path: '/',
        icon:<AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title:'Dashboard',
        path: '/dashboard',
        icon:<AiIcons.AiFillDashboard />,
        cName: 'nav-text'
    },
    {
        title:'Joke',
        path: '/joke',
        icon:<BsIcons.BsFillEmojiLaughingFill />,
        cName: 'nav-text'
    },
    {
        title:'404',
        path: '*',
        icon:<BsIcons.BsFillTelephoneFill />,
        cName: 'nav-text'
    },
];