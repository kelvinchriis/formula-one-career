# Formula-One-Career

## Visão Geral do Projeto
Formula-One-Career é uma aplicação web interativa e imersiva que se dedica a unir fãs da Fórmula 1 de todo o mundo. Projetada para ser não apenas uma fonte de informações atualizadas sobre corridas e campeonatos, mas também uma comunidade online, permite aos usuários criar perfis personalizados, compartilhar seus gostos e conectar-se com outros entusiastas da F1. O site oferece uma experiência única para os fãs, permitindo-lhes acompanhar de perto seus pilotos e escuderias favoritas, além de participar de um ranking de popularidade dentro da plataforma.

## Funcionalidades Principais

- **Cadastro e Login de Usuário:** Permite que os visitantes se tornem membros da comunidade, acessando conteúdos exclusivos e funcionalidades personalizadas.
- **Informações sobre Corridas e Campeonatos:** Acesso a detalhes atualizados sobre as últimas corridas, incluindo datas, locais, resultados e classificações no campeonato.
- **Perfis Personalizados:** Os usuários podem criar perfis destacando seus pilotos e escuderias favoritos, além de compartilhar informações pessoais com a comunidade.
- **Conexão entre Fãs:** Uma seção dedicada para visualizar e interagir com os perfis de outros usuários, incentivando a formação de uma comunidade ativa e engajada.
- **Ranking de Popularidade:** Uma tabela de classificação interna mostra os pilotos e escuderias favoritos com base nas preferências dos usuários, criando um ranking dinâmico de popularidade.

## Tecnologias Utilizadas

### Frontend
- **HTML e CSS:** Utilizados para estruturar e estilizar a página web, proporcionando uma interface atraente e responsiva aos usuários.
- **JavaScript:** Empregado para adicionar interatividade ao site. Através do uso de vetores, estruturas de repetição, condições e operadores lógicos, o JavaScript enriquece a experiência do usuário, permitindo funcionalidades dinâmicas como atualizações de conteúdo em tempo real e interações personalizadas.

### Backend
- **Node.js:** Escolhido como o ambiente de execução do lado do servidor devido à sua eficiência e compatibilidade com JavaScript, facilitando a integração entre o frontend e o backend. Node.js é usado para criar servidores web rápidos e escaláveis, lidar com as solicitações dos usuários, e interagir com o banco de dados MySQL.
- **API Web:** Uma API personalizada foi desenvolvida para conectar o frontend ao banco de dados, permitindo a troca segura e eficiente de informações entre o cliente e o servidor. Essa API é fundamental para realizar operações como cadastro e login de usuários, atualização de perfis, e acesso às informações atualizadas de corridas e campeonatos.

### Banco de Dados
- **MySQL:** Escolhido por sua robustez e confiabilidade, o MySQL armazena todas as informações do site, incluindo dados dos usuários, perfis, preferências, e informações atualizadas sobre corridas e campeonatos. A escolha deste sistema de gerenciamento de banco de dados relacional assegura a integridade dos dados e facilita consultas complexas.

## Objetivos do Projeto

- Oferecer uma plataforma unificada para fãs da Fórmula 1 se manterem atualizados sobre o mundo das corridas e interagirem entre si.
- Criar uma comunidade online vibrante onde os usuários possam expressar seus interesses e paixões pela Fórmula 1.
- Fornecer um espaço onde os fãs podem acompanhar e celebrar o desempenho de pilotos e equipes ao longo da temporada.

## Conclusão
Formula-One-Career representa um avanço significativo para a comunidade de fãs da Fórmula 1, oferecendo uma plataforma rica em recursos para informação, interação e celebração. Este projeto não só aproxima os fãs de seus ídolos e equipes favoritas, mas também estabelece um novo espaço para compartilhar e celebrar as emoções únicas que somente a Fórmula 1 pode oferecer.


# Como usar

1. Clone este repositório em sua máquina.


1. Crie, no Banco de Dados, as tabelas necessárias para o funcionamento deste projeto.
- Siga as instruções no arquivo para criar o banco de dados **<a href="https://github.com/kelvinchriis/formula-one-career/blob/main/modelagem_bd/script_modelagem.sql">/site/src/database/script_modelagem.sql</a>**
- Logo após criar todas tabelas, para inserir os dados, siga as intruções **<a href="https://github.com/kelvinchriis/formula-one-career/blob/main/modelagem_bd/script_insert.sql">/site/src/database/script_insert.sql</a>**


3. Acesse o arquivo **/site/app.js** e parametrize o ambiente.
- Se você estiver utilizando o Ambiente de Produção (SQL Server na nuvem Azure, remoto), comente a linha 1 e deixe habilitada a linha 2 onde está o valor **process.env.AMBIENTE_PROCESSO = "producao";**
- Se você estiver utilizando o Ambiente de Desenvolvimento (MySQL Workbench, local), comente a linha 2 e deixe habilitada a linha 1 onde está o valor **process.env.AMBIENTE_PROCESSO = "desenvolvimento";**

4. Adicione as credenciais de Banco de Dados no arquivo **/site/src/database/config.js**, seguindo as instruções neste.

5. Acesse o local do diretório **/site** presente neste repositório no seu terminal (GitBash ou VSCode) e execute os comandos abaixo:

```
npm i
``` 
_O comando acima irá instalar as bibliotecas necessárias para o funcionamento do projeto. As bibliotecas a serem instaladas estão listadas no arquivo **package.json** então é muito importante que este não seja alterado. Será criada uma nova pasta/diretório chamado **node_modules** quando o comando for finalizado, que é onde as bibliotecas estão localizadas. Não altere a pasta/diretório._

```
npm start
``` 

_O comando acima irá iniciar seu projeto e efetuar os comandos de acordo com a sua parametrização feita nos passos anteriores._

6. Para "ver" seu projeto funcionando, acesse em seu navegador o caminho **informado no terminal**.

7. Caso queira parar a execução, tecle **CTRL+C** no terminal em que o projeto está rodando.
