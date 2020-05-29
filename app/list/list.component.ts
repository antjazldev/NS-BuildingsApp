import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { HttpClientModule }    from '@angular/common/http';
import { BuildingsService } from "../shared/building/building.service";
import { Router, NavigationExtras } from "@angular/router";
@Component({
  selector: "gr-list",
 providers: [BuildingsService],
  moduleId: module.id,
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
    buildings=[];
 // buildingsList: Array<Object> = [];
  constructor(private router: Router,private buildingsService: BuildingsService) {}

  ngOnInit() {
    //this.buildingsList.push({ name: "Apples" });
    //this.buildingsList.push({ name: "Bananas" });
    //this.buildingsList.push({ name: "Oranges" });
  this.buildingsService.getBuildings()
  .subscribe((result => this.buildings = result["sites"]));
  console.log(this.buildings);
      
  
  }
  public onItemTap(args) {
    console.log("Item Tapped: " + this.buildings[args.index]);
    const navigationExtras: NavigationExtras = {
      queryParams: {
          DataList: JSON.stringify(this.buildings[args.index])
      }   
  };
    this.router.navigate(["/details"],navigationExtras)
}
  
}
