import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  showDetails: boolean = false
  clicks = []
  constructor() { }

  ngOnInit(): void {
  }

  handleDisplayDetails(event) {
      this.showDetails = !this.showDetails;
      const timeStamp = Date.now();
      this.clicks.push(timeStamp)
      console.log(this.clicks);
  }

}
