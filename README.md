<h1 align="center">Trilha React Rocketseat</h1>
<p align="center">Trilha 1</p>

Para rodar o projeto, caso utilize o docker apenas buildar a imagem e iniciar.

```bash
$ docker build -t xokys/react:v1 .

# Execute a aplicação em modo de desenvolvimento
$ docker run -it -d -p 8080:8080 xokys/react:v1
```

Caso esteja sem docker

```bash
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev
```

