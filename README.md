<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">

# Portfolio

Portfolio <i class="fas fa-thin fa-book" style="color: #8c88af;"/></i> is a project based on an openclassroom course "Créez votre site web avec HTML5 et CSS3". During this course, it was asked to participate in the elaboration of website for Robbie Lens, a photographer <i class="fas fa-duotone fa-camera-retro"></i>. The website was created only with HTML5 and CSS3.

So I decided to take this project and turn it into angular application. This is a small project, there is no backend. The pictures from the portfolio come from pexel.

### <li>Pexel</li>

An apiKey is required for using it. An account needs to be created before getting it (free).

I have used the search api by query.

### <li>EmailJS</li>

For the contact form, I have used EmailJS which is a API allowing to send email without developing backend services. It's free with some limitations and some settings are mandatory before using it.

Here's how to use EmailJS with Angular:

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

For most of the api key and sensitive data I have used env files. The most easier way to achieve it for me is just to create a directory with our environment file for development and production.

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

I have created a Dockerfile for trying without having Angular CLI or Node.js installed on his computer. 

<ol>for creating the image:</ol>

```
docker build -t angular-app .
```

<ol>then just creating the container</ol>

```
docker run -it -p 4200:4200 --name my-angular-container angular-app
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