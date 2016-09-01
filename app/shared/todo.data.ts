export class TodoSeedData {

	createDb() {

		let todos = [

    		{ id: 1, title: "Be happy!", done: false },
    		{ id: 2, title: "Learn Angular2 & TypeScript", done: false },
    		{ id: 3, title: "Improve your Javascript skills", done: false }

		];

		return { todos };

	}

}

