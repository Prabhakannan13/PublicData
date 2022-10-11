import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-uspublic-data',
  templateUrl: './uspublic-data.component.html',
  styleUrls: ['./uspublic-data.component.css']
})
export class USPublicDataComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
fetchData=()=>{
  this.myapi.viewUSdata().subscribe(
    (data)=>{
      this.publicdata=data
    }
  )
}
  publicdata:any=[]
  ngOnInit():
  void {
  }

}
