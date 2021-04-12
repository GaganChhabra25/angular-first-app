import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles: [`
        .online : {
            color: white
        }
    `]
})
export class ServerComponent {
    Id: number = 10;
    status: string = Math.random() > 0.5 ? "Online": "Offline"

    getStatus(): string {
        return this.status;
    }

    getColor() {
        return this.status === "Online" ? "green" : "red"
    }
}