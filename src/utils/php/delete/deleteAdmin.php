<?php

  require '../dbconn.php';

  $data = json_decode(file_get_contents('php://input'));
  $adminUsername = $data->adminUsername;

  $sql = "DELETE FROM `admin` WHERE `username` = '$adminUsername'";

  $result1 = mysqli_query($conn, $sql);

  echo $result1;
?>