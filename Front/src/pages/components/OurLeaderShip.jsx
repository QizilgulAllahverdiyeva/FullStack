import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import person1 from '../../assets/3.jpg'
import person2 from '../../assets/4.jpg'
import person3 from '../../assets/5.jpg'

const OurLeaderShip = () => {
    return (
        <section className='ourLeaderShip'>
            <h1>OUR LEADERSHIP</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis, eius, 
                eos consectetur consequuntur sit. Aut, perspiciatis, reprehenderit.</p>

            <div className='people'>
            <div className='person'>
                <img src={person1} alt="" />
                <h2>Jean Smith</h2>
                <h3>MINING EXPERT</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, repellat. At, soluta. 
                    Repellendus vero, consequuntur!</p>
                    <div className='icons'>
                    <FaFacebookF className='icon'/>
                    <FaTwitter className='icon'/>
                    <RiInstagramFill className='icon' />
                    </div>
            </div>
            <div className='person'>
                <img src={person2} alt="" />
                <h2>Jean Smith</h2>
                <h3>MINING EXPERT</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, repellat. At, soluta. 
                    Repellendus vero, consequuntur!</p>
                    <div className='icons'>
                    <FaFacebookF className='icon'/>
                    <FaTwitter className='icon'/>
                    <RiInstagramFill className='icon' />
                    </div>
            </div>
            <div className='person'>
                <img src={person3} alt="" />
                <h2>Jean Smith</h2>
                <h3>MINING EXPERT</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, repellat. At, soluta. 
                    Repellendus vero, consequuntur!</p>
                    <div className='icons'>
                    <FaFacebookF className='icon'/>
                    <FaTwitter className='icon'/>
                    <RiInstagramFill className='icon' />
                    </div>
            </div>
            </div>

        </section>
    )
}

export default OurLeaderShip