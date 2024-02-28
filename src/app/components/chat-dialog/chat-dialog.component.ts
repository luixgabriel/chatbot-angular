import { Component, Input } from '@angular/core';
import { IMessage } from '../../interfaces/message';
import { ChatResponseComponent } from '../chat-response/chat-response.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'chat-dialog',
  standalone: true,
  imports: [ChatResponseComponent, CommonModule],
  templateUrl: './chat-dialog.component.html',
  styleUrl: './chat-dialog.component.scss'
})
export class ChatDialogComponent {

@Input() messages: IMessage[] = []

  showMessage(){
    console.log(this.messages)
    alert('oi')
  }
}
