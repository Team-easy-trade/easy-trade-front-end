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
    refreshCards(data);

  } catch (error){
    console.log(error);
  }
}

import generatePagination from './tools/pagination.js';

function refreshCards(listings){
  const listingsNode = document.getElementById('listings');
  listingsNode.innerHTML = '';
  for (let listing of listings.records){
    listingsNode.appendChild(generateUserListiingCard(listing));
  }
  document.getElementById('paginationNav').innerHTML = '';
  generatePagination(listings.totalPages)
}

const userId = JSON.parse(sessionStorage.getItem('userInfo')).user._id;
fetchData(userId);
