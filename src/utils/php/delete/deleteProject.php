<?php

  require '../dbconn.php';

  $data = json_decode(file_get_contents('php://input'));
  $projectID = $data->projectID;

  $locationsSql = "DELETE FROM `locations` WHERE `projectID` = '$projectID'";
  $financesSql = "DELETE FROM `finances` WHERE `projectID` = '$projectID'";
  $implementationSql = "DELETE FROM `implementation` WHERE `projectID` = '$projectID'";
  $timelinesSql = "DELETE FROM `timelines` WHERE `projectID` = '$projectID'";
  $projectsSql = "DELETE FROM `projects` WHERE `projectID` = '$projectID'";

  $result1 = mysqli_query($conn, $locationsSql);
  $result2 = mysqli_query($conn, $financesSql);
  $result3 = mysqli_query($conn, $implementationSql);
  $result4 = mysqli_query($conn, $timelinesSql);
  $result5 = mysqli_query($conn, $projectsSql);

  echo $result1 && $result2 && $result3 && $result4 && $result5;
?>