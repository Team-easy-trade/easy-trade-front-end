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

const fakeUpdatedData = [
  {
 
     name: "update",
     imageURL: "",
     description: "",
     category: "shoes",
     price: 9999.99
 
 }]

 const fakeInitData = [
  {
     name: "init data",
     imageURL: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT_9DzPkiaqM3j9fkF3CSjoKtqsXD6d50flKmYKMBu3yK1WOW098fcDIR4JPHM-3VO9RZBzJtKz6ceIVJsYV0gpqorkoKDFigX0v3YBk1Ualgw5PgHCjKaW&usqp=CAE",
     description: "desc",
     category: "shoes",
     price: 9.99
  },
  {
    name: "init data",
    imageURL: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQrZ-ho_sEMRQDs0Bo46g9B0SmB_C8g-eO8zIziEvlWD6Tjs7fLznlsS1IblHmbOdbYDpnTfiKOg7BMQHskar5Js2z2SnM9HwMLjS8QhHrgsFyaYOFJOojWjQ&usqp=CAE",
    description: "desc",
    category: "shoes",
    price: 9.99
 },
 {
  name: "init data",
  imageURL: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT_9DzPkiaqM3j9fkF3CSjoKtqsXD6d50flKmYKMBu3yK1WOW098fcDIR4JPHM-3VO9RZBzJtKz6ceIVJsYV0gpqorkoKDFigX0v3YBk1Ualgw5PgHCjKaW&usqp=CAE",
  description: "desc",
  category: "shoes",
  price: 9.99
},
{
 name: "init data",
 imageURL: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT_9DzPkiaqM3j9fkF3CSjoKtqsXD6d50flKmYKMBu3yK1WOW098fcDIR4JPHM-3VO9RZBzJtKz6ceIVJsYV0gpqorkoKDFigX0v3YBk1Ualgw5PgHCjKaW&usqp=CAE",
 description: "desc",
 category: "shoes",
 price: 9.99
},
{
  name: "init data",
  imageURL: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT_9DzPkiaqM3j9fkF3CSjoKtqsXD6d50flKmYKMBu3yK1WOW098fcDIR4JPHM-3VO9RZBzJtKz6ceIVJsYV0gpqorkoKDFigX0v3YBk1Ualgw5PgHCjKaW&usqp=CAE",
  description: "desc",
  category: "shoes",
  price: 9.99
},
{
 name: "init data",
 imageURL: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT_9DzPkiaqM3j9fkF3CSjoKtqsXD6d50flKmYKMBu3yK1WOW098fcDIR4JPHM-3VO9RZBzJtKz6ceIVJsYV0gpqorkoKDFigX0v3YBk1Ualgw5PgHCjKaW&usqp=CAE",
 description: "desc",
 category: "shoes",
 price: 9.99
}
]

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
    config.url = 'https://easy-trade-backend.herokuapp.com/api/v1/alllistings';
  }

  try{
    const {data} = await axios(config);
    return data;
  } catch (error){
    console.log(error);
  }
}


import generateCard from './module/listingsGenerator.js';

function refreshCards(listings){
  const listingsNode = document.getElementById('listings');
  listingsNode.innerHTML = '';
  for (let listing of listings){
    listingsNode.appendChild(generateCard(listing));
  }
}

refreshCards(fakeInitData);

