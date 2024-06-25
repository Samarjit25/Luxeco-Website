import React from 'react'
import {data} from "../Pages/restapi.json"

const Menu = () => {
  return (
    <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <div className="heading">OUR COLLECTIONS</div>
                <p>Explore our curated collections, featuring timeless pieces and the latest trends to elevate your style.</p>
            </div>
            <div className="dishes_container">
                {
                    data[0].dishes.map(element=>{
                        return(
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.title}/>
                            <h3>{element.title}</h3>
                            {/* <button>{element.category}</button> */}
                        </div>
                        );
                    })}
            </div>
        </div>
    </section>
  )
}

export default Menu
