                                
//arrOfCities = []
arrOfFriends = [];
arrOfPictures = [];
arrOfLocations = [];
selectedCity = {}
picturesOfSelectedCity = []
currentUser = {}
var data = undefined;

var getPicturesOfUser = function(friendID){
var url = "https://graph.facebook.com//"+friendID+"/photos?access_token=CAAKMrAl97iIBALgbFZANeyjC8nJZBraPZBar9yZABdm7aHsSPjdAhP5tzGKGyHAtJxpaO4P38ARf351M66pVmTHC7ZC65jq8mU8SrmlyMiCHcMHtZC8PnWOZCIGtP4ugmhtyyuO6oJGn9SesGZAZBZAMXzFi9Ati6oJlcw2kU7lPs7TzNSjWZBnfWkxDFmzS61wg713iFsyuxhW03xb1hhRmfXEAcLFSK3X5y8x7nNjU98lUQZDZD";
var xmlHttp = null;
xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", url, false );
xmlHttp.send( null );
picturesOfFriends  = JSON.parse(xmlHttp.responseText);
arrOfPictures.push(picturesOfFriends);
};

var getInfoOfCurrentUser = function(){
var UserURL = "https://graph.facebook.com//ronit.chakraborty.9?access_token=CAAKMrAl97iIBALgbFZANeyjC8nJZBraPZBar9yZABdm7aHsSPjdAhP5tzGKGyHAtJxpaO4P38ARf351M66pVmTHC7ZC65jq8mU8SrmlyMiCHcMHtZC8PnWOZCIGtP4ugmhtyyuO6oJGn9SesGZAZBZAMXzFi9Ati6oJlcw2kU7lPs7TzNSjWZBnfWkxDFmzS61wg713iFsyuxhW03xb1hhRmfXEAcLFSK3X5y8x7nNjU98lUQZDZD";
var xmlHttp2 = null;
xmlHttp2 = new XMLHttpRequest();
xmlHttp2.open( "GET", UserURL, false );
xmlHttp2.send( null );
userInfo  = JSON.parse(xmlHttp2.responseText);
currentUser["PName"] = userInfo['name']
currentUser["FBID"] = userInfo['id']
var currentUserString = '{ "Person": [' + JSON.stringify(currentUser) + '] }'; 
xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","test_json.php?q="+currentUserString,true);
xmlhttp.send();

URL = "https://graph.facebook.com/ronit.chakraborty.9/friends?access_token=CAAKMrAl97iIBALgbFZANeyjC8nJZBraPZBar9yZABdm7aHsSPjdAhP5tzGKGyHAtJxpaO4P38ARf351M66pVmTHC7ZC65jq8mU8SrmlyMiCHcMHtZC8PnWOZCIGtP4ugmhtyyuO6oJGn9SesGZAZBZAMXzFi9Ati6oJlcw2kU7lPs7TzNSjWZBnfWkxDFmzS61wg713iFsyuxhW03xb1hhRmfXEAcLFSK3X5y8x7nNjU98lUQZDZD";
var xmlHttp = null;
xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", URL, false );
xmlHttp.send( null );
friendsOfUser  = JSON.parse(xmlHttp.responseText);

for (var i = 0; i < 20; i++) {
arrOfFriends.push(friendsOfUser['data'][i]['id'])
var friend = {};
var friendsWith = {}
friend["PName"] = friendsOfUser['data'][i]['name'];
friend["FBID"] =  friendsOfUser['data'][i]['id'];
var currentFriendString = '{ "Person": [' + JSON.stringify(friend) + '] }'; 
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","test_json.php?q="+currentFriendString,true);
xmlhttp.send();

friendsWith['FriendFBID'] = friend['FBID']
friendsWith['Current_UserFBID'] = currentUser['FBID']

var currentFriendString = '{ "Person": [' + JSON.stringify(friend) + '] }'; 
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","test_json.php?q="+currentFriendString,true);
xmlhttp.send();

var friends_With = '{ "Friends_With": [' + JSON.stringify(friendsWith) + '] }'; 
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","test_json.php?q="+friends_With,true);
xmlhttp.send();
}

for (var i = 0; i < arrOfFriends.length; i++) {
		getPicturesOfUser(arrOfFriends[i])
	};

}


