import React, { Component } from 'react';

import { Search, SelectedList } from './components';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      reposList: []
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/antoniomaia/repos')
      .then(response => response.json())
      .then(data => {
        /* Fetch relevant exercise data from response */
        const fetchData = data.map((repo) => { return { id: repo.id, text: repo.name } });
        this.setState({ reposList: fetchData })
      })
      .catch(error => console.warn('Error fetching repos'));
  }

  /* auto biding */
  onChange = (e) => {
    const searchValue = e.target.value;
    this.setState({ searchValue });
  }

  render() {
    const { searchValue, reposList } = this.state;
    if (!reposList && reposList.length === 0) return <p>Loading...</p>;
    return (
      <div className="App">
        <Search searchValue={searchValue} onChange={this.onChange} />
        <SelectedList searchValue={searchValue} list={reposList} />
      </div>
    );
  }
}

export default App;
