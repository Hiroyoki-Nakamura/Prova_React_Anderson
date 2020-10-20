import React from 'react'


export default props => (
  <div className="sidebar-menu-inner">
<ul className="nav nav-pills nav-stacked custom-nav">
          <li><a href="index.html"><i className="fa fa-tachometer"></i><span> Dashboard</span></a>
          </li>
          <li><a href="cards.html"><i className="fa fa-cogs"></i> <span>Default cards</span></a></li>
          <li><a href="pricing.html"><i className="fa fa-table"></i> <span>Pricing tables</span></a></li>
          <li><a href="blocks.html"><i className="fa fa-th"></i> <span>Content blocks</span></a></li>
          <li><a href="forms.html"><i className="fa fa-file-text"></i> <span>Forms</span></a></li>
        </ul>
        </div>
)