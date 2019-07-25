import { Component, OnInit } from '@angular/core';
// Service
import { FoodService } from '../../services/food.service';
//Class
import { Food } from '../../products/food-model';
// Json-Data
import { FOOD } from '../../products/food';

@Component({
  selector: 'app-waiter',
  templateUrl: './waiter.component.html',
  styleUrls: ['./waiter.component.css']
})
export class WaiterComponent implements OnInit {
  FOOD: Food[] = FOOD;
  list: Food[]; //lista vacía que se llenará con los e seleccionados
  sum=0;

  filterMenu(menuType: string) {
    this.getFood();
    this.list = this.list.filter(e=> {
      // console.log(e);
      return e.type === menuType;
    })
  }

  filterBreakfast(menuType: string) {
    this.filterMenu(menuType);
    // console.log(menuType);
  }

  filterDailyMenu(menuType: string) {
    this.filterMenu(menuType);
    // console.log(menuType);
  }
  //selectedList: Food;
  //onSelect(menu: Food): void {
  //this.selectedList = menu;
  //console.log(menu)
  //}
  selectedList: Food[] = [];
  onSelect(menu: Food): void {
  this.selectedList.push(menu);
  //console.log(menu)

  this.sum =0;
  for(let i=0; i < this.selectedList.length; i++){
    this.sum += this.selectedList[i].price;
  }
  }
  /*
  deletes(menu: Food): void {
    delete this.selectedList[1];
  }*/
  /*
  onDelete(id: string){
    if(confirm('¿Seguro quiere eliminarlo?')){
      this.selectedList.deleteProduct(id);
      // this.toastr.success('Successfull Operation', 'Producto Eliminado');
    }
    
}*/

  // deleteProduct(menu: Food): void {
  //   this.selectedList.remove(menu);
  // }

  constructor( private foodService: FoodService ) { }
//llamo para que traiga esta funcion desde el servicio
  ngOnInit() {
    this.foodService.getFood();
  }

  // Call Observable with Subscribe
  getFood(): void {
    this.foodService.getFood()
        .subscribe(foods => this.list = foods);
  }

}
