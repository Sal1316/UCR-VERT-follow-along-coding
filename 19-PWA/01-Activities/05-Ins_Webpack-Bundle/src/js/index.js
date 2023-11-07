import { buttonClick } from './button';
// Import CSS file into entry point to add as dependency
import '../css/style.css'; // webpack handles this through the use of the loaders.

document.getElementById('btn').addEventListener('click', buttonClick);
