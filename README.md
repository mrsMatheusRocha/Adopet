# Adopet 🐾

Um projeto-demo inspirado no site Adopet — um catálogo simples e educativo de animais para adoção.

Descrição

Adopet é uma aplicação front-end estática com dados locais em JSON pensada para servir como exemplo educativo. O objetivo é demonstrar uma interface responsiva, filtros básicos e uma estrutura que possa ser facilmente expandida para uma API, painel administrativo e deploy.

Destaques

- Página responsiva com listagem de pets
- Filtros por espécie e estado (ex.: São Paulo)
- Dados de exemplo em JSON em `data/pets.json`
- Estrutura leve e pronta para evoluir (API, autenticação, persistência)

Tecnologias

- HTML, CSS, TypeScript
- Dados locais (JSON)
- Opcional: Node.js + Express, Docker, GitHub Actions

Preview

> Abra `index.html` localmente ou rode um servidor simples e acesse `http://localhost:8000`.

(Faça um screenshot em `docs/screenshot.png` para mostrar a interface, se desejar.)

Instalação e execução rápida

1. Clone o repositório:

   git clone https://github.com/mrsMatheusRocha/Adopet.git
   cd Adopet

2. Abrir a demo estática

- Opção simples: abra `index.html` diretamente no navegador (pode haver limitações de CORS).
- Recomendo servir via servidor estático para evitar problemas de CORS:
  - Python 3: `python -m http.server 8000`
  - Node (serve): `npx serve .`

3. Acesse http://localhost:8000

Estrutura do projeto (exemplo)

- index.html — página principal
- src/ — código TypeScript/CSS
- data/pets.json — dados de exemplo
- docs/ — imagens e artefatos de documentação

Como contribuir

Leia o arquivo `CONTRIBUTING.md` para orientações sobre como abrir issues e PRs. Algumas ideias:

- Adicionar rota RESTful em Node/Express e persistência (SQLite ou MongoDB)
- Painel administrativo para cadastrar/editar pets
- Formulários de adoção e envio de e-mail
- Testes automatizados e CI (GitHub Actions)
- Deploy em GitHub Pages (frontend) ou em serviços como Render/Heroku/DigitalOcean

Boas práticas sugeridas

- Validar e sanitizar entradas ao adicionar pets
- Testes unitários para scripts de filtragem
- Documentar o formato do `data/pets.json` (ex.: campos obrigatórios)

Contato

Contribuições, dúvidas e sugestões são bem-vindas — abra uma issue ou envie um pull request.

---
