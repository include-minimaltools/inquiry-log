insert into [Role] values ('Administrador', 1, GETDATE(), 1, GETDATE())
insert into [Role] values ('Profesor', 1, GETDATE(), 1, GETDATE())
insert into [Role] values ('Jefe', 1, GETDATE(), 1, GETDATE())
select * from [Role]

insert into Permission values ('Acceder a inicio', 'a', 'a', 1, GETDATE(), 1, GETDATE())
insert into Permission values ('Acceder a consultas', 'a', 'a', 1, GETDATE(), 1, GETDATE())
insert into Permission values ('Crear nueva consulta', 'a', 'a', 1, GETDATE(), 1, GETDATE())
insert into Permission values ('Aprobar nueva consulta', 'a', 'a', 1, GETDATE(), 1, GETDATE())
select * from Permission

INSERT INTO Role_Permission values (1, 1, 1, GETDATE(), 1, getdate())
INSERT INTO Role_Permission values (1, 2, 1, GETDATE(), 1, getdate())
INSERT INTO Role_Permission values (1, 3, 1, GETDATE(), 1, getdate())
INSERT INTO Role_Permission values (1, 4, 1, GETDATE(), 1, getdate())
INSERT INTO Role_Permission values (2, 1, 1, GETDATE(), 1, getdate())
INSERT INTO Role_Permission values (2, 2, 1, GETDATE(), 1, getdate())
INSERT INTO Role_Permission values (2, 3, 1, GETDATE(), 1, getdate())
INSERT INTO Role_Permission values (3, 1, 1, GETDATE(), 1, getdate())
INSERT INTO Role_Permission values (3, 2, 1, GETDATE(), 1, getdate())
INSERT INTO Role_Permission values (3, 3, 1, GETDATE(), 1, getdate())
INSERT INTO Role_Permission values (3, 4, 1, GETDATE(), 1, getdate())
select* from Role_Permission


INSERT INTO [User] values('Adilgonzales@email.com', 'Adil123', 2, 'Adil', 'Gonzalez', 'Managua, Nicaragua', '88776655', 1, getdate(), 1, getdate())
INSERT INTO [User] values('Administradormail@email.com', 'admin123', 1, 'Admin', 'Istrador', 'Managua, Nicaragua', '11223344', 1, getdate(), 1, getdate())
INSERT INTO [User] values('Jefedefacultad@email.com', 'jefe123', 3, 'Jefe', 'De facultad', 'Managua, Nicaragua', '44332211', 1, getdate(), 1, getdate())
INSERT INTO [User] values('Gabrielortiz@email.com', 'gabrielitoselacome', 2, 'Gabriel', 'Ortiz', 'Managua, Nicaragua', '11442233', 1, getdate(), 1, getdate())
select* from [User]

insert into Course values('Algoritmizaci�n y Estructuras de Datos', 1, getdate(), 1, getdate())
insert into Course values('Bases de Datos', 1, getdate(), 1, getdate())
select* from Course

insert into User_Course VALUES(1, 1, 1, GETDATE(), 1, GETDATE())
insert into User_Course VALUES(4, 2, 1, GETDATE(), 1, GETDATE())
select * from User_Course

insert into Inquiry_Type values ('Presencial', 1, getdate(), 1, getdate())
insert into Inquiry_Type values ('En l�nea', 1, getdate(), 1, getdate())
select * from Inquiry_Type

insert into Inquiry ([Week], Students_Number, [Type], [Subject], Carnet, Status, Teacher, Course, [Group], Semester, Created_By, Created_On, Updated_By, Updated_On) values (
	12, 4, 1, 'Prorroga', '2020-1384U', 'Aprobado', 1, 1, 1, 4, 1, getdate(), 1,getdate())
insert into Inquiry ([Week], Students_Number, [Type], [Subject], Carnet, Status, Teacher, Course, [Group], Semester, Created_By, Created_On, Updated_By, Updated_On) values (
	6, 2, 2, 'Consulta de clase pasada', '2020-0505U', 'Aprobado', 4, 1, 1, 5, 1, getdate(), 1,getdate())
select * from Inquiry

insert into [Group] values('2M1-CO', 1, getdate(), 1, getdate())
select * from [Group]

insert into Course_Group values (1, 1, 1, getdate(), 1, getdate())
insert into Course_Group values (2, 1, 1, getdate(), 1, getdate())
select * from Course_Group