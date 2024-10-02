---
pubDate: "May 02 2021"
title: "O front-end além da web"
description: Uma reflexão sobre o termo 'front-end' e tudo que este pode abranger aplicada em habilidades profissionais.
heroImage: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/5sce594md7pgd3va1393.jpg
tags: [development, frontend, discuss]
---

Inúmeros textos discutem a época em que o mundo deixou de ter profissionais "webmasters" para ter profissionais "front-end", "back-end", "DBAs", "DevOps" e outros. E essa mudança já se espalhou desde pequenas startups até gigantes da tecnologia.

A especialização das profissões é um movimento antigo. Me lembro de ler sobre isso no ensino fundamental, estudando a revolução industrial. É natural que, quando se propõe criar uma web mais rica em interações, será necessário mais esforço, mais interdisciplinaridade, e mais especialização daqueles que a constroem.

## O que realmente é front-end?

Segundo a Wikipedia:
{% wikipedia https://en.wikipedia.org/wiki/Front-end_web_development %}

_A definição não está disponível em português. Em tradução livre: "O desenvolvimento front-end da web é a prática de converter dados em uma interface gráfica, por meio do uso de HTML, CSS e JavaScript, para que os usuários possam visualizar e interagir com esses dados."_

É importante notar que essa é a definição de "desenvolvimento web front-end". Se quisermos saber o que é realmente front-end, precisamos recorrer a outra definição:

{% wikipedia https://pt.wikipedia.org/wiki/Front-end_e_back-end %}

Generalizando, front-end é aquilo que obtém e pré-processa os dados que serão enviados ao back-end. E a reflexão começa em: existem muitas outras maneiras de obter dados do usuário que diferem de aplicações feitas em HTML, CSS e JS.

## Interação com o usuário

{% twitter 1380221812139814913 %}

Como eu já tenho essa idéia a alguns anos, postei essa reflexão resumida no twitter, e tive alguns feedbacks. Com eles, posso propor e explicar um novo termo, baseando-me na definição anterior:

**Desenvolvimento ~~web~~ front-end:** _é a prática de converter dados em uma interface ~~gráfica, por meio do uso de HTML, CSS e JavaScript,~~ para que os usuários possam visualizar e interagir com esses dados._

Com essa definição, não alteramos o papel de um desenvolvedor web front-end, mas ampliamos o campo de front-end a novas possibilidades de interação com o usuário. Voltando a discussão no twitter, algumas possibilidades a considerar são:

### - Desenvolvimento de apps mobile

O desenvolvimento de apps para smartphones basicamente se tornou uma área independente, com presença consolidada a partir dos sistemas operacionais inteligentes iOS e Android.

Porém, o produto desse tipo de desenvolvimento também leva em consideração muitos conceitos do front-end: interage com o usuário, apresenta uma interface (e não só gráfica), coleta e pré-processa dados antes de enviar a um servidor.

As semelhanças do desenvolvimento mobile com o front-end passam a barreira conceitual: os inúmeros frameworks para desenvolvimento de apps mobile usando linguagens nativamente da web (e seus paradigmas) é uma correlação técnica entre as áreas.

Podemos então considerar que o desenvolvimento mobile pode ser considerado um tipo de front-end.

### - Assistentes pessoais

O termo pode ser um pouco abstrato, mas com exemplos se torna mais fácil: Amazon Alexa, Google Home e Apple HomePod.

Nesse caso, abstraímos ainda mais a questão gráfica: a interface é primariamente o audio. Porém, sem dúvida o usuário interage com esse dispositivo, que precisa se conectar a um servidor para processar dados.

Sem dúvida, assistentes pessoais - sejam dispositivos ou aplicações - são um tipo de front-end.

### - IoT / SmartWatches / SmartBands / Wearables

A grande categoria d Internet das Coisas (Internet of Things - IoT) é composta em grande maioria por dispositivos com sistemas classificáveis como sistemas front-end.

Nos dois mais populares exemplos: tanto o Apple Watch quanto a MiBand são dispositivos que dependem de um smartphone para funcionar (com dependência total ou parcial), e também tem seus dados processados e/ou armazenados por servidores fora do domínio do usuário.

Saindo da categorias de dispositivos vestíveis, um grande grupo de dispositivos hoje presentes nas casas inteligentes se conecta com servidores para as mais básicas funções. Todos eles dispõem de sensores que interagem com o usuário (ou com o meio, que é modificado pelo usuário, sendo assim uma interação indireta com o mesmo) para obter informações e executar ações. Muitos destes dispositivos não dispõem de telas.

## Front-end além da Web

A dependência do front-end com as telas ainda é grande, e isso não é um problema, apenas um reflexo do mundo em que vivemos hoje. Porém devemos observar os pequenos sinais que evidenciam que usuários não dependem mais tanto de dispositivos que trabalham isolados; um destes sinais é a queda de venda de computadores e alta de venda de tablets.

Eu ainda concordo totalmente quando ouço alguém dizer que a base para o estudo do front-end é HTML, CSS, e JS. Não faz sentido ainda entrar no contexto mais amplo para alguém que simplesmente está buscando a base.

Mas para pessoas que já tem um conhecimento consolidado nessas tecnologias, vale a pena ser um pouco mais conceitual e refletir sobre o futuro da interação humano-computador (que talvez nem seja tão "computador" assim). Essa mudança não vai acontecer, ela já está acontecendo.

Serão necessários os profissionais de UX para moldar, projetar e testar a interação dos usuários com esses dispositivos (e esses profissionais também tem uma grande adaptação pela frente) e serão necessários os desenvolvedores para construir as soluções técnicas que permitirão a interação pretendida.

Esse texto tem profunda relação com uma polêmica antiga sobre "o fim do front-end". Talvez essa tenha sido a motivação para a minha reflexão. Mas de qualquer maneira, minha intenção não é ~mais~ provocar quem nos deu essa previsão, mas apresentar uma outra alternativa, não de fim, mas de evolução da área.

Se esse texto te fez pensar, colabore com ele nos comentários. Ele é bem mais introdução do que conclusão.
