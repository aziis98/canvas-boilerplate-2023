# Canvas Boilerplate 2023

Simple project using ViteJS and a `<canvas>` with some basic setup for rendering

## Usage

Run `npm run dev` to start the dev-server on port `:3000` and then just start modifying the file `/src/demo.js`

```js
...

function render({ graphics: g, width, height }) {
	g.strokeStyle = "purple";
	g.beginPath();
	g.rect(10, 10, width - 20, height - 20);
	g.stroke();

	g.fillStyle = "purple";
	g.beginPath();
	g.circle(width / 2, height / 2, 10);
	g.fill();
}

...
```

## Enhanced Graphics

I usually add a couple of extensions to the default `CanvasRenderingContext2d`

-   **`CanvasRenderingContext2d'.circle(x, y, radius)`** &ndash; The missing primitive to draw a circle, just a shortcut for `ellipse(...)` with the correct arguments.
