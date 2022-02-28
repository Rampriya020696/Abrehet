# Dummy Data for Amazon Clone

## Product Images

- https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg

- https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleancode.jpg

- https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/imac1.jpg

- https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/imac2.jpg

- https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/keyboard1.jpg

- https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/keyboard2.jpg

- https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse1.jpg

- https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse2.jpg

- https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/mouse3.jpg
- https://media.istockphoto.com/photos/tomato-isolated-on-white-background-picture-id466175630?k=6&m=466175630&s=612x612&w=0&h=fu_mQBjGJZIliOWwCR0Vf2myRvKWyQDsymxEIi8tZ38=
- https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F8%2F8a%2FBanana-Single.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FBanana_equivalent_dose&tbnid=NNqzUobFI_4jsM&vet=12ahUKEwjxkoPWgIv2AhUjgXIEHYyXBB0QMygFegUIARDIAg..i&docid=OxNQT_ny0cBCbM&w=3030&h=2670&q=banana&ved=2ahUKEwjxkoPWgIv2AhUjgXIEHYyXBB0QMygFegUIARDIAg

- C:\Users\Ftewelde\Desktop\Abrehet Shopping\Abrehet\src\data\Tomato.png
- C:\Users\Ftewelde\Desktop\Abrehet Shopping\Abrehet\src\data\Banana.png

## Files
- **products.ts**: A list of products having:
  - id
  - title
  - image
  - avgRating
  - ratings
  - price
  - oldPrice (optional)
- **product.ts**: Product details
  - id
  - title
  - *description*
  - image
  - *images* (array of images)
  - *options* (array if possible variation/options)
  - avgRating
  - ratings
  - price
  - oldPrice (optional)
- **cart.ts**: Items in the cart
  - id
  - item
  - quantity
  - option (selected option)