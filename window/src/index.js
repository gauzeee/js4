"use strict";

import { modals } from "./modal";
import { modalsForms } from "./modalsForms";
import { inputs } from "./inputs";
import { tabsGlazing } from "./tabsGlazing";
import { tabsDecoration } from "./tabsDecoration";
import { calc } from "./calc";
import { photos } from "./photos";
import { timer } from "./timer";

window.addEventListener("DOMContentLoaded", function() {
  modals();
  modalsForms();
  inputs();
  tabsGlazing();
  tabsDecoration();
  calc();
  photos();
  timer();
});
