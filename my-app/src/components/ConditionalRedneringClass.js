import React, { Component } from 'react'

export class ConditionalRedneringClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloaded: true,
         isLoggedIn: true
      }
    }

    render() {
        return (
          <div>
            <h1>{this.state.isLoaded ? "Data loaded!" : "Loading..."}</h1>
            {this.state.isLoggedIn ? (
              <div>
                <p>Welcome to the site! Please complete the steps below:</p>
                <ol>
                  <li>Confirm your email</li>
                  <li>Complete your profile</li>
                  <li>Subscribe to the newsletter</li>
                </ol>
              </div>
            ) : (
              <p>Please sign in</p>
            )}
          </div>
        );
      }
    }

export default ConditionalRedneringClass