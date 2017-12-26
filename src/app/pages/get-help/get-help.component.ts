import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DhisHelpService} from "../../services/dhis-help.service";
import {HttpProviderService} from "../../services/http-provider.service";

@Component({
  selector: 'app-get-help',
  templateUrl: './get-help.component.html',
  styleUrls: ['./get-help.component.css']
})
export class GetHelpComponent implements OnInit {

  @Output() newViewfromHomeApps = new EventEmitter();

  property:any;
  margin:any;
  navMode:boolean = true;
  sheetHeight:any;
  selectedOption:any;
  listOfApps:any =[];
  listOfAppsBackUp:any =[];


  constructor(private dhisHelp:DhisHelpService) { }

  ngOnInit() {
    this.getHelpComponents();

      //cheats the dhis menu position initially
    this.showBottomSheet('app');
    this.hideBottomSheet();
  }

  getHelpComponents(){
    this.listOfApps = this.listOfAppsBackUp  = this.dhisHelp.getDhisHelpUnits();
  }


  showSideNav(){
    this.property = '250px';
    this.margin = '250px';
    this.navMode = false;
  }

  hideSideNav(){
    this.property = '0px';
    this.margin = '0px';
    this.navMode = true;
  }

  showBottomSheet(selected){
    this.sheetHeight = '95.5%';
    this.selectedOption = selected;

  }


  hideBottomSheet(){
    this.sheetHeight = '0%';
  }


  getFilteredList(ev) {
    let val = ev.target.value;
    this.listOfApps = this.listOfAppsBackUp;
    if(val && val.trim() != ''){
      this.listOfApps = this.listOfApps.filter((file:any) => {
        return (file.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.listOfApps = this.listOfAppsBackUp;
    }
  }

  optionFromSideNav(option){
    this.hideSideNav();
    if(option === 'core-apps'){
      this.newViewfromHomeApps.emit('core-apps') ;
    } else if(option === 'dhis-help'){
      this.newViewfromHomeApps.emit('dhis-help') ;
    } else if(option === 'maintenance-apps'){
      this.newViewfromHomeApps.emit('maintenance-apps') ;
    } else if(option === 'custom-apps'){
      this.newViewfromHomeApps.emit('custom-apps') ;
    } else if(option === 'about'){
      this.newViewfromHomeApps.emit('about') ;
    }
  }

}
