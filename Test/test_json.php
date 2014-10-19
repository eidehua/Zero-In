<?php
$q= json_decode($_GET['q'], true);

$con=mysqli_connect("engr-cpanel-mysql.engr.illinois.edu","cs411zer_Admin","Monkey_123","cs411zer_Zer0_in");
// Check connection
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
}
$json = json_decode($_GET['q']);
$table= array_keys(get_object_vars($json));
//print_r( $keys); //lets us print arrays
$table_name = $table[0];
for($x = 0; $x<count($q[$table_name]); $x++)
{
    $cur = $q[$table_name][$x];
    $table_name = $table[0];
    //print($table_name . "hi");
    $attributes = array_keys($cur); 
    //print_r($attributes ); 
    
    $query_script = "INSERT INTO " . $table_name . "(";
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
    	 $query_script .= "'$cur[$attribute_name]'"; // need " '' " as input has to be a string of a string
    	$query_script .= ")";
    	}
    	else{
    	$query_script .= "'$cur[$attribute_name]'"; //using only "" or '' makes the php consider $cur[$attribute_name] literally to be the string, instead of the value of the array
    	$query_script .= ",";
    	}
    }       
    //query_script should look like:"INSERT INTO " . $table_name . "(Latitude, Longitude, City) VALUES ($lat,$lon,'$city')"
    $result = mysqli_query($con,$query_script);
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