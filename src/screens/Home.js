import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
    }
  }

  componentDidMount() { 
    this.getGifs()
    // alert('I\'m here')
  }

  getGifs() {
    axios.get('https://api.giphy.com/v1/gifs/trending?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9')
      .then((response) => {
        this.setState({
          results: response.data.data
        })
        console.log(response.data)
      })
  }

  renderImages() {
    return (this.state.results.map((result) => {
      const { id, title, rating, bitly_url, images } = result
      const { original: { url } } = images
      return (
        <Col xs={12} sm={6} md={4}>
          <Card key={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={url} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                <h5>Rated: {rating}</h5>
              </Card.Text>
              <Button variant="primary" href={bitly_url}>Go To Giphy</Button>
            </Card.Body>
          </Card>
        </Col>
      )
    }))
  }

  render() {
    return (
      <Container>
        <Row>
          {this.renderImages()}
        </Row>
      </Container>
    )
  }
}
export default Home
