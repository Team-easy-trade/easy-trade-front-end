const carouselRoot = document.getElementById("carousel")

carouselRoot.innerHTML =
`
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100 img-fluid" src="https://images.unsplash.com/photo-1626785971209-2b5e7cc5c5c3?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="First slide">
      <div class="carousel-caption d-none d-md-block">
      <h1>Easy Trade</h1>
      <h4>Buy and Sell</h4>
    </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 img-fluid" src="https://images.unsplash.com/photo-1620942240843-d03040ffe976?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Second slide">
      <div class="carousel-caption d-none d-md-block">
      <h1>Easy Trade</h1>
      <h4>Buy and Sell</h4>
    </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 img-fluid" src="https://images.unsplash.com/photo-1620942240843-d03040ffe976?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Third slide">
      <div class="carousel-caption d-none d-md-block">
      <h1>Easy Trade</h1>
      <h4>Buy and Sell</h4>
    </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
`
$('.carousel').carousel()