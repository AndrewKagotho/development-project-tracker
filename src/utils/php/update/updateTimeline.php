<?php
  require '../dbconn.php';

  $data = json_decode(file_get_contents('php://input'));
  $projectID = $data->projectID;
  $approvalDate = $data->approvalDate;
  $startDate = $data->startDate;
  $endDate = $data->endDate;
  $duration = $data->duration;

  $sql = "UPDATE `timelines` SET `approval date` = '$approvalDate', `start date` = '$startDate', `end date` = '$endDate', `duration` = '$duration' WHERE `timelines`.`projectID` = '$projectID'";

  $result = mysqli_query($conn, $sql);

  echo $result;
?>