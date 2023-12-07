import React from 'react'
import { PiBellDuotone, PiEyeDuotone } from "react-icons/pi";
import Notifications from '../Notifications/Notifications';
import cohortsImage from '../../assets/cohorts.png';
import TestimonialList from '../TestimonialList/TestimonialList';
import Logo from "../../assets/Vector.png"
import LoginPanel from '../LoginPanel/LoginPanel';
//https://www.cssportal.com/css-gradient-generator/


const HomePage = () => {
  return (
    <div className='bg-radial-gradient w-full  flex flex-col items-center justify-between sm:pl-8 py-4 sm:overflow-x-hidden'>
        <div className='relative w-full sm:h-[30%] flex flex-col sm:flex-row items-center justify-between gap-4 px-4 sm:pl-2 '>
            <img src={Logo} alt='logo' className='ml-10 sm:hidden absolute -top-1 right-4'/>
            <div className='text-[#F2F2F2] flex flex-col gap-2 p-1 pt-3 sm:pt-0 sm:w-2/5 sm:pl-10'>
                    <PiBellDuotone size={30}/>
                    <h1 className='text-2xl font-semibold tracking-wide leading-8'>Get notified when a highly correlated whale makes a move</h1>
                    <p className='text-xs font-medium text-slate-400'>Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</p>
            </div>
            <div className='w-full sm:w-3/5 sm:pl-20'>
                <Notifications />
            </div>
        </div>
        <div className='sm:w-[90%] p-0 sm:flex sm:items-center hidden sm:justify-center px-1 text-white z-0'>
                <div className='w-full h-full'>
                    <img src={cohortsImage} alt='cohort' width={300} height={300}/>
                </div>
                <div className='flex flex-col h-3/5 items-end justify-start gap-2 max-w-[305px]'>
                    <PiEyeDuotone size={23}/>
                    <h1 className='text-3xl text-right'>Watch what the whales are doing</h1>
                    <p className='text-sm text-right'>All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.</p>
                </div>
        </div>
        <div className='w-full h-full flex sm:hidden'>
            <LoginPanel />
        </div>
        
        <div className='relative w-4/5 flex ml-7 border-b'>
            <h1 className='sm:absolute -top-14 right-0 text-2xl text-center sm:text-right w-full py-2 text-white'>Testimonials</h1>
        </div>

        <div className='w-full flex items-end justify-between gap-10 px-4 sm:px-0'>
            <img src={Logo} alt='logo' className='ml-10 hidden sm:block'/>
            <TestimonialList />
        </div>
       
    </div>
  )
}

export default HomePage