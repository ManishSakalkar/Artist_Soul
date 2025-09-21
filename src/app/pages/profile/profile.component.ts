import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  // 🧍 User Info
  userInfo = signal({
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    contact: '555-1234',
    address: '123 Art Street, Studio City, CA 90210'
  });

  // 💖 Wishlist Items
  wishlistItems = signal([
    { name: 'Ceramic Vase', img: 'https://placehold.co/200x200/d4a373/3e2f2f?text=Vase' },
    { name: 'Macrame Wall Hanging', img: 'https://placehold.co/200x200/8fbc8f/3e2f2f?text=Macrame' },
    { name: 'Desert Sun Painting', img: 'https://placehold.co/200x200/b0c4de/3e2f2f?text=Painting' }
  ]);

  // 📦 Order History
  orderHistory = signal([
    { orderId: 'AS-1001', date: 'Oct 15, 2023', total: '$120.00' },
    { orderId: 'AS-1002', date: 'Nov 05, 2023', total: '$250.00' },
    { orderId: 'AS-1003', date: 'Dec 20, 2023', total: '$95.00' }
  ]);

  // 👀 Recently Viewed
  recentlyViewed = signal([
    { name: 'Woven Basket', img: 'https://placehold.co/200x200/d2b48c/3e2f2f?text=Basket' },
    { name: 'Terracotta Pot', img: 'https://placehold.co/200x200/f0e68c/3e2f2f?text=Pot' },
    { name: 'Abstract Print', img: 'https://placehold.co/200x200/6d8b6f/3e2f2f?text=Print' }
  ]);

  // 💬 Feedback
  feedbackText = signal('');
  showConfirmation = signal(false);

  // 🔐 User Actions
  logout(): void {
    console.log('Logging out user...');
    // TODO: Integrate Firebase/Auth logout
  }

  submitFeedback(): void {
    const feedback = this.feedbackText().trim();
    if (feedback) {
      console.log('Feedback submitted:', feedback);
      // TODO: Save feedback to Firestore
      this.feedbackText.set('');
      alert('Thank you for your feedback!');
    }
  }

  confirmDeleteAccount(): void {
    this.showConfirmation.set(true);
  }

  cancelDelete(): void {
    this.showConfirmation.set(false);
  }

  deleteAccount(): void {
    console.log('Deleting user account...');
    // TODO: Integrate Firebase/Auth delete logic
    this.showConfirmation.set(false);
    alert('Your account has been deleted.');
  }
}
