// 1. Select the target Element
const appContainer = document.getElementById('app');
const generateBtn = document.getElementById('generateBtn');

// 2. Create new HTML elements (document.createElement())
function createProfileCard(){
  //create the profileCardContainer
  const profileCard = document.createElement("div");
  //add Class
  profileCard.className = "profile-card";
  console.log(profileCard);
  //create an image element for the profile card
  const profileImage = document.createElement("img");
  //add image to the created image element
  profileImage.src = "./batman-seeklogo.png";
  console.log(profileImage);
  //create heading element
  const profileName = document.createElement("h3");
  profileName.textContent = "Batman";

  //Create a paragraph element for the desc
  const profileDescription = document.createElement("p");
  profileDescription.textContent = "I'm Batman";
  //console.log(profileDescription);
  // 3. Add content to the element created (innerHTML/textContent)
  // 4. Add classes or ids if needed / add any attribute

  // 5. Append the element to build the structure
  profileCard.appendChild(profileImage);
  profileCard.appendChild(profileName);
  profileCard.appendChild(profileDescription);
  console.log(profileCard);

  // 6. Append to the DOM
  appContainer.appendChild(profileCard);
  console.log(appContainer);
}

// add eventlistener
generateBtn.addEventListener('click', createProfileCard)




