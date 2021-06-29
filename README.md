# A-React-Imager

*Please Submit Github link here

1. - Create an app called react-imager using create-react-app
2. - Remove logo.svg, reportWebVitals and setupTests.
3. - Look at TODAY"S LESSON for the layout
4. - Download 12 random images and put it in an images folder inside public folder.
5. - Create a components folder in src folder.
6. - Create an Imager.js component for all of the functionality. Child to App.js
* Create an array with paths to the 12 images.
* use <img src={grab path}> to plug in the images
* Path to image should be nameOfFolder/nameOfFile… Ex: images/photo2.jpeg (React will know to go to public folder for it)
7. - Create a Display.js component that hold the large image on the top of the page. Child to Imager.js
8. - Create a Thumbnail.js component that holds each of the 12 images as thumbnails. Child to Imager.js
9. - When the random button is clicked, a random image will be chosen and displayed on the Display.js. (Hint: Should you use Index or Key for this?)
10. - When the backwards button is clicked it goes to the previous image in the array, same for forward button it increments to the next image. (Hint: Should you use Index or Key for this?)
11. - When you click on thumbnail the image, the Display container should show that image. (Hint: Should you use Index or Key for this?)