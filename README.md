# lenslight_nodejs_mvc
 git clone https://github.com/selcuk-yilmaz/lenslight_nodejs_mvc.git

 npm init =>packagejson dosyası oluşmuş olmaktadır.

npm install express =>vanilya node.js komutlarını kolay bir şekilde kodlamayı sağlamak için

node app  =>localhost:3000de dinlemeye yarar

npm install -D nodemon => localhost:3000 i sürekli refresh etmek için devolopment olarak nodemon u indirdik.

nodemon app.js yazmak yerine package.json a allias scripti yazarak istediğimiz key i verebiliriz.
"scripts": {
    "start": "nodemon app.js"    => bundan sonra `npm start` ile çalışacak