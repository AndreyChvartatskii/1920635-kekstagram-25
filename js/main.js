function getRandom(min, max) {
  if (min >= 0 && max > min){
    return Math.random() * (max-min)+min;
  }
}
getRandom(0, 10);


function checkString (string, long){
  if (string.length > long){
    return false;
  }
  return true;
}
checkString('ss', 140);
