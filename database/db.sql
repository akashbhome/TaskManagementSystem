create database tasksystem;
 
use tasksystem

create table user(id int primary key auto_increment,name varchar(100),email varchar(50) unique,phone varchar(10),password varchar(50),role enum('admin','user'));

create table task(task_id int primary key auto_increment,task_name varchar(200));