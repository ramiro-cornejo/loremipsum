CREATE TABLE Books(
    id INT NOT NULL PRIMARY KEY auto_increment,
    isbn INT NOT NULL,
    title VARCHAR(60) NOT NULL,
    author VARCHAR(60) NOT NULL,
    year VARCHAR(4) NOT NULL,
    library INT NOT NULL
);