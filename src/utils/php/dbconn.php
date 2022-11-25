<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: access");
  header("Access-Control-Allow-Methods: POST");
  header("Content-Type: application.json; charset=UTF-8");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  
  $dbserver = 'containers-us-west-134.railway.app:7391';
  $dbuser = 'root';
  $dbpass = 'myQ7nl7PApNQISi8JHEg';
  $dbname = 'railway';

  $conn = mysqli_connect($dbserver, $dbuser, $dbpass, $dbname);

  if(!$conn)
    echo 'Connection unsuccessful!';
?>