import React, { Component } from 'react';
import SearchImage from './SearchImage';
import pixels from '../api/Pixels';
import ImageList from './ImageList';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    const STerms = ['images', 'computers', 'Nature', 'Buildings', 'Cars', 'Models', 'Animals'];
    const term = Math.floor(Math.random() * 6);
    this.onSearchSubmit(STerms[term]);
  }

  onSearchSubmit = async (term) => {
    const response = await pixels.get('/search', {
      params: {
        query: term,
        per_page: 80,
        page: 1
      }
    })
    this.setState({ images: response.data.photos });


  }

  render() {
    return (
      <div  >
        <div className="back1">
          <div className="ui container" >

            <SearchImage onSubmit={
              this.onSearchSubmit} />
          </div>

        </div>

        <div style={{ padding: '25px 40px' }}>
          <ImageList Images={this.state.images} />
        </div >

      </div>
    )
  }


}

export default App;