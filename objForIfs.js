const defaultNoSwitch = false;
const name = 'blue';
const noSwicth = { blue: '#055fff' };
const reject = noSwicth['blue'] || defaultNoSwitch;
console.log(reject);
