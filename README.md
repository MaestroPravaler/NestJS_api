# NestJS (API REST)

O Objetivo deste curso é desenvolver uma API rest com buscas, validações e detalhes arquiteturais.

![](assets/images/titulo.png)

## Definindo domínio de Usuarios

1. Inicializando nosso projeto
  ```
  nest new nome-do-projeto
  ```
2. Separando nosso projeto por domínios (Criando a pasta `src/usuario`)
3. Criando o controller src/usuario/usuario.controller.ts
4. Criando o Metodo CRIAR (POST) src/usuario/usuario.controller.ts
5. Criando o Service src/usuario/usuario.service.ts
6. Testando as rotas api.http

## Organização do projeto e injeção de dependências

1. Decorator @Injectable()
2. Injeção de dependência no controller
3. Conceito de Provider para o NestJS (toda classe que recebe o decorator @Injectable() é um provider)
4. Todo provider precisa ser declarado entro de um Módulo da aplicação
5. Um módulo tem a função de organizar classes que tenham correlação entre si
6. Criando o módulo src/usuario/usuario.module.ts
7. Importanto do módulo criado para o módulo principal da nossa aplicação src/app.module.ts
8. Criando o arquivo entity src/usuario/usuario.entity.ts
9. Criando busca passando o nome na URL (utilização do @Param())
10. Testando as rotas api.http

## Validação de dados

1. 

## Serialização e tratamento de erros

1. 

## Aplicando os padrões REST

1. 