<?php

session_start();

$con = mysql_connect('localhost','root','');

mysqli_select_db($con,'test');

$name =$_POST['email'];

$password =$_POST['password'];

$s="select * signuptable where email = '$name' && password='$pass'";
$result = mysqli_query($con,$s);

$num = mysql_num_rows($result);

if($num==1){
    $_SESSION['username']=$name;
    header('location:loginafter.php');

}
else{
    header('location:login.php');
}

?>