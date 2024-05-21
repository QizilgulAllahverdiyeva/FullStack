import React from 'react'
import './style.css'
import picture1 from '../../assets/6.jpg'
import picture2 from '../../assets/7.jpg'


const OurBlog = () => {
  return (
    <section className='ourBlog'> 
         <h1>OUR BlOG</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut corporis, eius, 
                eos consectetur consequuntur sit. Aut, perspiciatis, reprehenderit.</p>
   <div className='blogDiv'>
   <div className='blog'>
    <img src={picture1} alt="" />
    <h1>How to Invest In Investing Company</h1>
    <p>JANUARY 18, 2019</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et suscipit iste libero neque. Vitae quidem ducimus voluptatibus nemo cum odio ab enim nisi, 
        itaque, libero fuga veritatis culpa quis!</p>
    <button>Get Started</button>
   </div>
   
   <div className='blog'>
    <img src={picture2} alt="" />
    <h1>How to Invest In Investing Company</h1>
    <p>JANUARY 18, 2019</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat et suscipit iste libero neque. Vitae quidem ducimus voluptatibus nemo cum odio ab enim nisi, 
        itaque, libero fuga veritatis culpa quis!</p>
    <button>Get Started</button>
   </div>
   </div>
    </section>
  )
}

export default OurBlog