const users = JSON.parse(localStorage.getItem('users')) || [];
var username;
var email;
var password;


const re =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)*[a-zA-Z]{2,}))$/;

function redirectToPage() {
  window.location.href = "main.html";
}
function redirectSignIn() {
  window.location.href = "signin.html";
}
const validateEmailComprehensive = (email) => {
  return re.test(email);
};
function createUser(username, email, password) {
  const user = { username, email, password };
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
}

function signUp() {
  username = document.forms["accountcreate"]["accountName"].value;
  email = document.forms["accountcreate"]["accountEmail"].value;
  password = document.forms["accountcreate"]["accountPassword"].value;

  if (username == "" && email == "" && password == "") {
    alert("Please fill in all availble fields.");
  } else if (username != "" && email == "" && password == "") {
    alert("Please fill in all availble fields.");
  } else if (username == "" && email != "" && password == "") {
    alert("Please fill in all availble fields.");
  } else if (username == "" && email == "" && password != "") {
    alert("Please fill in all availble fields.");
  } else if (username == "" && email != "" && password != "") {
    alert("Please insert your username.");
  } else if (email == "" && username != "" && password != "") {
    alert("Please insert your Email.");
  } else if (password == "" && username != "" && email != "") {
    alert("Please create a Password.");
  } else if (password.length < 6 && username != "" && email != "") {
    alert("Password must be at least 6 characters.");
  } else if (!validateEmailComprehensive(email) && email != "") {
    alert("Please insert a valid Email adress.");
  } else {
    createUser(username, email, password);
    console.log("Users: ",users)
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    
    alert("Account created successfuly!");
    redirectSignIn();
  }
}
function signIn() {
  username = document.forms["accountlogin"]["accountUserName"].value;
  password = document.forms["accountlogin"]["accountUserPassword"].value;

  if (username == "" && password != "") {
    alert("Please insert your username.");
  }
  else if (password == "" && username != "") {
    alert("Please insert your password.");
  } 
  else if (password == "" && username == ""){
    alert("Please fill in all available fields.")
  }
  else if (password.length < 6 && username != "") {
    alert("Password must be at least 6 characters.");
  } else {
    let validUser = false;
    console.log("Username:", username);
    console.log("Password:", password);
    for (let i = 0; i < users.length; i++) {
      if (users[i].username === username && users[i].password === password) {
        validUser = true;
        break;
      }
    }

    if (validUser) {
      alert("Login successful! Welcome back, " + username);
      redirectToPage();
    }
    else {
      alert("Invalid credentials. Please try again.");
    }
  }
}
