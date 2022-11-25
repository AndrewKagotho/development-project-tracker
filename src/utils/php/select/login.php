<?php
  require '../dbconn.php';

  $username = $_POST['username'];
  $password = $_POST['password'];

  $sql = "SELECT * FROM `admin` WHERE `username` = '$username'";
  // $pass

  $result = mysqli_query($conn, $sql);

  if(mysqli_num_rows($result) === 1) {
    $object = mysqli_fetch_object($result);
    
    if($object->password === $password)
      redirect(1, $username);
    else
      redirect(0, $username);
  }
  else
    redirect(0, '');

  function redirect($val, $username) {
    if($val === 1) {
      header("Location: https://andrewkagotho.github.io/development-project-tracker/admin?id=$username");
    }
    elseif($val === 0) {
      echo ("<script language='javascript'>
        alert('Access denied!');
        location.href='javascript:history.go(-1)'
      </script>");
    }
  }
?>