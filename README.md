# IOBD_Trabalho2
Trabalho 2 IOBD IFRS


# COMO INICIAR O PROJETO 
## Criando o banco de dados.
Crie o banco de dados do projeto com os seguintes comandos: 

CREATE DATABASE anotacoes; 

CREATE TABLE anotacao (
  titulo TEXT PRIMARY KEY,
  descricao TEXT,
  cor TEXT,
  data DATE,
  hora TIME,
  lixeira BOOLEAN DEFAULT false 
);



