function hexToRgb(colour) {
  var r, g, b;
  if (colour.charAt(0) === '#') {
    colour = colour.substr(1);
  }
  r = colour.charAt(0) + '' + colour.charAt(1);
  g = colour.charAt(2) + '' + colour.charAt(3);
  b = colour.charAt(4) + '' + colour.charAt(5);

  r = parseInt(r, 16);
  g = parseInt(g, 16);
  b = parseInt(b, 16);
  return `${r}, ${g}, ${b}`;
}

export default { hexToRgb };
