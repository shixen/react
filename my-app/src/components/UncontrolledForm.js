import React, { Component } from 'react'

export class UncontrolledForm extends Component {
    constructor(props) {
        super(props)
    }

    handleSubmit = (event) => {
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <h1>Please fill out the form below!</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label hrmlFor="id-name">your name:</label>
                        <input id="id-name" name="name" type="text" />

                        <label hrmlFor="id-category">Query category</label>
                    </div>
                    <div>
                        <select id="id-category" name="category">
                            <option value="website">Website issiue</option>
                            <option value="order">Order issiu</option>
                            <option value="general">General issiu</option>

                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-comments">Comments</label>
                        <textarea id="id-comments" name="comments"/>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default UncontrolledForm