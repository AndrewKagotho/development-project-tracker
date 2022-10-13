<?php
  require '../dbconn.php';

  $data = json_decode(file_get_contents('php://input'));
  $projectID = $data->projectID;
  $countyNo = $data->countyNo;
  $subCounty = $data->subCounty;
  $constituency = $data->constituency;
  $ward = $data->ward;

  $sql = "UPDATE `locations` SET `countyNo` = '$countyNo', `sub county` = '$subCounty', `constituency` = '$constituency', `ward` = '$ward' WHERE `locations`.`projectID` = '$projectID'";

  $result = mysqli_query($conn, $sql);

  echo $result;
?>