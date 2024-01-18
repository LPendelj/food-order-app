import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart/cart.service';
import { FoodService } from 'src/app/services/food/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss']
})
export class FoodPageComponent implements OnInit {

  food!: Food;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private cartService: CartService,
    private router: Router
  ) {

    activatedRoute.params.subscribe(
      params => {
        console.log(params);
        if(params['id']){
         this.foodService.getFoodById(params['id']).subscribe((serverFood) => {
          console.log(serverFood)
          this.food = serverFood;
         }
         )
        }

      }
    )

   }

  ngOnInit(): void {

  }

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page');
  }

}
