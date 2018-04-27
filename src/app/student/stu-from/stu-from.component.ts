import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-stu-from',
  templateUrl: './stu-from.component.html',
  styleUrls: ['./stu-from.component.css']
})
export class StuFromComponent implements OnInit {

  id: any = 0;
  constructor(private router: Router, private routerInfo: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.routerInfo.snapshot.params['stuId'];
  }

  cancel(){
    this.router.navigateByUrl('admin/student');
  }

}
