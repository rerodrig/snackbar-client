export default function() {

  this.get('/ingredients', function(){
    return [
      {"id": 1, "name": "Lettuce", "price": 0.40, "discountType": "LIGHT"},
      {"id": 2, "name": "Bacon", "price": 2.00, "discountType": "GREASY"},
      {"id": 3, "name": "Burger", "price": 3.00, "discountType": "EXTRA_INGREDIENT"},
      {"id": 4, "name": "Egg", "price": 0.80},
      {"id": 5, "name": "Cheese", "price": 1.50, "discountType": "EXTRA_INGREDIENT"}
    ];
  });

  this.get('/products', function(){
    return [
      {"id": 1, "name": "Bacon Cheeseburger", "ingredients":[{"id": 2, "name": "Bacon", "price": 2.00}, {"id": 3, "name": "Burger", "price": 3.00}, {"id": 5, "name": "Cheese", "price": 1.50}]},
      {"id": 2, "name": "Cheeseburger", "ingredients":[{"id": 3, "name": "Burger", "price": 3.00}, {"id": 5, "name": "Cheese", "price": 1.50}]},
      {"id": 3, "name": "Egg Cheeseburger", "ingredients":[{"id": 3, "name": "Burger", "price": 3.00}, {"id": 4, "name": "Egg", "price": 0.80}, {"id": 5, "name": "Cheese", "price": 1.50}]},
      {"id": 4, "name": "Egg Bacon Cheeseburger", "ingredients":[{"id": 2, "name": "Bacon", "price": 2.00}, {"id": 3, "name": "Burger", "price": 3.00}, {"id": 4, "name": "Egg", "price": 0.80}, {"id": 5, "name": "Cheese", "price": 1.50}]}
    ];
  });

  this.post('/products/calculatePrice', function(){
    return 38.16;
  });

}
