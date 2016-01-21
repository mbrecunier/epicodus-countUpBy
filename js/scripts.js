var countUpBy = function(countBy, countTo) {
  var output = [];
  for (var index = countBy; index <= countTo; index += countBy) {
    if(index<=countTo) {
      output.push(index);
    }
  }
  return output.join(', ');
}
