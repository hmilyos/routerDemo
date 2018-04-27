import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tea-from',
  templateUrl: './tea-from.component.html',
  styleUrls: ['./tea-from.component.css']
})
export class TeaFromComponent implements OnInit {

  id: any = 0;
  constructor(private router: Router, private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.routerInfo.snapshot.params['tId'];
  }

  cancel(){
    this.router.navigateByUrl('admin/teacher');
  }

}
