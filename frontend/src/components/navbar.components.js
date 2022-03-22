import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link to="/" className="navbar-brand" >ExerciseTracker</Link>
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <Link to="/" class="nav-link active">Exercises</Link>
        </li>
        <li class="nav-item">
          <Link to="/create" class="nav-link">Create Exercise Log</Link>
        </li>
        <li class="nav-item">
          <Link to="/user" class="nav-link">Create User</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
  }
}
