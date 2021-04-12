import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent {
    Id: number = 10;
    status: string = "Online"

    getStatus(): string {
        return this.status;
    }
}