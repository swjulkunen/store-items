import React, { Component } from "react";
import {form, Form} from 'semantic-ui-react';

class  ListForm extends Component {
    state = { items: '', price: ' '}

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState ({[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addList(this.state)
        this.setState({items: '', price: ''})
    }


render () {
    return(
        <Form onSubmit={this.handleSubmit}>
            <Form.Input
            label= 'items'
            required

            name='items'
            value={this.state.items}
            onChange={this.handleChange}
            />
            <Form.Input 
            label='price'
            required
            
            name='price'
            value={this.state.price}
            onChange={this.handleChange}
            />
           <Form.Button color="pink">Submit</Form.Button>
        </Form>
    )

}

} 


export default ListForm; 