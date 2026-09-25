# Número Secreto

Jogo simples de adivinhação construído com HTML, CSS e JavaScript puros (sem frameworks ou build step). O usuário tenta descobrir um número inteiro sorteado entre 1 e 10, recebendo dicas de "maior" ou "menor" a cada tentativa.

## Como jogar

1. Abra o `index.html` no navegador (basta dar duplo clique ou usar uma extensão como Live Server).
2. Digite um número entre 1 e 10 no campo de entrada.
3. Clique em **Tentar**.
4. O jogo informa se o número secreto é maior, menor, ou se você acertou.

Não há botão de reiniciar: o número secreto é sorteado uma vez, ao carregar a página. Para jogar novamente, recarregue a página.

## Estrutura do projeto

```
numero_secreto/
├── index.html   # Estrutura da página e formulário de chute
├── style.css    # Estilo visual (tema escuro, layout centralizado)
└── app.js       # Lógica do jogo
```

Não há dependências externas, gerenciador de pacotes ou processo de build — é um projeto estático que roda direto no navegador.

### `index.html`

Define a página: um card central (`.container`) com título, instrução, campo `<input type="number">` (`id="chute"`), botão que dispara `verificarChute()` via `onclick`, e um parágrafo (`id="resultado"`) onde o feedback é exibido. Carrega `style.css` no `<head>` e `app.js` no fim do `<body>`.

### `app.js`

Contém toda a lógica do jogo:

- `numeroSecreto`: gerado uma única vez, na carga do script, com `Math.floor(Math.random() * 10) + 1` (inteiro de 1 a 10).
- `verificarChute()`: lida com o clique do botão.
  - Lê e converte o valor do input com `parseInt`.
  - Se não for um número válido (`isNaN`), exibe mensagem de erro em vermelho (`#ff6b6b`).
  - Se o chute for igual ao número secreto, exibe mensagem de acerto em verde (`#51cf66`).
  - Se for maior, informa que o número secreto é menor (e vice-versa), em laranja (`#ffc078`).

### `style.css`

Tema escuro simples: fundo `#1e1e2f`, card `#2b2b40` centralizado na tela (via flexbox no `body`), inputs e botão com bordas arredondadas, botão com destaque azul (`#4da6ff`) e hover mais escuro (`#3582d0`).

## Estado atual / limitações conhecidas

- Sem contador de tentativas.
- Sem botão de "jogar novamente" (é preciso recarregar a página).
- Sem validação de faixa (números fora de 1–10 não são bloqueados, apenas comparados normalmente).
- Sem testes automatizados.

## Possíveis próximos passos

- Adicionar botão de reiniciar/nova rodada sem recarregar a página.
- Contar e exibir o número de tentativas.
- Validar o intervalo do input (1–10) antes de comparar.
- Extrair a lógica do jogo para funções testáveis e adicionar testes.