var getPicturesOfUser2 = function(friendID){
var url = "https://graph.facebook.com//"+friendID+"/photos?access_token=CAAKMrAl97iIBANTZBM2RU7VFc5UZCsI92UkNPeKA06zXI0tL0IOpcjxRxYFrfF4TB39TLrArdvyCSy5N8aUfjNfVUJai8axTUZClQWZACNug03ANAV8QxZAMJTNZA79piefHZAkbIlZBR2jZBtx82zC8LX8WXrNRzYycRQ2kmpIChnFIksIkZAfKYFA923AUGnF82CgA1ihwHSBkQtqsQSrdz7aqxlJZCpt3WBb8Dy7Jb41wgZDZD";
var xmlHttp = null;
xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", url, false );
xmlHttp.send( null );
picturesOfFriends  = JSON.parse(xmlHttp.responseText);
arrOfPictures.push(picturesOfFriends);
};

var getInfoOfCurrentUser2 = function(){
var UserURL = "https://graph.facebook.com//arpitdevmathur?access_token=CAAKMrAl97iIBANTZBM2RU7VFc5UZCsI92UkNPeKA06zXI0tL0IOpcjxRxYFrfF4TB39TLrArdvyCSy5N8aUfjNfVUJai8axTUZClQWZACNug03ANAV8QxZAMJTNZA79piefHZAkbIlZBR2jZBtx82zC8LX8WXrNRzYycRQ2kmpIChnFIksIkZAfKYFA923AUGnF82CgA1ihwHSBkQtqsQSrdz7aqxlJZCpt3WBb8Dy7Jb41wgZDZD";
var xmlHttp2 = null;
xmlHttp2 = new XMLHttpRequest();
xmlHttp2.open( "GET", UserURL, false );
xmlHttp2.send( null );
userInfo  = JSON.parse(xmlHttp2.responseText);
currentUser["PName"] = userInfo['name']
currentUser["FBID"] = userInfo['id']
var currentUserString = '{ "Person": [' + JSON.stringify(currentUser) + '] }'; 
xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","test_json.php?q="+currentUserString,true);
xmlhttp.send();

var URL = "https://graph.facebook.com//arpitdevmathur/friends?access_token=CAAKMrAl97iIBANTZBM2RU7VFc5UZCsI92UkNPeKA06zXI0tL0IOpcjxRxYFrfF4TB39TLrArdvyCSy5N8aUfjNfVUJai8axTUZClQWZACNug03ANAV8QxZAMJTNZA79piefHZAkbIlZBR2jZBtx82zC8LX8WXrNRzYycRQ2kmpIChnFIksIkZAfKYFA923AUGnF82CgA1ihwHSBkQtqsQSrdz7aqxlJZCpt3WBb8Dy7Jb41wgZDZD";
var xmlHttp = null;
xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", URL, false );
xmlHttp.send( null );
friendsOfUser  = JSON.parse(xmlHttp.responseText);

for (var i = 0; i < 20; i++) {
arrOfFriends.push(friendsOfUser['data'][i]['id'])
var friend = {};
var friendsWith = {}
friend["PName"] = friendsOfUser['data'][i]['name'];
friend["FBID"] =  friendsOfUser['data'][i]['id'];
var currentFriendString = '{ "Person": [' + JSON.stringify(friend) + '] }'; 
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","test_json.php?q="+currentFriendString,true);
xmlhttp.send();

friendsWith['FriendFBID'] = friend['FBID']
friendsWith['Current_UserFBID'] = currentUser['FBID']

var currentFriendString = '{ "Person": [' + JSON.stringify(friend) + '] }'; 
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","test_json.php?q="+currentFriendString,true);
xmlhttp.send();

var friends_With = '{ "Friends_With": [' + JSON.stringify(friendsWith) + '] }'; 
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET","test_json.php?q="+friends_With,true);
xmlhttp.send();
}
for (var i = 0; i < arrOfFriends.length; i++) {
		getPicturesOfUser2(arrOfFriends[i])
	};

}








