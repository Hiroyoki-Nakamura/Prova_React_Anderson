import React from 'react';

export default props => (
<body className="sidebar-menu-collapsed">
   <div className="se-pre-con"></div> 
  <section>
     sidebar menu start 
    <div className="sidebar-menu sticky-sidebar-menu">

       logo start 
      <div className="logo">
        <h1><a href="index.html">Collective</a></h1>
      </div>

       if logo is image enable this 
       image logo --
    <div className="logo">
      <a href="index.html">
        {/* <img src="image-path" alt="Your logo" title="Your logo" className="img-fluid" style="height:35px;" /> */}
      </a>
    </div>
       //image logo 

      <div className="logo-icon text-center">
        <a href="index.html" title="logo"><img src="assets/images/logo.png" alt="logo-icon" /> </a>
      </div>
       //logo end 

      <div className="sidebar-menu-inner">

         sidebar nav start 
        <ul className="nav nav-pills nav-stacked custom-nav">
          <li><a href="index.html"><i className="fa fa-tachometer"></i><span> Dashboard</span></a>
          </li>
          <li><a href="cards.html"><i className="fa fa-cogs"></i> <span>Default cards</span></a></li>
          <li><a href="pricing.html"><i className="fa fa-table"></i> <span>Pricing tables</span></a></li>
          <li><a href="blocks.html"><i className="fa fa-th"></i> <span>Content blocks</span></a></li>
          <li><a href="forms.html"><i className="fa fa-file-text"></i> <span>Forms</span></a></li>
        </ul>
         //sidebar nav end 
         toggle button start 
        <a className="toggle-btn" onclick="toggleMenu()">
          <i className="fa fa-angle-double-left menu-collapsed__left"><span>Collapse Sidebar</span></i>
          <i className="fa fa-angle-double-right menu-collapsed__right"></i>
        </a>
         //toggle button end 
      </div>
    </div>
     //sidebar menu end 
     header-starts 
    <div className="header sticky-header">

       notification menu start 
      <div className="menu-right">
        <div className="navbar user-panel-top">
          <div className="search-box">
            <form action="#search-results.html" method="get">
              <input className="search-input" placeholder="Search Here..." type="search" id="search" />
              <button className="search-submit" value=""><span className="fa fa-search"></span></button>
            </form>
          </div>
          <div className="profile_details">
            <ul>
              <li className="dropdown profile_details_drop">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" id="dropdownMenu3" aria-haspopup="true"
                  aria-expanded="false">
                  <div className="profile_img">
                    <img src="assets/images/profileimg.jpg" className="rounded-circle" alt="" />
                    <div className="user-active">
                      <span></span>
                    </div>
                  </div>
                </a>
                <ul className="dropdown-menu drp-mnu" aria-labelledby="dropdownMenu3">
                  <li className="user-info">
                    <h5 className="user-name">John Deo</h5>
                    <span className="status ml-2">Available</span>
                  </li>
                  <li> <a href="#"><i className="lnr lnr-user"></i>My Profile</a> </li>
                  <li> <a href="#"><i className="lnr lnr-users"></i>1k Followers</a> </li>
                  <li> <a href="#"><i className="lnr lnr-cog"></i>Setting</a> </li>
                  <li> <a href="#"><i className="lnr lnr-heart"></i>100 Likes</a> </li>
                  <li className="logout"> <a href="#sign-up.html"><i className="fa fa-power-off"></i> Logout</a> </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    notification menu end 
    {/* </div> */}
     //header-ends 
     main content start 
    <div className="main-content">

       content 
      <div className="container-fluid content-top-gap">

         breadcrumbs 
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb my-breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Forms</li>
          </ol>
        </nav>
         //breadcrumbs 
         forms 
        <section className="forms">
           forms 1 
          <div className="card card_border py-2 mb-4">
            <div className="cards__heading">
              <h3>Forms <span></span></h3>
            </div>
            <div className="card-body">
              <form action="#" method="post">
                <div className="form-group">
                  <label for="exampleInputEmail1" className="input__label">Email address</label>
                  <input type="email" className="form-control input-style" id="exampleInputEmail1"
                    aria-describedby="emailHelp" placeholder="Enter email" />
                  <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                    anyone else.</small>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1" className="input__label">Password</label>
                  <input type="password" className="form-control input-style" id="exampleInputPassword1"
                    placeholder="Password" />
                </div>
                <div className="form-check check-remember check-me-out">
                  <input type="checkbox" className="form-check-input checkbox" id="exampleCheck1" />
                  <label className="form-check-label checkmark" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary btn-style mt-4">Submit</button>
              </form>
            </div>
          </div>
           //forms 1 

           forms 2 
          <div className="card card_border py-2 mb-4">
            <div className="card-body">
              <form action="#" method="post">
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputEmail4" className="input__label">Email</label>
                    <input type="email" className="form-control input-style" id="inputEmail4" placeholder="Email" />
                  </div>
                  <div className="form-group col-md-6">
                    <label for="inputPassword4" className="input__label">Password</label>
                    <input type="password" className="form-control input-style" id="inputPassword4" placeholder="Password" />
                  </div>
                </div>
                <div className="form-group">
                  <label for="inputAddress" className="input__label">Address</label>
                  <input type="text" className="form-control input-style" id="inputAddress" placeholder="1234 Main St" />
                </div>
                <div className="form-group">
                  <label for="inputAddress2" className="input__label">Address 2</label>
                  <input type="text" className="form-control input-style" id="inputAddress2"
                    placeholder="Apartment, studio, or floor" />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label for="inputCity" className="input__label">City</label>
                    <input type="text" className="form-control input-style" id="inputCity" />
                  </div>
                  <div className="form-group col-md-4">
                    <label for="inputState" className="input__label">State</label>
                    <select id="inputState" className="form-control input-style">
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="form-group col-md-2">
                    <label for="inputZip" className="input__label">Zip</label>
                    <input type="text" className="form-control input-style" id="inputZip" />
                  </div>
                </div>
                <div className="form-check check-remember check-me-out">
                  <input className="form-check-input checkbox" type="checkbox" id="gridCheck" />
                  <label className="form-check-label checkmark" for="gridCheck">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-primary btn-style mt-4">Sign in</button>
              </form>
            </div>
          </div>
           //forms 2 



        </section>
         //forms 
  {/* </section> */}
   //forms  

  </div>
   //content 

  {/* </div> */}
   main content end
  {/* </section> */}
  footer section start
  <footer className="dashboard">
    <p>&copy 2020 Collective. All Rights Reserved | Design by <a href="https://w3layouts.com/" target="_blank"
        className="text-primary">W3layouts.</a></p>
  </footer>
  footer section end

  abrir e fechar o menu
  {/* <script> */}
    {/* function toggleMenu() {
      let body = document.querySelector("body");
      let hasCollapsed = body.classList.contains("sidebar-menu-collapsed");
      if(hasCollapsed) {
       body.classList.remove("sidebar-menu-collapsed"),
       body.classList.add("noscroll")
      } else {
        body.classList.remove("noscroll"),
        body.classList.add("sidebar-menu-collapsed")
      }
    }
    
  </script> */}
</body>


)