# FIIM (Fundos de Investimento Ilimitado para MEIs)

## Visão geral
### Problema
Os problemas estudados e analisados neste projeto são principalmente relacionados a dificuldade e complexidade que pequenos empresários possuem em administrar suas finanças e seus negócios. A gestão financeira é o ponto central de um negócio e se tem a necessidade de um sistema centralizador para facilitar a visualização de gastos e recebimentos.  
es. O sistema contará com:
- Dashboard interativo inteligente em tempo real, como despesas, lucros e receitas
- Categorização automática por tipo de gasto
- Controle de contas a pagar e receber, podendo ser filtrado por status (Pago, pendente ou atrasado)

### Usuários e clientes
As pessoas que podem usar o sistema são:
- Microempreendedor individual (MEI)
    > Cabeleireiros, eletricistas, costureiras, entregadores
- Autônomos e Freelan
### Solução
A partir do exposto, surgiu a ideia de criar um software como serviço (SaaS) que fará toda a gestão necessária para pequenos empreendedores
    > Designers, desenvolvedores de software
- Pequenas empresas e lojas locais
    > Mercadinhos, oficinas, lojas de roupas, pet shops

### Recursos principais
Principais recursos do sistema:
- Dashboard financeiro
- Controle de despesas e receitas
- Controle de contas a pagar e receber
- Aplicativo Mobile para Android e iOS
- Criptografia dos dados

### Canais
Meio de utilização
- Aplicativo Mobile para Android e iOS com acesso rápido ao dashboard, registro de despesas e notificações de vencimento
- Plataforma Web com site e aplicação
- Chatbot / Assistente virtual
### Custo e receita
- Não definido

## Etapa 1

### Objetivo do Sistema 
Desenvolver um software intuitivo e acessível para auxiliar Microempreendedores Individuais (MEIs) brasileiros na gestão de suas finanças, obrigações fiscais e organização contábil, promovendo saúde financeira e conformidade com a legislação vigente.

### Usuários principais (público-alvo)
- Microempreendedores Individuais (MEIs)  
- Profissionais autônomos que se enquadram como MEI.
- Pequenos negócios em fase inicial que ainda operam com gestão financeira manual ou informal.

### Principais funcionalidades
- Gestão Financeira:
    - Controle de entradas e saídas (receitas e despesas).
    - Painel com saldo mensal, lucro, e fluxo de caixa.
    - Relatórios financeiros mensais e anuais.

- Agenda de Obrigações:
    - Lembretes automáticos de pagamento do DAS.
    - Calendário de obrigações fiscais e prazos legais.  

- Relatórios Mensai/Anual:
    - Dahsbords interativos para facil entndimento.

- Educação Financeira:
    - Dicas e conteúdos sobre finanças, impostos e gestão de pequenos negócios.

### Problema que será resolvido
Muitos MEIs têm dificuldades em:
- Controlar suas finanças de forma organizada.
- Entender e cumprir as obrigações fiscais.
- Ter uma visão clara da saúde financeira do negócio.

O software visa resolver essa desorganização, reduzindo riscos de inadimplência fiscal e melhorando a gestão financeira.

### Recursos desejados
- Integração bancária (open finance) para importar movimentações automaticamente(Possivel alteração).
- Notificações por e-mail ou celular.
- Backup em nuvem e criptografia de dados.
- Suporte técnico.
- Multiusuário (para contador ou sócio visualizar dados).
- Aplicação responsiva, com modo escuro e acessibilidade.

### Plataforma (Web? Mobile? Desktop?)
- **App Mobile** (Android/iOS), especialmente para uso offline e notificações
- **Web** para maior acessibilidade e baixo custo de desenvolvimento inicial.

### Prazos e expectativas
_Fase 1 – MVP (3 meses):_
- Cadastro e login de usuários
- Lançamento manual de receitas/despesas
- Geração de relatórios básicos
- Sistema de notificação
- Dashboard simples

_Fase 2 – Versão Produção (6 meses):_
- Relatórios completos
- Interface aprimorada
- App Mobile
- Suporte multilíngue (Português, Inglês)
- Área News

## Requisitos

### Funcionais
1. **Cadastro e autenticação de usuários**
    - O sistema deve permitir que empreendedores e MEIs possam realizar o cadastro com dados pessoais e do negócio
    - O sistema deve validar o CNPJ e situação cadastral do MEI na Receita Federal
    - O sistema deve permitir autenticação via login e senha, além de oferecer autenticação por dois fatores (2FA)
    - O sistema deve permitir a recuperação de senha via e-mail
