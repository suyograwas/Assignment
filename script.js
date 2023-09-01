// Get references to elements by their IDs
const userCard = document.getElementById("usercard");
const fetchButton = document.getElementById("fetchButton");

// Function to fetch random user data from an API
async function fetchRandomUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];

     // Update user card with fetched user data
    userCard.querySelector(".profile_image").src = user.picture.large;
    userCard.querySelector(".username").textContent = `${user.name.first} ${user.name.last}`;
    userCard.querySelector(".full_name").textContent = `Name: ${user.name.first} ${user.name.last}`;
    userCard.querySelector(".gender").textContent = `Gender: ${user.gender}`;
    userCard.querySelector(".date_of_birth").textContent = `Date of Birth: ${user.dob.date.split("T")[0]}`;
    userCard.querySelector(".address").textContent = `Address: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}`;
    userCard.querySelector(".email").textContent = `Email: ${user.email}`;

    // Add the "expanded" class to expand the user card

    userCard.classList.add("expanded");
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

// Function to toggle the expansion of the user card
function toggleCardExpansion() {
  userCard.classList.toggle("expanded");
}

// Add a click event listener to the user card to toggle its expansion
userCard.addEventListener("click", toggleCardExpansion);

// Add a click event listener to the "Fetch New User" button to fetch random user data
fetchButton.addEventListener("click", fetchRandomUser);
fetchRandomUser();



// Function to toggle between light and dark modes
function toggleMode() {
    const body = document.body;
    const tainer = document.querySelector("#container");
    const usercard = document.querySelector("#usercard");
    const userinfo= document.querySelector("#userinfo");
    
     if (body.classList.contains('light-mode')) {
        // Switch to dark mode
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        tainer.classList.remove('light-mode');
        tainer.classList.add('dark-mode');
        usercard.classList.remove('light-mode');
        usercard.classList.add('dark-mode');
        userinfo.classList.remove('light-mode');
        userinfo.classList.add('dark-mode');
    } else {
        // Switch to light mode (default)
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        tainer.classList.remove('dark-mode');
        tainer.classList.add('light-mode');
        usercard.classList.remove('dark-mode');
        usercard.classList.add('light-mode');
        userinfo.classList.remove('dark-mode');
        userinfo.classList.add('light-mode');
    }


    
}

// Attach the toggleMode function to a button click event
const toggleModeButton = document.getElementById('toggleModeButton');
toggleModeButton.addEventListener('click', toggleMode);

