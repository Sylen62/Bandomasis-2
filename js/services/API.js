const baseUrl = 'http://localhost:3000';

class API {
	static getToys = (succ, fail) => {
		fetch(`${baseUrl}/toy`)
			.then((res) => res.json())
			.then(succ)
			.catch(fail);
	};

	static deleteToyById = (id, succ, fail) => {
		fetch(`${baseUrl}/toy/${id}`, { method: 'DELETE' })
			.then((res) => res.json())
			.then(succ)
			.catch(fail);
	};
}

// API.getToys(
// 	(data) => console.log(data),
// 	(err) => console.error(err)
// );

// API.deleteToyById(
// 	3,
// 	(data) => console.log(data),
// 	(err) => console.error(err)
// );
