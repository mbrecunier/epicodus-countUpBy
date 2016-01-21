var countUpBy = function(countBy, countTo) {
  var output = [];
  countBy = parseInt(countBy);
  countTo = parseInt(countTo);
  if(countBy > 0 && countTo > 0) {
    if (countBy > countTo) {
      countBy = [countTo, countTo = countBy][0];
    }
    for (var index = countBy; index <= countTo; index += countBy) {
      if(index<=countTo) {
        output.push(index);
      }
    }
  } else {
    if (countBy < countTo) {
      countBy = [countTo, countTo = countBy][0];
    }
    for (var index = countBy; index >= countTo; index += countBy) {
      if(index>=countTo) {
        output.push(index);
      }
    }
  }
  return output.join(', ');
}
