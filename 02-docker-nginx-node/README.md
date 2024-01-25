# Desafio 1: Docker + Nginx + Node.js

## Sobre o Desafio

O objetivo é criar uma aplicação que utilize o Nginx como proxy reverso para uma aplicação Node.js, que por sua vez interage com um banco de dados MySQL. Ao acessar o Nginx, um registro é adicionado no banco de dados e a lista de registros é exibida na página.

## Estrutura do Projeto

A estrutura do projeto é a seguinte:

```
/
├── db/
│ └── init.sql
├── node-app/
│ ├── Dockerfile
│ ├── package.json
│ └── server.js
├── nginx/
│ ├── Dockerfile
│ └── default.conf
└── docker-compose.yml
```

### Descrição dos arquivos

- `db/init.sql`: Script SQL para inicializar o banco de dados.
- `node-app/`: Contém a aplicação Node.js e seu Dockerfile.
- `node-app/Dockerfile`: Dockerfile para criar a imagem da aplicação Node.js.
- `node-app/package.json`: Define as dependências da aplicação Node.js.
- `node-app/server.js`: Código-fonte da aplicação Node.js.
- `nginx/default.conf`: Configuração do Nginx para atuar como proxy reverso.
- `nginx/Dockerfile`: Dockerfile para criar a imagem com Dockerize.
- `docker-compose.yml`: Define os serviços do Docker Compose.

## Como Executar

1. Clone o repositório:

## Como Executar

Siga os passos abaixo para construir e executar o projeto:

**1. Executar o Docker Compose**

```bash
docker-compose up -d
```

2. Acesse `http://localhost:8080` no seu navegador.
