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
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8} lg={8} style={border}>8</Col>
            <Col xs={6} md={4} lg={4} style={border}>4</Col>
          </Row>

          <Row className="show-grid">
            <Col xs={6} md={4} style={border}>4</Col>
            <Col xs={6} md={4} style={border}>4</Col>
            <Col xs={6} md={4} style={border}>4</Col>
          </Row>

          <Row className="show-grid">
            <Col md={6} mdPush={6} style={border}>6</Col>
            <Col md={6} mdPull={6} style={border}>6</Col>
          </Row>
        </Grid>
      )
    }
});

module.exports = gridInstance;
