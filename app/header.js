
const headRoot = document.getElementById("header")

headRoot.innerHTML = 
`

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">

  <a class="navbar-brand" href="#">Easy-Trade</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/index.html">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Listings</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>

  <form class="form-inline" >
    <button id="signInBtn" class="btn btn-outline-success mr-3" type="button" data-toggle="modal" data-target="#singInModal">Sign In</button>
    <button id="signUpBtn" class="btn btn-outline-secondary mr-3" type="button" data-toggle="modal" data-target="#singUpModal">Sign Up</button>
    <h4 id="greetings" class="d-none text-light mr-3"></h4>
    <button id="signOutBtn" class="btn btn-outline-success d-none" type="button" >Sign Out</button>
  </form>
  </nav>

  <div class="modal fade" id="singInModal" tabindex="-1" role="dialog" aria-labelledby="signInModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="signInModalLabel">Enter your username and password</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <form id ="signInForm">
        <div class="form-group">
          <label for="username"></label>
          <input name="username" type="text" class="form-control" id="username"  placeholder="Enter username">
        </div>
        <div class="form-group">
          <label for="password"></label>
          <input name="password" type="password" class="form-control" id="password" placeholder="Password">
        </div>
        <div class="form-group">
        <button type="submit" class="btn btn-primary" id="sign-in-btn">Sign in</button>
        </div>
        
      </form>
        </div>
    
      </div>
    </div>
  </div>

  <div class="modal fade" id="singUpModal" tabindex="-1" role="dialog" aria-labelledby="signUpModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="signUpModalLabel">Sign Up</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">

        <form id="signUpForm">
        <div class="form-group">
          <label for="exampleInputEmail1">Enter an email address</label>
          <input name="emailInput" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
      <div class="form-group">
        <label for="inputLocation">Enter your location</label>
        <input name="inputLocation" type="text" class="form-control" id="inputLocation"  placeholder="Enter location">
        
      </div>

      <div class="form-group">
      <label for="inputPhoneNumber">Enter your phone number</label>
      <input name="phoneInput" type="phone" class="form-control" id="inputPhoneNumber"  placeholder="Enter phone number">
      
    </div>
        <div class="form-group">
          <label for="inputUserName">Create a username</label>
          <input name="userInput" type="text" class="form-control" id="inputUserName"  placeholder="Create a username">
          
        </div>
        <div class="form-group">
          <label for="signUpPassword">Create a password</label>
          <input name="passwordInput" type="password" class="form-control" id="signUpPassword" placeholder="Password">
        </div>
        
      
        <button type="submit" class="btn btn-primary" id="submit-btn-signup">Submit</button>
      </form>
        </div>
      
      </div>
    </div>
  </div>

`



document.getElementById("signUpForm").addEventListener("submit", async (e) => {
  e.preventDefault()
  const username = e.target.userInput.value;
  const password = e.target.passwordInput.value;
  const location = e.target.inputLocation.value;
  const email = e.target.emailInput.value;
  const phone = e.target.phoneInput.value;
  const url = "https://easy-trade-backend.herokuapp.com/api/v1/signup";

  const config = {
    method: 'post',
    url,
    data: {
      username,
      password,
      location,
      email,
      phone
    }
  }
  try {
    const {data} = await axios(config);
    console.log(data)
    sessionStorage.setItem('userInfo', JSON.stringify(data));
    // redirect to account page
    location.href = '/account.html';
  } catch (error){
    console.log(error);
  }


//  fetch("https://easy-trade-backend.herokuapp.com/api/v1/signup", {
//    method: 'POST',
//    headers: {
//     'Content-Type': 'application/json'
   
//   },
//    body: JSON.stringify({
//     "username": e.target.userInput.value,
//     "password": e.target.passwordInput.value,
//     "location": e.target.inputLocation.value,
//      "email": e.target.emailInput.value,
     
//      "phone": e.target.phoneInput.value
     
//    })
//  }).then(function (response) {
//    console.log(response);
//    const parsedUser = JSON.stringify(response);
//    sessionStorage.setItem('userInfo', parsedUser);
//  })
 
})


  
document.getElementById("signInForm").addEventListener("submit", async (e) => {
  e.preventDefault()
 
  let username = e.target.username.value;
  let password = e.target.password.value;
  let url = `https://easy-trade-backend.herokuapp.com/api/v1/signin`
  // let authString = `${username}:${password}`
  // let headers = new Headers();
  // headers.set('Authorization', 'Basic ' + btoa(authString))
  // fetch(url,{method: 'POST', headers: headers})
  //   .then(function (response) {
  //       return response.json();
        
  //   })
  //   .then(data => {
  //     console.log(data.token);
  //     sessionStorage.setItem('userInfo', data);
  //   });

  // fetch is such a pain in the ass to work with. I am sorry I have to get rid of it.

  const config = {
    method: 'post',
    url,
    auth: {
      username,
      password
    }
  }
  try {

    const {data} = await axios(config);
    console.log(data)
    sessionStorage.setItem('userInfo', JSON.stringify(data));
    // redirect to account page
    location.href = '/account.html';
  } catch (error){
    console.log(error)
  }

})

function updateUserLoginStatus(){
  const signInBtn = document.getElementById('signInBtn');
  const signUpBtn = document.getElementById('signUpBtn');
  const greetings = document.getElementById('greetings');
  const signOutBtn = document.getElementById('signOutBtn');

  if (sessionStorage.getItem('userInfo')){
    // hide sign in and sign up button
    signInBtn.classList.add('d-none');
    signUpBtn.classList.add('d-none');

    // display greetings and sign out button
    const username = JSON.parse(sessionStorage.getItem('userInfo')).user.username;
    greetings.innerText = `Welcome! ${username}`;
    greetings.classList.remove('d-none');

    signOutBtn.classList.remove('d-none');

  } else {
    // reverse it
    signInBtn.classList.remove('d-none');
    signUpBtn.classList.remove('d-none');

    greetings.classList.add('d-none');

    signOutBtn.classList.add('d-none');
  }
}

updateUserLoginStatus();


document.getElementById("signOutBtn").addEventListener('click', ()=>{
  sessionStorage.removeItem('userInfo');
  updateUserLoginStatus();

  location.href = "/index.html";
})