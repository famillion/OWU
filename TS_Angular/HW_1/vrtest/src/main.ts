import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


import {EMenues} from "./app/Abs/EMenues";

let exitFlag: boolean = true;

while (exitFlag) {
  let answer = +prompt(EMenues.MAIN_MENU);
  switch (answer) {
    case 1:
      answer = +prompt(EMenues.VR_MENU);
      break;
    case 2:
      answer = +prompt(EMenues.FRACTION_MENU);
      break;
    case 3:
      answer = +prompt(EMenues.DEPUTAT_MENU);
      break;
    case 0:
      exitFlag = false;
      break;
    default:
      answer = +prompt(`Введіть коректне число!
       ${EMenues.MAIN_MENU}`);
  }
}
