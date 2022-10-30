<?php
  $objectArray = [];
  $counter = 0;

  require '../dbconn.php';

  $sql = "SELECT * FROM `counties`";

  $result = mysqli_query($conn, $sql);

  while ($object = mysqli_fetch_object($result)) {
    $objectArray[$counter] = $object;
    $counter++;
  }

  echo json_encode($objectArray);
?>