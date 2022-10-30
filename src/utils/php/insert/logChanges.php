<?php
  $propertyArray = [];
  $valueArray = [];
  $counter = 0;

  require '../dbconn.php';

  $data = json_decode(file_get_contents('php://input'));
  $projectID = $data->projectID;
  $action = $data->action;

  foreach($data as $key => $value) {
    $propertyArray[$counter] = $key;
    $valueArray[$counter] = $value;
    $counter++;
  }

  for($x=2; $x<$counter; $x++) {
    $test1 = json_encode($propertyArray[$x]);
    $test2 = json_encode($valueArray[$x][0]);
    $test3 = json_encode($valueArray[$x][1]);

    $sql = "INSERT INTO `tracking logs` (`date`, `projectID`, `field`, `action`, `value from`, `value to`) VALUES (NOW(), '$projectID', '$test1', '$action', '$test2', '$test3')";

    $result = mysqli_query($conn, $sql);
  }
  
  echo $result;
?>