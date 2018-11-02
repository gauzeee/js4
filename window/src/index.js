"use strict";

import { modals } from "./modal";
import { modalsForms } from "./modalsForms";
import { inputs } from "./inputs";
import { tabsGlazing } from "./tabsGlazing";
import { tabsDecoration } from "./tabsDecoration";
import { calc } from "./calc";

window.addEventListener("DOMContentLoaded", function() {
  modals();
  modalsForms();
  inputs();
  tabsGlazing();
  tabsDecoration();
  calc();
});
