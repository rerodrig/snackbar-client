import { test } from 'qunit';
import moduleForAcceptance from 'snackbar-client/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | product');

test('visiting /product/list', function(assert) {

  visit('/product/list');

  andThen(function() {

    assert.equal(currentURL(), '/product/list');

    var title = find('h2');
    assert.equal(title.text(), 'Products');

    var todos = find('.list-group-item');
    assert.equal(todos.length, 4);

  });
});
