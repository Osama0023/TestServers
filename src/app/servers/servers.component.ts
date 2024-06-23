import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
allowNewServer = false;
serverCreationStatus = 'No Server was created';
serverName = 'Testserver';
serverCreated = false;
servers = ['Testserver1' , 'Testserver2' ];

constructor (){
setTimeout(() => {
this.allowNewServer = true;
}, 2000);
}

onCreationServer(){
  this.serverCreated = true;
  this.servers.push(this.serverName);
  this.serverCreationStatus = 'Server was created ' + this.serverName
}

onUpdateServerName(event : any){
this.serverName = (<HTMLInputElement>event.target).value
}

}
