import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private weatherService: WeatherService) {

  }

  weatherData?: WeatherData;
  
  ngOnInit(): void {
    this.weatherService.getWeatherData('Timisoara')
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response)
      }
    });
  }
}
