var Mascot = function(name, food, endurance, tripFactor) {
    this.name = name;
    this.food = food;
    this.endurance = endurance;
    this.place = 20;
    this.run = function() {
		while (badger.place >= 1 && unicorn.place >= 1 && vixen.place >= 1) {
			var distance_badger = Math.floor(Math.random()*badger.endurance+1);
			console.log(badger.name + " the " + badger.food + " ran " + distance_badger + " meters ");
			var distance_vixen = Math.floor(Math.random()*vixen.endurance+1);
			console.log(vixen.name + " the " + vixen.food + " ran " + distance_vixen + " meters ");
			var distance_unicorn = Math.floor(Math.random()*unicorn.endurance);
			console.log(unicorn.name + " the " + unicorn.food + " ran " + distance_unicorn + " meters ");
			badger.place = badger.place - distance_badger;
			vixen.place = vixen.place - distance_vixen;
			unicorn.place = unicorn.place - distance_unicorn;
			if (distance_unicorn === 0) {
				console.log(unicorn.name + " the " + unicorn.food + " tripped!");
			}
			if (badger.place <= 0 && vixen.place <= 0) { 
				console.log(badger.name + " and " + vixen.name + " have tied!");
			} else if (vixen.place <= 0 && unicorn.place <= 0) {
				console.log(vixen.name + " and " + unicorn.name + " have tied!");
			} else if (badger.place <= 0 && unicorn.place <= 0) {
				console.log(badger.name + " and " + unicorn.name + " have tied!");
			} else if (badger.place <= 0 && vixen.place <= 0 && unicorn.place <= 0) {
				console.log("Everyone has tied!");
			} else if (badger.place <= 0) {
				console.log(badger.name + " is our winner!");
			} else if (vixen.place <= 0) {
				console.log(vixen.name + " is our winner!");
			} else if (unicorn.place <= 0) {
				console.log(unicorn.name + " is our winner!");
			}
		}
	}
}
var badger = new Mascot("Badger", "Bagel", 3);
var vixen = new Mascot("Vixen", "V8", 3);
var unicorn = new Mascot("Unicorn", "Udon", 4);

badger.run();

