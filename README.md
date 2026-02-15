# Visual Regression Lab 🧪

Projeto de demonstração de Testes de Regressão Visual utilizando React, Playwright e GitHub Actions.

## 🎯 Objetivo
Garantir a integridade da UI através da comparação de pixels, utilizando estratégias de mascaramento de dados dinâmicos e consistência de renderização via Docker.

## 🚀 Tecnologias
- **React + Vite**: Frontend
- **Playwright**: Framework de testes E2E e Visual
- **Docker**: Para garantir consistência de snapshots entre SOs
- **GitHub Actions**: CI/CD

## ⚙️ Como Rodar

### Instalação
\`\`\`bash
npm install
\`\`\`

### Rodar Testes (Modo Headless)
\`\`\`bash
npx playwright test
\`\`\`

### Atualizar Snapshots (Via Docker)
Para garantir que os snapshots sejam compatíveis com o CI (Linux), utilize o Docker:
\`\`\`bash
docker run --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.41.0-jammy /bin/bash -c "npm install && npx playwright test --update-snapshots"
\`\`\`

## 🛡️ Estratégia de Testes
1. **Mascaramento**: Elementos dinâmicos (datas, IDs) são ocultados via CSS injection antes do screenshot.
2. **Tolerância**: `maxDiffPixelRatio` configurado para ignorar anti-aliasing sutil.
3. **CI/CD**: Pipeline configurado para rodar em container Ubuntu.