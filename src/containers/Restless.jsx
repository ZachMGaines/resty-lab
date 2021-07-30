import React, { Component } from 'react';
import makeRequest from '../services/makeRequest';
import Header from '../components/app/Header';
import Input from '../components/app/Input';
import PreArea from '../components/app/PreArea';
import Sidebar from '../components/app/Sidebar';

export default class Restless extends Component {

  state = {
    loading: true,
    url: '',
    body: 'Hello. I am bored. PLEASE make a fetch!',
    method: '',
    putBody: ''
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { url, method, putBody } = this.state;
    const apiResponse = await makeRequest(url, method, putBody);
    this.setState({ body: apiResponse, method, loading: false });
  }

  handleUrlChange = ({ target }) => {
    this.setState({ url: target.value });
  };

  handleMethodChange = ({ target }) => {
    this.setState({ method: target.value });
  };

  handlePutChange = ({ target }) => {
    this.setState({ putBody: target.value });
  };

  async componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    const { url, method, body, putBody, loading } = this.state;

    // eslint-disable-next-line keyword-spacing
    if (loading) return <h1>Loading...</h1>;

    return (
      <section className="container">
        <section className="header"><Header /></section>
        <section className="sidebar"><Sidebar /></section>
        <section className="form"><Input url={url} method={method}
          putBody={putBody} onUrlChange={this.handleUrlChange}
          onMethodChange={this.handleMethodChange}
          onPutChange={this.handlePutChange}
          onSubmit={this.handleSubmit} /></section>
        <section className="pre"><PreArea body={body} /></section>
      </section>
    );
  }
}
