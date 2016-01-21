describe('countUpBy', function() {
  it('counts up by a number provided to another number provided', function() {
    expect(countUpBy(5, 30)).to.equal('5, 10, 15, 20, 25, 30');
  });

  it('will always count to the larger input by the smaller input, when counting with two positive numbers', function() {
    expect(countUpBy(35, 5)).to.equal('5, 10, 15, 20, 25, 30, 35');
  });

  it('will handle string input and try to parseInt', function() {
    expect(countUpBy('30', '5')).to.equal('5, 10, 15, 20, 25, 30');
  });

  it('will handle counting two negative numbers', function() {
    expect(countUpBy(-5, -30)).to.equal('-5, -10, -15, -20, -25, -30');
  });

  it('will always count to the smaller input by the larger input when counting with two negative numbers', function() {
    expect(countUpBy(-30, -5)).to.equal('-5, -10, -15, -20, -25, -30');
  });

  it('will treat both numbers as negative when one number is positive and one number is negative', function() {
    expect(countUpBy(-30, 5)).to.equal('-5, -10, -15, -20, -25, -30');
  })

  it('will ignore strings that contain no numbers', function() {
    expect(countUpBy('bla', 'bla')).to.equal('');
  });

  it('will accept floats and count with them', function() {
    expect(countUpBy(1.5, 7)).to.equal('1.5, 3, 4.5, 6');
  });
});

describe('roundToHundredth', function() {
  it('will round to the nearest hundredth', function() {
    expect(roundToHundredth(1.245)).to.equal(1.25);
  });
});
