--CREATE DATABASE Inquiries

USE Inquiries

CREATE TABLE [Role]
(
	Id INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	[Description] NVARCHAR(100) NOT NULL,

	Created_By INT NOT NULL,
	Created_On DATETIME NOT NULL,
	Updated_By INT,
	Updated_On DATETIME
)

CREATE TABLE Permission
(
	Id INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	[Description] nvarchar(500) not null,
	[Page] nvarchar(20) not null,
	[Action] nvarchar(20) not null,
	
	Created_By INT NOT NULL,
	Created_On DATETIME NOT NULL,
	Updated_By INT NOT NULL,
	Updated_On DATETIME
)

CREATE TABLE Role_Permission
(
	[Role] INT NOT NULL FOREIGN KEY REFERENCES Role(Id),
	Permission INT NOT NULL FOREIGN KEY REFERENCES Permission(Id),
	PRIMARY KEY ([Role], Permission),

	Created_By INT NOT NULL,
	Created_On DATETIME NOT NULL,
	Updated_By INT,
	Updated_On DATETIME
)

CREATE TABLE [User]
(
	Id INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	Email nvarchar(50) NOT NULL,
	[Password] nvarchar(50) NOT NULL,
	[Role] INT FOREIGN KEY REFERENCES Role(Id) NOT NULL,

	Name nvarchar(50) not null,
	Lastname nvarchar(50) null,
	[Address] nvarchar(100) null, 
	Phone nvarchar(15) null,

	Created_By INT NOT NULL,
	Created_On DATETIME NOT NULL,
	Updated_By INT,
	Updated_On DATETIME
)

CREATE TABLE Course
(
	Id INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	[Name] NVARCHAR(50) NOT NULL,

	Created_By INT NOT NULL,
	Created_On DATETIME NOT NULL,
	Updated_By INT,
	Updated_On DATETIME
)

CREATE TABLE [Group]
(
	Id INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	[Description] NVARCHAR(50) NOT NULL,

	Created_By INT NOT NULL,
	Created_On DATETIME NOT NULL,
	Updated_By INT,
	Updated_On DATETIME
)

CREATE TABLE Course_Group
(
	Course INT NOT NULL FOREIGN KEY REFERENCES Course(Id),
	[Group] INT NOT NULL FOREIGN KEY REFERENCES [Group](Id)
	PRIMARY KEY(Course,[Group]),

	Created_By INT NOT NULL,
	Created_On DATETIME NOT NULL,
	Updated_By INT,
	Updated_On DATETIME
)

ALTER TABLE Course_Group ADD Updated_By INT

CREATE TABLE User_Course
(
	[User] INT NOT NULL FOREIGN KEY REFERENCES [User](Id),
	Course INT NOT NULL FOREIGN KEY REFERENCES Course(Id),
	PRIMARY KEY ([User],[Course]),

	Created_By INT NOT NULL,
	Created_On DATETIME NOT NULL,
	Updated_By INT,
	Updated_On DATETIME
)

CREATE TABLE Inquiry_Type
(
	Id INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	[Description] NVARCHAR(100) NOT NULL,

	Created_By INT NOT NULL,
	Created_On DATETIME NOT NULL,
	Updated_By INT,
	Updated_On DATETIME
)

CREATE TABLE Inquiry
(
	Id INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	[Week] INT NOT NULL,  
    Students_Number INT NOT NULL,
	[Type] INT NOT NULL FOREIGN KEY REFERENCES Inquiry_Type(Id),
	[Subject] NVARCHAR(200) NOT NULL,
	Carnet NVARCHAR(10) NOT NULL,
	Observations NVARCHAR(500),
	Status NVARCHAR(10) NOT NULL,
	Teacher INT NOT NULL FOREIGN KEY REFERENCES [User](Id),
	Course INT NOT NULL FOREIGN KEY REFERENCES Course(Id),
	[Group] INT NOT NULL FOREIGN KEY REFERENCES [Group](Id),
	[Semester] INT NOT NULL,

	Created_By INT NOT NULL,
	Created_On DATETIME NOT NULL,
	Updated_By INT,
	Updated_On DATETIME
)

CREATE TABLE Inquiry_Comment
(
	Id INT PRIMARY KEY IDENTITY(1,1) NOT NULL,
	Inquiry INT NOT NULL FOREIGN KEY REFERENCES Inquiry(Id),
	Comment NVARCHAR(100) NOT NULL,

	Created_By INT NOT NULL,
	Created_On DATETIME NOT NULL,
	Updated_By INT,
	Updated_On DATETIME
)

SELECT * FROM Role
SELECT * FROM Permission
SELECT * FROM User_Course
SELECT * FROM Course