import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { HistoryComponent } from '../../icons/history/history.component';
import { QuestionComponent } from '../../icons/question/question.component';
import { CuriosityComponent } from '../../icons/curiosity/curiosity.component';

@Component({
  selector: 'app-chat-suggestions',
  standalone: true,
  imports: [CommonModule, HistoryComponent, QuestionComponent, CuriosityComponent],
  templateUrl: './chat-suggestions.component.html',
  styleUrl: './chat-suggestions.component.scss'
})
export class ChatSuggestionsComponent {

  // crio a função para emitir o evento e coloco o tipo dele aqui tbm
  @Output() questionSelected = new EventEmitter<string>()

  suggestionTopics = [
    {
      title: "Dúvidas",
      icon: 'doubt',
      questions: [
        "Qual o valor para entrar no museu?",
        "Quando o museu está aberto?",
      ]
    },
    {
      title: "Curiosidades",
      icon: 'curiosity',
      questions: [
        "Quem era o prefeito na época da criação?",
        "Quantos cômodos existem no museu?",
        "Quantas peças estão exibidas no museu?",
      ]
    },
    {
      title: "História",
      icon: 'history',
      questions: [
        "Quando o museu foi criado?",
        "Qual o estilo arquitetônico do prédio?",
        "Quem foi o arquiteto do prédio?",
      ]
    },
  ]

  selectQuestion(question: string){
    this.questionSelected.emit(question)
  }

}
