# Como Usar os Scripts de Commit

Este projeto possui 3 scripts .bat para facilitar o trabalho com Git e GitFlow.

## 📝 Scripts Disponíveis

### 1. `commit-rapido.bat` - Commit Rápido
**Uso recomendado**: Para commits simples e rápidos

**Como usar**:
1. Faça suas alterações nos arquivos
2. Execute: `commit-rapido.bat`
3. Escolha o autor (Leonardo, João ou Rafael)
4. Escolha o tipo de commit (feat, fix, docs, etc)
5. Digite a descrição do commit
6. Opcionalmente, faça push para o GitHub

**Exemplo**:
```
> commit-rapido.bat
Autor: [2] João Veronesi
Tipo: [1] feat
Descrição: adicionar validação de email
Push? S
```

---

### 2. `fazer-commits.bat` - Commits com Menu
**Uso recomendado**: Para fazer múltiplos commits com controle

**Funcionalidades**:
- Escolher autor do commit
- Ver arquivos modificados antes de commitar
- Fazer múltiplos commits em sequência
- Ver estatísticas de commits
- Restaurar configuração git original

**Como usar**:
1. Execute: `fazer-commits.bat`
2. Escolha uma opção do menu:
   - `[1-3]` - Escolher autor e fazer commit
   - `[4]` - Restaurar configuração original
   - `[5]` - Ver estatísticas
   - `[0]` - Sair

**Exemplo de uso**:
```
> fazer-commits.bat
[1] Leonardo Sabbatini
[2] João Veronesi
[3] Rafael Freitas

Escolha: 1
Mensagem: docs: atualizar README
✓ Commit criado!

Fazer outro commit? S
```

---

### 3. `gitflow-commits.bat` - GitFlow Completo
**Uso recomendado**: Para trabalhar com GitFlow (features, releases, etc)

**Funcionalidades**:
- ✅ Criar e commitar em features
- ✅ Criar e commitar em bugfixes
- ✅ Fazer merge de branches
- ✅ Criar releases
- ✅ Criar tags
- ✅ Push para GitHub (branches e tags)
- ✅ Ver estatísticas completas

**Como usar**:
1. Execute: `gitflow-commits.bat`
2. Escolha uma opção do menu

**Exemplos de uso**:

#### Criar uma nova feature:
```
> gitflow-commits.bat
[1] Criar e fazer commit em feature

Nome da feature: validacao-formulario
Autor: [2] João Veronesi
Tipo: feat
Descrição: adicionar validação de CPF
```

#### Criar uma release:
```
> gitflow-commits.bat
[5] Criar release

Versão: 1.2.0
✓ Release 1.2.0 criada!
```

#### Fazer push completo:
```
> gitflow-commits.bat
[7] Push para GitHub
[4] Push completo (branches + tags)
✓ Push realizado!
```

---

## 🎯 Quando Usar Cada Script

| Situação | Script Recomendado |
|----------|-------------------|
| Commit rápido de alterações | `commit-rapido.bat` |
| Múltiplos commits seguidos | `fazer-commits.bat` |
| Criar nova feature | `gitflow-commits.bat` |
| Criar release/tag | `gitflow-commits.bat` |
| Fazer merge de branches | `gitflow-commits.bat` |
| Ver estatísticas | Qualquer um (opção no menu) |

---

## 👥 Autores Configurados

Os scripts já vêm configurados com os 3 membros da equipe:

1. **Leonardo Sabbatini**
   - Email: leonardoherrerasabbatini@gmail.com

2. **João Veronesi**
   - Email: jvveronesi30@gmail.com

3. **Rafael Freitas**
   - Email: freitassrafa2006@gmail.com

---

## 📋 Tipos de Commit

Todos os scripts seguem o padrão Conventional Commits:

- `feat`: Nova funcionalidade
- `fix`: Correção de bug
- `docs`: Documentação
- `style`: Formatação/estilo (sem mudança de código)
- `refactor`: Refatoração de código
- `test`: Adição ou correção de testes
- `chore`: Manutenção/tarefas gerais

**Exemplos**:
```
feat: adicionar componente de loading
fix: corrigir validação de email
docs: atualizar README com instruções
style: formatar código com prettier
refactor: reorganizar estrutura de pastas
test: adicionar testes unitários
chore: atualizar dependências
```

---

## 🚀 Fluxo de Trabalho Recomendado

### Para Features:
1. Execute `gitflow-commits.bat`
2. Escolha `[1] Criar e fazer commit em feature`
3. Digite o nome da feature
4. Escolha o autor
5. Faça o commit
6. Quando terminar, faça merge para develop

### Para Releases:
1. Execute `gitflow-commits.bat`
2. Escolha `[5] Criar release`
3. Digite a versão (ex: 1.0.0)
4. Faça merge para main
5. Crie a tag
6. Faça merge de volta para develop

### Para Commits Simples:
1. Execute `commit-rapido.bat`
2. Siga as instruções na tela

---

## ⚠️ Observações Importantes

1. **Configuração Git**: Os scripts salvam e restauram sua configuração git original automaticamente

2. **Encoding**: Os scripts usam UTF-8 (chcp 65001) para suportar caracteres especiais

3. **Push Automático**: Sempre confirme antes de fazer push para não enviar código não testado

4. **Branches**: Certifique-se de estar na branch correta antes de fazer commits

5. **Conflitos**: Em caso de conflitos no merge, resolva manualmente e complete o merge

---

## 🔧 Troubleshooting

### Erro: "git não é reconhecido"
- Instale o Git: https://git-scm.com/download/win
- Adicione o Git ao PATH do Windows

### Erro: "Nenhuma mudança para commitar"
- Verifique se você fez alterações nos arquivos
- Use `git status` para ver o estado atual

### Erro no Push
- Verifique sua conexão com internet
- Confirme que tem permissão no repositório
- Verifique se fez login no Git: `git config --global user.name`

---

## 📞 Suporte

Em caso de dúvidas, consulte a documentação do Git:
- https://git-scm.com/doc
- https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow

---

**Desenvolvido para o projeto SkillHub - Global Solution 2024**
