import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('product', function() {
    this.route('list');
  });

  this.route('ingredient', function() {
    this.route('list');
  });

  this.route('price-calculator');
});

export default Router;
