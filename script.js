const button = document.querySelector("#reload");
const fact = document.querySelector("#fact");

const orcaFacts = [
  "Though called killer whales, orcas are not whales. They are the largest dolphin species.",
  "In Argentina, orcas hurl themselves onshore to grab sea lion pups",
  "In the Antartic, pod members cooperate to make large waves that wash seals from ice floes.",
  "Whalers call the orca the 'killer of whales.' It preys on sperm, gray, fin, humpback, and other whales.",
];

button.addEventListener("click", (e) => {
  e.preventDefault;
  let randomValue = orcaFacts[Math.floor(Math.random() * orcaFacts.length)];
  fact.classList.add("fade");
  fact.innerText = randomValue;
  setTimeout(() => {
    fact.classList.remove("fade");
  }, 500);
});
