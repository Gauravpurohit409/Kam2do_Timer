  var timer;
    function stop()
  {
    clearInterval(timer);
  }

  function reset()
  {
    
    document.getElementById("min").innerHTML = "25";      
    document.getElementById("sec").innerHTML = "00"; 
    min = 25;
    sec = 00;
    stop();
  }
  var min = 25;
    var sec = 00;
   
    function start()
  { 
    
  
    timer = setInterval(function() {
      
      if (sec > 0) {
      
          sec--;
          document.getElementById("min").innerHTML = min;
          document.getElementById("sec").innerHTML = sec;
          //alert("Hello");
      } 
      else {

          if (min >0)
            {
              min--;
                sec = 59;
          
            document.getElementById("min").innerHTML = min;
            document.getElementById("sec").innerHTML = sec;
            }
          else
          {


    //          document.getElementById("music").play();
              if (min == 0)
              {
                  alert("Time's up ");
                  reset();
              }
          }
      }

      
    }, 1000);
    

  };