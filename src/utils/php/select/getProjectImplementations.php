<?php
  $objectArray = [];
  $counter = 0;

  require '../dbconn.php';

  $sql = "SELECT * FROM `implementation`";

  $result = mysqli_query($conn, $sql);

  while($object = mysqli_fetch_object($result)) {
    if($object->projectID === '')
      continue;
    $objectArray[$counter] = $object;
    $counter++;
  }

  echo json_encode($objectArray);
?>