import React, { Component } from 'react'

export default class SearchImage extends Component {

  state = {
    term: ''
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }
  render() {
    return (
      <div className="back">
        <h1 > The best free stock photos shared by talented photographers.
        </h1>
        <div className="ui segment">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <label >Search Images</label>
              <input type="text"
                value={this.state.term}
                onChange={e => this.setState({ term: e.target.value })}
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
