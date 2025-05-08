let tv = document.getElementById("screen").querySelector("img");

let channels = [
  {
    id: "one",
    url: "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg",
  },
  {
    id: "two",
    url: "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg",
  },
  {
    id: "three",
    url: "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg",
  },
  {
    id: "four",
    url: "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg",
  },
  {
    id: "five",
    url: "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg",
  },
  {
    id: "six",
    url: "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg",
  },
  {
    id: "seven",
    url: "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg",
  },
  {
    id: "eight",
    url: "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg",
  },
  {
    id: "nine",
    url: "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg",
  },
];

const changeChallFunc = (challID) => {
  let changeChall = channels.find((chall) => chall.id === challID);

  if (changeChall) {
    tv.src = changeChall.url;
  } else {
    tv.src = "";
  }
};

let changeBtns = document.querySelectorAll(".channel");

changeBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const btnId = this.id;
    changeChallFunc(btnId);
  });
});
