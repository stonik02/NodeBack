create TABLE person(
    id SERIAL PRIMARY KEY,
    email VARCHAR(60),
    password VARCHAR(50),
    licSchet VARCHAR(50),
    residents INTEGER
);


create TABLE invoice(
    id SERIAL PRIMARY KEY,
    total VARCHAR(20),
    date DATE,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)
);

create TABLE meter_reading(
    id SERIAL PRIMARY KEY,
    gas VARCHAR(10),
    water VARCHAR(10),
    electricity VARCHAR(10),
    trash VARCHAR(10),
    repair VARCHAR(10),
    date DATE,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person (id)

);


create TABLE person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);