var getLocations = function(arrayPics){

for (var j = 0; j < arrayPics.length; j++) {
	for (var i = 0; i < arrayPics[j]['data'].length; i++) {
		if(arrayPics[j]['data'][i].hasOwnProperty('place')){
			
				arrOfLocations.push(arrayPics[j]['data'][i]['place']['location'])
					
			}
		};

	}

};
/*
var getCities = function(locations){

	for (var i = 0; i < locations.length; i++) {
		if(locations[i].hasOwnProperty('city')){
			arrOfCities.push(locations[i]['city'])
		}

	};
}
*/
var getPicturesOfSelectedCity = function(){
	picturesOfSelectedCity = []
	for (var i = 0; i < arrOfPictures.length; i++) {
		for (var j = 0; j < arrOfPictures[i]['data'].length; j++) {
			if(arrOfPictures[i]['data'][j].hasOwnProperty('place')){
				if(arrOfPictures[i]['data'][j]['place']['location']['city'] === selectedCity['City']){
					var currentPicture = {}
					
					currentPicture['PhotoID'] = arrOfPictures[i]['data'][j]['id'];
					currentPicture['PhotoDate'] = arrOfPictures[i]['data'][j]['created_time'];
					currentPicture['PhotoURL'] = arrOfPictures[i]['data'][j]['source'];
					currentPicture['Owner'] = arrOfFriends[i];
					currentPicture['Latitude'] = arrOfPictures[i]['data'][j]['place']['location']['latitude']
					currentPicture['Longitude'] = arrOfPictures[i]['data'][j]['place']['location']['longitude']
					picturesOfSelectedCity.push(currentPicture)
				}
			}
		};
	};
	
	for (var j = 0; j < picturesOfSelectedCity.length; j++) {
	var tempCurrPic = {};
	tempCurrPic['PhotoID'] = picturesOfSelectedCity[j]['PhotoID'];
	tempCurrPic['PhotoDate'] = picturesOfSelectedCity[j]['PhotoDate'];
	tempCurrPic['PhotoURL'] = picturesOfSelectedCity[j]['PhotoURL'];
	
	var item = '{ "Item": [' + JSON.stringify(tempCurrPic) + '] }';
	console.log(item) 	
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET","test_json.php?q="+item,true);
	xmlhttp.send();
	
	var tempPostBy = {};
	tempPostBy['PhotoID'] = picturesOfSelectedCity[j]['PhotoID']
	tempPostBy['FBID'] = picturesOfSelectedCity[j]['Owner']
	
	var post_by = '{ "Posted_By": [' + JSON.stringify(tempPostBy) + '] }';	
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET","test_json.php?q="+post_by,true);
	xmlhttp.send()
	
	var tempTaggedAt = {};
	tempTaggedAt['Latitude'] = picturesOfSelectedCity[j]['Latitude']
	tempTaggedAt['Longitude'] = picturesOfSelectedCity[j]['Longitude']
	tempTaggedAt['PhotoID'] = picturesOfSelectedCity[j]['PhotoID']
		
	var tagged_at = '{ "Tagged_At": [' + JSON.stringify(tempTaggedAt) + '] }';	
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET","test_json.php?q="+tagged_at,true);
	xmlhttp.send()
	
	
	var dataUpdate = []  
	dataUpdate.push(selectedCity['City'])
	dataUpdate.push(currentUser['FBID'])
	
	xmlhttp=new XMLHttpRequest();
	xmlhttp.onreadystatechange=function() {
	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
	document.getElementById("txtHint").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","update.php?q="+dataUpdate,true);
	xmlhttp.send();
	}


}

var getInfoAboutCity = function(city){

for (var i = 0; i < arrOfLocations.length; i++) {
	if(arrOfLocations[i].hasOwnProperty('city')){
		if(arrOfLocations[i]['city'] === city){

			selectedCity['Latitude'] = arrOfLocations[i]['latitude']
			selectedCity['Longitude'] = arrOfLocations[i]['longitude']
			selectedCity['City'] = arrOfLocations[i]['city']
			data = '{ "Location": [' + JSON.stringify(selectedCity) + '] }';  
			xmlhttp=new XMLHttpRequest();
			xmlhttp.open("GET","test_json.php?q="+data,true);
			xmlhttp.send();
			break;
			}

		}

	};

}

//Entry point, button click functions

function User1Function() {
getInfoOfCurrentUser();
getLocations(arrOfPictures);
}
function User2Function() {
getInfoOfCurrentUser2();
getLocations(arrOfPictures);
}
function submitLocation() {
var city = document.getElementById("entry").value;
getInfoAboutCity(city)
getPicturesOfSelectedCity()
}

function UserDelete(){
currUser = currentUser['FBID'];
xmlhttp=new XMLHttpRequest();
xmlhttp.open("GET","delete.php?q="+currUser,true);
xmlhttp.send();
}
                            
                            
                            
