const mealsEl = document.getElementById('meals');
const favContainer = document.getElementById('fav-meals');
const mealPopup = document.getElementById('meal-popup');
const mealInfoEl = document.getElementById('meal-info');
const popupCloseBtn = document.getElementById('close-popup');


getRandomMeal();

async function getRandomMeal() {
  const resp = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const respData = await resp.json();
  const randomMeal = respData.meals[0];

  addMeal(randomMeal, true);
}

async function getMealById(id) {
  const resp = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
}

async function getMealsBySearch(term) {
  const resp = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + term);
}

function addMeal(mealData, random = false) {
  const meal = document.createElement('div');
  meal.classList.add('meal');
  meal.innerHTML = `<div class="meal-header">
        ${random ? `<span class="random"> Random Recipe </span>` : ""}
        <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}" />
      </div>
      <div class="meal-body">
        <h4>${mealData.strMeal}</h4>
        <button class="fav-btn">
          <i class="fas fa-heart"></i>
        </button>
      </div>`;
  mealsEl.appendChild(meal);
}