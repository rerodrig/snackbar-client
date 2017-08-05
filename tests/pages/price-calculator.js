import {
  create,
  visitable,
  collection,
  text
} from 'ember-cli-page-object';

export default create({
  visit: visitable('/price-calculator'),
  ingredients: collection({
    itemScope: 'table tbody tr',
    item: {
      name: text('td', { at: 0 }),
      price: text('td', { at: 1 }),
      quantity: text('td', { at: 2 })
    }
  })
});
