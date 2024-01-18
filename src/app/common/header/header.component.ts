import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { UserService } from 'src/app/services/user/user.service';

import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartQuantity=0;
  user!:User;
  constructor(
    private cartService:CartService,
    private userService:UserService
    ) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart['totalCount'];
    })

    userService.userObservable.subscribe((newUser: User) => {
      console.log(newUser)
      this.user = newUser;
    })
   }

  ngOnInit(): void {
  }

  logout(){
    this.userService.logout();
  }

  get isAuth(){
    return this.user.token;
  }
}
