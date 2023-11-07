// TODO: Add a comment explaining role of the index.js file and import statements
// ans: since its the first file that runs, it adds the click handlers to the page.

import { boxClick } from './box'; //
import { headerClick } from './header';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);
