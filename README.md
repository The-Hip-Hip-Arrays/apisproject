# API's Project
The Hip Hip Array's are back and are creating a spectacular project filled with amusing fashion choices, and a comforting, warming, delightfully sassy fashion expert who guides your daily fashion choices.

## What
We are building a fashion recommendation service. We are using the brand **Zalando** as our primary source for the fashion choices, which will be divided in to four categories - hats, tops, trousers and shoes.

## How
We are going to access the **Zalando** API, which is free. Just to make our lives that bit easier.

1. Get items; filtered by clothing type.
2. Pick a random article - which will be capped at 200.
3. Get whole article object
4. Extract image link.
5. Randomise the images.

This project contains two image files - the assets folder (which is used for our fairy images) and the **Zalando** API.

For the fairy image, the following is required:

1. As, the images are contained in the assets folder, the creation of a variable in fairy-content folder (with 10 images used) was necessary.
2. Implementation of the image variable in the Math.random function used for the variable 'comments'.

For the clothing images:

We selected requested 200 items on 4 separate requests from Zalando. We then passed these into 4 arrays and pulled a random item from the arrays. From these we selected an image for each item and passed these into the DOM elements that matched whether the item was a hat, top, bottoms or shoes.

These images are set into the DOM elements and attached to an event listener function which is on a click of the initial fairy image. These images change each time the image is clicked, as do the fairy images that were also set into an array and randomised through the event listener function.

Inside the event listener function there is also a randomiser on the comments array which allows the comments to change on each click.

## Why
Because freedom of speech is dead.

## Stretch Goals
- ...including a second API...
- Incorporating quotes API.
- Present back of outfit as well as front.
- Total basket cost.
- Make images add an HTML link so you can buy from the web page directly.
