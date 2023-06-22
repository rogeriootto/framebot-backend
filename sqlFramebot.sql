CREATE TABLE games (
	id SERIAL NOT NULL,
	name VARCHAR(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE characters (
	id SERIAL NOT NULL,
	gameId SERIAL NOT NULL,
	name VARCHAR(255) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (gameId) REFERENCES games (id)
);

CREATE TABLE framedata (
	id SERIAL NOT NULL,
	charId SERIAL NOT NULL,
	button VARCHAR(255) NOT NULL,
	startup INT,
	recovery INT,
	onBlock INT,
	totalFrames INT,
	type VARCHAR(255),
	damage INT,
	isInvul BOOL,
	imgSrc VARCHAR(255),
	active INT,
	PRIMARY KEY (id),
	FOREIGN KEY (charId) REFERENCES characters (id)
);

