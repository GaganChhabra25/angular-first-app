import { Component } from "@angular/core";

@Component({
    selector:"app-username",
    templateUrl: "./username.component.html",
    styleUrls: ["./username.component.css"]
})
export class UserName {
    username: string = ''
    isButtonDisabled: boolean = true

    onButtonClick(event: any    ) {
        console.log("eeee", event)
        this.username = ''; 
    }
}