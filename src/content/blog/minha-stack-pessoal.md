---
pubDate: "May 06 2020"
title: "Minha Stack Pessoal - Parte 1: Introdução"
description: Comentários sobre porque decidi ter uma stack variada em frameworks JS para meus projetos pessoais
heroImage: https://dev-to-uploads.s3.amazonaws.com/i/6pm21eoglwf2o5pvmkba.jpg
tags: [javascript, frontend, frameworks, beginner]
---

Esse é o primeiro de uma série de 4 (ou mais, ainda está incerto) artigos que pretendo escrever sobre a stack que estou utilizando para meus produtos pessoais e como essas escolhas influenciam meu caminho como desenvolvedor.

Esses artigos são meramente coleções de opiniões e experiências pessoais. Posso estar utilizando ferramentas de maneira não ideal, e já seria extremamente útil de um relato aqui provocasse uma discussão de modo que eu aprendesse um outro modo de fazer algo que já fiz.

## Anteriormente

O meu [site pessoal](https://rcrd.me) não é novo. Na verdade hoje ele está na versão 4.1. Eu mantenho o código das versões anteriores em uma pasta no google drive onde posso executa-lo rapidamente por razões nostálgicas.

Na primeira versão do site, eu utilizei o Grunt, o primeiro task runner em que consegui fazer um conjunto de scripts que considerei realmente útil. Nesse script eu criei rotinas para compilar Sass e Pug, minificar HTML e CSS, comprimir imagens e usar live-reloading no browser. Fiquei tão feliz com o resultado que abstrai essa configuração do Grunt para um ["boilerplate" para usar em outros projetos](https://github.com/ricardogouveia3/grunt-boilerplate). Durante muito tempo qualquer coisa nova que eu criava em geral começava com um clone desse projeto.

Não lembro exatamente o que provocou a mudança, mas lembro que comecei a perceber que muitos estavam falando que o Gulp era melhor que o Grunt, e começaram a migrar de plataforma. Não me senti bem com isso, eu estava feliz com o Grunt, e quando tentei migrar para o Gulp, falhei nas primeiras tentativas já que a sintaxe de arrow function não fazia nenhum sentido pra mim na época.

Na terceira tentativa consegui construir um script que fazia tudo o que seu predecessor, em Grunt, fazia também. Novamente, [esse script virou um "boilerplate"](https://github.com/ricardogouveia3/gulp-boilerplate), e a versão 2.x do meu site foi feita com ele.

Passei mais tempo utilizando a versão do Gulp do que a do Grunt. Nesse meio tempo, acabei desenvolvendo a versão 3.x do meu site. Também fiz uma versão em NPM Scripts das rotinas do task runner, para evitar que eu fosse impedido de usar alguma tecnologia por perda de suporte de plugin para o Gulp. [A versão pura em NPM](https://github.com/ricardogouveia3/npm-scripts-boilerplate) até ficou pronta, mas achei lenta e nunca utilizei para nenhum projeto. Também tentei fazer algo em Webpack, mas não consegui. Hoje entendo que talvez tenha sido um erro tentar usar o Webpack pra isso.

## Breakpoints

A versão do boilerplate do Gulp passou tanto tempo sendo minha principal base para novos projetos pessoais e até profissionais pq ela funcionava. Quando me mudei para São Paulo no início de 2019, trabalhei em uma empresa que não tinha uma stack definida para os produtos que precisavam ser feitos. Apresentei esse boilerplate para o (único) outro dev da equipe e ele foi usado até mesmo em projetos que estão em produção até hoje.

Nessa época, eu me culpava por não saber um framework JS. Falhei todas as vezes que tentei aprender um. Li vários artigos sobre curvas de aprendizados, comparando Vue.js, React e Angular. Eu sempre pensava que não tinha um projeto que necessitasse de um framework JS, e a idéia de fazer uma aplicação de pizzaria fake só pra aprender não me agradava, porque aquilo simplesmente não tinha sentido em existir, por menor que fosse. Eu queria fazer um projeto que pudesse descobrir algo novo no framework, chegar em casa e já implementar, ou seja: evoluir a aplicação - e ter um motivo para fazer isso.

Pouco tempo depois, troquei de emprego. Foi a primeira vez que fui trabalhar numa empresa grande e de tecnologia. Tive um treinamento de uma semana de Angular e comecei a trabalhar num projeto que estava em produção. Tive muita dificuldade, mas aprendi mais do que jamais antes na vida, tanto sobre JS quanto sobre Angular, e também sobre todo o ambiente e metodologia ágil de desenvolvimento de software.

Alguns meses depois, resolvi tentar mudar a base do meu site para Vue. A decisão foi simples: eu já trabalhava com Angular, então não precisava de algo pra praticar; eu não entendia a sintaxe do React, e Vue parecia uma novidade interessante.

## Atualmente

Hoje, eu tenho 3 produtos pessoais principais:

- RCRD: o meu site onde falo sobre mim, mostro um pouco dos meus trabalhos, experimentos e posts, e tenho um form de contato. É feito em Vue.
- RCRD Portfolio: uma lista de jobs que fiz, até bem desatualizada. É feito em Angular.
- RCRD Labs: uma lista de experimentos que fiz. É feito em React.

Estou tentando achar uma boa idéia para construir em Svelte. Um projeto em React Native está nos planejamentos.

Também tenho uma API que alimenta esses e outros produtos, mas ela e os outros não entram no que chamo de stack pessoal.

Nos artigo seguinte vou discutir sobre minha experiência migrando o meu site de Gulp para Vue, e como meus conhecimentos recem adquiridos em Angular me ajudaram a finalmente fazer algo usando um framework sozinho.

É importante falar que **minha decisão de usar frameworks diferentes não tem nada a ver com o conceito de micro front-ends**. Eu uso diferentes frameworks para que eu tenha uma base de conhecimento em cada um deles. A integração entre eles não é mais forte de que a de dois sites em HTML puro ligados por um link. Eu lido com eles como produtos separados.

Obrigado pela leitura! Sinta-se a vontade para comentar sua experiência de aprendizado de frameworks e front-end em geral!
