import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Building } from "~/shared/building/building.model";
import * as phone from 'nativescript-phone';
import { RouterExtensions } from 'nativescript-angular/router';



@Component({
  selector: "gr-details",
  moduleId: module.id,
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  currentPhone="";
  Details;
  
  Building;
  label; 
  public constructor(public route: ActivatedRoute,public routerExtensions: RouterExtensions) { }
  ngOnInit() {
    

        this.route.queryParams.subscribe((params) => {
  
          this.Building = params["DataList"];
  
          let obj: Building = JSON.parse(this.Building);
          this.Details = obj;
          console.log("Name", obj.image);
          console.log("Details", this.Details.image)
  
      });
   
      }
      callNumber() {
      
        phone.dial(String(this.Details.contacts[0].phone), true)
      }
      makeCall(item){
      var number = item;
      console.log(number);
      phone.dial(number, true)
      }
      
    }

 