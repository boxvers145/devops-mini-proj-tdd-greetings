function greet(name) {
  if (name === null || name === undefined || name === '') {
    return 'Hello, my friend.';
  }
  if (Array.isArray(name)) {
     let text = 'Hello';
     for (let counter = 0; counter < name.length; counter++) {
       if (counter == name.length-1) {
        text += ` and ${name[counter]}.`
       }else{
         text += `, ${name[counter]}`;
      }
    }
    return text;
  }
  if (name === name.toUpperCase()) {
    return `HELLO, ${name}!`;
  }
  return `Hello, ${name}.`;
}
module.exports = greet;