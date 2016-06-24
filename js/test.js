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

test('check to see if fairyhead button exists', function(assert){
  assert.ok(document.getElementById('fairyhead'), 'fairyhead button object that represents the DOM element exists')
});

test('button changes image', function(assert) {
  var done = assert.async();
  setTimeout(function() {
    document.getElementById('fairyhead').click();
    var expected = "file:///Users/MiniKid/Documents/GitHub/apisproject/assets/DSC_0072.JPG";
    var actual = document.getElementById('fairyhead').src;
    assert.equal(actual, expected, 'button changes image');
    done();
},3000);
});
