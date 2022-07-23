DROP DATABASE IF EXISTS db_desafio_XP;

CREATE DATABASE db_desafio_XP;

USE db_desafio_XP;

CREATE TABLE clientes (
    id INT NOT NULL auto_increment,
    saldo DECIMAL(5, 2) NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE ativos (
    id INT NOT NULL auto_increment,
    quantidade INT NOT NULL,
    valor DECIMAL(5, 2) NOT NULL,
    PRIMARY KEY(id)
) ENGINE=INNODB;

CREATE TABLE ativos_clientes (
    cliente_id INT NOT NULL,
    ativo_id INT NOT NULL,
    quantidade INT NOT NULL,
    valor_total DECIMAL(5, 2) NOT NULL,
    FOREIGN KEY (cliente_id)
        REFERENCES cliente (id)
        ON DELETE CASCADE,
    FOREIGN KEY (ativo_id)
        REFERENCES ativo (id)
        ON DELETE CASCADE
)  ENGINE=INNODB;

SET SQL_SAFE_UPDATES = 0;

INSERT INTO db_desafio_XP.clientes (saldo) VALUES
    (10.30),
    (20.50),
    (30.40);

INSERT INTO db_desafio_XP.ativos (quantidade, valor) VALUES
    (50, 2.90),
    (70, 0.90),
    (100, 3.90);

INSERT INTO db_desafio_XP.ativos_clientes (cliente_id, ativo_id, quantidade, valor_total) VALUES
    (1, 3, 5, 19.50),
    (2, 1, 10, 29.00),
    (3, 2, 15, 13.50);
