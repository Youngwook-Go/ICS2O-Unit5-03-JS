// Copyright (c) 2022 Youngwook All rights reserved
//
// Created by: Youngwook
// Created on: OCT 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-03-JS/sw.js", {
    scope: "/ICS2O-Unit5-03-JS/",
  })
}

// function description

function update() {
  //input
  const age = parseFloat(document.getElementById("user-input").value)

  //output
  if (age >= 17) {
    document.getElementById("answer").innerHTML = "You can see an R movie alone"
  } else if (age >= 13) {
    document.getElementById("answer").innerHTML =
      "You can see a PG-13 movie alone"
  } else if (age >= 5) {
    document.getElementById("answer").innerHTML =
      "You can see a G or PG movie alone"
  } else {
    document.getElementById("answer").innerHTML =
      "You're too young for most thing"
  }
  document.getElementById("end").innerHTML = "Thanks for verifyng your age"
}
