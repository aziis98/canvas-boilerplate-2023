function enhanceGraphics(g) {
	g.circle = function (x, y, radius) {
		this.ellipse(x, y, radius, radius, 0, 0, Math.PI * 2);
	};

	return g;
}

function createGraphics($canvas) {
	$canvas.style.width = "100%";
	$canvas.style.height = "100%";

	const ctx = {
		graphics: null,
		width: 0,
		height: 0,
	};

	function updateGraphics() {
		$canvas.width = $canvas.offsetWidth * window.devicePixelRatio;
		$canvas.height = $canvas.offsetHeight * window.devicePixelRatio;

		ctx.width = $canvas.offsetWidth;
		ctx.height = $canvas.offsetHeight;
		ctx.graphics = enhanceGraphics($canvas.getContext("2d"));
		ctx.graphics.scale(window.devicePixelRatio, window.devicePixelRatio);
		ctx.graphics.translate(0.5, 0.5);
	}

	window.addEventListener("resize", () => updateGraphics());
	updateGraphics();

	return ctx;
}

const $canvas = document.querySelector("canvas");
const ctx = createGraphics($canvas);

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

setInterval(() => {
	render(ctx);
}, 1000 / 10);
