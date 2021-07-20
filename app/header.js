
const headRoot = document.getElementById("header")

headRoot.innerHTML = 
`
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<a class="navbar-brand" href="#">Easy-Trade</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">About us</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Listings</a>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Disabled</a>
    </li>
  </ul>
</div>
<form class="form-inline">
<button class="btn btn-outline-success" type="button">Sign In</button>
<button class="btn btn-sm btn-outline-secondary" type="button">Sign Up</button>
</form>
</nav>
`