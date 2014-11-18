                                                                                                                                
<?php
$q= ($_GET['q']);

$con=mysqli_connect("engr-cpanel-mysql.engr.illinois.edu","cs411zer_Admin","Monkey_123","cs411zer_Zer0_in");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$q = explode(",", $q);
mysqli_query($con,"UPDATE Person SET Person.City = '$q[0]' WHERE Person.FBID = $q[1]");


//$result = mysqli_query($con,"SELECT PhotoURL FROM Item WHERE PhotoID IN (SELECT PhotoID FROM Posted_By WHERE FBID IN (SELECT FriendFBID FROM Friends_With WHERE Current_UserFBID = $q[1])) AND PhotoID IN (SELECT PhotoID FROM Tagged_At WHERE (Latitude,Longitude) IN ( (SELECT Latitude, Longitude FROM Location WHERE City = '$q[0]')) ) ");

$result = mysqli_query($con,"SELECT PhotoURL,Latitude,Longitude FROM Item,Tagged_At WHERE Item.PhotoID = Tagged_At.PhotoID AND Item.PhotoID IN (SELECT PhotoID FROM Posted_By WHERE FBID IN (SELECT FriendFBID FROM Friends_With WHERE Current_UserFBID = $q[1])) AND Item.PhotoID IN (SELECT PhotoID FROM Tagged_At WHERE (Latitude,Longitude) IN ( (SELECT Latitude, Longitude FROM Location WHERE City = '$q[0]')) ) ");

if(!$result){
  	echo "Result is False: " . mysqli_error($con);
	}
	

while($row = mysqli_fetch_array($result)) {
  echo $row["PhotoURL"] . "^" . $row["Latitude"] . "^". $row["Longitude"] . ",";
}

mysqli_close($con);
?> 
                  
                            
                            
                            
                            