import React from 'react';

const Connect = (jPlayer, ConnectedPlayer) =>
  class extends React.Component {
    static get jPlayer() {
      return jPlayer;
    }
    render() {
      return <ConnectedPlayer {...this.props} />;
    }
  };

export default Connect;
