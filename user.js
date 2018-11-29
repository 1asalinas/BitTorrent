//Type your code inside this function
function User(tracker, torrent){

  let myTracker = tracker;
  let myTorrent = torrent;
  let state = "seed" || "leech";
  let downloadSpeed = Math.random * 25;
  let uploadSpeed = Math.random * 10;


  function startDownload(){

  }

  function updateTracker(){
    function tracker(){

    }
  }

  function checkProgress(){
    let sum = 0;< percent.length; i++){
      sum = sum + percent[i];
    }
    return sum/ percent.length;
  }

  function leech(){
    uploadSpeed = 0;
    downloadSpeed = Math.random();
  }

  function seed(){
    uploadSpeed = Math.random() * 10;
    downloadSpeed = Math.random() * 25;

  }




}
