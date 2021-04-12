import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server created"
  serverName: string = ''
  showServerName = false
  servers = ["Spring boot server", "React server"]

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "Server created successfully :: " + this.serverName
    this.servers.push(this.serverName);
    this.showServerName = true;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value
  }
}
