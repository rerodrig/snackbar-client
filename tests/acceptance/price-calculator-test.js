import { test } from 'qunit';
import moduleForAcceptance from 'snackbar-client/tests/helpers/module-for-acceptance';
import page from '../pages/price-calculator';

moduleForAcceptance('Acceptance | price calculator');

test('visiting the price calculator', function(assert) {

  page.visit();

  andThen(function() {
    assert.equal(currentURL(), '/price-calculator');
    assert.equal(page.ingredients().count, 5);
  });

});

test('calculating the product price', async function(assert) {

  await page.visit()
    .fillInQuantity('Cheese', 6)
    .fillInQuantity('Burger', 18)
    .fillInQuantity('Lettuce', 1)
    .calculate();

  andThen(function() {
      assert.equal(page.total, "38.16");
  });

});
