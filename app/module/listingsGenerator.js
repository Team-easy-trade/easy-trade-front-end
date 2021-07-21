'use strict';

function generateCard (listing){
  const listingNode = document.createElement('div');
  listingNode.innerHTML =  `
    <a class="card" style="width: 18rem; padding-bottom: 10px; margin-bottom: 20px;" href="/product.html">
      <img class="card-img-top" src=${listing.imageURL} alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">${listing.name}</h4>
        <h5>${listing.category}</h5>
        <p>${listing.price}</p>
      </div>
    </div>
  `
  listingNode.addEventListener('click',(e)=>{
    sessionStorage.setItem('productInfo', JSON.stringify(listing));
  })
  return listingNode;
};


export default function generatelistingsNode (listings){
  const listingsNode = document.createElement('div');

  for (let listing of listings){
    listingsNode.appendChild(generateCard(listing));
  }

  return listingsNode;
};