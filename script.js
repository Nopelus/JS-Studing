
window.addEventListener("load", function loadingFunction() {


  var randomNumber = Math.random() * 5;
  randomNumber = Math.round(randomNumber);

  var buttons = document.querySelectorAll("p");
  console.log(randomNumber + 1);
  buttons[randomNumber].style.backgroundColor = "red";
//-------------------------------------------------------------------------------
let array = [1, 2, 3, 4, 5];
console.log(array);
for(let i  = 0; i < 5; i++){
  let sum = array[i] + array[i+1];
  array.push(sum);}
console.log(array);
//-------------------------------------------------------------------------------
// let item = event.target;
// let images = document.querySelectorAll('img');
//     [].forEach.call(images, function(item) {
//       item.addEventListener('click', function() {
//         if (item.classList.contains('active')) {
//         item.classList.remove('active');
//       } else {
//         item.classList.add('active');
//       }
//       });
//     });

//-------------------------------------------------------------------------------
// let houses = {
//   size: 40,
//   material: 'wood',
//   status: 'onsale'

// };
// let MichaleHouse = {
//   size: 20,
//   status: 'sold'
// };

// MichaleHouse.__proto__ = houses;
// console.log(MichaleHouse.material);
//-------------------------------------------------------------------------------
let pictures = document.querySelectorAll('img');


pictures.forEach(function(item){
  item.addEventListener('click', function(){
    alert('YOU HAVE CLICKED ON THE PICTURE!');
  });
});
  // problemSolving.insertBefore(div, pictures[1]);
//---------------------------------------------------------------------------------

// let timerID = setTimeout(function repeater(){         // рекурсивный вызов таймаута (этот способ) лучше чем setInterval, потому что он будет вызывать некст функцию когда закончиться выполнение это. 
//   console.log('Kapec');
//   setTimeout(repeater,2000);
// });
//---------------------------------------------------------------------------------
let problemSolving = document.querySelector('.problem_solving');
  problemSolving.addEventListener('click', function(event){
    if(event.target && event.target.matches('IMG')){
      console.log('Don`t click!');
    }
  });
  //--------------------------------------------------------------------------------

  let elemsP = document.getElementsByClassName('elemP');

  [...elemsP].forEach(function(item,elemsP){
    item.addEventListener('click', function(){
      item.style.backgroundColor= 'red';
    });
  });
  //--------------------------------------------------------------------------------


});