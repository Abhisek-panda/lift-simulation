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

function createFloors() {
  for (let i = 0; i < parseInt(floors.value); i++) {
    const floor = document.createElement("div");
    const upBtn = document.createElement("button");
    const downBtn = document.createElement("button");

    floor.className = "floor";
    upBtn.className = "up-btn";
    downBtn.className = "down-btn";

    upBtn.innerHTML = "UP";
    downBtn.innerHTML = "DOWN";

    container.appendChild(upBtn);
    container.appendChild(downBtn);
    container.appendChild(floor);
  }
}

function createLifts() {
  const liftArr = [];
  for (let i = 0; i <= parseInt(lifts.value); i++) {
    const lift = document.createElement("div");
    lift.className = "lift";
  }
}

function generateSimulation() {
  valueChecker();
  createFloors();
}
