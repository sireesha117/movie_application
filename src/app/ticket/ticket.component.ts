import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ticket } from './ticket';
import { TicketService } from './ticket.service';
import { movie } from '../home/movie';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css'],
})
export class TicketComponent implements OnInit {
  constructor(
    private route: Router,
    private aroute: ActivatedRoute,
    private ticketservice: TicketService
  ) {}
  seats = 1;
  theatreName: string = '';
  
  ticketObj: ticket = new ticket();
  ticketarr: Array<ticket> = [];
  data: {} | any;
  id: number | any;
  ngOnInit(): void {
    this.aroute.params.subscribe((params) => {
      this.id = params['id'];
      console.log(this.id);
    });
  }
  bookticket() {
    this.ticketObj.movie_id_fk = this.id;
    this.ticketObj.user_name_fk=localStorage.getItem("username");
  this.ticketObj.theatreName = this.moviedata[2];
    this.ticketObj.no_of_tickets = this.seats;
   
    this.ticketservice.bookTicket(this.ticketObj).subscribe((data) => {
      this.data = JSON.stringify(data);
      this.ticketarr.push(this.data);
    });
    alert(`${this.seats} seats are booked`);
    this.route.navigate(['home']);
  }

  moviedata: Array<movie> = [];
  getmovie() {
    this.ticketservice.getMovie(this.id).subscribe(
      (data) => {
        this.moviedata = Object.values(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
