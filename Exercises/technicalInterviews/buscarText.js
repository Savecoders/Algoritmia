const coincidencias = (texts, palabra) => {
  let arrText = texts.toLowerCase().split(' ');
  let cont = 0;
  arrText.forEach(
      (element) => { cont += element === palabra.toLowerCase() ? 1 : 0; });
  return cont;
};
let text = 'hola como estas como como';
console.log(coincidencias(text, 'Como'));
