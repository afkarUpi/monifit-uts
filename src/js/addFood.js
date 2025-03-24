addEventListener("DOMContentLoaded", function() {
  const protein = document.getElementById("protein");
  const carbs = document.getElementById("carbs");
  const fat = document.getElementById("fat");
  const calories = document.getElementById("calories");

  function calculateCalories() {
    const proteinValue = parseFloat(protein.value) || 0;
    const carbsValue = parseFloat(carbs.value) || 0;
    const fatValue = parseFloat(fat.value) || 0;
    const caloriesValue = (proteinValue * 4) + (carbsValue * 4) + (fatValue * 9);
    calories.value = caloriesValue;
  }

  protein.addEventListener("keyup", calculateCalories);
  carbs.addEventListener("keyup", calculateCalories);
  fat.addEventListener("keyup", calculateCalories);
});