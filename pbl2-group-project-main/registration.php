<?php

session_start();

$con = mysql_connect('localhost','root','');

mysqli_select_db($con,'userresistration');

$name=$_POST['email'];
$pass=$_POST['password'];

$s="SELECT * usertable where email = '$name'";
$result = mysqli_query($con,$s);

$num = mysql_num_rows($result);

if($num == 1){
    echo"email id already exist !!";

}else{
    $reg="INSERT INTO 'usertable'('email' ,'password') VALUES ('$name' , '$pass')";
    mysqli_query($con,$reg);
    echo"registration successful";
    header('location:loginafter.php');
}

?>