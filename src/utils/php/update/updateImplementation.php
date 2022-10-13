<?php
  require '../dbconn.php';

  $data = json_decode(file_get_contents('php://input'));
  $projectID = $data->projectID;
  $sector = $data->sector;
  $ministry = $data->ministry;
  $agency = $data->agency;
  $contractor = $data->contractor;
  $priority = $data->priority;

  $sql = "UPDATE `implementation` SET `sector` = '$sector', `ministry` = '$ministry', `implementing agency` = '$agency', `contractor` = '$contractor', `priority` = '$priority' WHERE `implementation`.`projectID` = '$projectID'";

  $result = mysqli_query($conn, $sql);

  echo $result;
?>

