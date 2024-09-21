const lifts = document.getElementById("lifts");
const floors = document.getElementById("floors");
const generateBtn = document.getElementById("generate-btn");
const container = document.getElementById("container");

function valueChecker() {
  if (
    parseInt(lifts.value) == 0 ||
    parseInt(lifts.value) == -1 ||
    parseInt(floors.value) == 0 ||
    parseInt(floors.value) == -1
  ) {
    container.innerHTML = "Please use usuable values for simulation";
  } else {
    container.innerHTML = "";
  }
}

function generateSimulation() {
  valueChecker();
}
