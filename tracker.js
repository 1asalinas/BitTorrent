//Type your code in this function
function Tracker(){

  let seeds =[];
  let percent = [];

  //implement all five functions below
  function numOfSeeds(){
    let result = 0;
    for (let i = 0; i <= seeds.length; i++){
      if(seeds[i] !== null){
        result++
      }

    } 
  }

  function addSeed(name){
    seeds.push(name)
  }

  function removeSeed(name){
    for(let i = 0; i < seeds.length; i++){
      if(seeds[i] === name);
      return seeds = [null];
      
    }

  }

  function reportHealth(){
    let sum = 0;
    let count = 0;
    for(let i = 0; i < percent.length; i++){
      if(percent[i] !== 0){
        sum = sum + percent[i];
        count++;
      }
    }
    return sum / count;
  }

  function update(){
  for (let i = 0; i < seeds.length; i++){
    let r = Math.random();
    if(r < 0.03){
      seeds[i] = null;
      percent[i] = 0;
    }
    else if(r > percent[i]){
      percent[i] = r;
      } 
    }
  }



}
