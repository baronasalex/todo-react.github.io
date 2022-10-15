import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Table';
import Form from './Form';
import {Container, Row, Col} from 'react-bootstrap';


class App extends Component {
  state = {
    characters: [],
  }

  removeCharacter = (index) => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) =>{
        return i !== index
      }),
    })
  }

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] })
  }

  render() {
    const { characters } = this.state

    return (

      <Container className="container">
          <Row className="justify-content-md-center">
          <h1  className="text-center mt-4 mb-4">To Do List</h1>
          </Row>
      <Row className="justify-content-md-center">
        <Col xs={12} md={8}>
        <Form handleSubmit={this.handleSubmit} />
        </Col>
      </Row>
      <Row className="justify-content-md-center my-3">
        <Col xs={12} md={8}>
        <Table 
        characterData={characters} 
        removeCharacter={this.removeCharacter}/>
        </Col>
      </Row>
      </Container>
    )
  }
}

export default App