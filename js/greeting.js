/*
* This javascript comes from https://medium.com/front-end-weekly/how-to-create-typing-effect-in-css-and-js-3252dd807f0a
*/

async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
}
  
  
function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(100);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
}

const carouselText = [
    {text: "Hi!"},
    {text: "Hello!"},
    {text: "Hi, hello! I'm V. Welcome to my website!"}
]
  
async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(500);
        i++
        if(i >= carouselList.length) {i = 0;}
    }
}