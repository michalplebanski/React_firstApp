var movies = [
	{
		id: 1,
		title: 'Harry Potter',
		desc: 'Opowiesc o czarodzieju',
		src: 'image/harry.jpg'
	},
	{
		id: 2,
		title: 'Król Lew',
		desc: 'Film o królu sawammy',
		src: 'image/król.jpg'
	},
	{
		id: 3,
		title: 'Piraci z Karaibów',
		desc: 'Film o piratach',
		src: 'image/piraci.jpg'
	},
	{
		id: 4,
		title: 'Władca pierścieni',
		desc: 'Film przygodowy',
		src: 'image/władca.jpg'
	}
];

var moviesElements = movies.map(function(movie) {
	return React.createElement('li', {key: movie.id}, 
		React.createElement('h2', {}, movie.title),
		React.createElement('p', {}, movie.desc),
		React.createElement('img', {src: movie.src})
	);
});

var element = 
	React.createElement('div', {},
		React.createElement('h1', {}, 'Lista filmów'),
		React.createElement('ul', {}, moviesElements)
	);

ReactDOM.render(element, document.getElementById('app'));