while ( >= 0) {
	#runfunction
	if (#mascot1distance <= 0 && #mascot2distance <= 0) {
		console.log(#mascot1 + " and " + #mascot2 + " have tied!");
	} else if (#mascot2distance <= 0 && #mascot3distance <= 0) {
		console.log(#mascot2 + " and " + #mascot3 + " have tied!");
	} else if (#mascot1distance <= 0 && #mascot3distance <= 0) {
		console.log(#mascot1 + " and " + #mascot3 + " have tied!");
	} else if (#mascot1distance <= 0 && #mascot2distance <= 0 && #mascot3distance <= 0) {
		console.log("Everyone has tied!");
	} else if (#mascot <= 0) {
		console.log(#mascot + " is our winner!");
	}
}
