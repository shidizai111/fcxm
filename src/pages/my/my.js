import React, { Component } from 'react'
import Mytop from "./mytop"
import Mycenter from "./mycenter"
export default class my extends Component {
  render() {
    return (
      <div>
        <Mytop></Mytop>
        <Mycenter></Mycenter>
      </div>
    )
  }
}
