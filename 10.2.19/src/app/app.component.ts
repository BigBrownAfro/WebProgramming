import { Component } from '@angular/core';
import { ISocketMessage } from './interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public message: string;
  public allMessages: ISocketMessage[] = [];
  private username: string;
  private io: {emit: (key: string, value: string) => void, on: (event: string, callback: (data: ISocketMessage) => void) => void};
  private isConnected = false;

  constructor(){

  }

  public addParticipantsMessage(data: ISocketMessage){

  }

  public sendMessage(){

  }

  public onKeyDown(event: KeyboardEvent){

  }

  public log(message: string, shouldPrepend?: boolean){

  }

  public addChatMessage(data: ISocketMessage){

  }

  public scrollToMessageTop(){

  }

  public getUsernameColor(username: string){

  }

  public inputMessageClick(event: MouseEvent){

  }

  private setupListeners(){
    
  }
}

