const msg = document.querySelector('.msg');
const guess =document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let randWords = "";
let sWords=['python','javascript','c++','php','java','c#','html','css','reactjs','angular','swift','android','sql'];


const createNewWords=()=>{
    let ranNum = Math.floor(Math.random()* sWords.length);
    // console.log(ranNum);
    let newTempSwords = sWords[ranNum];
     return newTempSwords;
    //  console.log(newTempSwords.split(""))
}

const scrambleWords = (arr)=>{
    for(let i=arr.length-1; i>=0; i--){
        let temp = arr[i];
        // console.log(temp);
        let j = Math.floor(Math.random()*(i+1));
        // console.log(j)
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

btn.addEventListener('click',function(){
    if(!play){
        play=true;
        btn.textContent="Guess";
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        randWords = scrambleWords(newWords.split("")).join("");
        // console.log(randWords.join(""));
        msg.textContent = `Guess the word -  ${ randWords}`;
    }else{
        let tempWord = guess.value;
        if(tempWord === newWords){
            play = false;
            msg.textContent=`Awesome It's Correct. It is ${newWords}`;
            btn.textContent="Start Again..."
            guess.classList.toggle('hidden');
            guess.value = "";
        }else{
            console.log("incorrect");
            msg.innerHTML = ` "Sorry" . It is not correct gusseing - ${ tempWord}. Please try again`
        }
    }
})