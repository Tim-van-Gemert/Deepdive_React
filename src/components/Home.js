import '../App.css';
import React, { useState, useEffect, Component} from 'react';

export default class Home extends Component {
    componentDidMount(){
        const target = document.querySelector('.home');
        function handleIntersection(entries) {
            entries.map((entry) => {
                if (entry.isIntersecting) {
                entry.target.classList.add('visible')
                } else {
                entry.target.classList.remove('visible')
                }
            });
        }
        const observer = new IntersectionObserver(handleIntersection);
        observer.observe(target);
    }


    render() {
        return (
        <div className='home notVisible'>
            <div className="flex items-center  justify-center">
                <div className="widgetWrapper grid grid-cols-4 gap-8 p-12 pb-0 max-w-7xl ">
                    <div className="game bg-[#F3F3F4]  w-[10vw]  h-[20vh] rounded-[12px] box flex relative">
                    </div>
                    <div className="game bg-[#F3F3F4]  col-span-3  rounded-[12px] box flex relative">
                    </div>
                    <div className="game bg-[#F3F3F4]  col-span-3  rounded-[12px] box flex relative">
                    </div>
                    <div className="game bg-[#F3F3F4]  w-[10vw]  h-[20vh] rounded-[12px] box flex relative">
                    </div>
                    <div className="game bg-[#F3F3F4]  w-[10vw]  h-[20vh] rounded-[12px] box flex relative">
                    </div>
                    <div className="game bg-[#F3F3F4]  col-span-3  rounded-[12px] box flex relative">
                    </div>
                </div>
            </div>
        </div>
    );
    }
}
