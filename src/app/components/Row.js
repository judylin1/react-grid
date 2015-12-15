'use strict';

var React = require('react');

var Row = React.createClass({
  //used for debugging
  displayName: 'Row',

  //in case value not specified by parent component
  getDefaultProps: function getDefaultProps() {
    return {
      componentClass: 'div'
    };
  },

  render: function render() {
    var ComponentClass = this.props.componentClass;

    return React.createElement(
      ComponentClass,
      this.props,
      this.props.children
    );
  }
});

module.exports = Row;
