var React = require('react');
const {Grid, Col, Row} = require('react-bootstrap');

const gridInstance = React.createClass({
  render() {
    var border = {
      borderStyle: 'solid',
      borderWidth: 1,
      textAlign: 'center',
    };
      return (
          <Row className="show-grid">
            <Col xs={1} sm={1} md={1} lg={1} style={border}>1</Col>
            <Col xs={1} sm={1} md={1} lg={1} style={border}>1</Col>
            <Col xs={1} sm={1} md={1} lg={1} style={border}>1</Col>
            <Col xs={1} sm={1} md={1} lg={1} style={border}>1</Col>
            <Col xs={1} sm={1} md={1} lg={1} style={border}>1</Col>
            <Col xs={1} sm={1} md={1} lg={1} style={border}>1</Col>
            <Col xs={1} sm={1} md={1} lg={1} style={border}>1</Col>
            <Col xs={1} sm={1} md={1} lg={1} style={border}>1</Col>
            <Col xs={1} sm={1} md={1} lg={1} style={border}>1</Col>
            <Col xs={1} sm={1} md={1} lg={1} style={border}>1</Col>
            <Col xs={1} sm={1} md={1} lg={1} style={border}>1</Col>
            <Col xs={1} sm={1} md={1} lg={1} style={border}>1</Col>
          </Row>

          <Row className="show-grid">
            <Col xs={4} sm={4} md={4} lg={4} style={border}>4</Col>
            <Col xs={4} sm={4} md={4} lg={4} style={border}>4</Col>
            <Col xs={4} sm={4} md={4} lg={4} style={border}>4</Col>
          </Row>

          <Row className="show-grid">
            <Col xs={8} sm={8} md={8} lg={8} style={border}>8</Col>
            <Col xs={4} sm={4} md={4} lg={4} style={border}>4</Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} sm={6} md={6} lg={6} style={border}>6</Col>
            <Col xs={6} sm={6} md={6} lg={6} style={border}>6</Col>
          </Row>

          <Row className="show-grid">
            <Col xs={12} sm={12} md={12} lg={12} style={border}>12</Col>
          </Row>
      )
    }
});

module.exports = gridInstance;
