export default {
  newTime: null, // Needed to set a newTime as currentTime is auto updated by the audio
  guiFadeOut: false,
  playHeadPercent: 0,
  error: {},
  mediaSettings: {
    video: false,
    foundSupported: false,
    formats: [],
  },
  volumeSupported: false,
};
