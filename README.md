# Music-app
This is a spotify music search applicaion.

How to setup
step 1 : Clone or download project.
step 2 : Go to project folder using terminal/cmd.
(this project contains 2 parts music search app and access token genrator part)
step 3 : In project folder (Music-app-master/) using terminal and install node modules.(installing music app node modules)
         npm install 
         
step 4 : after node modules installed music app, start music search app in folder location Music-app-master/ enter terminal/cmd bellow code and enter. 
         npm start
(now Music app part will start and listening on http://localhost:3000/)

step 5 :Now open new terminal/cmd, go to folder Music-app-master/get_authentication_token/ using terminal and install node modules.(installing access token generator app node modules)
         npm install

step 6 : after that go to folder location Music-app-master/get_authentication_token/authorization_code using terminal/cmd enter bellow code and enter.
          
          node app.js
(now access token generator will start and lisening on http://localhost:8888/)

Must start both apps to work this project.


This Music-app congiured to my sample spotify application. if you want to configure this app to your spotify appication, simply change client_id and client_secret on file Music-app-master/get_authentication_token/authorization_code/app.js

Technologies used in this project

ReactJS
React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”. since this library is components based development can done easy and much effectively. since this is javascript library easily integrate other apis.

Axios
Axios is promise-based and thus we can take advantage of async and await for more readable asynchronous code. We can also intercept and cancel requests, and there’s built-in client side protection against cross site request forgery.This api is easy to use.

Spotify web API 
This web API provide JSON metadata about music artists, albums, and tracks, directly from the Spotify Data Catalogue. there for using bootstrap we can convert this application use for many devices like mobile phones , destop PC, tabs ,etc..


Difficulties faced by developing this application

1. Spotify does not support Srilankan region.
   There for I had to setup VPN connection and construct this project as a europe region developer.

2. Access token expire every 1 hour.
   There for I have integrate access token generator to this Music app.
   
Server side development

 In this current version all the data server side part integrate to spotify web API. But we can develop this app for get user favorite artist, tracks like wise. for that can integrate google analytics and seperate databases.
 
Future developments of this Music-app

 As a future development palaning to convert this app work for voice command, integrate chat APIs to undestand user input and get most suatable songs for there mood. Also add this API working with chatbots.



