import { Component } from '@angular/core';
import { ChatService } from './chat.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  userInput = '';
  responseText = '';
  isLoading = false;

  constructor(private chatService: ChatService) {}

  askQuestion() {
    this.responseText = '';
    this.isLoading = true;

    this.chatService.askQuestionStream(this.userInput).subscribe({
      next: (chunk) => {
        this.responseText += chunk;
      },
      complete: () => {
        this.isLoading = false;
      },
      error: (err) => {
        this.responseText = 'Error: ' + err;
        this.isLoading = false;
      }
    });
  }
}
