import { Component, ElementRef, ViewChild } from '@angular/core';

interface Message {
  text: string;
  sender: 'user' | 'bot';
  time: Date;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  @ViewChild('messagesContainer') messagesContainer: ElementRef;

  messages: Message[] = [];
  newMessage: string = '';
  isOpen: boolean = false;

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

    const msg: Message = {
      text: this.newMessage,
      sender: 'user',
      time: new Date()
    };
    this.messages.push(msg);
    this.newMessage = '';
    this.scrollToBottom();

    // Simulate bot reply
    setTimeout(() => {
      this.messages.push({ text: 'Hello! This is a bot reply.', sender: 'bot', time: new Date() });
      this.scrollToBottom();
    }, 500);
  }

  scrollToBottom() {
    if (this.messagesContainer) {
      setTimeout(() => {
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
      }, 50);
    }
  }
}