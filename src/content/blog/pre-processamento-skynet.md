---
description: ""
pubDate: "Jan 5 2018"
title: Pré-processamento e a SKYNET
heroImage: https://miro.medium.com/max/10944/1*X3TNZbdu06LWNCpHixIFxQ.jpeg
tags: [desenvolvimento-software, preprocessors, skynet]
---

Há muito tempo, nós programadores não escrevemos mais o que se executa. O que se executa é o binário, e mesmo que saibamos como funciona, raramente nós fazemos algo diretamente sobre ele.

Isso é bom: imagine tentar convencer um publico jovem a entrar nunca carreira onde deve-se criar processos complexos de processamento de dados usando somente 0 e 1… Se hoje, já não é muita gente que curte ser um dos/das nerds da empresa…

Mas até que ponto é aceitável que nós não conheçamos o resultado final do nosso trabalho? Até quantos níveis de abstração nós podemos submeter nosso código antes de perder o controle?

## Código de gente. Código de máquina.

![Eles sabem o título. (Photo by [Hope House Press](https://unsplash.com/photos/h3sAF1cVURw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText))](https://cdn-images-1.medium.com/max/4896/1*CSwBTz-Uyg2eiZajTPiB-g.jpeg)_Eles sabem o título. (Photo by [Hope House Press](https://unsplash.com/photos/h3sAF1cVURw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText))_

No tempo do ENIAC simplesmente não tinha jeito: ou você sabia binário, ou não sabia programação. Não havia abstração. E não havia "mordomia" também: o 1 era literalmente o trabalho braçal de ligar uma válvula.

Por um tempo, acreditava-se que o computador evoluiria até a linguagem humana. Processaria palavras em inglês no seu core, e poderia até conversar conosco fazendo uso de contexto e tudo mais. Uma prova dessa linha de pensamento foram as (pouquíssimas) máquinas que usavam base decimal, e não binária, no processamento. Essas máquinas acabaram provando-se falhas: havia muita troca de valores por causa das voltagens de cada dígito, e também eram mais custosas na manutenção.

Na outra linha de pensamento, as coisas davam certo até certo ponto: haviam pessoas brilhantes que realmente conseguiam fazer operações complexas usando somente 0 e 1. Mas ali era o limite, a não ser que passassem a ensinar binário nas escolas, não tinha como aproximar mais o ser humano da linguagem de máquina.

O que consolidou-se foi nem uma nem outra: os computadores continuam "falando" binário, mas nós estamos cada vez mais próximos de falar em inglês com eles. A tradução de código fonte foi a solução que trouxe o melhor conforto e eficiência para ambos os lados. Algumas linguagens de programação adotaram de maneira tão forte que certos comandos simples podem ser compreendidos por quem não tem qualquer experiência na área, e ainda assim gerar comandos executáveis válidos.

Aparentemente, não há um problema no fato de nós, humanos, falarmos X, e nossas criações, as máquinas, falarem Y. O importante é que possamos nos comunicar.

## Quem tem o controle?

![Y/N ? (Photo by [Patryk Grądys](https://unsplash.com/photos/4pPzKfd6BEg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText))](https://cdn-images-1.medium.com/max/10664/1*X3AZL38e8zWBeXpZXxW0lQ.jpeg)_Y/N ? (Photo by [Patryk Grądys](https://unsplash.com/photos/4pPzKfd6BEg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText))_

_Em 2032, um vírus entra na rede integrada de telecomunicação (fusão da antiga internet com outras redes via ondas eletromagnéticas) e começa a causar interferência em todo tipo de comunicação: desde mensagens de bom dia em grupos de família até checagem de arsenal atômico pelo pentágono._

_O governo tem um plano: ativar um projeto que está a anos sendo desenvolvido, uma rede de inteligência artificial, de núcleo distribuído, que tem como objetivo remover do ciberespaço via software e do plano material via controle de robôs qualquer ameaça a raça humana e sua hegemonia. Com essa rede ativa, o vírus desapareceria em minutos._

> Y/N ? **Yes**

\*Em 2 minutos, as redes de comunicação param. Todas elas. Robôs entram atirando. Todos do prédio são mortos. A documentação é destruída. Os códigos-fonte são destruídos junto com os computadores e a rede. O próprio backup se destruiu. **E agora, quem tem o controle? Alguém aí programa em binário?\***

Esperando esperançosamente que Jonathan Mostow não me processe por copiar/adaptar o roteiro de Exterminador de Futuro 3, o que eu realmente quero atentar é: **se o código no qual trabalhamos é perdido, mas o compilado está disponível, nós ainda temos alguma coisa?**

Se nós não temos compreensão de o que é e como funciona o resultado final da nossa lógica, então quem controla quem?

## Os bons riscos em nome do progresso

![No futuro, as árvores produzirão mais Wi-Fi e menos oxigênio. (Photo by [Lee Aik Soon](https://unsplash.com/photos/wkHYmPuvMnQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText))](https://cdn-images-1.medium.com/max/9924/1*hgW7kaIKQCzwlIHD6TDgiw.jpeg)_No futuro, as árvores produzirão mais Wi-Fi e menos oxigênio. (Photo by [Lee Aik Soon](https://unsplash.com/photos/wkHYmPuvMnQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText))_

Meu intuito em escrever tudo é mais simples do que parece: conscientizar para a compreensão da tecnologia base, e não somente sua versão pré-processada.

**Saiba Javascript, mesmo escrevendo Typescript. Saiba CSS, mesmo escrevendo em SASS. Saiba HTML, mesmo escrevendo em Pug.**

Não precisa saber binário. Só citei porque sou exagerado.

Nós somos os criadores, e temos que estar no controle. Claro, isso é limitado: se você é desenvolvedor front-end, não precisa necessariamente decorar instruções do navegador como estão passando no processador. Tenha controle do que lhe é de direito: a sua área, e assim nós como sociedade temos controle de toda computação.

Não deixe de dormir por causa do risco das máquinas dominarem o mundo.

Conhecer a tecnologia base vai te permitir mudar de pré-processador, de paradigma, de projeto… vai te permitir mudanças com mais facilidade. Essa é uma enorme vantagem. Você pode até criar uma ferramenta dessas, para fornecer maior abstração. Pra isso é preciso uma sólida base na tecnologia "raiz".

Conhecer a base mais sólida das ferramentas com que se trabalha é uma boa maneira de evitar ser levado pela onda de _hypes_. No final, eles são só maneiras diferentes de usar a mesma coisa pra obter o mesmo resultado com mais eficiência.
