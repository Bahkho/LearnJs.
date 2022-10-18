// https://www.superheroapi.com/api.php/122043050640003/310
const SUPERHERO_TOKEN = "122043050640003";
const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHERO_TOKEN}`;
const heroImg = document.getElementById("heroImage");
const clearBtn = document.getElementById("btn");
const stats = document.getElementById("statistics");
const search = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
// const img = "https://www.superherodb.com/pictures2/portraits/10/100/10878.jpg";

const getSuperHero = () => {
  fetch(`${BASE_URL}/${Math.floor(Math.random() * 731) + 1}`)
    .then((response) => response.json())
    .then((json) => {
      //   console.log(json);
      //   const power = `${json}`;
      const name = `<h2> ${json.name}</h2>`;
      heroImg.innerHTML = `${name}<img src='${json.image.url}' height=400 width=400>`;
      stats.innerText = `${JSON.stringify(json).replace(/"/g, " ")}`;
      // stats.innerHTML = `${power}`;
    });
};
const getSearchedSuperHero = (name) => {
  fetch(`${BASE_URL}/search/${name}`)
    .then((response) => response.json())
    .then((json) => {
      const hero = json.results[0];
        // console.log(hero);
      const name2 = `<h2> ${hero.name}</h2>`;
      heroImg.innerHTML = `${name2}<img src='${hero.image.url}' height=400 width=400>`;
      stats.innerText = `${JSON.stringify(hero).replace(/"/g, " ")}`;
    });
};
// getSuperHero(245);

clearBtn.onclick = () => getSuperHero();
search.onclick = () => getSearchedSuperHero(searchInput.value);
