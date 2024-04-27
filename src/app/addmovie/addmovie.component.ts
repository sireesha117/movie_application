import { Component } from '@angular/core';
import { movie } from './addmovie';
import { AddMovieService } from './addmovie.service';



@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent {
  public movieObj: movie = new movie();
  data: {} | any;

  constructor(private AddMovieService: AddMovieService) {}
  isAdmin: boolean | any;
  ngOnInit(): void {
    const role = localStorage.getItem('role');
    if (role === 'admin') {
      this.isAdmin = true;
    } else if (role === 'customer') {
      this.isAdmin = false;
    }
  }

  addNewMovie() {
    this.movieObj.showTime = this.convertTimeFormat(this.movieObj.showTime);
    this.AddMovieService.addMovie(this.movieObj).subscribe(
      (data) => {
        this.data = JSON.stringify(data);
        alert('Movie Added Successfully');
        window.location.reload();
        
      },
      (error) => {
        console.log(error);
      }
    );
  }
  convertTimeFormat(time: string): string {
    const [hour, minute] = time.split(':');
    return ((+hour > 12) ? +hour - 12 : +hour) + ':' + minute + ((+hour >= 12) ? ' PM' : ' AM');
  }
}
