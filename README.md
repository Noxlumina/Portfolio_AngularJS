<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

# Portfolio

"Portfolio" is a project based on an OpenClassroom course titled "Créez votre site web avec HTML5 et CSS3" (Create Your Website with HTML5 and CSS3). During this course, participants were tasked with creating a website for Robbie Lens, a photographer. The website was developed solely using HTML5 and CSS3.

Inspired by this project, I chose to transform it into an Angular application. While this project remains small in scope and lacks a backend, it serves as a valuable opportunity for practice and learning. The portfolio images are sourced from Pexels.

Link to the demo : [Portfolio]((https://angular-projet-portfolio.vercel.app/).

### <li>Pexel</li>

To utilize the application, an API key is essential. Prior to obtaining the key, an account must be created, which is offered free of charge.

For the functionality, I've employed the Pexels Search API using query-based searches.

### <li>EmailJS</li>

To implement the contact form, I've integrated EmailJS, an API that enables sending emails without the need for backend development. This service is free, though it comes with certain limitations and prerequisites that must be configured before utilization.

Below, I've outlined the steps for using EmailJS with Angular:

<ol>Sign up for EmailJS (https://www.emailjs.com/) and create an account.</ol>
<ol>Install the EmailJS package: "npm install emailjs-com"
</ol>
<ol> then importing emailJS in our component with: 
</ol>

```
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
```

<ol>then we need to implement the function for sending the email. We need to create a template, to connect to a service and a public key</ol>

```
sendEmail() {
  const templateParams = {
    to_email: 'recipient@example.com',
    from_email: 'sender@example.com',
    subject: 'Test Email',
    message: 'Hello, this is a test email.'
  };

  emailjs.send('EMAILJS_SERVICE_ID', 'EMAILJS_TEMPLATE_ID', templateParams, 'EMAILJS_PUBLIC_KEY')
    .then((response: EmailJSResponseStatus) => {
      console.log('E-mail sent successfully!', response.text);
    })
    .catch((error) => {
      console.error('Error sending e-mail:', error);
    });
}
```

<li>Environements directory</li>

To secure sensitive data and API keys, I've employed environment files. I find the most straightforward approach is to establish separate environment files for development and production. This ensures that sensitive information remains protected while allowing for efficient management and deployment.

```
export const environment = {
    production: false,
    pexelApiUrl: 'YOUR_PEXEL_API_URL',
    pexelApiKey: 'YOUR_PEXEL_API_KEY',
    to_email: 'YOUR_EMAIL_ADDRESS',
    service_id: 'YOUR_SERVICE_ID',
    template_id: 'YOUR_TEMPLATE_ID',
    public_key: 'YOUR_PUBLIC_KEY'
  };
```

<li>Docker</li>

Similarly, I've crafted a Dockerfile to facilitate testing without requiring the installation of Angular CLI or Node.js on your computer. This simplifies the process and provides a consistent environment for experimentation.
<ol>for creating the image:</ol>

```
docker build -t angular-app .
```

<ol>then just creating the container</ol>

```
docker run -it -p 4210:80 --name my-angular-container angular-app
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
