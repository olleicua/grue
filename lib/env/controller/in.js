var parseInput = function(input, state) {
	var nextState = states.new();
	
	slug = transitions[state.slug][input];
	if (slug = transitions.get(input, state)) {
		nextState.slug = slug;
	} else {
		unknownInput(input, state);
	}
	
	return nextState;
}

var unknownInput(input, state) {
	io.print("I don't know how to %s", input);
}