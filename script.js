const canvas = document.getElementById('animationCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Box properties
    const boxWidth = 100;
    const boxHeight = 100;
    const numBoxes = 10; // Number of boxes
    let boxes = [];

    for (let i = 0; i < numBoxes; i++) {
      boxes.push({
        x: Math.random() * (canvas.width - boxWidth),
        y: Math.random() * canvas.height,
        speed: Math.random() * 3 + 1 
      });
    }

    function draw() {
    
      ctx.clearRect(0, 0, canvas.width, canvas.height);

    
      for (let i = 0; i < numBoxes; i++) {
        
        if (i % 2 === 0) {
          ctx.fillStyle = 'rgba(154, 205, 50, 0.7)'; // First color
        } else {
          ctx.fillStyle = 'rgba(255, 165, 0, 0.5)'; // Second color
        }
        ctx.fillRect(boxes[i].x, boxes[i].y, boxWidth, boxHeight);

       
        boxes[i].y += boxes[i].speed;

        if (boxes[i].y > canvas.height) {
          boxes[i].y = -boxHeight;
          boxes[i].x = Math.random() * (canvas.width - boxWidth);
        }
      }

      requestAnimationFrame(draw);
    }

    draw();

var currentlyPlayingSong = null;

function checkScore() {
    if (num. value != "") {

        if (currentlyPlayingSong !== null) {
            currentlyPlayingSong.pause();
            currentlyPlayingSong.currentTime = 0;
        }

        if (num. value >=0 && num. value < 40){
        console.log("F");
        document.getElementById("displayResults").innerHTML = "F 'Fail🤦‍♂️😭'";
        playSong("SongF");


    } else if (num. value >= 40 && num. value < 45) {
        console.log("E");
        // show.innerHTML = "F"
        document.getElementById("displayResults").innerHTML = "E 'Poor😢'";
        playSong("SongE");

    } else if (num. value >= 45 && num. value < 50){
        console.log("D");
        document.getElementById("displayResults").innerHTML = "D 'merit😣'";
        playSong("SongD");

    } else if (num. value >= 50 && num. value < 60) {
        console.log("C");
        // show.innerHTML = "F"
        document.getElementById("displayResults").innerHTML = "C 'Credit👌'";
        playSong("SongC");

    } else if (num. value >= 60 && num. value < 75) {
        console.log("B");
        // show.innerHTML = "F"
        document.getElementById("displayResults").innerHTML = "B 'Pass✔'";
        playSong("SongB");

    } else if (num. value >= 75 && num. value <= 100) {
        console.log("A");
        // show.innerHTML = "F"
        document.getElementById("displayResults").innerHTML = "A 'Excellent😁'";
        playSong("SongA");

    } else if (num. value >=101) {
        console.log("INVALID SCORE");
        document.getElementById("displayResults").innerHTML = "Invalid Score Input 😠"
        playSong("SongX");
    } else if (num. value <=-1) {
        console.log("Pls enter a valid score");
        document.getElementById("displayResults").innerHTML = "Pls Enter a Valid Score";
    }
    }  else {
        alert("Please fill in the empty space")
    }

}


function playSong(songId) {
    var songToPlay = document.getElementById(songId);
    if (songToPlay) {
        songToPlay.play();
        currentlyPlayingSong = songToPlay;
    }
}

function stopCurrentSong() {
    if (currentlyPlayingSong !== null && !currentlyPlayingSong.paused) {
        currentlyPlayingSong.pause();
        currentlyPlayingSong.currentTime = 0;
    }
}