import React, { Component } from 'react'
import  './TMfooter.css'

export default class TMSDash extends Component {
    render() {
        return (
          <div id="wrapper" className="toggled">
          <div id="page-content-wrapper">
            <div className="container-fluid"></div>
            <h1 style={{backgroundColor:'black', color:'white', padding:'10px',textAlign:'center',opacity:".50"}}>Transport Management System </h1>
          <hr/>
          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
         <div class="carousel-item active">
               <img src="%PUBLIC_URL%../../tmain1.png"  height="400" class="d-block w-100" alt="..."/>
         <div class="carousel-caption d-none d-md-block">
              <h5>Prevent Covid 19</h5>
              <p>COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.</p>
       </div>
       </div>
         <div class="carousel-item">
               <img src="%PUBLIC_URL%../../TMSn.jpg"   height="400" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
              <h5>Freight management</h5>
              <p> Streamline the quote-to-contract process. Efficiently manage freight costing, order management, rate determination, and freight billing and settlement for both multimodal and intermodal transportation</p>
     </div>
    </div>
         <div class="carousel-item">
               <img src="%PUBLIC_URL%../../driN.jpg" height="400" class="d-block w-100" alt="..."/>
         <div class="carousel-caption d-none d-md-block">
              <h5>Greater customer satisfaction</h5>
              <p>The ability to meet customer commitments is essential for any business competing in today’s global marketplace. </p>
      </div>
     </div>
    </div>
               <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Previous</span>
              </button>
               <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="visually-hidden">Next</span>
               </button>
</div>

          <hr/>

          
  
            <div class="row">
            
              <div class="col-sm-4">
                <div class="card">
                  <img
                    src="%PUBLIC_URL%../../dri.jpg"
                    width="200"
                    height="200"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Driver List</h5>
                    <p class="card-text">
                     
                    </p>
                    <a href="/DriHome" className="btn btn-primary" style= {{textDecoration:'none', color:'white'}}><i className="fas fa-shipping-fast"></i> Go Driver List</a>
                  </div>
                </div>
              </div>

  
              <div class="col-sm-4">
                <div class="card">
                  <img
                    src="%PUBLIC_URL%../../sche.jpg"
                    width="200"
                    height="200"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Transport Schedule</h5>
                    <p class="card-text">
                   
                    </p>
                    <a href="/TMSSchedule" className="btn btn-primary" style= {{textDecoration:'none', color:'white'}}><i className="fas fa-clipboard"></i> Go  Schedules</a>
                  </div>
                </div>
              <br/><br/>
              </div>

              <div class="col-sm-4">
                <div class="card">
                  <img
                    src="%PUBLIC_URL%../../vehi.jpg"
                    width="200"
                    height="200"
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">Vehicle List</h5>
                    <p class="card-text">
                    
                    </p>
                    <a href="/vehicleDash" className="btn btn-primary" style= {{textDecoration:'none', color:'white'}}><i className="fas fa-truck-monster"></i> Go Vehicle List</a>
                  </div>
                </div>
                <br/>
              </div>
              <br/>
             
              
              <div class="d-grid gap-2 d-md-flex justify-content-md-end"></div>

                    
              
              <div class="footer">
              <div class="contain">

            <br/>
                  <div class="col">
                  <h1>ABOUT US</h1>

  
            <ul>
 
                  <li><i class="fas fa-phone-square"></i>&nbsp; &nbsp; Contact us</li>
                  <li><i class="fas fa-comment-alt"></i>&nbsp; &nbsp;Suggestion</li>
    
            </ul>
  
          
            </div>
                <div class="col">
                <h1></h1>
            <ul>
                <li></li>
            </ul>
           </div>

                <div class="col">
                <div class="position-absolute top-50 start-50 translate-middle">
           <br/>

                <img src="%PUBLIC_URL%../../cas.png.jpeg" class="rounded-circle" width="40" height="40"  alt=""/>
                <h1>CASANOVA</h1>
  
            <ul>
                <li>@ Copyright reserved</li>
           </ul>
          </div>
          </div>
                <div class="col">
                <h1></h1>
          <ul>
         </ul>
        </div>

              <div class="position-absolute top-50 end-0 translate-middle-y">
              <div class="col social">
              <h1>Help</h1>
  
          <ul>
  
              <li><i class="fas fa-envelope"></i>&nbsp; &nbsp; <i class="fas fa-map-marker-alt"></i>&nbsp; &nbsp;<i class="fas fa-star"></i></li>
    
         </ul>
  
         </div>
         </div>
         <div class="clearfix">


         </div>
         </div>
         </div>

      </div>
    </div>
  </div>

          
            
        )
    }
}
