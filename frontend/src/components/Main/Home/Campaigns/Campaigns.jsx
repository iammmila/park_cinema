import React from 'react'
import "./style.scss"
import campaign1 from "../../../../assets/campaigns/campaign1.jpeg"
import campaign2 from "../../../../assets/campaigns/campaign2.jpeg"
import campaign3 from "../../../../assets/campaigns/campaign3.jpeg"

function Campaigns() {
  return (
    <section className='home-campaigns'>
      <div className="container">
        <div className="campaigns-section">
          <div style={{ width: "18%" }} className='line' ></div>
          <h1>Recent Campaigns</h1>
          <ul className='cards'>
            <li className="card">
              <div className="card-img">
                <img src={campaign1} alt="film" className="img-responsive" />
              </div>
            </li>
            <li className="card">
              <div className="card-img">
                <img src={campaign2} alt="film" className="img-responsive" />
              </div>
            </li>
            <li className="card">
              <div className="card-img">
                <img src={campaign3} alt="film" className="img-responsive" />
              </div>
            </li>
          </ul>
          <hr />
        </div>
      </div>
    </section>
  )
}

export default Campaigns