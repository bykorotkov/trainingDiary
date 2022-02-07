//Selectors
const trainInput = document.querySelector('.train-input');
const trainButton = document.querySelector('.train-button');
const trainList = document.querySelector('.train-list');
const filterOption = document.querySelector('.filter-exercises');
const exercise = document.querySelector('.exercise');
const delAllBtn = document.querySelector('#delAll-btn');

//Event Listeners
trainButton.addEventListener('click', addSet);
trainList.addEventListener('click', deleteLine);
filterOption.addEventListener('click', filterExercises);
delAllBtn.addEventListener('click', deleteList);

//Functions
function addSet(event){
    event.preventDefault();
    //Exercise Div
    const setDiv = document.createElement('div');
    setDiv.classList.add('set');
    //create LI
    const newSet = document.createElement('li');
    newSet.innerText = trainInput.value;
    newSet.classList.add('set-item');
    setDiv.appendChild(newSet);
    //create selector sign
    const selectorSign = document.createElement('p');
    selectorSign.innerText = filterOption.value;
    selectorSign.classList.add('selector');
    setDiv.appendChild(selectorSign);
    //create delete btn
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    setDiv.appendChild(deleteButton);
   
    //append to list
    trainList.appendChild(setDiv);
    //clear input value
    trainInput.value = '';
}

function deleteLine(e) {
    const item = e.target;
    e.preventDefault();
    //Delete the line
    if(item.classList[0] === 'delete-btn'){
        const deleteItemList = item.parentElement;
        //Animation
        deleteItemList.classList.add("fall");
        deleteItemList.addEventListener('transitionend', function(){
           deleteItemList.remove(); 
        });
        
    }
}

function filterExercises(e) {
    const exercises = trainList.childNodes;
    exercises.forEach(function(exercise){
        switch(e.target.value){
            case 'pushup':
                exercise.style.color = 'red';
                break;
            case 'enhpushup':
                if(exercise.classList.contains("enhpushup")){
                    exercise.style.color = 'white';
                }else{
                    exercise.style.color = 'purple';
                }break;
            case 'pullup':
                exercise.style.color = 'blue';
                break;
            case 'bicepcurl':
                exercise.style.color = 'yellow';
                break;
            case 'frontraises':
                exercise.style.color = 'aqua';
                break;
        }
    });
}

window.onload = function () {
    
  
    var seconds = 0; 
    var tens = 0; 
    var minutes = 0;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var appendMinutes = document.querySelector("#minutes");
    var buttonStart = document.querySelector('.train-button');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;
  
    buttonStart.onclick = function(event) {
        event.preventDefault();
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
       
       
}
    
    buttonStop.onclick = function() {
         clearInterval(Interval);
}
    
  
    buttonReset.onclick = function() {
       clearInterval(Interval);
        tens = "00";
        seconds = "00";
        minutes = "00";
      appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMinutes.innerHTML = minutes;
}
    
     
    
    function startTimer () {
        
       
        tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;
        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
      
      if (seconds > 59){
      console.log("minutes");
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
      tens = 0;
        appendTens.innerHTML = "0" + 0;
        }

        if (minutes > 9) {
        appendMinutes.innerHTML = minutes;
        }
    }
    
    
}

function deleteList(event) {
   event.preventDefault();

       
}
function saveFile() {
    const data = document.querySelector('#delAll-btn');
    const a = document.querySelector("#linkForSavingFiles");
    const file = new Blob([data], {
      type: 'plain/text'
    });
    a.href = URL.createObjectURL(file);
    a.download = 'file.txt';
    a.click();
}

