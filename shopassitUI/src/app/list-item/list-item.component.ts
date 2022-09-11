import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListItemService } from '../list-item.service';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

export class ListItem {
  constructor(
    public id: number,
    public listItem: string
  ) {
  }
}

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  getList: ListItem[] = [];
  list: string[] = [];

  constructor(private httpClient: HttpClient, private modalService: NgbModal, private listItemService: ListItemService) { }

  ngOnInit(): void {
    this.getListItems();
  }

  getListItems(){
    this.listItemService.getListItems().subscribe(
      response => {
        console.log(response);
        this.getList = response;
        for(let i = 0; i < this.getList.length; i++) {
          if(this.list.includes(this.getList[i].listItem)) {
            //do nothing
          } else {
            this.list.push(this.getList[i].listItem);
          }
        }
        console.log(this.list);
      }
    );   
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.list, event.previousIndex, event.currentIndex);
  }

}
