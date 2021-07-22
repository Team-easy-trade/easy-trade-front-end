'use strict';
import userListingGeneratorBaseUrl from './serverUrl.js'

export default function generateUserListiingCard (listing){
  const listingNode = document.createElement('div');
  listingNode.className = 'card';
  listingNode.innerHTML =  `
    <img class=" img-fluid" style="height : 175px" src=${listing.image} alt="Card image cap">
    <div class="card-body">
      <h4 class="card-title">${listing.name}</h4>
      <h5>${listing.category}</h5>
      <p>${listing.price}</p>
    </div>
  `

  const editBtn = document.createElement('button');
  editBtn.className="btn btn-outline-success mr-1 mt-1";
  editBtn.innerText = 'EDIT';
  editBtn.addEventListener('click', ()=>{
    document.getElementById('updateOneBtn').classList.remove('d-none');
    document.getElementById('createNewBtn').classList.add('d-none');

    document.getElementById('_id').value = listing._id;
    document.getElementById('productName').value = listing.name;
    document.getElementById('productPrice').value = listing.price;
    document.getElementById('imageURL').value = listing.image;
    document.getElementById('productCategory').value = listing.category;
    document.getElementById('productDesc').value = listing.description;
  });

  listingNode.appendChild(editBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.className="btn btn-outline-danger mr-1 mt-1";
  deleteBtn.innerText = 'DELETE';

  const userToken = JSON.parse(sessionStorage.getItem('userInfo')).token;

  deleteBtn.addEventListener('click', async(e)=>{
    const config = {
      method: 'delete',
      url: `${userListingGeneratorBaseUrl}/listing/${listing._id}`,
      headers: {
        'Authorization': 'Bearer ' + userToken
      }
    }

    try {
      await axios(config);
      e.target.parentElement.classList.add('d-none');
    }
    catch(error){
      console.log(error);
    }
  });
  listingNode.appendChild(deleteBtn);

  return listingNode;
};


