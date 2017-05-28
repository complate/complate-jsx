import createElement from "complate-stream/renderer";

export default (component, stream, ...args) => {
	stream.writeln("<!DOCTYPE html>");

	let streamer = createElement(component);
	streamer(stream);
};
