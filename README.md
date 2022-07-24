# Desafio-tecnico-turma-xp-trybe

# Contexto

Este projeto trata-se de uma API construída que simula algumas funcionalidades de conta digital e um aplicativo de investimento, onde você poderá visualizar saldo da conta do usuário, compra e vender ativos disponíveis na corretora e carteira de investimento, depositar e sacar valores da conta do usuário.

Arquitetura MSC (model-service-controller), foi a forma como o sistema foi organizado distribuindo as responsabilidades de acordo com cada camada, seguindo o padrão RESTful ( Serviço web que segue as regras definidas pelo REST ).

O banco MySQL foi usado para criação das tabelas e para gestão de dados. 

Testes fazem parte do dia a dia de pessoas desenvolvedoras, no decorrer do desenvolvimento de funcionalidades do software, foi usado os testes unitários para cada camada da arquitetura MSC para testar se as implementações estão comportando como desejado e realizando o proposto no contrato de serviços. 

`mocha` framework de teste para JS (JavaScript) foi usado para arquitetar os testes da aplicação. 

`chai` no  foi usado para nos ajudar com as asserções, ou seja, ele nos fornece maneiras de dizermos o que queremos e assim validando se o resultado condiz com o esperado. 

`sinon` ferrramenta usada para não permitir que o código da aplicação realize operações de IO (input/output) mas apenas simule que elas estejam sendo realizadas, usando o conceito de `Test Doubles` que são objetos que fingem ser outro objeto para fins de testes. Dessa forma, forma isolamos o IO dos testes, garantindo que alguma inconsistência ou eventual falta de dados no banco atrapalhe os testes.

## Técnologias usadas

Back-end:

> Desenvolvido usando: NodeJS, ExpressJS, MYSQL, ES6, Mocha, Sinon, Chai

## Instalando Dependências

> Backend

```
npm install
```

## Executando aplicação com docker

- Para rodar os serviços `node` e `db` no back-end:

  ```
  `docker-compose up -d`
  ```

- Use o comando abaixo para ter acesso ao terminal alternativo do container:

  ```
  `docker exec -it desafio_XP bash`
  ```

## Executando Testes

- Para rodar todos os testes:

  ```
    npm test
  ```