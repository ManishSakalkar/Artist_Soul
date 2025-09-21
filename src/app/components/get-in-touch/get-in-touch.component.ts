import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
  styleUrls: ['./get-in-touch.component.scss']
})
export class GetInTouchComponent implements OnInit {
isFlipped = false;
  
  // Properties to hold error messages
  nameError: string | null = null;
  emailError: string | null = null;
  messageError: string | null = null;

  constructor() { }

  ngOnInit(): void {
  }

  // onSendMessage(name: string, email: string, message: string): void {
  //   // Reset all errors before running new validation
  //   this.nameError = null;
  //   this.emailError = null;
  //   this.messageError = null;

  //   // Trim whitespace from all fields
  //   const trimmedName = name.trim();
  //   const trimmedEmail = email.trim();
  //   const trimmedMessage = message.trim();
  //   let hasError = false;

  //   // 1. Validate if fields are blank and check for special characters in name
  //   const nameRegex = /^[a-zA-Z\s]+$/;
  //   if (!trimmedName || !nameRegex.test(trimmedName)) {
  //     this.nameError = 'Name should not be blank and contain no special characters.';
  //     hasError = true;
  //   }

  //   // 2. Validate email format
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
  //     this.emailError = 'Please enter a valid email address.';
  //     hasError = true;
  //   }

  //   // 3. Validate message length and allowed characters
  //   const messageRegex = /^[a-zA-Z0-9\s,.]+$/;
  //   if (!trimmedMessage || trimmedMessage.length > 200 || !messageRegex.test(trimmedMessage)) {
  //     if (!trimmedMessage) {
  //       this.messageError = 'Message should not be blank.';
  //     } else if (trimmedMessage.length > 200) {
  //       this.messageError = 'Message should not be greater than 200 characters.';
  //     } else if (!messageRegex.test(trimmedMessage)) {
  //       this.messageError = 'Message can only contain letters, numbers, spaces, commas, and periods.';
  //     }
  //     hasError = true;
  //   }

  //   // If any errors exist, stop the form submission
  //   if (hasError) {
  //     return;
  //   }

  //   // If validation passes, proceed to handle form submission
  //   console.log('Validation successful. Sending message...');
  //   alert('Message sent successfully!');

  //   // Once the message is "sent", flip the card
  //   this.isFlipped = true;
  // }




  onSendMessage(name: string, email: string, message: string): void {
  this.nameError = null;
  this.emailError = null;
  this.messageError = null;

  const trimmedName = name.trim();
  const trimmedEmail = email.trim();
  const trimmedMessage = message.trim();
  let hasError = false;

  const nameRegex = /^[a-zA-Z\s]+$/;
  if (!trimmedName || !nameRegex.test(trimmedName)) {
    this.nameError = 'Name should not be blank and contain no special characters.';
    hasError = true;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
    this.emailError = 'Please enter a valid email address.';
    hasError = true;
  }

  const messageRegex = /^[a-zA-Z0-9\s,.]+$/;
  if (!trimmedMessage || trimmedMessage.length > 200 || !messageRegex.test(trimmedMessage)) {
    if (!trimmedMessage) {
      this.messageError = 'Message should not be blank.';
    } else if (trimmedMessage.length > 200) {
      this.messageError = 'Message should not be greater than 200 characters.';
    } else {
      this.messageError = 'Message can only contain letters, numbers, spaces, commas, and periods.';
    }
    hasError = true;
  }

  if (hasError) return;

  // ✅ WhatsApp message formatting
  const whatsappMessage = `Hello, I'm ${trimmedName} (${trimmedEmail}).\n\n${trimmedMessage}`;
  const encodedMessage = encodeURIComponent(whatsappMessage);

  // ✅ Replace with your WhatsApp number (with country code, no + or spaces)
  const whatsappNumber = '918308181847'; // Example: India number

  // ✅ Redirect to WhatsApp
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

  this.isFlipped = true;
}

}
