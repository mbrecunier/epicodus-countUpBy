describe('countUpBy', function() {
  it('counts up by a number provided to another number provided', function() {
    expect(countUpBy(5, 30)).to.equal('5, 10, 15, 20, 25, 30');
  });

  it('will always count to the large input by the smaller input', function() {
    expect(countUpBy(35, 5)).to.equal('5, 10, 15, 20, 25, 30, 35');
  });

  it('will handle string input and try to parseInt', function() {
    expect(countUpBy('30', '5')).to.equal('5, 10, 15, 20, 25, 30');
  });
});
