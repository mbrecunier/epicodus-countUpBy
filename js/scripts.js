var countUpBy = function(countBy, countTo) {
  var output = [];
  if (countBy > countTo) {
    countBy = [countTo, countTo = countBy][0];
  }
  for (var index = countBy; index <= countTo; index += countBy) {
    if(index<=countTo) {
      output.push(index);
    }
  }
  return output.join(', ');
}
