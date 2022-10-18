<?php
  require '../dbconn.php';

  $data = json_decode(file_get_contents('php://input'));
  $projectID = $data->projectID;
  $name = $data->name;
  $description = $data->description;
  $status = $data->status;

  $projectsSql = "INSERT INTO `projects` VALUES ('$projectID','$name', '$description', '$status')";
  
  $result1 = mysqli_query($conn, $projectsSql);

  // echo $result1;
  var_dump($data);
?>