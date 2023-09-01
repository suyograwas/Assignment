const userCard = document.getElementById("usercard");
const fetchButton = document.getElementById("fetchButton");

async function fetchRandomUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];

    userCard.querySelector(".profile_image").src = user.picture.large;
    userCard.querySelector(".username").textContent = `${user.name.first} ${user.name.last}`;
    userCard.querySelector(".full_name").textContent = `Name: ${user.name.first} ${user.name.last}`;
    userCard.querySelector(".gender").textContent = `Gender: ${user.gender}`;
    userCard.querySelector(".date_of_birth").textContent = `Date of Birth: ${user.dob.date.split("T")[0]}`;
    userCard.querySelector(".address").textContent = `Address: ${user.location.street.number} ${user.location.street.name}, ${user.location.city}`;
    userCard.querySelector(".email").textContent = `Email: ${user.email}`;
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}

function toggleCardExpansion() {
  userCard.classList.toggle("expanded");
}

userCard.addEventListener("click", toggleCardExpansion);
fetchButton.addEventListener("click", fetchRandomUser);
fetchRandomUser();
