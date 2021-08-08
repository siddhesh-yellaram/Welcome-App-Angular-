import { Component, OnInit } from '@angular/core';
import { DataService } from './DataService';

let dataServiceObservable;

@Component({
  selector: 'sw-twoway',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {
  firstName: string
  lastName: string

  constructor(private dataSvc: DataService) {
    console.log("Inside Constructor")
    this.firstName = "ABC"
    this.lastName = "XYZ"
  }
  updateFirstName(e: string) {
    console.log(e);
    this.firstName = e;
  }
  ngOnInit() {
    console.log("Inside Ng Onit")
    console.log(this.dataSvc.getData())
    console.log("Calling Async Method getDataAsync");
    dataServiceObservable = this.dataSvc.getDataAsync().subscribe((d) => console.log(d));
    console.log("End of Async Method");
    console.log("End of On Init")
  }
}
