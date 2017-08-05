import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    var ingredients = this.store.findAll('ingredient');
    /*var list = [];
    ingredients.forEach(function(i, idx) {
      PriceCalculator p = new PriceCalculator();
      p.id = i.id;
      p.name = i.name;
      p.price = i.price;
      p.qty = 0;
      list[idx] = p;
    });
    return list;*/
    return ingredients;
  }

});
