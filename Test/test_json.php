                                                                                                                                                                                                                                <?php
$q= $_GET['q'];
$con=mysqli_connect("engr-cpanel-mysql.engr.illinois.edu","cs411zer_Admin","Monkey_123","cs411zer_Zer0_in");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}


//$q = mysqli_real_escape_string($con, $q); //prevents sql injection by escaping strings
//$q = htmlentities($q); //converts all html entities into proper string characters -- fixes characters from & onward being cutoff of a URL
$json = $q;

$q = json_decode($q, true); //decodes the json into an associative array
print_r($q);

$json = json_decode($json); //decodes json into string

$table= array_keys($q);
//print_r($table); //lets us print arrays
$table_name = $table[0];
for($x = 0; $x<count($q[$table_name]); $x++)
{
    $cur = $q[$table_name][$x];
    $table_name = $table[0];
    $attributes = array_keys($cur); 
    //print_r($attributes ); 
    
    //$table_name = mysqli_real_escape_string($con, $table_name); //prevents sql injection by escaping strings that we are inserting into the database
    
    //ignore will ignore duplicates-- aka a user who has a same friend as a previous user-- won't add the duplicate friend
    $query_script = "INSERT IGNORE INTO " . $table_name . "(";
    for($y= 0; $y< count($attributes); $y++){
    	if($y == count($attributes) -1 ){
    	$query_script .= $attributes[$y];
    	$query_script .= ")";
    	}
    	else{
    	$query_script .= $attributes[$y];
    	$query_script .= ",";
    	}
    }
    $query_script .= " VALUES(";
    
     for($y= 0; $y< count($attributes); $y++){
     	$attribute_name = $attributes[$y]; 
    	if($y == count($attributes) -1 ){
         //print_r( $cur[$attribute_name]);
        // $value = $cur[$attribute_name];
        // $value = mysqli_real_escape_string($con, $value); //prevents sql injection
         
    	 $query_script .= "'$cur[$attribute_name]'"; // need " '' " as input has to be a string of a string
    	$query_script .= ")";
    	}
    	else{
    	$query_script .= "'$cur[$attribute_name]'"; //using only "" or '' makes the php consider $cur[$attribute_name] literally to be the string, instead of the value of the array
    	$query_script .= ",";
    	}
    }       
    //query_script should look like:"INSERT IGNORE INTO " . $table_name . "(Latitude, Longitude, City) VALUES ($lat,$lon,'$city')"
    $result = mysqli_query($con,$query_script);
    if(!$result){
  	echo "Result is False" . mysqli_error($con);
	}

}

mysqli_close($con);
?>
                            
                            
                            
                            
                            
                            
                            