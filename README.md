# react-jPlayer-Utils
This package mainly exists to just provide utility functions that are shared internally between react-jPlayer and add-ons such as react-jPlaylist. You probably won't need any utility function in this package.

### Installation
#### NPM
`npm install --save react-jplayer-utils`

#### UMD
The recommended way to use this package is through npm and webpack. However if you insist on including the .js manually then both the unminified and minified versions are available from the `/dist/` folder. The dependencies of this package have been excluded for the UMD build so you will need to include them manually as shown in the react-jPlayer-example's [UMDPlayer](https://github.com/jplayer/react-jPlayer-examples/tree/master/jPlayers/UMDPlayer) and [UMDPlaylist](https://github.com/jplayer/react-jPlayer-examples/tree/master/jPlaylists/UMDPlaylist).

This module is exported to a variable called `ReactJPlayerUtils`.
