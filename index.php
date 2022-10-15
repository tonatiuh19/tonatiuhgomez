<?php
require_once('admin/cnn.php');
require_once('admin/mob/Mobile_Detect.php');
date_default_timezone_set('America/Mexico_City');
$today = date("Y-m-d H:i:s");
$detect = new Mobile_Detect();
if ($detect->isMobile()){
  $mobile = 1;
}
else {
  $mobile = 0;
}
$sql = "INSERT INTO visitors (title, date, mobile)
VALUES ('Visit', '$today', '$mobile')";

if ($conn->query($sql) === TRUE) {
  //echo "New record created successfully";
} else {
  //echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/fontawesome/css/all.css">
    <title>Playing Exponential</title>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">
  </head>
  <body>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
              <div id="game" class="game">

                <a class="start" href="#game">insert coin<span>💰</span></a>

                <div class="content">

                  <input id="bullseye-1" type="checkbox">
                  <label for="bullseye-1"><span></span></label>
                  
                  <input id="bullseye-2" type="checkbox">
                  <label for="bullseye-2"><span></span></label>
                  
                  <input id="bullseye-3" type="checkbox">
                  <label for="bullseye-3"><span></span></label>
                  
                  <input id="bullseye-4" type="checkbox">
                  <label for="bullseye-4"><span></span></label>
                  
                  <input id="bullseye-5" type="checkbox">
                  <label for="bullseye-5"><span></span></label>
                  
                  <input id="bullseye-6" type="checkbox">
                  <label for="bullseye-6"><span></span></label>
                  
                  <input id="bullseye-7" type="checkbox">
                  <label for="bullseye-7"><span></span></label>
                  
                  <input id="bullseye-8" type="checkbox">
                  <label for="bullseye-8"><span></span></label>
                  
                  <div class="score"> points 
                    <p><span class="res">Refresh to play again</span>
                      <br>
                      <span class="btn btn-dark">Felix Alejandro Tonatiuh Gomez Briones</span>
                      <p>
                        <a href="https://www.linkedin.com/in/tonatiuhgomez/" target="_blank"><img src="icons/linkedin.svg" alt="" width="32" height="32" title="Shoot here to open my Linkedin"></a>
                        <a href="https://www.facebook.com/tonatiuhgbr" target="_blank"><img src="icons/facebook.svg" alt="" width="32" height="32" title="Shoot here to open my Facebook"></a>
                        <a href="https://www.instagram.com/tonatiuhgbr/" target="_blank"><img src="icons/instagram.svg" alt="" width="32" height="32" title="Shoot here to open my Instagram"></a>
                        <a href="https://github.com/tonatiuh19" target="_blank"><img src="icons/github.svg" alt="" width="32" height="32" title="Shoot here to open my Github"></a>
                      </p>
                      
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <script src="js/script.js"></script>
  </body>
</html>