import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addNote } from './NotesActions'

export const AddNote = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        content: ""
    })
    const onChange = e => {
        setFormData(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }
    const onAddClick = () => {
        dispatch(addNote(formData))
    }

    return <div>
        <h2>Add new note</h2>
        <Form>
            <Form.Group controlId="contentId">
                <Form.Label>Note</Form.Label>
                <Form.Control as="textarea" rows={3} name="content" placeholder="Enter note" value={formData.content} onChange={onChange} />
            </Form.Group>
        </Form>
        <Button variant="success" onClick={onAddClick}>Add note</Button>
    </div>
}