import {
  create,
  visitable,
  collection,
  text,
  fillable,
  clickable
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/price-calculator'),
  ingredients: collection({
    scope: this,
    itemScope: 'table tbody tr',
    item: {
      name: text('td', { at: 0 }),
      price: text('td', { at: 1 }),
      quantity: fillable('input')
    }
  }),
  calculate: clickable('button'),
  total: text('.label-success'),
  fillInQuantity: function(ingredientName, quantity){
    fillIn('table tbody td:contains("' + ingredientName + '")~input', quantity);
    return this;
  }
});
