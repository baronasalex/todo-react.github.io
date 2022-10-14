import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from './Table';
import { Button } from 'react-bootstrap';


class App extends Component {
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
        age: '21',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
        age: '28',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
        age: '36',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
        age: '26',
      },
      {
        name: 'Alex',
        job: 'Programmer',
        age: '29',
      },
    ]
  }

  removeCharacter = (index) => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) =>{
        return i !== index
      }),
    })
  }

  render() {
    const { characters } = this.state

    return (
      <div className="container">
        <h1 className="text-center mt-4 mb-4">To Do List</h1>
        <Table 
        characterData={characters} 
        removeCharacter={this.removeCharacter}/>
        <div id className="d-grid gap-2">
      <Button variant="primary" size="lg">
        Block button
      </Button>
      </div>
      </div>
    )
  }
}

export default App