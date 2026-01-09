# Adopet 

Projeto demo inspirado no site Adopet. Objetivo: fornecer um repositório educativo e funcional que demonstre:
- Um catálogo de animais para adoção (front-end estático)
- Dados de exemplo em JSON
- Scripts simples para carregar e filtrar pets
- Boas práticas: README, CONTRIBUTING e CI básica opcional

Recursos
- Página responsiva com listagem de pets
- Filtro por espécie e estado (ex.: São Paulo)
- Estrutura preparada para ser expandida: API, admin, autenticação, deploy em GitHub Pages ou Docker

Tecnologias
- HTML, CSS, TypeScript
- Dados locais em JSON (podem ser substituídos por API)
- Opcional: Node.js + Express para API, Docker, GitHub Actions

Como rodar localmente
1. Clonar o repositório:
   git clone https://github.com/mrsMatheusRocha/Adopet.git
2. Abrir `index.html` no navegador (para demo estática).
   - Para evitar problemas de CORS ao carregar `data/pets.json`, recomendo servir com um servidor simples:
     - Python 3: `python -m http.server 8000`
     - Node (serve): `npx serve .`
3. Abrir http://localhost:8000 no navegador.

Próximos passos sugeridos
- Adicionar rota RESTful em Node/Express e persistência (SQLite ou MongoDB)
- Painel administrativo para cadastrar/editar pets
- Integração com formulários de adoção e envio de e-mail
- Testes automatizados e CI (GitHub Actions)
- Deploy em GitHub Pages (apenas frontend) ou em plataforma como Heroku/Render

Contribuições
Leia `CONTRIBUTING.md` para guidelines. Issues e PRs são bem-vindos!
