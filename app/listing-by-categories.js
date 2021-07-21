const listingsSearchBar = document.getElementById('categorySearch');

listingsSearchBar.innerHTML = `

  <div class="btn-group mr-2">
    <button class="btn btn-primary" type="button">Clothing</button>
    <button class="btn btn-warning" type="button">Electronics</button>
    <button class="btn btn-success" type="button" >Outdoor Equipment</button>
    <button class="btn btn-danger" type="button" >Vehicles</button>
  </div>
        
  <div class="input-group d-flex ">
    <div class="input-group-prepend float-right">
      <div class="input-group-text" id="btnGroupAddon">search</div>
    </div>
    <input type="text" class="form-control" placeholder="Enter category" aria-label="Enter category" aria-describedby="btnGroupAddon">
  </div>

`

