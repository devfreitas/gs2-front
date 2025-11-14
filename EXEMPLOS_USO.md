# Exemplos Práticos de Uso dos Scripts

## 🎯 Cenários Comuns

### Cenário 1: Você fez uma alteração simples e quer commitar rápido

**Use**: `commit.bat`

```cmd
> commit.bat

Arquivos modificados:
M  src/App.tsx

[1] Leonardo  [2] João  [3] Rafael
Autor: 2

Mensagem: fix: corrigir rota de login

✓ Commit criado!

Push? (S/N): S
✓ Push feito!
```

---

### Cenário 2: Você quer fazer um commit seguindo o padrão Conventional Commits

**Use**: `commit-rapido.bat`

```cmd
> commit-rapido.bat

Arquivos modificados:
M  README.md

Autor do commit:
[1] Leonardo Sabbatini
[2] João Veronesi
[3] Rafael Freitas

Escolha (1-3): 1
✓ Leonardo Sabbatini

Tipo de commit:
[1] feat - Nova funcionalidade
[2] fix - Correção de bug
[3] docs - Documentação

Escolha (1-7): 3

Descrição do commit: atualizar documentação de instalação

✓ Commit criado com sucesso!

Fazer push para GitHub? (S/N): S
✓ Push realizado!
```

---

### Cenário 3: Você vai desenvolver uma nova funcionalidade

**Use**: `gitflow-commits.bat`

```cmd
> gitflow-commits.bat

========================================
    GITFLOW + COMMITS - SKILLHUB
========================================

[1] Criar e fazer commit em feature
[2] Criar e fazer commit em bugfix
[3] Fazer commit na branch atual
[4] Merge de branch
[5] Criar release
[6] Criar tag
[7] Push para GitHub
[8] Ver estatísticas
[9] Restaurar configuração git
[0] Sair

Digite a opção: 1

=== CRIAR FEATURE ===

Nome da feature (ex: nova-funcionalidade): sistema-notificacoes

✓ Branch feature/sistema-notificacoes criada!

Escolha o autor do commit:
[1] Leonardo Sabbatini
[2] João Veronesi
[3] Rafael Freitas

Digite a opção: 3
✓ Autor: Rafael Freitas

=== CRIAR COMMIT ===

Arquivos modificados:
A  src/components/Notification.tsx

Adicionar todos os arquivos? (S/N): S
✓ Todos os arquivos adicionados

Tipos de commit:
  feat: Nova funcionalidade
  fix: Correção de bug
  docs: Documentação

Tipo do commit (feat/fix/docs/etc): feat
Descrição do commit: criar componente de notificação

✓ Commit criado com sucesso!

Fazer outro commit? (S/N): N
Voltar para develop? (S/N): N
```

---

### Cenário 4: Você precisa fazer vários commits seguidos

**Use**: `fazer-commits.bat`

```cmd
> fazer-commits.bat

========================================
    SCRIPT DE COMMITS - SKILLHUB
========================================

Escolha o autor do commit:

[1] Leonardo Sabbatini
[2] João Veronesi
[3] Rafael Freitas
[4] Restaurar configuração original
[5] Ver estatísticas de commits
[0] Sair

Digite a opção: 2

✓ Autor configurado: João Veronesi

Arquivos modificados:
M  src/utils/validators.ts

Digite a mensagem do commit: feat: adicionar validação de telefone

✓ Commit criado com sucesso!

Fazer outro commit? (S/N): S

[Volta ao menu para escolher autor novamente]

Digite a opção: 2

Arquivos modificados:
M  src/utils/validators.ts

Digite a mensagem do commit: test: adicionar testes para validadores

✓ Commit criado com sucesso!

Fazer outro commit? (S/N): N
```

---

### Cenário 5: Você terminou uma feature e quer fazer merge

**Use**: `gitflow-commits.bat`

```cmd
> gitflow-commits.bat

[4] Merge de branch

=== MERGE DE BRANCH ===

Branches disponíveis:
* feature/sistema-notificacoes
  develop
  main

Branch de origem (ex: feature/nova-funcionalidade): feature/sistema-notificacoes
Branch de destino (ex: develop): develop

✓ Merge realizado com sucesso!
```

