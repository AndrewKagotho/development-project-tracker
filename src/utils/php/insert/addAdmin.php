<?php
  require_once '../dbconn.php';

  $data = json_decode(file_get_contents('php://input'));
  $adminUserName = $data->adminUserName;
  $adminFirstName = $data->adminFirstName;
  $adminLastName = $data->adminLastName;
  $adminPassword = $data->adminPassword;
  $adminEmail = $data->adminEmail;

  $sql = "INSERT INTO `admin` (`username`, `password`, `first name`, `last name`, `email`) VALUES ('$adminUserName', SHA2('$adminPassword', 256), '$adminFirstName', '$adminLastName', '$adminEmail')";

  $result1 = mysqli_query($conn, $sql);

  echo $result1;
?>