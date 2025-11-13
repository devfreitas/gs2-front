# ✅ Checklist de Avaliação - GitFlow e Versionamento

## 📋 Critérios de Avaliação

Este documento serve como guia para avaliar se o projeto foi versionado corretamente no GitHub, seguindo as melhores práticas do GitFlow.

---

## 🎯 1. Estrutura de Branches

### ✅ Branches Principais

- [ ] **Branch `main`** existe e contém código de produção
- [ ] **Branch `develop`** existe e contém código de desenvolvimento
- [ ] Ambas as branches estão sincronizadas com o GitHub

**Como verificar:**
```bash
git branch -a
```

**Resultado esperado:**
```
* develop
  main
  remotes/origin/develop
  remotes/origin/main
```

---

## 🌿 2. Branches de Feature

### ✅ Prefixo `feature/`

- [ ] Pelo menos 3 branches de feature foram criadas
- [ ] Todas usam o prefixo `feature/` corretamente
- [ ] Features foram mergeadas na `develop`
- [ ] Commits são descritivos e organizados

**Exemplos de branches esperadas:**
- `feature/sistema-autenticacao`
- `feature/sistema-temas`
- `feature/catalogo-cursos`
- `feature/sistema-checkout`
- `feature/painel-admin`
- `feature/paginas-institucionais`

**Como verificar:**
```bash
git log --oneline --graph --all --grep="feature"
```

---

## 🐛 3. Branches de Bugfix

### ✅ Prefixo `bugfix/`

- [ ] Pelo menos 1 branch de bugfix foi criada
- [ ] Usa o prefixo `bugfix/` corretamente
- [ ] Bugfix foi mergeado na `develop`
- [ ] Commit descreve claramente o problema corrigido

**Exemplo esperado:**
- `bugfix/correcao-tema-persistencia`

**Como verificar:**
```bash
git log --oneline --graph --all --grep="bugfix"
```

---

## 🚀 4. Branches de Release

### ✅ Prefixo `release/`

- [ ] Pelo menos 2 branches de release foram criadas
- [ ] Usam o prefixo `release/` corretamente
- [ ] Releases foram mergeadas na `main` e `develop`
- [ ] Versão foi atualizada no `package.json`

**Exemplos esperados:**
- `release/v1.0.0`
- `release/v1.1.0`

**Como verificar:**
```bash
git log --oneline --graph --all --grep="release"
```

---

## 🔥 5. Branches de Hotfix

### ✅ Prefixo `hotfix/`

- [ ] Pelo menos 1 branch de hotfix foi criada
- [ ] Usa o prefixo `hotfix/` corretamente
- [ ] Hotfix foi mergeado na `main` e `develop`
- [ ] Versão patch foi incrementada

**Exemplo esperado:**
- `hotfix/v1.0.1-correcao-critica`

**Como verificar:**
```bash
git log --oneline --graph --all --grep="hotfix"
```

---

## 🏷️ 6. Tags de Versão

### ✅ Pelo menos 2 tags criadas

- [ ] Tag `v1.0.0` existe
- [ ] Tag `v1.1.0` existe (ou outra versão)
- [ ] Tags estão na branch `main`
- [ ] Tags têm mensagens descritivas
- [ ] Tags foram enviadas para o GitHub

**Como verificar:**
```bash
git tag
git show v1.0.0
git show v1.1.0
```

**Resultado esperado:**
```
v1.0.0
v1.0.1
v1.1.0
```

**Verificar no GitHub:**
```
https://github.com/devfreitas/gs2-front/tags
```

---

## 📝 7. Qualidade dos Commits

### ✅ Commits Organizados

- [ ] Commits seguem padrão de mensagens (Conventional Commits)
- [ ] Mensagens são descritivas e claras
- [ ] Commits são atômicos (uma mudança por commit)
- [ ] Histórico é legível e organizado

**Prefixos esperados:**
- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `chore:` - Tarefas de manutenção
- `docs:` - Documentação
- `style:` - Formatação
- `refactor:` - Refatoração
- `test:` - Testes

**Como verificar:**
```bash
git log --oneline --all
```

---

## 🔄 8. Histórico de Desenvolvimento

### ✅ Histórico Limpo

- [ ] Merges usam `--no-ff` (preservam histórico de branches)
- [ ] Não há commits duplicados
- [ ] Histórico mostra claramente o fluxo de desenvolvimento
- [ ] Branches foram mergeadas corretamente

**Como verificar:**
```bash
git log --oneline --graph --all --decorate
```

**Visualização esperada:**
```
*   Merge release/v1.1.0 into main
|\  
| * chore(release): preparar release v1.1.0
|/  
*   Merge release/v1.0.0 into main
|\  
| *   Merge feature/sistema-temas into develop
| |\  
| | * feat(theme): implementar sistema de temas
```

---

## 🌐 9. Integração com GitHub

### ✅ Repositório no GitHub

- [ ] Repositório existe: https://github.com/devfreitas/gs2-front
- [ ] Todas as branches foram enviadas
- [ ] Todas as tags foram enviadas
- [ ] README.md está atualizado
- [ ] `.gitignore` está configurado corretamente

