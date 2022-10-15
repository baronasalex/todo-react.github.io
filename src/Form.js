import React, {Component} from "react";
import {Form, Button} from 'react-bootstrap';

class FormMain extends Component {
    initialState = {
        task: '',
    }

    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const {name} = this.state;

        return (

    <Form>
      <Form.Group className="mb-3" >
        <Form.Control
        type="text" 
        name="task"
        id="task"
        value={name}
        onChange={this.handleChange} 
        placeholder="Enter task" 
        />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="success" 
            size="lg"
            onClick={this.submitForm}>
                Add
        </Button>
    </div>
      
    </Form>
        );
    }
}

export default FormMain;