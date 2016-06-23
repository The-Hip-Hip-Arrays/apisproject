# API's Project
The Hip Hip Array's are back and are creating a spectacular project filled with amusing fashion choices, and a comforting, warming, delightfully sassy fashion expert who guides your daily fashion choices.

## What
We are building a fashion recommendation service. We are using the brand **Zalando** as our primary source for the fashion choices, which will be divided in to four categories - hats, tops, trousers and shoes.

## How
We are going to access the API **Zalando**, which is free. Just to make our lives that bit easier.

1. Get Item IDs, filtered by season and clothing type.
2. Pick a random ID
3. Get whole article object
4. Extract image link and name of the object
5. Randomise the images - which will be capped at 200.

This project contains two image files - the assets folder (which is used for our fairy images) and the **Zalando** API.

For the fairy image, the following is required:

1. As, the images are contained in the assets folder, the creation of a variable in fairy-content folder (with 10 images used) was necessary.
2. Implementation of the image variable in the Math.random function used for the variable 'comments'.

## Why
Because freedom of speech is dead.

## Stretch Goals
- ...including a second API...
- Incorporating quotes API.
- Present back of outfit as well as front.
- Total basket cost.
- Make images add an HTML link so you can buy from the web page directly.
