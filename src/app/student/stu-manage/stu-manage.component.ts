import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-stu-manage',
  templateUrl: './stu-manage.component.html',
  styleUrls: ['./stu-manage.component.css']
})
export class StuManageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toDetalis(id){
    this.router.navigateByUrl('admin/student/' + id);
  }

  toTeacher(){
    this.router.navigateByUrl('admin/teacher');
  }


}
