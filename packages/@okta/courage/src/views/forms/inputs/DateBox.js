define([
  './TextBox',
  'okta/jqueryui'
], function (TextBox) {

  return TextBox.extend({

    constructor: function (options) {
      options || (options = {});
      options.type = 'text';
      TextBox.call(this, options);
    },

    /**
    * @Override
    */
    editMode: function () {
      TextBox.prototype.editMode.apply(this, arguments);
      this.$('input').datepicker(this.options.params);
    }

  });

});
