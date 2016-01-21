describe('countUpBy', function() {
  it('counts up by a number provided to another number provided', function() {
    expect(countUpBy(5, 30)).to.equal('5, 10, 15, 20, 25, 30')
  });
});
