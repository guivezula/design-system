# Design System

## Visão Geral

Esse projeto tem como objetivo exemplificar e apresentar um design system com alguns componentes básicos e como utilizar design tokens para estilizar os componentes. Nas próximas sessões serão apresentados mais informações do processo de desenvolvimento, bem como algumas considerações.

## Scripts

### `npm install`

Instalar as dependencias do projeto.

### ` npm run style-dictionary`

A partir do design token, esse comando gera o arquivo base de estilização.

### ` npm run storybook`

Roda o storybook para visualizar os componentes.

### ` npm run test`

Roda os testes de cada componente desenvolvido.

### ` npm run test:coverage`

Também roda os testes de cada componente e exibe a cobertura dos testes.

## Desenvolvimento e Decisões

Essa aplicação foi desenvolvida em `React 18.2.7` com a versão do `Node` em `18.13.0`, junto com `Storybook CLI` para exibição dos componentes.

Para estilização foi ultilizado o SASS apenas e não possuindo outra biblioteca de estilização. Por ser um projeto menor, se faria suficiente para o projeto, apenas utilizar o `SASS` junto com os tokens gerados pelo `style-dictionary`. De acordo com o crescimento do projeto, aconselho a utilização de outras bibliotecas como `Styled Components` ou `TailwindCSS`, para dinamizar a estilização dos componentes e reduzir o retrabalho.

Sobre a biblioteca Style Dictionary, não tinha utilzado antes então separei um dia para pesquisar sobre e saber como era seu funcionamento. Como sugerido na proposta do teste, eu utlizei o `tokens.json` como arquivo de entrada.

Por decidir utilizar `SASS` como folha de estilização, adicionei a configuração para gerar o arquivo `variables.scss`. Uma coisa muito importante, a biblioteca está gerando tudo corretamente, menos os valores que a entrada são como pixel. Ao gerar o arquivo, a biblioteca muda todos os values `px` para rem, mas sem converter o valor, só altera de `px` para rem. Por exemplo, se eu tinha um `value: 16px`, ele converte para `16rem`, ou seja de forma erronea. Procurei por soluções, adicionei várias configurações para manter o valor como `px`, ou converter corretamente, mas todas sem sucesso. Por conta do pouco tempo para desenvolver, e apresentar em tempo hábil, eu manualmente só mudei no `variables.scss` valores que estavam como rem, para `px` novamente.

Seria inviável se o design token fosse muito grande por exemplo, e se tivesse mais tempo para criar uma issue no repositório original, ou buscar uma solução. Para uma tomada de decisão imediata, só foram trocados esses valores. Posteriormente, pensar em mudar o token para rem para não haver esse problema se caso for ampliar esse projeto.

Sobre o Storybook não houve nenhum problema, já que eu tinha utilizado anteriormente. Decidi desenvolver os componentes em `React`, e cada componente possui um teste unitário. Se for pensar em crescimento da aplicação e utilização futura, com os componentes testados individualmente, evitaria ter que testá-los novamente quando forem utilizados em uma aplicação.

Os componentes e seus respectivos testes estão no diretório `src/components`, enquanto as Stories estão no diretório `src/stories`. Essa organização foi uma maneira de diferenciar do que são os componentes, seus estilos e testes. Do que vai ser exibido e compartilhado para as outras aplicações. Uma maneira que fica fácil de expandir no futuro se caso for aumentar o número de componentes.

Por fim, uma visão geral sobre a estilização dos componentes. Para a estilização, foi considerado o inspect do Figma, pois algumas informações que estavam no design token do Figma estavam diferente do que aparecia no inspect, por exemplo, o tamanho da fonte do botão. `$font-size-sm=20px` mas no inspect, `font-size` era `16px`. Então para garantir uniformidade, decidi acompanhar o inspect.

Outra decisão tomada foi em relação à altura do componente `Shape`, decidi colocar a altura com o `min-height`, considerando que o parágrafo pode ter um conteúdo maior, a altura do `Shape` acompanharia o conteúdo, se tivesse fixado a altura quebraria o design. Por possuir altura mínima fixa, se o parágrafo possuir um tamanho menor, o card sempre vai manter o mesmo tamanho, então o botão vai subir de acordo com o conteúdo. Desse modo, o design final do `Shape`, está de acordo com o design com o tamanho mínimo, principalmente na hora de ser exibida na story, mantendo-se mais próximo do design proposto.

Outra coisa em relação ao `Shape`, foi a não utilização da propriedade `box-sizing: border-box;` pois afetava o resultado final do `Card Content`, ficando com uma altura maior do que o exemplo no Figma, mas o resultado final do `Shape` está considerando o tamanho do padding e das bordas. Contudo, não afeta o `Card Content`, tendo seu desenvolvimento fidedigno ao design, considerando as entradas padrão dada pelo design do Figma.

Portanto, em um ambiente de produção, todas essas dúvidas poderiam ser sanadas com o time de UX, antes que fossem entregues para aprovação, como: adicionar scroll no parágrafo, adicionar um "leia mais", ou adicioar um balão no hover, ou espandir o card de acordo com o conteúdo. As decisões tomadas, foram a partir do desenvolvimento que seria mais fácil de ser resolvido e que o design final do `Card Content` fosse mais próximo ao design.

## Considerações Finais

Apesar de não ter utilizado anteriormente design tokens, foi um aprendizado muito grande e enriquecedor ao ter que utilizar para esse projeto. Certamente é algo que vou considerar em projetos futuros, e aprender como integrar com outras bibliotecas de estilização para aumentar a reutilização dentro de um projeto. No geral, foi divertido e enriquecedor desenvolver esse projeto integrando Style Dictionary com React e Storybook.

Para finalizar, uma maneira de otimizar a manutenção e a qualidade do código seria como eu mencionei posteriormente, integrar o Style Dictionary com outras folhas de estilo como Styled Components e TailwindCSS, além de corrigir o problema de conversão errada ao gerar os arquivos de folha de estilo. Manter a cobertura de testes sempre alta para garantir a qualidade do código, manter uma dinâmica de revisão de código, seja através de Pull Request, seja através de Pareamento, como o time achar a melhor maneira de manter escalável o projeto.