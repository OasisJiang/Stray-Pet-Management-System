# Stray-Pet-Management-System
## 简介
**流浪宠物管理系统（Stray Pet Management System）**，是一款Web应用程序，用户端提供流浪宠物信息查询、申请领养、丢失宠物登记及宠物论坛等功能；  
管理员端支持全流程数据管理，旨在提升流浪宠物管理效率并改善其生存状况。  

本系统采用MVC架构，前端使用Vue.js与Element Plus组合，后端使用Spring Boot与MyBatis Plus，旨在开发一款精简有效的管理系统。  

**系统总体功能模块层次图**
![图片](https://github.com/user-attachments/assets/e26d8d7d-fa17-46ec-85aa-a31c6a2daf77)

## 环境要求
jdk1.8  
maven3.8.1  
Navicat+mysql8.0.19   
Nodejs
## 运行方式
1、Navicat连接mysql并新建“pet_manager”数据库  
2、打开pet_manager.sql，将初始化的sql语句导入pet_manager数据库
生成初始数据库表  
3、将后端项目导入idea并配置好maven  
4、修改文件src/main/resources/application.yml中的数据库连接密码为自己的密码  
5、运行启动文件src/main/java/com/neu/pet/PetManagerApplication.java  
6、在终端输入npm run dev  
7、打开浏览器  
