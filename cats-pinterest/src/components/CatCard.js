import React from 'react';

class CatCard extends React.Component {
  render() {
    return (
      <div className="catCard">
        <img src={this.props.catImg} alt="cat" />
      </div>
    );
  }
}

export default CatCard;
