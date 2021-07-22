'use strict';
import accountBaseURL from './tools/serverUrl.js'

import generateUserListiingCard from './tools/userListingCardGenerator.js';




async function fetchData(userId){

  const config = {
    method:'get',
    url:`${accountBaseURL}/listings/id/${userId}`,
  }

  try{
    const {data} = await axios(config);
    refreshCards(data.records);

  } catch (error){
    console.log(error);
  }
}


function refreshCards(listings){
  const listingsNode = document.getElementById('userListings');
  listingsNode.innerHTML = '';
  for (let listing of listings){
    listingsNode.appendChild(generateUserListiingCard(listing));
  }
}

const userId = JSON.parse(sessionStorage.getItem('userInfo')).user._id;
fetchData(userId);
