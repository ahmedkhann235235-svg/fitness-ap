let workout = [
  { name: "Push Ups", sets: 3, reps: 10 },
  { name: "Squats", sets: 3, reps: 12 },
  { name: "Plank", sets: 3, reps: "30 sec" }
];

let currentExercise = 0;
let currentSet = 1;

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function startWorkout() {
  currentExercise = 0;
  currentSet = 1;
  showScreen("workoutScreen");
  loadExercise();
}

function loadExercise() {
  let ex = workout[currentExercise];
  document.getElementById("exerciseName").innerText = ex.name;
  document.getElementById("exerciseDetails").innerText =
    `Set ${currentSet}/${ex.sets} - ${ex.reps}`;
}

function completeSet() {
  let ex = workout[currentExercise];

  if (currentSet < ex.sets) {
    currentSet++;
  } else {
    nextExercise();
    return;
  }

  loadExercise();
}

function nextExercise() {
  if (currentExercise < workout.length - 1) {
    currentExercise++;
    currentSet = 1;
    loadExercise();
  } else {
    finishWorkout();
  }
}

function finishWorkout() {
  let count = localStorage.getItem("workouts") || 0;
  count++;
  localStorage.setItem("workouts", count);

  alert("Workout Completed!");
  goHome();
}

function showProgress() {
  let count = localStorage.getItem("workouts") || 0;
  document.getElementById("progressText").innerText =
    `Workouts completed: ${count}`;
  showScreen("progressScreen");
}

function goHome() {
  showScreen("homeScreen");
}
