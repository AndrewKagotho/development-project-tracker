<?php
  require 'dbconn.php';

  $data = json_decode(file_get_contents('php://input'));
  $projectID = $data->projectID;
  $name = $data->name;
  $description = $data->description;
  $status = $data->status;
  $approvalDate = $data->approvalDate;
  $startDate = $data->startDate;
  $endDate = $data->endDate;
  $duration = $data->duration;
  $sector = $data->sector;
  $ministry = $data->ministry;
  $agency = $data->agency;
  $contractor = $data->contractor;
  $contacts = $data->contacts;
  $priority = $data->priority;
  $estimatedCost = $data->estimatedCost;
  $budget = $data->budget;
  $financialYear = $data->financialYear;
  $fundingSource = $data->fundingSource;
  $countyNo = $data->countyNo;
  $subCounty = $data->subCounty;
  $constituency = $data->constituency;
  $ward = $data->ward;

  $projectsSql = "INSERT INTO `projects` VALUES ('$projectID','$name', '$description', '$status')";
  $timelinesSql = "INSERT INTO `timelines`(`projectID`, `approval date`, `start date`, `end date`, `duration`) VALUES ('$projectID', '$approvalDate', '$startDate', '$endDate', '$duration')";
  $implementationSql = "INSERT INTO `implementation`(`projectID`, `sector`, `ministry`, `implementing agency`, `contractor`, `contacts`, `priority`) VALUES ('$projectID', '$sector', '$ministry', '$agency', '$contractor', '$contacts', '$priority')";
  $financesSql = "INSERT INTO `finances`(`projectID`, `estimated cost`, `budget`, `financial year`, `funding source`) VALUES ('$projectID', '$estimatedCost', '$budget', '$financialYear', '$fundingSource')";
  $locationsSql = "INSERT INTO `locations`(`projectID`, `countyNo`, `sub county`, `constituency`, `ward`) VALUES ('$projectID', '$countyNo', '$subCounty', '$constituency', '$ward')";

  $result1 = mysqli_query($conn, $projectsSql);
  $result2 = mysqli_query($conn, $timelinesSql);
  $result3 = mysqli_query($conn, $implementationSql);
  $result4 = mysqli_query($conn, $financesSql);
  $result5 = mysqli_query($conn, $locationsSql);

  if($result1 && $result2 && $result3 && $result4 && $result5)
    echo 'Success';
  else
    echo 'Problem somewhere';
?>