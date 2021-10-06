import React, { Component } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';

export default class MatMain extends Component {
    render() {
        return (

          
      


            
      <div id="wrapper" className="toggled">
      <div id="page-content-wrapper">
          <div className="container-fluid"></div>


        
              <nav class="navbar navbar-expand-lg navbar-info bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href=""> &#62; Stock DashBoard  <span class="sr-only">(current)</span> </a>
      </li>
   
    </ul>
  </div>
</nav> 


<hr/>



          <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="%PUBLIC_URL%../../main1.png"  height="400" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Prevent Covid 19</h5>
        <p>COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="%PUBLIC_URL%../../main2.png"   height="400" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Home Of Fabrics</h5>
        <p>The Fabric toolchain is available for everyone to use</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="%PUBLIC_URL%../../main3.png" height="400" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Shop for High Fashion Fabrics</h5>
        <p>Browse hundreds of fabric by the yard in every material, print, and style you need to get sewing. Shop online and find a fabric store near you.</p>
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



<div class="p-3 mb-2 bg-info text-dark rounded-3">
<div class="row">
  <div class="col-sm-6">
    <div class="card bg-light">
    
   
      <div class="card-body">
      
        <h2 class="card-title">MATERIAL CARD</h2>
        <p class="card-text"></p>
        <a href="/matRet" class="btn btn-info"><i class="fas fa-arrow-alt-circle-right"></i></a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card bg-light">
      <div class="card-body">
        <h2 class="card-title">LMO CARD</h2>
        <p class="card-text"></p>
        <a href="/lmo" class="btn btn-info"><i class="fas fa-arrow-alt-circle-right"></i></a>
      </div>
    </div>
    <br/>
  </div>
  
  

<div class="col-sm-6">
    <div class="card bg-light">
      <div class="card-body">
        <h2 class="card-title">REPORTS</h2>
        <p class="card-text"></p>
        <a href="/matreport" class="btn btn-info"><i class="fas fa-arrow-alt-circle-right"></i></a>
      </div>
    </div>
    
  </div>

  <div class="col-sm-6">
    <div class="card bg-light">
      <div class="card-body">
        <h2 class="card-title">DISTRIBUTION</h2>
        <p class="card-text"></p>
        <a href="/matDistribution" class="btn btn-info"><i class="fas fa-arrow-alt-circle-right"></i></a>
      </div>
    </div>
    
  </div>

  
</div>
</div>







<hr/>


  <div class="card-footer text-muted">
     <h1> FABRICS </h1>
    </div>

            <div class="row">
    <div class="col-sm-4">
      <div class="card">
      <img src="%PUBLIC_URL%../../materials/mat1.png"  width="400" height="400" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Cotton</h5>
          <p class="card-text">Breathable
          Wrinkles easily
          Withstand heat
          Slow to dry
          Inelastic and rigid
          Very long lifetime
        </p>
          <a href="/matRet" class="btn btn-primary"><i class="fas fa-box-open"></i></a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
      <img src="%PUBLIC_URL%../../materials/mat2.png"   width="400" height="400" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Flax</h5>
          <p class="card-text">Poor elasticity
Creasing
Gets soft on washing
High natural luster
absorbent
Wrinkles</p>
          <a href="/matRet" class="btn btn-primary"><i class="fas fa-box-open"></i></a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
      <img src="%PUBLIC_URL%../../materials/mat3.png"   width="300" height="400" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Cashmere</h5>
          <p class="card-text">wool
lustrous(because of thin cuticle cells on fiber)
Rare
Expensive
Lightweight</p>
          <a href="/matRet" class="btn btn-primary"><i class="fas fa-box-open"></i></a>
        </div>
      </div>
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  </div>
  </div>

  <br/>
  <div class="row">
    <div class="col-sm-4">
      <div class="card">
      <img src="%PUBLIC_URL%../../materials/mat4.png"  width="400" height="400" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Sheep</h5>
          <p class="card-text">Good resiliency
Good elasticity
Strong
Fine
Smooth
Lustrous</p>
          <a href="/matRet" class="btn btn-primary"><i class="fas fa-box-open"></i></a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
      <img src="%PUBLIC_URL%../../materials/mat5.png"   width="400" height="400" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Lyocell</h5>
          <p class="card-text">High absorbency (more than rayon)
Moisture absorbent (50% more than cotton)
Antibacterial
</p>
          <a href="/matRet" class="btn btn-primary"><i class="fas fa-box-open"></i></a>
        </div>
      </div>
    </div>

    
    <div class="col-sm-4">
      <div class="card">
      <img src="%PUBLIC_URL%../../materials/mat6.png"   width="300" height="400" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Acetate Fabric</h5>
          <p class="card-text">Mildew resistant
Low moisture absorbency
fast drying
No pilling
static</p>
          <a href="/matRet" class="btn btn-primary"><i class="fas fa-box-open"></i></a>
        </div>
      </div>
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  </div>
  </div>


<hr/>
  <div class="card-footer text-muted">
     <h1> ACCESSORIES </h1>
    </div>

            <div class="row">
    <div class="col-sm-4">
      <div class="card">
      <img src="%PUBLIC_URL%../../materials/mat7.png"  width="400" height="400" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Flat Buttons</h5>
          <p class="card-text"> Flat and have either two or four holes in the center.attach them by hand or with a sewing </p>
          <a href="/matRet" class="btn btn-primary"><i class="fas fa-box-open"></i></a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
      <img src="%PUBLIC_URL%../../materials/mat8.png"   width="400" height="400" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Hook and Eye Fastenings</h5>
          <p class="card-text">Small hook on one side and an eye-like fixture on the other, which is a small hole that the hook fits.</p>
          <a href="/matRet" class="btn btn-primary"><i class="fas fa-box-open"></i></a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
      <img src="%PUBLIC_URL%../../materials/mat9.png"   width="300" height="400" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Lapel Buttons</h5>
          <p class="card-text">Made of some type of thin metal and have logos or promotional material on them. </p>
          <a href="/matRet" class="btn btn-primary"><i class="fas fa-box-open"></i></a>
        </div>
      </div>
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  </div>
  </div>

  <br/>
  <div class="row">
    <div class="col-sm-4">
      <div class="card">
      <img src="%PUBLIC_URL%../../materials/mat10.png"  width="400" height="400" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Snaps (Poppers)</h5>
          <p class="card-text"> Sewn into the document and used to close the document and keep it in place.</p>
          <a href="/matRet" class="btn btn-primary"><i class="fas fa-box-open"></i></a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
      <img src="%PUBLIC_URL%../../materials/mat11.png"   width="400" height="400" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Stud (Jeans)</h5>
          <p class="card-text"> Sewn in two different places,buttons are pressed together after they are placed in the buttonhole.</p>
          <a href="/matRet" class="btn btn-primary"><i class="fas fa-box-open"></i></a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
      <img src="%PUBLIC_URL%../../materials/mat12.png"   width="300" height="400" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Toggles</h5>
          <p class="card-text">Skinny buttons that are usually rounded, and they are most often used in buttonholes. </p>
          <a href="/matRet" class="btn btn-primary"><i class="fas fa-box-open"></i></a>
        </div>
      </div>
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  </div>
  </div>








  <hr/>
  <div class="card-footer text-muted">
     <h1> PACKING MATERIALS </h1>
    </div>

            <div class="row">
    <div class="col-sm-4">
      <div class="card">
      <img src="%PUBLIC_URL%../../materials/mat13.png"  width="400" height="400" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Stretch Film</h5>
          <p class="card-text">Hand Stretch
Color Stretch
UVI Stretch
VCI Stretch
Vented Stretch
Reinforced Stretch</p>
          <a href="/matRet" class="btn btn-primary"><i class="fas fa-box-open"></i></a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
      <img src="%PUBLIC_URL%../../materials/mat14.png"   width="400" height="400" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Polybags</h5>
          <p class="card-text">Polybags average a thickness of 1-6 mils.plastic formulations are also available upon request. </p>
          <a href="/matRet" class="btn btn-primary"><i class="fas fa-box-open"></i></a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
      <img src="%PUBLIC_URL%../../materials/mat15.png"   width="300" height="400" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Bundling Film</h5>
          <p class="card-text">A multi-pack can include free-standing items or sit on top of a platform or sheet of material.</p>
          <a href="/matRet" class="btn btn-primary"><i class="fas fa-box-open"></i></a>
        </div>
      </div>
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  </div>
  </div>
  <br/>

  <div class="row">
    <div class="col-sm-4">
      <div class="card">
      <img src="%PUBLIC_URL%../../materials/mat16.png"  width="400" height="400" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Hangtags</h5>
          <p class="card-text"> printed paper tags hung from the garments by plastic staple or string.</p>
          <a href="/matRet" class="btn btn-primary"><i class="fas fa-box-open"></i></a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
      <img src="%PUBLIC_URL%../../materials/mat17.png"   width="400" height="400" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Clips</h5>
          <p class="card-text">leaves the fold portion intact and can be quickly and easily removed, unlike the staple</p>
          <a href="/matRet" class="btn btn-primary"><i class="fas fa-box-open"></i></a>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="card">
      <img src="%PUBLIC_URL%../../materials/mat18.png"   width="300" height="400" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">Price tag</h5>
          <p class="card-text">type of tag printed with the sales price of the garment.</p>
          <a href="/matRet" class="btn btn-primary"><i class="fas fa-box-open"></i></a>
        </div>
      </div>
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
  </div>
  </div>



  
                
            </div>

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

<img src="%PUBLIC_URL%../../white.jpg" class="rounded-circle" width="40" height="40"  alt=""/>
<a href="/matDash" style={{textDecoration:'none'}}><h1>CASANOVA</h1></a>
  
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
            

            

           
        )
    }
}
