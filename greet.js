function greet(name) {
  if (name === null || name === undefined || name === '') {
    return 'Hello, my friend.';
  }

  if (Array.isArray(name)) {
    let tableLowerName = [];
    let tableUpperName = [];

    for (let counter = 0; counter < name.length; counter++) {
     if(name[counter] === name[counter].toUpperCase()) {
       tableUpperName.push(name[counter]);
     }else{
       tableLowerName.push(name[counter]);
     }
   }

   let textMin = 'Hello';
   let textMax = '';
   if(tableUpperName.length != 0){
     textMax = ' AND HELLO';

     for (let counter = 0; counter < tableUpperName.length; counter++) {
       if(counter == tableUpperName.length-1){
         textMax += ` ${tableUpperName[counter]}!`;
       }else{
         textMax += ` ${tableUpperName[counter]}`;
       }
     }
   }

   for (let counter = 0; counter < tableLowerName.length; counter++) {
     if(counter == tableLowerName.length-1){
       textMin += ` and ${tableLowerName[counter]}.`;
     }else{
       textMin += `, ${tableLowerName[counter]}`;
     }
   }

   if(textMax != '') {
     return textMin += textMax;
   }

   return textMin;
 }

  if (name === name.toUpperCase()) {
    return `HELLO, ${name}!`;
  }
  return `Hello, ${name}.`;
}
module.exports = greet;