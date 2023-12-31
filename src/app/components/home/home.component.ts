import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food/food.service';
import { Food } from 'src/app/shared/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.foodService.getAll();
    this.activatedRoute.params.subscribe(
      params=>{
        if(params['searchTerm']){
          this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm'])
        } else if(params['tag']){
          this.foods = this.foodService.getAllFoodsByTag(params['tag']);
        }  else {
          this.foods = this.foodService.getAll()
        }
      }
    );
  }



}
