import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DisplayticketsService } from './displaytickets.service';
import { displayticket } from './displyticket';

@Component({
  selector: 'app-displayalltickets',
  templateUrl: './displayalltickets.component.html',
  styleUrls: ['./displayalltickets.component.css'],
})
export class DisplayallticketsComponent {
  constructor(private displayticket: DisplayticketsService) {}
  displayedColumns: string[] = [
    'transactionId',
    'movie_id_fk',
    'no_of_tickets',
    'issueAt',
    'showTime',
    'totalPrice'
  ];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  displayticketarr: Array<displayticket> = [];
  public dataSource: [] | any;
  getAllMovieTickets() {
    this.displayticket.getallmovietickets().subscribe(
      (data) => {
        this.displayticketarr = Object.values(data);
        this.dataSource = new MatTableDataSource(this.displayticketarr);
        console.log(this.dataSource);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
