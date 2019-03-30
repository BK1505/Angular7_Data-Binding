import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-data-binding",
  templateUrl: "./data-binding.component.html",
  styleUrls: ["./data-binding.component.css"]
})
export class DataBindingComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  private a: string;
  private b: string;

  private res: number;
  add() {
    let t1 = parseInt(this.a);
    let t2 = parseInt(this.b);
    this.res = t1 + t2;
  }
}
