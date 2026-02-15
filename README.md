# 🧪 Visual Regression Lab

Projeto de demonstração de **Testes de Regressão Visual** utilizando React, Playwright e GitHub Actions.

---

## 🎯 Objetivo

Garantir a integridade da interface visual através da **comparação de pixels**, utilizando:

- mascaramento de dados dinâmicos  
- tolerância a pequenas variações de renderização  
- consistência de snapshots entre sistemas operacionais  

---

## 🚀 Tecnologias

- **React + Vite** — Frontend moderno e rápido  
- **Playwright** — Testes E2E e regressão visual  
- **Docker** — Consistência de renderização entre ambientes  
- **GitHub Actions** — Execução automatizada no CI/CD  

---

## ⚙️ Como Rodar

### 📦 Instalação

```bash
npm install
````

---

### ▶️ Rodar Testes (modo headless)

```bash
npx playwright test
```

---

### 🔄 Atualizar Snapshots (via Docker)

Para garantir compatibilidade com o ambiente Linux do CI:

```bash
docker run --rm \
  --network host \
  -v $(pwd):/work/ \
  -w /work/ \
  -it mcr.microsoft.com/playwright:v1.41.0-jammy \
  /bin/bash -c "npm install && npx playwright test --update-snapshots"
```

---

## 🛡️ Estratégia de Testes

### 1️⃣ Mascaramento de Elementos Dinâmicos

Elementos como datas, IDs e conteúdos variáveis são ocultados via **CSS injection** antes da captura do screenshot.

### 2️⃣ Tolerância a Diferenças Mínimas

O parâmetro `maxDiffPixelRatio` é configurado para ignorar diferenças sutis causadas por anti-aliasing.

### 3️⃣ Execução em CI/CD

O pipeline executa os testes dentro de um **container Ubuntu**, garantindo consistência dos snapshots.

---

## 💡 Benefícios da Regressão Visual

✔ Detecta quebras visuais automaticamente
✔ Evita regressões de UI em produção
✔ Aumenta a confiança em refatorações
✔ Garante consistência visual cross-platform

---

## 🤖 Integração CI/CD

O GitHub Actions executa:

1. Instala dependências
2. Executa testes Playwright
3. Compara screenshots com baseline
4. Falha o pipeline se houver regressões visuais

---

## 📚 Referências

* [https://playwright.dev/](https://playwright.dev/)
* [https://vitejs.dev/](https://vitejs.dev/)
* [https://docs.docker.com/](https://docs.docker.com/)
