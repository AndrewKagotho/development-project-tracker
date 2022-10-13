<?php
  require '../dbconn.php';

  $data = json_decode(file_get_contents('php://input'));
  $projectID = $data->projectID;
  $name = $data->name;
  $description = $data->description;
  $status = $data->status;

  $sql = "UPDATE `projects` SET `name` = '$name', `description` = '$description', `status` = '$status' WHERE `projects`.`projectID` = '$projectID'";

  $result = mysqli_query($conn, $sql);

  echo $result;
?>