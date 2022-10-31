<?php
  $propertyArray = [];
  $valueArray = [];
  $counter = 0;

  require '../dbconn.php';

  $data = json_decode(file_get_contents('php://input'));
  $projectID = $data->projectID;
  $action = $data->action;

  if($action === 'update') {
    foreach($data as $key => $value) {
      $propertyArray[$counter] = $key;
      $valueArray[$counter] = $value;
      $counter++;
    }
    
    for($i=2; $i<$counter; $i++) {
      $field = json_encode($propertyArray[$i]);
      $valueFrom = json_encode($valueArray[$i][0]);
      $valueTo = json_encode($valueArray[$i][1]);

      $sql = "INSERT INTO `tracking logs` (`date`, `projectID`, `field`, `action`, `value from`, `value to`) VALUES (NOW(), '$projectID', '$field', '$action', '$valueFrom', '$valueTo')";
    }
  }

  else
    $sql = "INSERT INTO `tracking logs` (`date`, `projectID`, `action`) VALUES (NOW(), '$projectID', '$action')";
  

  $result = mysqli_query($conn, $sql);
  
  echo $result;
?>