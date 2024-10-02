---
title: "User Agent Style Sheet: o porquê de um CSS que só serve para ser sobrescrito"
description: "Here is a sample of some basic Markdown syntax that can be used when writing Markdown content in Astro."
pubDate: "Nov 26 2018"
heroImage: https://miro.medium.com/max/3840/1*pw7fJIc9PK4UoISAmnw9TQ.jpeg
tags: [CSS, front-end, user-agent-style-sheet]
---

Numa manhã onde eu estava no meu horário mais reflexivo — quando é muito tarde para voltar a dormir, e muito cedo para começar a se arrumar para o trabalho — eu vi o [tweet da Ire Aderinokun](https://twitter.com/ireaderinokun/status/1066985519425486848?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed&ref_url=https%3A%2F%2Fcdn.embedly.com%2Fwidgets%2Fmedia.html%3Ftype%3Dtext%252Fhtml%26key%3Da19fcc184b9711e1b4764040d3dc5c07%26schema%3Dtwitter%26url%3Dhttps%253A%2F%2Ftwitter.com%2Fireaderinokun%2Fstatus%2F1066985519425486848%26image%3Dhttps%253A%2F%2Fi.embed.ly%2F1%2Fimage%253Furl%253Dhttps%25253A%25252F%25252Fpbs.twimg.com%25252Fprofile_images%25252F911164658047963136%25252FSLtLXQQp_400x400.jpg%2526key%253Da19fcc184b9711e1b4764040d3dc5c07) com uma enquete sobre o método que utilizávamos para resetar CSS.

Me veio na cabeça a pergunta: pra quê serve aquele CSS que o browser por padrão aplica em certos elementos HTML quando não se utiliza um [CSS Reset](https://cssreset.com/what-is-a-css-reset/) e nem um estilo próprio que o sobrescreva?

## User Agent Style Sheet: uma história

![Photo by [Marcus Loke](https://unsplash.com/photos/MFSAETSrcLY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)](https://cdn-images-1.medium.com/max/3840/1*mkd7SJ_dBjhef6x3vi6L9Q.jpeg)_Photo by [Marcus Loke](https://unsplash.com/photos/MFSAETSrcLY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

Resumidamente, o UA (abreviação para User Agent) é descrito, na [especificação do CSS1](https://www.w3.org/TR/CSS1/#basic-concepts), explicando que cada navegador deve em cada browser conter um estilo mínimo a ser aplicado a cada elemento HTML. Já as espeficicações [CSS2](http://www.w3.org/TR/CSS21/cascade.html#cascade) e [CSS3](http://www.w3.org/TR/css3-cascade/#computing) acrescentam que a aparência dos elementos quando estilizados pelo UA do navegador devem ser genéricas e "satisfazer expectativas da apresentação documento". [A explicação do Jens Oliver Meiert é mais detalhada a respeito da evolução do UA](https://meiert.com/en/blog/user-agent-style-sheets/).

Se pensarmos no inicio da Web, com seu intuito único de transferência de conhecimento acadêmico, então faz todo sentido a existência de um UA, já que certamente todo o poder do CSS3 seria desnecessário só para esta tarefa. Naquela época, a Web era como se fosse um [LaTeX](https://pt.wikipedia.org/wiki/LaTeX) com opções de compartilhamento.

Ainda hoje, essa utilidade de manter um estilo básico para cada elemento não é totalmente inútil. Se o arquivo CSS não carregar, é bom que o browser saiba mais ou menos onde "jogar" cada coisa. Se ele não soubesse que o H1 deva ser um bloco com margem superior e inferior, título e parágrafo iriam parecer um código minificado.

Resumindo: a utilidade desse estilo é se manter como a ultima tentativa do browser para [manter a legibilidade](https://www.quora.com/Why-do-web-browsers-style-the-HTML-body-tag-to-have-a-margin-by-default/answer/Victoria-Potvin) do conteúdo.

## Tempos modernos

![Photo by [Agnieszka Boeske](https://unsplash.com/photos/ky0ljKGar78?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/browser?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)](https://cdn-images-1.medium.com/max/3840/1*CX-Jvx2Rbvu5-gMZUuN2bQ.jpeg)_Photo by [Agnieszka Boeske](https://unsplash.com/photos/ky0ljKGar78?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/browser?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

Eu me lembro que no meu primeiro curso de HTML, em 2010, o professor explicou que o browser já aplicava um certo "estilo" no HTML. Mas a explicação se limitou a isso, e ao fato de que deveríamos nos livrar desse estilo para prosseguir, e como fazer isso com um reset.

No início da curva de aprendizado, não parece uma coisa sensata questionar o professor sobre isso. O arquivo de reset é pequeno (do ponto de vista do aluno que ainda não saber que cada KB conta, e muito!) e se você não tiver muito conhecimento em CSS e quiser tentar fazer algo sem ele, nada — literalmente NADA — parece funcionar direito.

Outro ponto para chamar atenção é que o estilo aplicado pelo UA não é padronizado. Existe uma [sugestão de como deve ser esse código pela W3C](https://stackoverflow.com/questions/6867254/browsers-default-css-for-html-elements) (e parte do estilo aplicado é simplesmente os [valores padrões das propriedades CSS](https://www.w3schools.com/cssref/css_default_values.asp)) mas a não ser por isso, a descrição do seu papel é aberta o suficiente para que cada browser implemente sua maneira de manter ordem no caos (e nessa parte, eu tenho que dizer que estaria um pouco interessado em um browser estilizar uma página automaticamente com flexbox ou grid, mesmo sabendo das consequências).

A [diversidade de browsers](https://css-tricks.com/the-ecological-impact-of-browser-diversity/)—diretamente ligada a das empresas que os desenvolvem e ainda consequentemente a todo ecossistema das empresas de TI — é importante. A minha sugestão de padronização se limita ao UA, e não aos browsers e suas engines.

Em meio a benefícios e malefícios, a guerra dos browsers está com cada vez menos competidores (do ponto de vista de engines). Ninguém mais quer escrever uma engine do zero. E talvez nem deva, já que as que temos hoje são resultados de anos de evoluções.

O problema é quando o browser traz, sem direito de escolha, algo com potencial de destruir a tão cuidadosamente planejada experiência do usuário, e ainda esse algo tem [um comportamento de certa forma imprevisível](http://webaim.org/blog/user-agent-string-history/).

## O que o futuro poderia nos trazer

![Photo by [Lucrezia Carnelos](https://unsplash.com/photos/IMUwe-p1yqs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/future?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)](https://cdn-images-1.medium.com/max/3840/1*kf3CKZ5e_k7t2IDzVbV8ng.jpeg)_Photo by [Lucrezia Carnelos](https://unsplash.com/photos/IMUwe-p1yqs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/search/photos/future?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

Você compra um apartamento muito caro, na beira mar, no melhor bairro de uma cidade muito boa. Ele tem piscina, academia, porteiro e vários elevadores. Ele também tem uma suíte com a melhor vista do prédio.

Só que nessa suíte tem uma lâmpada incandescente que não tem interruptor, e já vem ligada. A vantagem é que ela não desliga quando falta energia. E você pode, se quiser, quebrar a parede e colocar um interruptor.

Eu realmente não entendo porque browsers, ou o próprio HTML, não trazem ferramentas que resetam o CSS padrão. Antes, me fazia sentido quando os esforços da W3C eram em tags genéricas. Mas hoje, temos equipes analisando a demanda da web e sugerindo tags com base nisso. [A recente adição da tag \*dialog](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwiMlZ28mfLeAhVBHJAKHcQJBNIQFjAAegQIChAB&url=https%3A%2F%2Fdeveloper.mozilla.org%2Fpt-BR%2Fdocs%2FWeb%2FHTML%2FElement%2Fdialog&usg=AOvVaw1D6l75e8zI1xxTvhLP2pBt)\* é prova disso.

A existência de [muitos métodos de sobrescrever o UA](https://css-tricks.com/reboot-resets-reasoning/) pode ser um empecilho a inserção de algo com essa função nos browsers. Mas como a antiga forma de trabalhar mandava, eu sempre imagino que um atributo initial-state="reset" na tag link poderia ativar um reset básico, e quem quisesse algo mais como um normalize, que inserisse um arquivo como fazemos hoje.
