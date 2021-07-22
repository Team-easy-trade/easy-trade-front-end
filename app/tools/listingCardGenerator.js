'use strict';
import listingCardGeneratorBaseUrl from './serverUrl.js'

async function fetchProductOwnerData(ownerID) {
  const config = {
    method:'get',
    url: `${listingCardGeneratorBaseUrl}/user/${ownerID}`
  }
  try {
    const {data} = await axios(config);
    sessionStorage.setItem('productOwnerInfo', JSON.stringify(data));
  } catch (error){
    console.log(error);
  }
}

export default function generateCard (listing){
  const listingNode = document.createElement('div');
  listingNode.innerHTML =  `
    <a class="card" style="width: 15rem; padding: 10px; margin: 15px;" href="product.html">
      <img class="card-img-top" src=${listing.image} alt="Card image cap">
      <div class="card-body">
        <h4 class="card-title">${listing.name}</h4>
        <h5>${listing.category}</h5>
        <p>${listing.price}</p>
      </div>
    </a>
  `
  listingNode.addEventListener('click',async(e)=>{
    fetchProductOwnerData(listing.owner);

    sessionStorage.setItem('productInfo', JSON.stringify(listing));
  })
  return listingNode;
};
