import { Component } from '@angular/core';
import { MuseumComponent } from '../../icons/museum/museum.component';
import { ArrowLeftComponent } from '../../icons/arrow-left/arrow-left.component';
import { ChatSuggestionsComponent } from '../../components/chat-suggestions/chat-suggestions.component';
import { CommonModule } from '@angular/common';
import { IMessage } from '../../interfaces/message';
import { ChatDialogComponent } from '../../components/chat-dialog/chat-dialog.component';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [MuseumComponent, ArrowLeftComponent, ChatSuggestionsComponent, CommonModule, ChatDialogComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {

  questions: IMessage[] = []

  sendSuggestedQuestion(question: string){
    this.questions.push({
      type: 'request',
      message: question
    })
  }

}
