class ToysGridComponent {
	constructor() {
		this.htmlElement = document.createElement('div');
		this.state = {
			toys: [],
			loading: false,
		};
		this.init();
	}

	logError = (err) => console.error(err);

	getToys = () => {
		this.state.loading = true;
		API.getToys(this.saveToys, this.logError);
	};

	saveToys = (toys) => {
		this.state.toys = toys;
		this.state.loading = false;
		this.render();
	};

	init = () => {
		this.getToys();
		this.render();
	};

	render = () => {
		const { loading } = this.state;
		if (loading) {
			this.htmlElement.innerHTML = '<img src="assets/loading.gif" style="width: 100%" />';
		} else {
			this.htmlElement.innerHTML = '';
			this.state.toys.forEach((toy) => {
				this.htmlElement.innerHTML += '<div style="border: 1px solid black;">Toy Card</div>';
			});
		}
	};
}
