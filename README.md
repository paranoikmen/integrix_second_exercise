### `npm i`
Установить нужные зависимости в проект

### `npm start`

запуск приложения
откройте [http://localhost:3000](http://localhost:3000)

### `npm server`

запуск серверной части приложения <br/>
реализовано на express js <br/>
port = 4000 <br/>
для подключения к бд надо зайти в src/db.js и настроить файл конфигурации, нужно заменить password и database на соответствующие вашим данным в бд<br/>
в бд надо создать таблицу(нужно открыть postgresql консоль) командой<br/>
CREATE TABLE person(<br/>
  id SERIAL PRIMARY KEY,<br/>
  login VARCHAR(255),<br/>
  password VARCHAR(255),<br/>
  vote VARCHAR(255)<br/>
};<br/>
<br/>
также стоит добавить хотя бы одного пользователя в бд<br/>
INSERT INTO person VALUES (1, 'test1@gmail.com', '123456');<br/>
1 - id пользователя<br/>
test1@gmail.com - логин<br/>
123456 - пароль<br/>

### структура бд
![image](https://user-images.githubusercontent.com/64567995/123546724-7422b600-d766-11eb-90bb-a82406897ac7.png)<br/>
одна таблица с пользователями, которая хранит их логины, пароли и выбранные пункты в голосовании

### main page
![image](https://user-images.githubusercontent.com/64567995/123546761-a502eb00-d766-11eb-9678-1dab4ea1bcfc.png)

### login page
![image](https://user-images.githubusercontent.com/64567995/123546767-adf3bc80-d766-11eb-8b93-9138b43b02cd.png)



