# 🚀 Guia Rápido - Scripts de Commit

## Para Iniciantes

### 1️⃣ Commit Mais Simples Possível

```cmd
commit.bat
```

1. Escolhe o número do autor (1, 2 ou 3)
2. Digita a mensagem
3. Pronto! ✅

---

### 2️⃣ Commit com Tipo (feat, fix, docs)

```cmd
commit-rapido.bat
```

1. Escolhe o autor
2. Escolhe o tipo (feat, fix, docs, etc)
3. Digita a descrição
4. Pronto! ✅

---

### 3️⃣ Criar Nova Feature

```cmd
gitflow-commits.bat
```

1. Opção `[1]` - Criar feature
2. Nome da feature (ex: login-social)
3. Escolhe o autor
4. Faz o commit
5. Pronto! ✅

---

## Comandos Mais Usados

| O que fazer | Como fazer |
|-------------|------------|
| Commit rápido | `commit.bat` |
| Commit com padrão | `commit-rapido.bat` |
| Nova feature | `gitflow-commits.bat` → `[1]` |
| Ver estatísticas | Qualquer script → Ver stats |
| Fazer push | `gitflow-commits.bat` → `[7]` |
| Criar release | `gitflow-commits.bat` → `[5]` |

---

## Autores

Sempre que pedir para escolher autor:

- **[1]** = Leonardo Sabbatini
- **[2]** = João Veronesi
- **[3]** = Rafael Freitas

---

## Tipos de Commit

Quando pedir o tipo:

- **feat** = Nova funcionalidade
- **fix** = Correção de bug
- **docs** = Documentação
- **style** = Formatação
- **refactor** = Refatoração
- **test** = Testes
- **chore** = Manutenção

---

## Exemplos Rápidos

### Exemplo 1: Você alterou o README

```cmd
> commit.bat
Autor: 1
Mensagem: docs: atualizar README
Push? S
```

### Exemplo 2: Você criou um novo componente

```cmd
> commit-rapido.bat
Autor: 2
Tipo: 1 (feat)
Descrição: criar componente de modal
Push? S
```

### Exemplo 3: Você vai criar uma feature

```cmd
> gitflow-commits.bat
Opção: 1
Nome: sistema-pagamento
Autor: 3
Tipo: feat
Descrição: adicionar integração com Stripe
```

---

## ⚠️ Importante

1. **Sempre teste** antes de commitar
2. **Use mensagens claras** nos commits
3. **Faça push** regularmente
4. **Não commite** senhas ou tokens

---

## 🆘 Problemas Comuns

### "Nenhuma mudança para commitar"
→ Você não alterou nenhum arquivo

### "git não é reconhecido"
→ Instale o Git: https://git-scm.com/download/win

### "Erro ao fazer push"
→ Verifique sua internet e permissões no GitHub

---

## 📖 Mais Informações

- **Guia completo**: [COMO_USAR_SCRIPTS.md](COMO_USAR_SCRIPTS.md)
- **Exemplos detalhados**: [EXEMPLOS_USO.md](EXEMPLOS_USO.md)
- **GitFlow**: [GITFLOW_RESUMO.md](GITFLOW_RESUMO.md)

---

**Dica**: Salve este arquivo nos favoritos! 📌
