import Ember from 'ember';

export default Ember.Controller.extend({

  total: "0.00",
  actions: {
      calculatePrice() {

        var _this = this;

        var items = Array();

        var ingredients = _this.get('model');

        ingredients.forEach(function(ingredient) {
          var item = new Object();
          item.ingredientId = ingredient.get('id'),
          item.quantity = ingredient.get('quantity')

          if(item.quantity){
            items.push(item);
          }

        });

        Ember.$.post({
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          url: "/products/calculatePrice",
          data: JSON.stringify(items),
          dataType: 'json'
        }).then(function(resp){
          _this.set('total', resp);
        });

      }
    }

});
