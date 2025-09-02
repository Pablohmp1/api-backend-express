# Comandos

- npm init // Cria o package.json para iniciar um projeto node

- npm i nome_pacote // instala um pacote especifico

- npm install ou npm i // instala todos os pacotes do package.json

- npm run start,dev entre outros // para iniciar o server com o scripts de atalho pronto

- node - ambiente ou runtime que executa o js nos terminais,servidor,localhost etc

# Comandos Git

// configura usuário e o email do git na máquina-
- git config --global user.name "Pablo Pires"
- git config --global user.email "pablo.pire@aluno.ifsp.edu.br"

- git init (inicia o git em uma pasta)
- git remote add origin _url_do_github_ // vincula meu projeto local ao repositório do github

# Tópicos Importantes

- O que é framework
    Conjunto de recursos ou ferramentas para resolver um problema

- O que é JavaScript
    Linguagem de progamação para a web

- O que é Node.js
    Ambiente ou runtime que executa o js nos terminais e também é cross

- O que é o Express
    Ele é um framework para desevolver o api do backend

- Protocolo http
    Protocolo que determina a regra de aquisiçoes e respostas da web

- Método http (GET, POST, PUT, PATCH, DELETE)
    Get:obter dados da api
    Post:enviar dados
    Put:editar dados da api
    Patch:editar parcialmente da api

- Como mudar o formata de importação / exportação de require para import
(Adicionar no package.json a propriedade type: "module")

- --watch (parametro para rodar um js em modo dev, que permite rodar novamente o script quando algum arquivo é alterado)

Sitaxe básica de uma rota da API

app.delete('/user', (req, res) => {
  res.json({message: 'Usuário deletado com sucesso'})
})

- método criar/inserir: delete 
- Rota de endereço: /user
- tipo de resposta: json

- MVC= M:MODEL V:VIEW C:CONTROL

- MODEL: Define as regras de negocios,

- ORM= O=OBJECT R:RELATIONAL M: MODEL (Relacionamento do objeto do javascript com base de dados), com a falicidade de executar no banco de dados!

## comandos do prisma 

- Istalação do Prisma
npm i prisma - D
npm i @prisma/cliente

- Inicializar o Prisma
 - npx prisma init

- Gerar o model do prisma a partir de um BD (banco de dados) existente
 - npx prisma db pull

- Gerar um banco de dados a partir de um model do prisma
 - npx prisma db push

- Gerar os arquivos necessarios para usar o prisma client no código.
  - 


