'use strict';



export default function generateUserListiingCard (listing){
  const listingNode = document.createElement('div');
  listingNode.innerHTML =  `
    <div class="card" style="width: 15rem; padding: 10px; margin: 15px;">
      <img class="card-img-top" src=${listing.image} alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">${listing.name}</h4>
        <h5>${listing.category}</h5>
        <p>${listing.price}</p>
        <button class="btn btn-outline-success mr-1 mt-1">EDIT</button>
        <button class="btn btn-outline-danger mt-1">DELETE</button>
      </div>
    </div>
  `
  listingNode.addEventListener('click',async(e)=>{

  })
  return listingNode;
};
