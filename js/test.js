test('testing environment', function(assert) {
  var actual = 1;
  var expected = 1;
  assert.equal(actual, expected, 'should pass test')
});

test('testing type of array element is set up', function(assert) {
  assert.ok(typeof womensHatsArr === 'object', 'hats array is set up as an array object')
  assert.ok(typeof womensTopsArr === 'object', 'tops array is set up as an array object')
  assert.ok(typeof womensTrousersArr === 'object', 'trousers array is set up as an array object')
  assert.ok(typeof womensShoesArr === 'object', 'shoes array is set up as an array object')
});
