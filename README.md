# Projeto Frontend de Gerenciamento de Livros

## Descrição

Este projeto é uma aplicação frontend desenvolvida em React que permite gerenciar um catálogo de livros. A aplicação oferece funcionalidades para listar, cadastrar, editar e excluir livros, consumindo uma API REST para persistência dos dados.

## Tecnologias Utilizadas

- **React 18**: Biblioteca principal para construção da interface de usuário.
- **Vite**: Ferramenta de build e desenvolvimento rápido para projetos frontend.
- **React Router Dom**: Gerenciamento de rotas da aplicação.
- **Axios**: Cliente HTTP para comunicação com a API backend.
- **Sass (SCSS)**: Pré-processador CSS para estilização da aplicação.
- **LocalForage**: Biblioteca para armazenamento local (embora não tenha sido detalhado o uso no código fornecido).
- **ESLint**: Ferramenta de linting para manter a qualidade do código.
- **JavaScript (ES Modules)**: Linguagem utilizada no desenvolvimento.

## Estrutura do Projeto

- `src/main.jsx`: Ponto de entrada da aplicação, configura as rotas usando React Router.
- `src/api/LivrosService.js`: Classe que encapsula as chamadas HTTP para a API REST de livros.
- `src/views/`: Contém as principais views da aplicação:
  - `Home/`: Página inicial.
  - `Livros/`: Lista os livros cadastrados, permite edição e exclusão.
  - `LivrosCadastro/`: Formulário para cadastro de novos livros.
  - `LivrosEdicao/`: Formulário para edição de livros existentes.
- `src/components/`: Componentes reutilizáveis da interface, como Header e SubmenuLivros.
- `src/assets/`: Arquivos estáticos, como imagens.
- `src/index.scss`: Estilos globais da aplicação.
- `vite.config.js`: Configuração do Vite.

## Funcionalidades Principais

### Listagem de Livros

- Exibe uma lista de livros com título e editora.
- Permite editar um livro, redirecionando para a página de edição.
- Permite excluir um livro com confirmação do usuário.

### Cadastro de Livros

- Formulário para inserir título, número de páginas, ISBN e editora.
- Validações básicas para garantir que número de páginas e ISBN sejam números válidos.
- Envia os dados para a API para criação do livro.
- Exibe mensagens de sucesso ou erro para o usuário.

### Edição de Livros

- (Baseado na estrutura, permite editar os dados de um livro existente, embora o código específico não tenha sido revisado.)

## Como Rodar o Projeto

1. Certifique-se de que a API backend esteja rodando na URL `http://localhost:3000`.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse a aplicação no navegador pelo endereço indicado no terminal (geralmente `http://localhost:5173`).

## Considerações Finais

Este projeto é um exemplo de aplicação CRUD (Create, Read, Update, Delete) utilizando React e consumo de API REST. A arquitetura modular com componentes e views facilita a manutenção e expansão da aplicação.

Para melhorias futuras, pode-se implementar autenticação, paginação na listagem de livros, e otimizações no gerenciamento de estado.

---

### Repositorio Back-End

https://github.com/HugoZAuad/Desafio_5_RID66155-BACK-END-
