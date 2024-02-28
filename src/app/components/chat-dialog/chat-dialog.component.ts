import { Component, Input } from '@angular/core';
import { IMessage } from '../../interfaces/message';
import { ChatResponseComponent } from '../chat-response/chat-response.component';

@Component({
  selector: 'chat-dialog',
  standalone: true,
  imports: [ChatResponseComponent],
  templateUrl: './chat-dialog.component.html',
  styleUrl: './chat-dialog.component.scss'
})
export class ChatDialogComponent {

@Input() messages: IMessage[] = []


  showMessage(){
    alert(this.messages)
  }
}
