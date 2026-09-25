# Mariano Shiroma — site de campanha

Site estático com sete cenas narrativas, imagens otimizadas, navegação por capítulos e movimento reversível pelo scroll. Interface integralmente em português brasileiro. Sem backend ou dependências de execução.

## Desenvolvimento

```sh
npm ci
npm run build
npm run preview
```

Abra `http://localhost:4173`. Todo conteúdo editorial está em `src/content/siteContent.js`; URLs documentais em `sources.js`; redes verificadas em `socialLinks.js`. Fotografias oficiais e imagens ilustrativas ficam em `public/images/`.

## GitHub Pages

1. Reutilizar o repositório existente `Httpyabcx/mariano-shiroma-prototype` (ou criar `mariano-shiroma`, se preferir outro nome). Enviar esta pasta à branch `main` após a revisão editorial. O histórico Git local está incluído no pacote.
2. Em **Settings → Pages → Build and deployment**, escolher **GitHub Actions**.
3. O workflow `.github/workflows/deploy.yml` compila e publica a cada push em `main`. O arquivo `CNAME` configura a raiz `marianoshiroma.com.br`.
4. Verificar a configuração DNS existente no Registro.br antes de alterá-la. Usar somente as instruções atuais de **Settings → Pages → Custom domain** e da documentação oficial do GitHub para os registros do domínio raiz. Aguardar a verificação do domínio e ativar **Enforce HTTPS** quando disponível.
5. Validar o CNPJ e as menções eleitorais com a equipe responsável antes da publicação pública. Confirmar links oficiais das redes sociais em `src/content/socialLinks.js`. O link do programa atualmente leva à página do Livro Amarelo que identifica o capítulo VII; substituí-lo por link direto oficial ao capítulo se disponibilizado.

A hospedagem sob domínio personalizado usa caminhos relativos à raiz. Se for necessário pré-visualizar em `usuario.github.io/mariano-shiroma/` sem domínio, os mesmos caminhos relativos continuam funcionando.

## Imagens

Correspondência fixada: `mariano-hero` = fotografia 1; `mariano-closing` = fotografia 2; `sus-corridor` = cena 1; `sus-priority` = cena 2; `sus-outcomes` = cena 3; `sus-digital` = cena 4; `sao-paulo` = cena 5. As imagens de ambiente são ilustrativas. Os retratos foram apenas codificados em WebP, sem alterar o rosto.
