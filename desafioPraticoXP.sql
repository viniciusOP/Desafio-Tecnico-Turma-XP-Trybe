DROP DATABASE IF EXISTS db_desafio_XP;

CREATE DATABASE db_desafio_XP;

USE db_desafio_XP;

CREATE TABLE cliente (
    id INT NOT NULL auto_increment,
    saldo FLOAT NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE ativo (
    id INT NOT NULL auto_increment,
    quantidade INT NOT NULL,
    valor FLOAT NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE ativo_cliente (
    cliente_id INT NOT NULL,
    ativo_id INT NOT NULL,
    quantidade INT NOT NULL,
    valor_total FLOAT NOT NULL,
    FOREIGN KEY (cliente_id)
        REFERENCES cliente (id)
        ON DELETE CASCADE,
    FOREIGN KEY (ativo_id)
        REFERENCES ativo (id)
        ON DELETE CASCADE
)  ENGINE=INNODB;

SET SQL_SAFE_UPDATES = 0;

INSERT INTO db_desafio_XP.cliente (saldo) VALUES
    (10.3000),
    (20.5000),
    (30.4000);

INSERT INTO db_desafio_XP.ativo (quantidade, valor) VALUES
    (50, 2.9000),
    (70, 0.9000),
    (100, 3.9000);

INSERT INTO db_desafio_XP.ativo_cliente (cliente_id, ativo_id, quantidade, valor_total) VALUES
    (1, 3, 5, 19.5000),
    (2, 1, 10, 29.0000),
    (3, 2, 15, 13.5000);
