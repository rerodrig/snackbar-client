import { test } from 'qunit';
import moduleForAcceptance from 'snackbar-client/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | product');

test('visiting /product/list', function(assert) {
  //visit('/product/list');
  visit('/product/list');

  andThen(function() {
    //assert.equal(currentURL(), '/product/list');
    assert.equal(currentURL(), '/product/list');
  });
});
