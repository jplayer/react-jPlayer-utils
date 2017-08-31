export default (artist, title) => {
  let titleText = '';

  if (artist !== null) {
    titleText += `${artist}`;
  }

  if (title !== null) {
    if (artist !== null) {
      titleText += ' - ';
    }
    titleText += `${title}`;
  }

  return titleText;
};
