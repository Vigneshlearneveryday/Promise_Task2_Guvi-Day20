const dog_btn = document.getElementById("dog_btn");
const dog_result = document.getElementById("dog_result");
dog_btn.addEventListener("click", getRandomDog);
//fetching random dog image from random.dog api
function getRandomDog() {
  fetch("https://random.dog/woof.json")
    .then((res) => res.json())
    .then((data) => {
      if (data.url.includes(".mp4")) {
        getRandomDog();
      } else {
        dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
      }
    });
}
