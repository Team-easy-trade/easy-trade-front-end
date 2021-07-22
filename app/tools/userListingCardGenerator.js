'use strict';
const baseURL = 'https://easy-trade-backend.herokuapp.com/api/v1/listing';


export default function generateUserListiingCard (listing){
  const listingNode = document.createElement('div');
  listingNode.className = 'card';
  listingNode.innerHTML =  `
    <img class="card-img-top" src=${listing.image} alt="Card image cap">
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

  });

  listingNode.appendChild(editBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.className="btn btn-outline-danger mr-1 mt-1";
  deleteBtn.innerText = 'DELETE';
  deleteBtn.addEventListener('click', (e)=>{
    const config = {
      method: 'delete',
      url: `${baseURL}/${listing._id}`
    }

    try {
      // await axios(config);
      e.target.parentElement.classList.add('d-none');
    }
    catch(error){
      console.log(error);
    }
  });
  listingNode.appendChild(deleteBtn);

  return listingNode;
};


