import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('total-label', 'Integration | Component | total label', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{total-label text="testing label"}}`);

  assert.equal(this.$().text().trim(), 'testing label');

});
