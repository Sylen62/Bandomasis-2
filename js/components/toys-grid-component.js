class ToysGridComponent {
	constructor() {
		this.state = {
			toys: [],
		};
		this.init();
	}

	logError = (err) => console.error(err);

	getToys = () => API.getToys(this.saveToys, this.logError);

	saveToys = (toys) => {
		this.state.toys = toys;
		console.log(this.state.toys);
	};

	init = () => {
		this.getToys();
	};
}

const toys = new ToysGridComponent();
