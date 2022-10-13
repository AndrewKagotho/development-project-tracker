<?php
  require '../dbconn.php';

  $data = json_decode(file_get_contents('php://input'));
  $projectID = $data->projectID;
  $estimatedCost = $data->estimatedCost;
  $budget = $data->budget;
  $financialYear = $data->financialYear;
  $fundingSource = $data->fundingSource;

  $sql = "UPDATE `finances` SET `estimated cost` = '$estimatedCost', `budget` = '$budget', `financial year` = '$financialYear', `funding source` = '$fundingSource' WHERE `finances`.`projectID` = '$projectID'";

  $result = mysqli_query($conn, $sql);

  echo $result;
?>