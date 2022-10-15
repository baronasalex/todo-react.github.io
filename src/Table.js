// import React, {Component} from 'react' // не используемый компонент! проврить
import {Table, Button} from 'react-bootstrap';



const TableBody = (props) => {
    const rows = props.characterData.map((row, index, age) => {
        return (
            <tr key={index}>
                <td>{row.task}</td>
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
          <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
        </Table >
      )
}

export default TableMain