**Como verificar:**
```bash
git remote -v
git push --all origin
git push --tags origin
```

**Verificar no navegador:**
- Branches: `https://github.com/devfreitas/gs2-front/branches`
- Tags: `https://github.com/devfreitas/gs2-front/tags`
- Commits: `https://github.com/devfreitas/gs2-front/commits`
- Network: `https://github.com/devfreitas/gs2-front/network`

---

## 📊 10. Versionamento Semântico

### ✅ Semantic Versioning (SemVer)

- [ ] Versões seguem o padrão `MAJOR.MINOR.PATCH`
- [ ] Versão inicial: `v1.0.0`
- [ ] Hotfix incrementa PATCH: `v1.0.1`
- [ ] Nova feature incrementa MINOR: `v1.1.0`
- [ ] Breaking changes incrementariam MAJOR: `v2.0.0`

**Formato:** `vMAJOR.MINOR.PATCH`
- **MAJOR**: Mudanças incompatíveis na API
- **MINOR**: Novas funcionalidades (compatíveis)
- **PATCH**: Correções de bugs

**Como verificar:**
```bash
git tag
cat package.json | grep version
```

---

## 🎓 Pontuação de Avaliação

### Critérios e Pontos

| Critério | Peso | Status |
|----------|------|--------|
| Estrutura de branches (main, develop) | 10% | [ ] |
| Features com prefixo correto | 20% | [ ] |
| Bugfix com prefixo correto | 10% | [ ] |
| Releases com prefixo correto | 15% | [ ] |
| Hotfix com prefixo correto | 10% | [ ] |
| Pelo menos 2 tags criadas | 15% | [ ] |
| Qualidade dos commits | 10% | [ ] |
| Histórico organizado | 5% | [ ] |
| Integração com GitHub | 5% | [ ] |

**Total:** 100%

---

## 🔍 Comandos de Verificação Rápida

Execute estes comandos para verificar tudo de uma vez:

```bash
# Ver todas as branches
git branch -a

# Ver todas as tags
git tag -l

# Ver histórico gráfico
git log --oneline --graph --all --decorate -20

# Ver commits por tipo
git log --oneline --all --grep="feat"
git log --oneline --all --grep="fix"
git log --oneline --all --grep="chore"

# Verificar remote
git remote -v

# Ver status atual
git status

# Ver última tag
git describe --tags --abbrev=0

# Ver informações de uma tag específica
git show v1.0.0
```

---

## 📸 Evidências para Documentação

### Screenshots Recomendados

1. **GitHub - Branches**
   - Captura da página de branches mostrando main, develop e features

2. **GitHub - Tags**
   - Captura da página de tags mostrando v1.0.0, v1.1.0, etc.

3. **GitHub - Network Graph**
   - Captura do gráfico de network mostrando o fluxo do GitFlow

4. **Terminal - Git Log**
   - Captura do comando `git log --graph --all --decorate`

5. **Terminal - Git Tags**
   - Captura do comando `git tag` e `git show v1.0.0`

---

## ✅ Checklist Final

Antes de considerar o projeto completo, verifique:

- [ ] ✅ Repositório inicializado com Git
- [ ] ✅ Branch `main` criada e com código de produção
- [ ] ✅ Branch `develop` criada e com código de desenvolvimento
- [ ] ✅ Pelo menos 3 features criadas com prefixo `feature/`
- [ ] ✅ Pelo menos 1 bugfix criado com prefixo `bugfix/`
- [ ] ✅ Pelo menos 1 hotfix criado com prefixo `hotfix/`
- [ ] ✅ Pelo menos 2 releases criadas com prefixo `release/`
- [ ] ✅ Pelo menos 2 tags criadas (v1.0.0, v1.1.0)
- [ ] ✅ Commits organizados e descritivos
- [ ] ✅ Histórico limpo e legível
- [ ] ✅ Repositório conectado ao GitHub
- [ ] ✅ Todas as branches enviadas para o remoto
- [ ] ✅ Todas as tags enviadas para o remoto
- [ ] ✅ README.md atualizado
- [ ] ✅ `.gitignore` configurado

---

## 🎯 Resultado Esperado

Ao final, seu repositório deve ter:

```
Branches:
├── main (produção)
│   ├── v1.0.0 (tag)
│   ├── v1.0.1 (tag)
│   └── v1.1.0 (tag)
│
└── develop (desenvolvimento)
    ├── feature/sistema-autenticacao
    ├── feature/sistema-temas
    ├── feature/catalogo-cursos
    ├── feature/sistema-checkout
    ├── feature/painel-admin
    ├── feature/paginas-institucionais
    ├── bugfix/correcao-tema-persistencia
    ├── release/v1.0.0
    ├── release/v1.1.0
    └── hotfix/v1.0.1-correcao-critica
```

---

## 📚 Recursos Adicionais

- [Git Flow Cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)

---

## 📞 Suporte

Se tiver dúvidas sobre a implementação do GitFlow:

1. Consulte o arquivo `GUIA_GITFLOW.md`
2. Execute o script `setup-gitflow.ps1` ou `setup-gitflow.bat`
3. Verifique a documentação oficial do Git

---

**Boa sorte com a avaliação! 🚀**
