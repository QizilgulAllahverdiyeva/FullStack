import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import axios from 'axios'
import './style.css'

const DataSection = () => {
    const {data, setData} = useContext(ProductsContext)
    const getAllData =  async () =>{
        const res = await axios("http://localhost:3000/foundation")
        setData(res?.data)
    }
    useEffect(()=>{
        getAllData();
    },[])

  return (
    <section className='dataSection'>
        {
            data.map((elem)=>(
                <div key={elem._id}>
                    <img src={elem.img} alt="" />
                    <h3>{elem.title}</h3>
                    <p>{elem.price}</p>
                </div>
            ))
        }
    </section>
  )
}

export default DataSection