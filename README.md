# SpaceXLaunchPrograms

Angular application for listing and show all launches by SpaceX program.

# Stack Details
Angular 9.1.15 
Node.js 12.16.3
Angular Universal 
SCSS for styling 
bootstrap 4.0.0

# Features
Lazy loading of Images on scroll
Use for HTTP Interceptors for loader and error handling
Custom Component for Loading Screen
SEO meta and meta description tag added
Added services for API calling and getting server side data.
Mobile first design approach
DRY principle applied


# Screenshots

Desktop View

Tablet View

Mobile View

# Development Approach
Use Angular CLI.
Angular CLI is one of the most powerful accessibility tools available when developing apps with Angular.
Maintain proper folder structure.
Follow consistent Angular coding styles.
Typescript.
Use ES6 Features.
Use trackBy along with ngFor.
Break down into small reusable components and functions.
Use wildcard for undefined path.
Use jasmine framework in test .
Use ng universal for server side rendering.
I started with understanding the requirements of project (assignment).
I Structured project on the basis of requirment.
I created project with angular cli command "ng new project-name"  
I integrated the boilerplate for Server Side rendering using Angular Universal that comes with Express engine.
I designed templates with bootstrap and scss.
I created service for integration remote api.
I also used universal state transfer api for avoiding unnecessary hit api request.

# Deployment
This application is deployed on Heroku Server. A Procfile is created in root directory which specifies the command to run upon successful deployment to Heroku.

I have created this github repository and linked it with Heroku for contineous integration(CI) and deployment(CD).

# Production: Master branch
Any push made to master branch will automatically build and deploy the app to Production environment on Heroku. Production build link