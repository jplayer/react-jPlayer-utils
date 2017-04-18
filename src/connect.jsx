import React from 'react';

const Connect = (jPlayer, options, ConnectedPlayer) =>
  class extends React.Component {
    static get jPlayer() {
      return jPlayer;
    }
    static get options() {
      return options;
    }
    static get childContextTypes() {
      return {
        id: React.PropTypes.string,
      };
    }
    getChildContext = () => ({
      id: options.id,
    });
    render() {
      return <ConnectedPlayer id={options.id} {...this.props} />;
    }
  };

export default Connect;
