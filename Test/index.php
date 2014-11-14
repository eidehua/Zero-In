<html>
<h1>zer0_In</h1>
<p>Where they were you will be</p>
<p>We have accessed our site.</p>

<?php
$con=mysqli_connect("engr-cpanel-mysql.engr.illinois.edu","cs411zer_Admin","Monkey_123","cs411zer_Zer0_in");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

mysqli_query($con, "INSERT INTO Location (Latitude,Longitude,City)
VALUES (5,4,'Seoul')");

$result = mysqli_query($con,"SELECT City FROM Location");
if(!$result){
   echo "Result is False" . mysqli_error($con);
}
while($row = mysqli_fetch_array($result)) {
  echo $row['City'];
  echo "<br>";
}
mysqli_close($con);
?>
</html>
                            
                            