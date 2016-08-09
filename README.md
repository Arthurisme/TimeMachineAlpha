# TimeMachineAlpha
A time-duty-item planning system for all family members to share their progress in plan, shopping, recreation,study and more. The same function can use both in Mobile, Desktop, Web part, and
as well as using in a 3d VR game App.  
A starter will be push as: [isomorphic-mobile-web-vr-game-starter](https://github.com/Arthurisme/isomorphic-mobile-web-vr-game-starter)   


## isomorphic
A isomorphic Mobile|Web system that share same data source and codes structure for Backend, Front-end and Mobile app.  
The backend will be implement by Spring Framework, MEAN stack rest and CEAN stack rest, each have a full function as backend. The backend provide RESTful services for front-end, include Admin and login functions.
The front-end will be implemented by Angular 2 official starter: QuickStart or CLI, each have a full function as front-end.

The mobile App will be implemented by Ionic and NativeScript framework, each have a full function as Mobile app, but there will be some VR functions in NativeScript implementation.
The mobile App will be able run on iOS, Android and WP.  

Desktop App will be have same function as Mobile App, and will be reuse most codes but with Electron framework.

Game | VR Implementation: Using this Application as playing a 3d game, and with  Virtual Reality.  jMonkey implement will done first as I have some old project with jMonkey already.


About AngularJS : In this repository will be using  Angular 2.  

About Grails and Griffon implementation: I heard some news  from Grails framework, Grails want to make some function that create Angular 2 view and Angular 2  Scaffolding in the future.
Currently Grails already have AngularJS 1.0 Scaffolding command and Json view plugin.
So I plan to have a Grails 3.x  backend implementation using  Angular 2 scaffolding, Json view, and rest-api.

## Architecture Structure and code share diagram:
![alt tag](https://github.com/Arthurisme/TimeMachineAlpha/blob/master/Planning/Architecture-and-code-share-diagram.png?raw=true)

## File Structure:
```
├── Backend  
│   ├── CEAN   -------------Backend implementation use couchbase, express,Angular 2 and Nodejs.  
│   ├── MEAN   -------------Backend implementation use MongoDB, express,Angular 2 and Nodejs.  
│   └── SpringBoot----------Backend implementation use Spring framework,Spring Boot,Spring Data.  
├── Frontend  
│   ├── CLI       ----------Frontend implementation use Angular 2 official CLI starter.  
│   └── QuickStart----------Frontend implementation use Angular 2 official QuickStart starter.  
├── Game-VR  
│   ├── jMonkey   ----------VR implementation use jMonkey engine.  
│   └── unity     ----------VR implementation use Unity engine.
├── Game-VR-Unreal
│   ├── NativeScriptVR------Mobile app implementation use NativeScript 2 framework and call some Unreal engine view.   
│   └── unreal    ----------VR implementation use Unreal engine.   
├── MobileApp  
│   ├── NativeScript--------Mobile app implementation use NativeScript 2 framework with Angular 2.  
│   └── ionic       --------Mobile app implementation use ionic 2 framework with Angular 2.
├── DesktopApp  
│   └── Electron------------Desktop application implementation use Electron framework with Angular 2.  
└── README.md  
```


## requirement  
1. An Internet connection  
2. Spring Tool Suite IDE, or Intellij IDEA, or Eclipse  
3. Xcode (optional)  
4. jMonkey, or Unreal Engine, or Unity Engine for only VR part.
5. Use node 5.8.0+ because there are some issue for ionic 2 with old node version.


###For backend  
####1. Spring framework with a sql datasource:
Backend RESTful service provide by spring data with sql database, H2 database by default
Location: /Backend/Spring/SQL-version/SpringBoot  
How to Use:  
open with Intellij IDEA or Eclipse.  
###For Frontend
####1. Angular 2 with official QuickStart starter:   
Frontend website which can use any afore said Backend implementation via RESTful.
Location: /Frontend/QuickStart/  
How to Use:  
cd /Frontend/QuickStart/  
npm install (to install angular2 dependencies - you need Internet connection for this)  
npm start (to start the Web application)
###For Mobile App
####1. ionic 2 with angular2:  
Mobile App which can use any afore said Backend implementation via RESTful.    
Location: /MobileApp/ionic/  
How to Use:  
cd /MobileApp/ionic/
Install the ionic CLI (npm install -g ionic@beta cordova) !change beta to version number after ionic 2 finial released.     
npm install (to install  dependencies - you need Internet connection for this)  
ionic sever --lab (to start the Web emulator)   



## About Unreal engine :
Unreal engine is free to use, but you must pay a royalty equal to 5% of all worldwide gross if you have gross revenue more than $3000 per 3 months , see:  https://www.unrealengine.com/eula
###The projects implementation using Unreal engine: all codes under /Game-VR-Unreal.  
If you want to use Unreal engine based on per seat price without royalty, you need to contact with Unreal youself.
If you want to me to develope VR function for web and mobile based on this repository, you don't need to pay Unreal again, Because I will paid by per seat as a commercial developer.


## License
MIT License.
