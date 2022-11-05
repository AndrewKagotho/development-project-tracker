<?php
  require '../dbconn.php';

  $data = json_decode(file_get_contents('php://input'));
  var_dump($data);
  $adminUsername = $data->adminUsername;
  $adminFirstName = $data->adminFirstName;
  $adminLastName = $data->adminLastName;
  $adminEmail = $data->adminEmail;

  $sql = "UPDATE `admin` SET `first name` = '$adminFirstName', `last name` = '$adminLastName', `email` = '$adminEmail' WHERE `admin`.`username` = '$adminUsername'";

  $result = mysqli_query($conn, $sql);

  echo $result;
?>