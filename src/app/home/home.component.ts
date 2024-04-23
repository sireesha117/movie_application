import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MovieService } from './movie.service';
import { movie } from './movie';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor(
    private aroute: ActivatedRoute,
    private movieservice: MovieService,
    private route: Router,
    
  ) {}
  isAdmin: boolean | any;
  ngOnInit(): void {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      this.isAdmin = true;
    } else if (role === 'customer') {
      this.isAdmin = false;
    }
  }

  data: {} | any;
  public movieObj: movie = new movie();
  moviearr: Array<movie> = [];
  public dataSource: [] | any;
  displayedColumns: string[] = [
    'movieId',
    'movieName',
    'seats',
    'seatsAvalible',
    'theatreName',
    'showTime',
    'price',
    'delete',
  ];
  viewAllMovies() {
    this.movieservice.getAllMovies().subscribe(
      (data) => {
        this.moviearr = Object.values(data);
        this.dataSource = new MatTableDataSource(this.moviearr);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



  showmovie(id: any) {
    this.route.navigate([`ticket/${id}`]);
  }
  did: number | any;
  deletemovie(did: any) {
    debugger;
    this.movieservice.deleteMovie(did).subscribe((data) => {
      let movieIndex = this.moviearr.findIndex((c) => c.movieId == did);
      this.moviearr.splice(movieIndex, 1);
      alert('Movie deleted Successfully');
      window.location.reload();
    });
  }
}
