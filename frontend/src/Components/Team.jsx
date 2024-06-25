import React from 'react'
import {data} from "../Pages/restapi.json"

const Team = () => {
  return (
    <section className='team' id='team'>
        <div className="container">
            <div className="heading_section">
                <h1 className='heading'>OUR DESIGNERS</h1>
                <p>Our designers bring you the latest trends with a touch of timeless elegance, ensuring every piece is a masterpiece.</p>
            </div>
            <div className="team_container">
                {
                    data[0].team.map(element=>{
                        return(
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.name} />
                            <h3>{element.name}</h3>
                            <p>{element.designation}</p>
                        </div>
                        )
                    })
                }
            </div>

        </div>
    </section>
  )
}

export default Team
