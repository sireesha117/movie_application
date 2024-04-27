
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
  isAdmin: boolean | any;
  ngOnInit(): void {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      this.isAdmin = true;
    } else if (role === 'customer') {
      this.isAdmin = false;
    }
  }
  displayedColumns: string[] = [
    'transactionId',
    'movie_id_fk',
    'user_name_fk',
    'no_of_tickets',
    'issueAt',
    'showTime',
    'totalPrice'
  ];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  displayticketarradmin: Array<displayticket> = [];
  public dataSourceadmin: [] | any;
  getAllMovieTicketsadmin() {
    this.displayticket.getallmovieticketsadmin().subscribe(
      (data) => {
        this.displayticketarradmin = Object.values(data);
        this.dataSourceadmin = new MatTableDataSource(this.displayticketarradmin);
        console.log(this.dataSourceadmin);
      },
      (error) => {
        console.log(error);
      }
    );
  }




  displayticketarr: Array<displayticket> = [];
  public dataSource: [] | any;
  getAllMovieTickets() {
    let username = localStorage.getItem('username'); 

    if (username) { 
        this.displayticket.getallmovietickets(username).subscribe( 
            (data) => {
                this.displayticketarr = Object.values(data);
                this.dataSource = new MatTableDataSource(this.displayticketarr);
                console.log(this.dataSource);
            },
            (error) => {
                console.log(error);
            }
        );
    } else {
        console.log('Username not found in local storage');
    }
}


}
