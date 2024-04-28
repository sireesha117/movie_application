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
  filterValue = '';
  public movieObj: movie = new movie();
  moviearr: Array<movie> = [];
  public dataSource: [] | any;
 

  viewAllMovies() {
    this.movieservice.getAllMovies().subscribe(
      (data) => {
       
        this.dataSource=data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  

  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
  }
  get filteredData() {
    if (this.dataSource) {
      return this.dataSource.filter((element: any) =>
        element.movieName.toLowerCase().includes(this.filterValue.toLowerCase())
      );
    }
    return [];
  }
  

  showmovie(id: any) {
    this.route.navigate([`ticket/${id}`]);
  }
  did: number | any;
  deletemovie(did: any) {
   
    this.movieservice.deleteMovie(did).subscribe((data) => {
    });
    alert('Movie deleted Successfully');
      this.viewAllMovies();
  }
}
