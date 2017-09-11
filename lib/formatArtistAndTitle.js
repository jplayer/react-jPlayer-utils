'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (artist, title) {
  var titleText = '';

  if (artist !== null) {
    titleText += '' + artist;
  }

  if (title !== null) {
    if (artist !== null) {
      titleText += ' - ';
    }
    titleText += '' + title;
  }

  return titleText;
};