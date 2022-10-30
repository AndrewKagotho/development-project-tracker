<?php
  require '../dbconn.php';

  $username = $_POST['username'];
  $password = $_POST['password'];

  $sql = "SELECT * FROM `admin` WHERE `username` = '$username'";

  $result = mysqli_query($conn, $sql);

  if(mysqli_num_rows($result) === 1) {
    $object = mysqli_fetch_object($result);
    
    if($object->password === $password)
      redirect(1, $username);
    else
      redirect(0, $username);
  }
  else
    redirect(0, $username);

  function redirect($val, $username) {
    if($val === 1) {
      header("Location: http://localhost:3000/admin?id=$username");
    }
    elseif($val === 0) {
      echo ("<script language='javascript'>
        alert('Access denied!');
        location.href='javascript:history.go(-1)'
      </script>");
    }
  }
?>