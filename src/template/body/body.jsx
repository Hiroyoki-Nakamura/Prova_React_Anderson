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
        {/* <img src="image-path" alt="Your logo" title="Your logo" className="img-fluid" style="height:35px" /> */}
      </a>
    </div>
       //image logo

      <div className="logo-icon text-center">
        <a href="index.html" title="logo"><img src="public/images/logo.png" alt="logo-icon" /> </a>
      </div>
    </div>
     main content start
    <div className="main-content">

       content
      <div className="container-fluid content-top-gap">

        <nav aria-label="breadcrumb">
          <ol className="breadcrumb my-breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
          </ol>
        </nav>
        <div className="welcome-msg pt-3 pb-4">
          <h1>Hi <span className="text-primary">John</span>, Welcome back</h1>
          <p>Very detailed & featured admin.</p>
        </div>
        charts
        <div className="chart">
          <div className="row">
            <div className="col-lg-6 pr-lg-2 chart-grid">
              <div className="card text-center card_border">
                <div className="card-header chart-grid__header">
                  Bar Chart
                </div>
                <div className="card-body">
                   bar chart
                  <div id="container">
                    <canvas id="barchart"></canvas>
                  </div>
                   //bar chart
                </div>
                <div className="card-footer text-muted chart-grid__footer">
                  Updated 2 hours ago
                </div>
              </div>
            </div>
            <div className="col-lg-6 pl-lg-2 chart-grid">
              <div className="card text-center card_border">
                <div className="card-header chart-grid__header">
                  Line Chart
                </div>
                <div className="card-body">
                   line chart
                  <div id="container">
                    <canvas id="linechart"></canvas>
                  </div>
                   //line chart
                </div>
                <div className="card-footer text-muted chart-grid__footer">
                  Updated just now
                </div>
              </div>
            </div>
          </div>
        </div>
         //charts

      </div>
       //content
    </div>
     main content end
  </section>
</body>