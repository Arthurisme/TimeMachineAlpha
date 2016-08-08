# TimeMachineAlpha

A isomorphic Mobile|Web system that share same data source and codes structure for Backend, Front-end and Mobile app.
The backend will be implement by Spring Framework, MEAN stack rest and CEAN stack rest, each have a full function as backend. The backend provide RESTful services for front-end, include Admin and losing functions.
The front-end will be implemented by Angular 2 official starter: QuickStart or CLI, each have a full function as front-end.

The mobile App will be implemented by Ionic and NativeScript framework, each have a full function as Mobile app, but there will be some VR functions in NativeScript implementation.
The mobile App will be able run on iOS, Android and WP.

Desktop App will be have same function as Mobile App, and will be reuse most codes but with Electron framework.

Game | VR Implementation: Using this Application as playing a 3d game, and with  Virtual Reality.  jMonkey implement will done first as I have some old project with jMonkey already.


About AngularJS : In this repository will be using  Angular 2.

About Grails and Griffon implementation: I heard some news  from Grails framework, Grails want to make some function that create Angular 2 view and Angular 2  Scaffolding in the future.
Currently Grails already have AngularJS 1.0 Scaffolding command and Json view plugin.
So I plan to have a Grails 3.x  backend implementation using  Angular 2 scaffolding, Json view, and rest-api.

File Structure:

├── Backend
│   ├── CEAN   -------------Backend use couchbase, express,Angular 2 and Nodejs.
│   ├── MEAN   -------------Backend use MongoDB, express,Angular 2 and Nodejs.
│   └── SpringBoot----------Backend use Spring framework,Spring Boot,Spring Data.
├── Frontend
│   ├── CLI       ----------Frontend use Angular 2 official CLI starter.
│   └── QuickStart----------Frontend use Angular 2 official QuickStart starter.
├── Game-VR
│   ├── jMonkey   ----------VR implementation use jMonkey engine.
│   ├── unity     ----------VR implementation use Unity engine.
│   └── unreal    ----------VR implementation use Unreal engine.
├── MobileApp
│   ├── NativeScript--------Mobile app use NativeScript 2 framework with Angular 2.
│   └── ionic       --------Mobile app use ionic 2 framework with Angular 2.
├── README.md
