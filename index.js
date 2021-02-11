// const button1 = document.getElementById('button1')
// const button2 = document.getElementById('button2')
// const button3 = document.getElementById('button3')
// const button4 = document.getElementById('button4')
// const button5 = document.getElementById('button5')
// const button6 = document.getElementById('button6')
// const button7 = document.getElementById('button7')


// function markComplete1(){
//     button1.style.backgroundColor = "lightBlue"    
// }

// function markComplete2(){
//     button2.style.backgroundColor = "lightBlue"    
// }

// function markComplete3(){
//     button3.style.backgroundColor = "lightBlue"    
// }

// function markComplete4(){
//     button4.style.backgroundColor = "lightBlue"    
// }

// function markComplete5(){
//     button5.style.backgroundColor = "lightBlue"    
// }

// function markComplete6(){
//     button6.style.backgroundColor = "lightBlue"    
// }

// function markComplete7(){
//     button7.style.backgroundColor = "lightBlue"    
// }

// let completedButtons = document.querySelectorAll("li"); 

// for( let i = 0; i < completedButtons.length; i++ ) {
// completedButtons[i].addEventListener('click',markComplete)
// }

// console.log(completedButtons);

  
// function markComplete(i) {
//     completedButtons[i].style.backgroundColor = "lightBlue"
    
// }

const buttons = document.querySelectorAll("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => markComplete(i));
}
function markComplete(i) {
    if (buttons[i].classList.contains("toggledOn")) {
      buttons[i].classList.remove("toggledOn");
    } else {
      buttons[i].classList.add("toggledOn");
    }
  }
  
