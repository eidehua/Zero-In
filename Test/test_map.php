<?php
$q= $_GET['q'];
$con=mysqli_connect("engr-cpanel-mysql.engr.illinois.edu","cs411zer_Admin","Monkey_123","cs411zer_Zer0_in");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$q = explode(",", $q);
$mysql_script = "SELECT PhotoURL,Latitude,Longitude FROM Item,Tagged_At WHERE Item.PhotoID = Tagged_At.PhotoID AND Latitude <=". ($q[0]+ (5/69)) ."AND Latitude>=". ($q[0]- (5/69)). "AND Longitude<=" . ($q[1]+ (5/69))."AND Longitude>=". ($q[1]- (5/69))." AND Item.PhotoID IN (SELECT PhotoID FROM Posted_By WHERE FBID IN (SELECT FriendFBID FROM Friends_With WHERE Current_UserFBID =1153312243))" ;
$result = mysqli_query($con,$mysql_script);
if(!$result){
    echo "Result is False" . mysqli_error($con);
}
else
{
    while($row = mysqli_fetch_assoc($result)) {
        echo $row["PhotoURL"] . " " . $row["Latitude"] . " ". $row["Longitude"] . ",";
    }
}
?>