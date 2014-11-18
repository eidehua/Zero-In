                                                                                                                                
<?php

$con=mysqli_connect("engr-cpanel-mysql.engr.illinois.edu","cs411zer_Admin","Monkey_123","cs411zer_Zer0_in");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}




$result = mysqli_query($con,"SELECT Latitude, Longitude FROM Location");

if(!$result){
  	echo "Result is False: " . mysqli_error($con);
	}
	

while($row = mysqli_fetch_array($result)) {
  echo $row["Latitude"] . "^" . $row["Longitude"] . ",";
}

mysqli_close($con);
?> 