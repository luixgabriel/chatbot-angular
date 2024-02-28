import { Component, Input } from '@angular/core';
import { IMessage } from '../../interfaces/message';

@Component({
  selector: 'chat-response',
  standalone: true,
  imports: [],
  templateUrl: './chat-response.component.html',
  styleUrl: './chat-response.component.scss'
})
export class ChatResponseComponent {
  // esse ponto de exclamação faz que eu não precise ter que declar a variavél na hora que eu crio ela
  @Input() message!: IMessage;

  showMessage(){
    console.log('chamei')
    alert(this.message)
  }

}
