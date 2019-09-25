import React, { Component } from "react";
import {
	drawChromeBoiAtCoords,
	toggleCycling,
	resize
} from "./canvasHelpers.js";

export default class ChromeBoisDomain extends Component {
	handleMouseMove = e => {
		let x = e.clientX;
		let y = e.clientY;
		drawChromeBoiAtCoords(x, y);
	};

	handleClick = e => {
		toggleCycling();
	};

	/* TODO: Create an event handler which, when fired, invokes the provided
	 * `toggleCycling` function with no arguments. Don't forget the click event
	 * listener that should fire it!
	 */

	/* TODO: Add an event listener to the `<canvas>` element to capture when a key
  /* is pressed. When a key is pressed, an event handler should invoke the the
  /* provided `resize` function with a single argument of either '+' or '-'
  /* if the key pressed was 'a', then it should call `resize` with '+'
  /* if the key pressed was 's', then it should call `resize` with '-' 
   */
	handleKeyPress = e => {
		if (e.key === "a") {
			resize("+");
		} else if (e.key === "s") {
			resize("-");
		}
	};

	render() {
		return (
			<canvas
				onMouseMove={this.handleMouseMove}
				width="900"
				height="600"
				tabIndex="0"
				onKeyPress={this.handleKeyPress}
				onClick={this.handleClick}
			></canvas>
		);
	}
}