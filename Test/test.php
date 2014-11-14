<?php
$q = ($_GET['q']);
$q= explode('.', $q);

$con=mysqli_connect("engr-cpanel-mysql.engr.illinois.edu","cs411zer_Admin","Monkey_123","cs411zer_Zer0_in");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

for($x = 0; $x<count($q); $x++)
{
    $cur = $q[$x];
    $cur = explode(',', $cur);
    print($cur[0]);
    print($cur[1]);
    $result = mysqli_query($con,"INSERT INTO Location (Latitude, Longitude, City)
    VALUES ($cur[0],$cur[1],$cur[2])");
    if(!$result){
   echo "Result is False" . mysqli_error($con);
}
}

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