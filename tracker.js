//Type your code in this function
function Tracker(){

  let seeds =[];
  let percent = [];

  //implement all five functions below
  function numOfSeeds(list){
    let result = 0;
    for (let i = 0; i <= list.length; i++){
      if(list[i] !== null){
        result++
      }

    } 
  }

  function addSeed(name){
    seeds.push(name)
  }

  function removeSeed(seeds,name){
    for(let i = 0; i < seeds.length; i++){
      if(seeds[i] === name);
      return seeds = [null];
      
    }

  }

  function reportHealth(list){
    let sum = 0;
    for(let i = 0; i < list.length; i++){
      sum = sum + seeds[i];
    }
    return sum / list.length
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
