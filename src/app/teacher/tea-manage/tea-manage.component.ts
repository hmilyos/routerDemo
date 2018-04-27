import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-tea-manage',
  templateUrl: './tea-manage.component.html',
  styleUrls: ['./tea-manage.component.css']
})
export class TeaManageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  toDetalis(id){
    this.router.navigateByUrl('admin/teacher/' + id);
  }

  toStudent(){
    this.router.navigateByUrl('admin/student');
  }

}
