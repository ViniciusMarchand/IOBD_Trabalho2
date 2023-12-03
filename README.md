Trabalho 2 IOBD IFRS


# COMO INICIAR O PROJETO 
## Criando o banco de dados.
Crie o banco de dados do projeto com os seguintes comandos: 

CREATE DATABASE anotacoes; 

\c anotacoes;

CREATE TABLE anotacao (
  id SERIAL  PRIMARY KEY,
  titulo TEXT,
  descricao TEXT,
  cor TEXT,
  data DATE,
  hora TIME,
  lixeira BOOLEAN DEFAULT false 
);

## Configurando backend

Abra o projeto em sua IDE e verifique se a versão do seu java é a mesma do projeto. Depois, configure o banco de dados de acrodo com o seu login e senha do postgres.

## Configurando frontend

Abra o projeto em sua IDE e coloque "npm install" no seu terminal. Depois, digite "npm start".

## Como usar?

No início haverá apenas dois botões o da lixeira e o de adicionar nota. O de adicionar nota, como o próprio nome diz, ele serve para criar uma nota preenchendo todos os campos. A lixeira é o lugar onde as notas deletadas ficam, até serem deletadas permanentemente.
Notas as notas fora da lixeira terão um botão de editar, copiar e deletar. As notas da lixeira tem dois botões deletar permanentemente e recuperar, sendo todos esses botões bem intuitivos. 



