var React = require('react');
var _classnames = require('../../classnames');

var Col = React.createClass({
  render: function() {
    var classes = {};
    var KEYS = ['large', 'medium', 'small', 'xsmall', 'lg', 'md', 'sm', 'xs'];
    var SIZES = {
      'large': 'lg',
      'medium': 'md',
      'small': 'sm',
      'xsmall': 'xs',
      'lg': 'lg',
      'md': 'md',
      'sm': 'sm',
      'xs': 'xs'
    };

    var _extends = function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    KEYS.forEach(function (key) {
      var prop = SIZES[key];

      if (this.props[prop]) {
        classes['col-' + prop + '-' + this.props[prop]] = true;
      }

    }, this);

    return React.createElement(
      'div',
      _extends({}, this.props, { className: _classnames(classes) })
    )
  }
});

module.exports = Col;
