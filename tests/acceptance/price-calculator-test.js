import { test } from 'qunit';
import moduleForAcceptance from 'snackbar-client/tests/helpers/module-for-acceptance';
import page from '../pages/price-calculator';

moduleForAcceptance('Acceptance | price calculator');

test('visiting /price-calculator', function(assert) {

  page.visit();

  andThen(function() {
    assert.equal(currentURL(), '/price-calculator');
    assert.equal(page.ingredients().count, 5);
  });


});
