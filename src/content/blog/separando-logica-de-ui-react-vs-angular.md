---
pubDate: "May 19 2025"
title: Separando lógica de UI no React uma comparação com services do Angular
description: "'Como crio um serviço?' era uma pergunta bem frequente que eu fazia quando passei a 
trabalhar com React vindo do Angular"
heroImage: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fgt7bhrv735pi5l2edahg.png
tags: [frontend, frameworks, javascript, web-development, react, angular]
---

Desenvolvedores Angular estão acostumados com um fluxo bem definido para o desenvolvimento de funcionalidades: normalmente, *services* funcionam como uma camada intermediária de lógica entre as regras de negócio e a UI.

No React, a liberdade arquitetural deixa essa separação menos explícita — o que pode gerar dúvidas sobre onde posicionar a lógica e como mantê-la desacoplada da camada visual.

## 🔧 Angular services: organização baseada em injeção de dependência

Os *services* do Angular são classes injetáveis com lógica reutilizável. Eles são responsáveis por compartilhar estado e comportamentos entre componentes — como autenticação, chamadas HTTP, comunicação entre componentes etc.

É importante deixar claro que isso não elimina a necessidade de gerenciadores de estado como 
**NgRx** ou 
**Akita**, usados 
quando o app demanda uma gestão mais robusta de estado.

A injeção de dependência facilita o uso dos services em qualquer parte da aplicação:

```ts
@Injectable({ providedIn: 'root' }) 
export class NotificationService { 
  show(message: string) {
    /* exibe o toast */
  }
}
```

## 🌀 React: diversidade arquitetural como proposta

No React, não existe uma estrutura obrigatória para separar lógica de UI — o que traz **flexibilidade**, mas também **responsabilidade**. O time precisa definir padrões que mantenham a aplicação consistente.

Algumas abordagens comuns para separar lógica de UI no React incluem:

- **Headless Components** (ou *logic-only/controller components*)
- **Hooks personalizados**
- **Context API**
- **Composição declarativa**
- **Módulos externos** (como `auth.ts`, `useUser.ts`, etc)

## 🧩 Exemplo prático: `Parent` fornece dados da store para `Child`

**Cenário:**  
O componente `Parent` extrai dados de uma store e repassa para `Child` via props. `Child` é completamente desacoplado da origem dos dados, tornando-se reutilizável em qualquer lugar da aplicação.

```tsx
// Parent.tsx
import { useUserStore } from './stores/useUserStore';
import { Child } from './Child';

export function Parent() {
  const { user } = useUserStore();

  if (!user) return null; // ou um spinner

  return <Child name={user.name} />;
}
```

```tsx
// Child.tsx
type Props = {
  name: string;
};

export function Child({ name }: Props) {
  return <p>Olá, {name}!</p>;
}
```

```tsx
// App.tsx
import { Parent } from './Parent';

export default function App() {
  return (
    <main>
      <h1>Exemplo de componente sem UI</h1>
      <Parent />
    </main>
  );
}
```

### Benefícios dessa abordagem:

- `Child` é **puro**, testável e reutilizável.
- `Parent` atua como **adaptador lógico**, obtendo dados da store e injetando nos filhos.
- A lógica está **separada da UI**, favorecendo **escalabilidade**.

## ⚖️ Comparativo direto: Services no Angular × Padrões no React

---
💡 **Headless Components**: Componentes que não renderizam nada na UI, mas executam lógica ou
escutam eventos.

- São **declarativos**, **reutilizáveis** e vivem dentro do JSX.
- Equivalem a "services visíveis" no React, pois organizam lógica fora da UI.

```tsx
function AnalyticsTracker() {
  useEffect(() => {
    trackPageView();
  }, []);
  return null;
}
```
---
🪝 **Hooks personalizados**: Funções que encapsulam lógica reutilizável baseada em hooks do React.

- Extraem regras de negócio (ex: chamadas assíncronas, validações).
- Facilitam testes e reaproveitamento em diferentes componentes.

```tsx
function useAuth() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // busca dados do usuário
  }, []);
  return { user };
}
```
---

🌐 **Context API**: API nativa do React para compartilhar dados sem prop drilling.

- Ideal para temas, autenticação, idioma, eventos globais etc.
- Quando combinada com hooks, funciona como uma mini-store.

```tsx
const UserContext = createContext(null);
function useUser() {
  return useContext(UserContext);
}
```
---

🧱 **Composição declarativa**: Controla lógica e comportamento via componentes JSX, sem `if` ou 
`switch` soltos no código.

```tsx
<When condition={user.isAdmin}>
  <AdminPanel />
</When>
```

- Torna a UI mais legível e baseada em componentes reutilizáveis.
- Substitui condicionais complexas por expressões declarativas.
---

## ✅ Considerações finais

React não exige que você separe UI e lógica — mas adotar essa separação torna o código mais **escalável**, **testável** e **fácil de manter**.

**Headless Components** e **hooks personalizados** são formas poderosas de encapsular lógica sem comprometer a apresentação, alinhando-se perfeitamente com o modelo declarativo e composicional do React.

Mesmo que nem sempre sejam altamente reutilizáveis, esses padrões **mantêm os componentes filhos mais flexíveis** e preparados para trabalhar com diferentes fontes de dados e contextos.

No fim, a ausência de *services* como os do Angular não é uma limitação do React — é uma 
oportunidade de 
**adotar soluções sob medida para sua aplicação.**


