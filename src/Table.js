// import React, {Component} from 'react' // не используемый компонент! проврить
import {Table, Button} from 'react-bootstrap';

const TableHeader = () => {
    return (
        <thead>
        <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Age</th>
        </tr>
    </thead>
    )
  }

const TableBody = (props) => {
    const rows = props.characterData.map((row, index, age) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>{row.age}</td>
                <td>
                    <Button variant="danger"
                    onClick={() => props.removeCharacter(index)}>Delete</Button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

const TableMain = (props) => {
    const {characterData, removeCharacter} = props

    return (
        <Table striped bordered hover>
          <TableHeader />
          <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
        </Table >
      )
}

export default TableMain