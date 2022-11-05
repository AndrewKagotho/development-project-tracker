<?php
  require '../dbconn.php';

  $data = json_decode(file_get_contents('php://input'));
  var_dump($data);
  $countyNo = $data->countyNo;
  $governor = $data->governor;
  $senator = $data->senator;

  $sql = "UPDATE `counties` SET `governor` = '$governor', `senator` = '$senator' WHERE `counties`.`countyNo` = '$countyNo'";

  $result = mysqli_query($conn, $sql);

  echo $result;
?>