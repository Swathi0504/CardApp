import React from 'react'
import PropTypes from 'prop-types'

function Card(props) {
  return <div class="col-lg-4">
  <div class="card mb-5 mb-lg-0">
    <div class="card-body">
      <h5 class="card-title text-muted text-uppercase text-center">{props.data.title}</h5>
      <h6 class="card-price text-center">{props.data.price}<span class="period">{props.data.month}</span></h6>
      <hr/>
      <ul class="fa-ul">
        <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.data.user}</li>
        <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.data.storage}</li>
        <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.data.publicprojects}</li>
        <li><span class="fa-li"><i class="fas fa-check"></i></span>{props.data.access}</li>
        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.data.privateprojects}</li>
        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.data.support}</li>
        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.data.domain}</li>
        <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{props.data.reports}</li>
      </ul>
      <div class="d-grid">
        <a href="#" class="btn btn-primary text-uppercase">Button</a>
      </div>
    </div>
  </div>
</div>
}

//Card.propTypes = {}

export default Card
