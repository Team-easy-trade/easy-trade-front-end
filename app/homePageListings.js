'use strict';
import homeBaseURL from './tools/serverUrl.js'

const listingsSearchBar = document.getElementById('categorySearch');

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
          <a class="nav-link category" >Outdoor</a>
        </li>
        <li class="nav-item">
          <a class="nav-link category">Vehicles</a>
        </li>
        <li class="nav-item">
          <a class="nav-link category">Other</a>
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

const categoryBtns = document.getElementsByClassName('category');


for (let button of categoryBtns){
  button.addEventListener('click', async (e) => {
    const category = e.target.innerText;
    sessionStorage.setItem('currentCategory', category);
    const data = await fetchData(category);
    document.getElementById('paginationNav').innerHTML = '';
    console.log(data)
    refreshCards(data);
  })
};

async function fetchData(category, page=1){
  const config = {
    method:'get',
    url:`${homeBaseURL}/listings/category/${category}`,
    params:{
      page
    }
  }

  if (category === 'All'){
    config.url = `${homeBaseURL}/listings`;
  }

  try{
    const {data} = await axios(config);
    return data;
  } catch (error){
    console.log(error);
  }
}


import generateCard from './tools/listingCardGenerator.js';
import generatePagination from './tools/pagination.js';

function refreshCards(listings){
  const listingsNode = document.getElementById('listings');
  listingsNode.innerHTML = '';
  for (let listing of listings.records){
    listingsNode.appendChild(generateCard(listing));
  }

  document.getElementById('paginationNav').innerHTML = '';
  generatePagination(listings.totalPages);

  const paginationItems = document.getElementsByClassName('page-link');

  for (let page of paginationItems){
    page.addEventListener('click', async(e)=>{

      const category = sessionStorage.getItem('currentCategory');
      const pageNumber = e.target.innerText;
      const data = await fetchData(category, pageNumber);
      refreshCards(data);
    })
  }
}


fetchData('All')
  .then(data =>{
    refreshCards(data);
  })