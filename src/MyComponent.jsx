import React, { Component } from 'react'

export default class MyComponent extends Component {

    constructor(props) {
        super(props)
        console.log("MyComponent constructor")
    }
    
    componentWillMount() {
      console.log("MyComponent componentWillMount")
    }

  render() {
    console.log("MyComponent render")
    return (
      <div>MyComponent</div>
    )
  }
  componentDidMount() {
      console.log("MyComponent componentDidMount")
  }
}
