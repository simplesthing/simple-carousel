# simple-carousel


Just a simple JavaScript carousel written in ES6, no frameworks other than Webpack and Babel for transpilation and bundling.

# Demo
The images are specific to a place and are queried from Flickr's photo search API. The default is Seattle but if you want to see other places all you have to do is add the query string parameter `?place=` with any place that you would like.

You can see a live demo at [https://simplesthing.github.io/simple-carousel](https://simplesthing.github.io/simple-carousel)


#Usage

To use this carousel in your own webpage you will need an html page with the following things:

- A DOM element with the id `simple-carousel`
- A script tag with the `carousel.js` (found in the `/dist` directory)
- A link with the `carousel.css` (also found in the `/dist` directory)

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Simple Carousel</title>
      <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet">
      <link rel="stylesheet" href="carousel.css">
    </head>
    <body>
      <div id="simple-carousel"></div>
      <script src="carousel.js"></script>
    </body>
    </html>


## Development

If you would like to fork this repository and develop some of your own features a few steps will get you up and running.

`npm install` the dependencies, then you can run `npm run dev` for a webpack development server, and open your browser to `http://localhost:8080/`.

