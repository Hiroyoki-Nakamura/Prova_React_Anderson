import React from 'react';

export default props => (
        <div className="statistics">
          <div className="row">
            <div className="col-xl-6 pr-xl-2">
              <div className="row">
                <div className="col-sm-6 pr-sm-2 statistics-grid">
                  <div className="card card_border border-primary-top p-4">
                    <i className="lnr lnr-users"> </i>
                    <h3 className="text-primary number">29.75 M</h3>
                    <p className="stat-text">Total Users</p>
                  </div>
                </div>
                <div className="col-sm-6 pl-sm-2 statistics-grid">
                  <div className="card card_border border-primary-top p-4">
                    <i className="lnr lnr-eye"> </i>
                    <h3 className="text-secondary number">51.25 K</h3>
                    <p className="stat-text">Daily Visitors</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 pl-xl-2">
              <div className="row">
                <div className="col-sm-6 pr-sm-2 statistics-grid">
                  <div className="card card_border border-primary-top p-4">
                    <i className="lnr lnr-cloud-download"> </i>
                    <h3 className="text-success number">166.89 M</h3>
                    <p className="stat-text">Downloads</p>
                  </div>
                </div>
                <div className="col-sm-6 pl-sm-2 statistics-grid">
                  <div className="card card_border border-primary-top p-4">
                    <i className="lnr lnr-cart"> </i>
                    <h3 className="text-danger number">1,250k</h3>
                    <p className="stat-text">Purchased</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
         
)
