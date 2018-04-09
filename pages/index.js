import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import qs from 'query-string'
import Link from 'next/link'
import Head from '../components/head'
import Form from '../components/form'
import Entries from '../components/entries'

export default class App extends Component {

  state = {
    title: '',
    auth: '',
    https: true,
    cors: '',
    count: 0,
    entries: [],
    loading: false
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    this.setState({ loading: true })
    const { title, auth, cors, https } = this.state
    const query = {
      title,
      auth,
      cors,
      https
    }

    const url = `https://api.publicapis.org/entries?${qs.stringify(query)}`
    const response = await fetch(url)
    const { count = 0, entries = [] } = await response.json()
    this.setState({
      count,
      entries,
      loading: false
    })
  }

  handleCheck = event => {
    const { name, checked } = event.target
    this.setState({
      [name]: checked
    })
  }

  handleInput = event => {
    const { value, name } = event.target
    console.log(name, value)
    this.setState({
      [name]: value
    })
  }

  render () {
    const { title, auth, cors, https, entries, loading } = this.state
    return (
      <div className='hero is-light'>
        <Head title="Home" />
        <div className="container is-light">
          <div className='hero-body'>
            <h1 className='title'> Public API</h1>
            <Form
              handleInput={this.handleInput}
              handleSubmit={this.handleSubmit}
              handleCheck={this.handleCheck}
              title={title}
              auth={auth}
              cors={cors}
              https={https}
              loading={loading}
            />
            <Entries entries={entries} />
        </div>
        </div>
      </div>
    )
  }

}