---

### Cenário 6: Você vai criar uma nova versão (release)

**Use**: `gitflow-commits.bat`

```cmd
> gitflow-commits.bat

[5] Criar release

=== CRIAR RELEASE ===

Versão da release (ex: 1.0.0): 1.2.0

Atualizando package.json...

✓ Release 1.2.0 criada!

Próximos passos:
1. Fazer merge para main: git checkout main && git merge --no-ff release/1.2.0
2. Criar tag: git tag -a v1.2.0 -m "Release version 1.2.0"
3. Fazer merge para develop: git checkout develop && git merge --no-ff release/1.2.0

[Depois use a opção 4 para fazer os merges]
[E a opção 6 para criar a tag]
```

---

### Cenário 7: Você quer ver as estatísticas do projeto

**Use qualquer script** e escolha a opção de estatísticas

```cmd
> fazer-commits.bat

[5] Ver estatísticas de commits

========================================
    ESTATÍSTICAS DE COMMITS
========================================

Commits por autor (sem merges):
     5  João Veronesi
     5  Leonardo Sabbatini
     5  Rafael Freitas

Tags criadas:
v1.0.0
v1.0.1
v1.1.0

Branch atual:
develop
```

---

### Cenário 8: Você quer enviar tudo para o GitHub

**Use**: `gitflow-commits.bat`

```cmd
> gitflow-commits.bat

[7] Push para GitHub

=== PUSH PARA GITHUB ===

[1] Push da branch atual
[2] Push de todas as branches
[3] Push de todas as tags
[4] Push completo (branches + tags)
[0] Voltar

Digite a opção: 4

✓ Push realizado!
```

---

## 💡 Dicas Rápidas

### Qual script usar?

| Situação | Script |
|----------|--------|
| Commit super rápido | `commit.bat` |
| Commit com padrão | `commit-rapido.bat` |
| Múltiplos commits | `fazer-commits.bat` |
| Trabalhar com GitFlow | `gitflow-commits.bat` |

### Atalhos

Você pode criar atalhos no Windows:
1. Clique com botão direito no script
2. "Criar atalho"
3. Mova o atalho para a área de trabalho
4. Renomeie para algo como "Commit Rápido"

### Linha de Comando

Você também pode executar direto do terminal:
```cmd
# Commit rápido
commit.bat

# GitFlow
gitflow-commits.bat
```

---

## ⚠️ Cuidados

1. **Sempre revise** os arquivos antes de commitar
2. **Teste o código** antes de fazer push
3. **Use mensagens descritivas** nos commits
4. **Não commite** arquivos sensíveis (senhas, tokens, etc)
5. **Faça pull** antes de começar a trabalhar

---

## 🔄 Fluxo de Trabalho Ideal

### Para uma nova feature:

1. **Criar feature**
   ```cmd
   gitflow-commits.bat → [1] Criar feature
   ```

2. **Fazer commits** (quantos precisar)
   ```cmd
   commit.bat
   ```

3. **Fazer merge para develop**
   ```cmd
   gitflow-commits.bat → [4] Merge
   ```

4. **Push**
   ```cmd
   gitflow-commits.bat → [7] Push
   ```

### Para uma release:

1. **Criar release**
   ```cmd
   gitflow-commits.bat → [5] Criar release
   ```

2. **Merge para main**
   ```cmd
   gitflow-commits.bat → [4] Merge
   ```

3. **Criar tag**
   ```cmd
   gitflow-commits.bat → [6] Criar tag
   ```

4. **Merge de volta para develop**
   ```cmd
   gitflow-commits.bat → [4] Merge
   ```

5. **Push completo**
   ```cmd
   gitflow-commits.bat → [7] Push → [4] Completo
   ```

---

## 📚 Recursos Adicionais

- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitFlow Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
- [Git Documentation](https://git-scm.com/doc)

---

**Desenvolvido para facilitar o trabalho da equipe SkillHub** 🚀
