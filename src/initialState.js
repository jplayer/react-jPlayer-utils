import merge from 'lodash.merge';

import jPlayerInternalStatus from './jPlayer/internalStatus';
import jPlayerDefaultStatus from './jPlayer/defaultStatus';
import jPlayerDefaultOptions from './jPlayer/defaultOptions';

const initialState = (connectedJPlayers, defaultValues) => {
  const jPlayers = {};
  let newConnectedJPlayers = connectedJPlayers;

  if (!Array.isArray(connectedJPlayers)) {
    newConnectedJPlayers = [newConnectedJPlayers];
  }

  newConnectedJPlayers.forEach((connectedJPlayer) => {
    jPlayers[connectedJPlayer.options.id] = merge({}, {
      ...defaultValues,
    }, connectedJPlayer.options);
  });

  return jPlayers;
};

export default initialState;