2. **Perfil do empreendedor**
    - O sistema deve permitir ao usuário completar e editar seu perfil com dados como: área de atuação, tempo de mercado, faturamento médio, etc
    - O sistema deve exibir o status do cadastro e de eventuais solicitações feitas ao fundo
    - O sistema deve permitir o upload de documentos necessários para análise de crédito ou investimento (ex: comprovante de endereço, declaração de faturamento, etc.)
3. **Análise e aprovação**
    - O sistema deve permitir que analistas do fundo visualizem e filtrem solicitações por status, valor e perfil do solicitante
    - O sistema deve permitir análise automatizada com base em critérios definidos (ex: score de crédito, CNAE, tempo de atividade, etc.)
    - O sistema deve permitir comentários internos, atribuição de analistas e registro de decisões

### Não funcionais
1. **Performance**
    - O sistema deve responder às solicitações do usuário em no máximo 3 segundos na maioria das operações
    - O sistema deve suportar pelo menos 5.000 usuários simultâneos sem degradação significativa da performance
2. **Segurança**
    - O sistema deve criptografar todas as informações sensíveis armazenadas (dados pessoais, financeiros, documentos)
    - O sistema deve estar em conformidade com a LGPD (Lei Geral de Proteção de Dados) para proteção de dados pessoais dos usuários
    - O sistema deve realizar backups automáticos diários e garantir a recuperação dos dados em até 24 horas após um incidente
3. **Usabilidade**
    - O sistema deve ser responsivo e funcionar corretamente em dispositivos móveis, tablets e desktops
    - A interface deve ser intuitiva, com navegação clara, para atender usuários com baixa familiaridade tecnológica
    - O sistema deve oferecer suporte em português do Brasil, com linguagem clara e acessível

## Casos de uso
### Cadastro e autenticação de usuário
- **Ator principal**: Empreendedor
- **Pré-condições**: O empreendedor está cadastrado e com as credenciais autênticadas
- **Fluxo principal**:
    1. O empreendedor preenche os campos de email, senha e confirmação de senha.
    2. O empreendedor realiza o cadastro e realiza a confirmação de email
    3. O sistema armazena as informações do cliente e gera um identificador único
    4. O empreendendor faz o login com sucesso
- **Fluxo alternativo**:
    - No caso 1, se o cliente deixar campos obrigatórios em branco (email e senha), o sistema exibe mensagem de erro e impede o cadastro

### Perfil do empreendedor
- **Ator principal**: Empreendedor
- **Pré-condições**: O empreendedor acessa o próprio perfil e consegue visualizar os detalhes da conta
- **Fluxo principal**:
    1. O empreendedor consegue completar os dados do perfil, como telefone, nome da empresa e documentos necessários
    2. O empreendedor consegue ver e acompanhar solicitações feitas ao fundo, também como ver seu status na Receita Federal
    3. O empreendedor consegue fazer upload dos arquivos e documentos
- **Fluxo alternativo**:
    - No caso 1, se o cliente enviar documentos inválidos, o sistema irá verificar e retornar uma mensagem de erro e impedir o envio dos documentos
    - No caso 3, se o cliente fazer upload de arquivos maiores que 10 MB ou tipos de arquivos inválidos, o sistema irá retornar uma mensagem de erro e impedir o upload

### Análise e aprovação
- **Ator principal**: Analistas
- **Pré-condições**: Os analistas conseguem visualizar e filtrar solicitações por status, valor e perfil do solicitante.
- **Fluxo principal**: 
    1. Os analistas acessam e avaliam as solicitações
    2. O sistema pré-seleciona solicitações que não atendem alguns critérios pré-definidos e os recusa automaticamente
    3. Os analistas fazem comentários internos em solicitações detalhando informações relevantes
    4. O sistema salva no banco de dados os registros de todas as solicitações
  ## Equipe

| Cargo                  | Nome               | Responsabilidades Principais                             
|------------------------|--------------------|--------------------------------------------------------------------------------------------------
| **Scrum Master (SM)**       | Seiji Andre        | Facilitar o processo Scrum, remover impedimentos e apoiar a equipe no desenvolvimento ágil. 
| **Product Owner (PO)** | Rodolfo Alves      | Gerenciar o backlog, definir prioridades e garantir que o produto atenda às necessidades do cliente. 
| **Gestor de Projetos** | Gabriel Yudi | Planejar e controlar o andamento do projeto, gerenciar prazos e recursos. 
