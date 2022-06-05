import React from 'react';
import CatCard from '../components/CatCard';
import fetchCats from '../api/catApi';

class AllCats extends React.Component {
  constructor() {
    super();
    this.state = {
      cats: []
    };
  }

  componentDidMount() {
    fetchCats().then((res) => {
      this.setState({
        cats: [...this.state.cats, ...res]
      });
    });
  }

  render() {
    const { cats } = this.state;

    return (
      <main>
        {
          cats.map(cat => (
            <CatCard key={cat.id} catImg={cat.url} />
          ))
        }
      </main>
    );
  }
}

export default AllCats;
