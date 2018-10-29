'use strict';

import {timer} from './timer';
import {tabs} from './tabs';
import {modal} from './modal';
import {form} from './form';
import {slider} from './slider';
import {calc} from './calc';


window.addEventListener('DOMContentLoaded', function() {
    timer();
    tabs();
    modal();
    form();
    slider();
    calc();
});