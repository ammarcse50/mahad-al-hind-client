import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';
const BreakingNews = () => {
    return (
        <div className='flex items-center p-3 pt-32'>
        <Link to="/form"> <button className='btn btn-sm  hover:shadow-xl hover:shadow-[#0ecb34] hover:bg-[#0ecb34] bg-orange-400 rounded-xl text-black  text-xl'>News</button></Link>    
            <Marquee pauseOnClick={true} className='font-bold text-orange-400'>


                   ভর্তি চলছে মা'হাদুল কিরা'আত আল হিন্দে অনলাইন ও অফলাইন | কিরা'আত এ সাবা ও আশা'রার ভর্তি চলছে । যোগাযোগ : +91 93652 62648     


            </Marquee>
            
        </div>
    );
};

export default BreakingNews;