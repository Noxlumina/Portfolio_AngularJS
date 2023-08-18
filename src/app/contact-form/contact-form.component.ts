import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from '../../environments/environment';



@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }
  /**
   * fonction d'envoi du mail
   * @param from_email 
   * @param message 
   */
  sendEmail(from_email: string, message: string) {
    const templateParams = {
      to_email: environment.to_email,
      from_email: from_email,
      subject: 'Demande de contact',
      message: message
    };

    emailjs.send(environment.service_id, environment.template_id, templateParams, environment.public_key)
      .then((response: EmailJSResponseStatus) => {
        console.log('E-mail sent successfully!', response.text);
      })
      .catch((error) => {
        console.error('Error sending e-mail:', error);
      });
  }


  /**
   * fonction permetant d'envoyer le message puis qui reset le formulaire si le formulaire est correct
   */
  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.sendEmail(this.contactForm.value.email, this.contactForm.value.message);
      alert("votre message a bien été envoyé");
      this.contactForm.reset();
    }
  }
}
