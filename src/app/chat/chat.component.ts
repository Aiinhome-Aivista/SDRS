import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { Service_authorization } from '../service/authservice';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  time: Date;
  isLoading?: boolean;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @ViewChild('messagesContainer') messagesContainer: ElementRef;
  userName: any;

  private authService = inject(Service_authorization);

  messages: Message[] = [];
  newMessage: string = '';
  isOpen: boolean = false;

  ngOnInit(): void {
    this.userName = sessionStorage.getItem("Firstname");
    this.messages = [
      {
        text: `Hi ${this.userName || 'there'}! I’m here to help you retrieve the information you need, based on your requirements.`,
        sender: 'bot',
        time: new Date()
      }
    ];
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      setTimeout(() => {
        this.scrollToBottom();
      }, 50);
    }
  }

  sendMessage() {
    if (!this.newMessage.trim()) return;

    const userMessage = this.newMessage;
    const msg: Message = {
      text: userMessage,
      sender: 'user',
      time: new Date()
    };
    this.messages.push(msg);
    this.newMessage = '';
    setTimeout(() => this.scrollToBottom(), 0);

    // Add a loading message
    this.messages.push({
      text: '',
      sender: 'bot',
      time: new Date(),
      isLoading: true
    });
    setTimeout(() => this.scrollToBottom(), 0);

    // Prepare payload for API
    const payload = { query: userMessage };

    this.authService.sendChatMessage(payload).subscribe({
      next: (response: any) => {
        console.log("Chat API Response:", response);

        // Remove the loading message
        const loadingIndex = this.messages.findIndex(m => m.isLoading);
        if (loadingIndex !== -1) {
          this.messages.splice(loadingIndex, 1);
        }

        // ✅ Bind correct property from API response
        const botMessageText = response.answer || 'No response received.';

        this.messages.push({
          text: botMessageText,
          sender: 'bot',
          time: new Date()
        });

        setTimeout(() => this.scrollToBottom(), 0);
      },
      error: (err) => {
        console.error("Chat API Error:", err);

        // Remove the loading message
        const loadingIndex = this.messages.findIndex(m => m.isLoading);
        if (loadingIndex !== -1) {
          this.messages.splice(loadingIndex, 1);
        }

        this.messages.push({
          text: "Error: Unable to fetch response.",
          sender: 'bot',
          time: new Date()
        });
      }
    });
  }

  scrollToBottom() {
    if (this.messagesContainer) {
      setTimeout(() => {
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
      }, 50);
    }
  }
}