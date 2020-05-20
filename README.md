# Портал для рыбаков "Рыбацкий остров", front-end часть.

[![Build Status](https://travis-ci.com/titovd/devops-mini-course-homework.svg?token=y3HFhrs93iyDpHRJZztq&branch=master)](https://travis-ci.com/titovd/devops-mini-course-homework)


## Подготовка окружения для локальной разработки
Команды ниже приведены для Unix-систем.
1. Склонируем репозиторий для работы.
```
git clone git@github.com:titovd/devops-mini-course-homework.git
```

2. Установим пакетный менеджер [yarn](https://classic.yarnpkg.com/en/). Инструкцию по его установке можно найти [здесь](https://classic.yarnpkg.com/en/docs/install#debian-stable)

3. Установим все зависимости проекта согласно `package.json` из корневой директории проекта:
```
yarn
```

4. Запустить проект в режиме разработки на порте `3001` можно командой:
```
yarn start --port 3001
```
После чего приложение будет доступно по адресу: `http://localhost:3001/`

5. В качестве бэкэнд сервера используется фейковый REST API с помощью [json-server](https://github.com/typicode/json-server). 
Чтобы начать работу с `json-server`  потребуется его установить:
```
yarn global add json-server
```

6. В проекте есть JSON-файл для базы данных `db.json`. Запускаем сервер через командную строку, указывая файл `db.json` в качестве источника данных REST API, доступных по адресу `http://localhost:3000`.
```
json-server --watch --port 3000 db.json
```



