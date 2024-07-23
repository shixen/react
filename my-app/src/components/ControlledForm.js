import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            category: 'website',
            comments: '',
        }
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h1>Please fill out the form below!</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label hrmlFor="id-name">your name:</label>
                        <input value={this.state.name} onChange={this.handleNameChange} id="id-name" name="name" type="text" />

                        <label hrmlFor="id-category">Query category</label>
                    </div>
                    <div>
                        <select id="id-category" name="category" value={this.state.category} onChange={this.handleCategoryChange}>
                            <option value="website">Website issiue</option>
                            <option value="order">Order issiu</option>
                            <option value="general">General issiu</option>

                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments</label>
                        <textarea id="id-comments" name="comments"value={this.state.comments} onChange={this.handleCommentsChange}/>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ControlledForm