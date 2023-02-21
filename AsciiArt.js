function AsciiArt(width, height, test, alphabet) {
  let temp = [];
  for (let k = 0; k < test.length; k++) {
    let j =  test.toUpperCase().charCodeAt(k) - "A".charCodeAt(0)    
    j = (0 <= j && j < 26 ) ? j : 26;
    
    for (let i = 0; i < height; i++) {
      if(k != 0)
        temp[i] += alphabet[i].substring(j*width, (j+1)*width)
      else  
        temp[i] = alphabet[i].substring(j*width, (j+1)*width)
    }  
  }
  return temp.join("\n");
}

module.exports = AsciiArt;