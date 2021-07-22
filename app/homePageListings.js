'use strict';

const listingsSearchBar = document.getElementById('categorySearch');

// listingsSearchBar.innerHTML = `

//   <div class="btn-group mr-2">
//     <button class="btn btn-primary" type="button">Clothing</button>
//     <button class="btn btn-warning" type="button">Electronics</button>
//     <button class="btn btn-success" type="button" >Outdoor Equipment</button>
//     <button class="btn btn-danger" type="button" >Vehicles</button>
//   </div>
        
//   <div class="input-group d-flex ">
//     <div class="input-group-prepend float-right">
//       <div class="input-group-text" id="btnGroupAddon">search</div>
//     </div>
//     <input type="text" class="form-control" placeholder="Enter category" aria-label="Enter category" aria-describedby="btnGroupAddon">
//   </div>

// `

listingsSearchBar.innerHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-secondary lighten-3">

    <!-- Navbar brand -->
    <span class="navbar-brand">Categories:</span>

    <!-- Collapse button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Collapsible content -->
    <div class="collapse navbar-collapse" id="basicExampleNav">

      <!-- Links -->
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link category" >All</a>
        </li>
        <li class="nav-item">
          <a class="nav-link category" >Clothing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link category" >Electronics</a>
        </li>
        <li class="nav-item">
          <a class="nav-link category" >Outdoor Equipment</a>
        </li>
        <li class="nav-item">
          <a class="nav-link category">Vehicles</a>
        </li>

      </ul>
      <!-- Links -->

      <form class="form-inline">
        <div class="md-form my-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
        </div>
      </form>
    </div>
    <!-- Collapsible content -->

  </nav>

`

import {fakeUpdatedData} from './fakeData.js';

import {fakeInitData} from './fakeData.js';

const categoryBtns = document.getElementsByClassName('category');


for (let button of categoryBtns){
  button.addEventListener('click', async (e) => {
    const category = e.target.innerText;
    // uncommont the following two lines when back end is ready
    // const data = await fetchData(category);
    // refreshCards(data);

    // for testing, using fake updated data
    refreshCards(fakeUpdatedData);
  })
};

async function fetchData(category){
  const config = {
    method:'get',
    url:`https://easy-trade-backend.herokuapp.com/api/v1/listings/category/${category}`
  }

  if (category === 'all'){
    config.url = 'https://easy-trade-backend.herokuapp.com/api/v1/listings';
  }

  try{
    const {data} = await axios(config);
    return data;
  } catch (error){
    console.log(error);
  }
}


import generateCard from './tools/listingCardGenerator.js';

function refreshCards(listings){
  const listingsNode = document.getElementById('listings');
  listingsNode.innerHTML = '';
  for (let listing of listings){
    listingsNode.appendChild(generateCard(listing));
  }
}

refreshCards(fakeInitData);

