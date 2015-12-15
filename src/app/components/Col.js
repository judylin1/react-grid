'use strict';

var React = require('react');
var classnames = require('classnames');

var Col = React.createClass({
  //used for debugging
  displayName: 'Col',

  //in case value not specified by parent component
  getDefaultProps: function getDefaultProps() {
    return {
      componentClass: 'div'
    };
  },

  render: function render() {
    var ComponentClass = this.props.componentClass;
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

    // babel helper
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
      var sizesKey = SIZES[key];
      var classPart = sizesKey + '-';

      if (this.props[sizesKey]) {
        classes['col-' + classPart + this.props[sizesKey]] = true;
      }

      sizesKey = sizesKey + 'Offset';
      classPart = SIZES[key] + '-offset-';
      if (this.props[sizesKey] >= 0) {
        classes['col-' + classPart + this.props[sizesKey]] = true;
      }

      sizesKey = sizesKey + 'Push';
      classPart = sizesKey + '-push-';
      if (this.props[sizesKey] >= 0) {
        classes['col-' + classPart + this.props[sizesKey]] = true;
      }

      sizesKey = sizesKey + 'Pull';
      classPart = sizesKey + '-pull-';
      if (this.props[sizesKey] >= 0) {
        classes['col-' + classPart + this.props[sizesKey]] = true;
      }
    }, this);

    return React.createElement(
      ComponentClass,
      // className = col-lg-1 col-md-1 col-sm-1 col-xs-1
      _extends({}, this.props, { className: classnames(this.props.className, classes) }),
      this.props.children
    );
  }
});

module.exports = Col;
