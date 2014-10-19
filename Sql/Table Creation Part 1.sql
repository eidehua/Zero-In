#Part1 Table Creation
DROP TABLE IF EXISTS Location;
CREATE TABLE Location(
	Longitude FLOAT,
	Latitude FLOAT, 
	City VARCHAR(255),
	PRIMARY KEY(Longitude, Latitude)
);
DROP TABLE IF EXISTS Landmark;
CREATE TABLE Landmark(
	Longitude FLOAT,
	Latitude FLOAT,
	PRIMARY KEY(Longitude, Latitude)
);
DROP TABLE IF EXISTS Business;
CREATE TABLE Business(
	Longitude FLOAT,
	Latitude FLOAT,
	BusinessName VARCHAR(255),
	DayOfWeek INT,
	OpenTime TIME,
	CloseTime TIME,
	PRIMARY KEY(Longitude, Latitude)
);
DROP TABLE IF EXISTS Item;
CREATE TABLE Item(
	PhotoID int PRIMARY KEY,
	PhotoDate Date
)
