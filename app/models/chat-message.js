import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr('string', {default: 'Anonymous'}),
  body: DS.attr('string', {default: ''}),
  createdAt: DS.attr('date', {default: new Date()})
});
