import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Http} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  dataSource: Observable<any>;

  notes:any;

  constructor(public navCtrl: NavController, public http: Http) {
    this.dataSource = this.http.get('http://qhnaminal.com/cjjy/index.php/Index/testdata').map(response => response.json());
  }

  ngOnInit() {


    setInterval(() => {
      this.dataSource.subscribe(
        data => {
          console.log(666);
          console.log(data);
          if(data.length === 0){
            console.log(`后台没数据！`);
            this.notes = '温度37°，东南风';
          }else {
            console.log(`后台有数据！`);
            this.notes = data[0]['rule_desc'];
          }
        }
      );
      console.log(`隔三秒拉取一次！`)
    }, 3000);


  }

}

