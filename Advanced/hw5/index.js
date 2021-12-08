async function getByIP() {
  let response = await fetch("https://api.ipify.org/?format=json");
  let user = await response.json();

  console.log(user);

  let apiResponse = await fetch(
    `http://ip-api.com/json/${user.ip}?fields=continent,country,regionName,city,district`
  );
  let apiUser = await apiResponse.json();

  console.log(apiUser);

  let target = document.querySelector(`.container`);
  target.insertAdjacentHTML(
    "beforeend",
    `<h3>Continent: ${apiUser.continent}</h3>
    <h3>Country: ${apiUser.country}</h3>
    <h3>Region: ${apiUser.regionName}</h3>
    <h3>City: ${apiUser.city}</h3>
    <h3>District: ${apiUser.district}</h3>`
  );
}

let getUserIP = (document.getElementById("btn").onclick = getByIP);
