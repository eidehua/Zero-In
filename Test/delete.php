                                                                                                                                                                
                                <?php
$q=intval($_GET['q']);
$con=mysqli_connect("engr-cpanel-mysql.engr.illinois.edu","cs411zer_Admin","Monkey_123","cs411zer_Zer0_in");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}


print($q); 
//left join priority from person -> posted by, item, tagged at
// aka when person is left joined with posted by, the person will be deleted if he exists and and has no posted by. The person and posted by will be deleted if he has posted by.
//same goes for posted_by and item. 
//this works because a Person is required by Posted_By, which is required for Item, which is required for Tagged_At
//rather a Person can exists without a posted_by, so it's left join
//everything else should be an inner join, because a posted_by which needs an item which needs a tagged_at

$result = mysqli_query($con,"DELETE Person a,Posted_By b,Item c,Tagged_At d FROM Person a  LEFT JOIN  Posted_By b ON a.FBID = b.FBID  LEFT JOIN Item c ON b.PhotoID = c.PhotoID LEFT JOIN Tagged_At d ON c.PhotoID = d.PhotoID WHERE a.FBID =" . $q);
    if(!$result){
  	echo "Result is False: " . mysqli_error($con);
	}
	
$result = mysqli_query($con, "DELETE FROM Friends_With WHERE Friends_With.Current_UserFBID =" . $q);
    if(!$result){
  	echo "Result is False: " . mysqli_error($con);
	}
	
/*$result = mysqli_query($con, "DELETE Person a, Posted_By b FROM Person a JOIN Posted_By b ON a.FBID = b.FBID WHERE a.FBID = q");
    if(!$result){
  	echo "Result is False: " . mysqli_error($con);
	}
	*/
mysqli_close($con);
?>                                
                           
                            
                            
                            
                            
                            
                            
                            