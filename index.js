        // Control buttons
        let playBTNS = document.querySelectorAll(".play");
        let pauseBTNS = document.querySelectorAll(".pause")


        // Playlist
        let song1 = document.querySelector(".s1");
        let song2 = document.querySelector(".s2");
        let song3 = document.querySelector(".s3");
        let song4 = document.querySelector(".s4");
        let song5 = document.querySelector(".s5");
        let song6 = document.querySelector(".s6");
        let song7 = document.querySelector(".s7");
        let song8 = document.querySelector(".s8");
       
        playBTNS.forEach(playbtn => {
            playbtn.addEventListener("click", ()=> {
                playbtn.style.color ="black";
                let a = playbtn.getAttribute("id");
            switch (a) {
                case "b1":
                    song1.play();
                    break;
                case "b2":
                    song2.play();
                    break;
                case "b3":
                    song3.play();
                    break;
                case "b4":
                    song4.play();
                    break;
                case "b5":
                    song5.play();
                    break;
                case "b6":
                    song6.play();
                    break;
                case "b7":
                    song7.play();
                    break;
                case "b8":
                    song8.play();
                    break;
        
                default:
                    break;
            }
      
            });
        });

        // Pause buttons
        pauseBTNS.forEach(pausebtn => {
            pausebtn.addEventListener("click", ()=> {
                pausebtn.style.color ="red";
                let x = pausebtn.getAttribute("id");
            switch (x) {
                case "pause1":
                    song1.pause();
                    break;
                case "pause2":
                    song2.pause();
                    break;
                case "pause3":
                    song3.pause();
                    break;
                case "pause4":
                    song4.pause();
                    break;
                case "pause5":
                    song5.pause();
                    break;
                case "pause6":
                    song6.pause();
                    break;
                case "pause7":
                    song7.pause();
                    break;
                case "pause8":
                    song8.pause();
                    break;
        
                default:
                    break;
            }
      
            })
        });



        