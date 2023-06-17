/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = [
    "swimmer",
    "dog",
    "skunk",
    "politician",
    "hiker",
    "cat",
    "fly",
    "vagrant",
    "gamer"
  ];
  let action = [
    "took my",
    " threw my",
    "yelled at my",
    "stole my",
    "smelled my"
  ];
  let possession = ["homework", "pants", "car", "printer", "computer"];
  let where = [
    "on the street",
    "in my house",
    "in my class",
    "at the park",
    "at work"
  ];

  let proIndex = Math.floor(Math.random() * pronoun.length);
  let subjIndex = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possessionIndex = Math.floor(Math.random() * possession.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subjIndex] +
    " " +
    action[actionIndex] +
    " " +
    possession[possessionIndex] +
    " " +
    where[whereIndex]
  );
};
