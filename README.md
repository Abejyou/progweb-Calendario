# CalendarioProgWeb

<!--- Exemplos de badges. Acesse https://shields.io para outras opções. Você pode querer incluir informações de dependencias, build, testes, licença, etc. --->
![GitHub repo size](https://img.shields.io/github/repo-size/hsborges/progweb-template)
![GitHub contributors](https://img.shields.io/github/contributors/hsborges/progweb-template)

CalendarioProgWeb é uma aplicação web que tem por objetivo facilitar a organização da agenda de compromissos e rotina do usuário, permitindo assinalar diversos eventos durante o decorrer do dia. Dentre outras funcionalidades.

 
## Pré-requisitos

Antes de iniciar, certifique-se de cumprir os seguintes requisitos:
  - É necessário que o usuário possua acesso à Internet
  - É necessário que o usuário possua acesso a  um Browser Moderno
  - É necessário que o usuário leia e tenha consentimento dos termos de uso.


## Como executar

1º - Acessar a pasta na qual o arquivo foi clonado, pelo cmd.
2º - Rodar os seguintes códigos para executar o programa: "npm run install".
3º - Após terminar de instalar, executar o seguinte código: "npm run Start".
4º - Após execução, o calendário estará apto a ser utilizado.
5º - Acesse a URL do produto (https://localhost:4200).
6º - Após isso, cadastre-se como usuário, na aba 'Cadastrar' e indique seu nome, e-mail e senha.
7º - Uma vez cadastrado, o usuário deverá logar-se na página 'Login' e assim, terá acesso a todas as funcionalidades do programa (ao qual, o nível do usuário permite).


## Usando CalendarioProgWeb

Para usar CalendarioProgWeb, siga os seguintes passos (exemplos):

* Abra o navegador e digite o seguinte endereço: `http://localhost/....`
* Ao abrir a aplicação você deve:
* Entrar com usuário e senha para conectar no sistema e ver a própria agenda.
* Clique em inserir um novo evento e configure escolhendo o nome, data, hora, duração e local.
* Um evento pode ser excluído ou alterado de acordo com a necessidade do usuário.
<!-- * Recuperação de Senha/E-mail - 
 Caso o Usuário não consiga efetuar acesso utilizando seu e-mail e senha, por não se lembrar de qualquer uma das credenciais, é possível  efetuar reaver o cadastro de qualquer uma das das duas informações utilizando-se da credencial que consegue se lembrar assim como o  CPF e a Data de Aniversário do Usuário. Caso preenchida essas três informações corretamente, o usuário poderá cadastrar uma nova credencial que perdeu o acesso. -->

* Calendário - 
 Ao efetuar acesso com suas credenciais o usuário estará logado, e agora poderá ter acesso ao calendário contendo os itens de sua agenda, O mês que o calendário abre inicialmente é o mês corrente em que o usuário se encontra. 
 A exibição dos dias será feita  através de “Cards”, contendo o dia do mês em destaque, o da semana. Também está assinalado a quantidade de compromissos que existem naquele dia e a outras informações importantes (como por exemplo se é feriado e etc). Ao clicar em qualquer um dos cards o usuário é encaminhado para a tela de “Dia” daquele usuário.

* Dia - 
 A tela de informações do dia, exibe ao usuário primeiramente a data escolhida ao usuário, em seguida ela exibe outras informações de menos destaque como o dia da semana, se é feriado e etc.
 Após isso ela exibe uma lista de eventos que o usuário tem cadastrado para aquele dia, contendo a hora inicial e final. Todos os itens da lista podem ser clicados para o usuário ser encaminhado para a tela de detalhes do evento.
 Por fim é exibida ao usuário uma lista de convites para eventos que foram encaminhados ao usuário, onde ele poderá confirmar ou rejeitar a presença em tal. Também é possível clicar sobre o item da lista, onde o usuário será encaminhado para a tela de detalhes do evento. Ainda assim, mesmo que o Evento esteja com a situação de rejeitado o usuário ainda consegue visualizar o convite (e consequentemente o evento) afim de mudar a opção da situação do evento.

* Evento - 
 A tela de detalhe do evento exibe informações mais detalhadas sobre o evento, como descrição, uma imagem sobre o evento, data, valores de entrada, número de pessoas que confirmaram presença, Assim como as opções de Confirmar Presença ou  Rejeitar Presença, para o criador do evento são disponibilizadas as funções de Editar e Cancelar um Evento, assim como Convidar pessoas.

* Editar Evento - 
 Ao  acessar um evento que seja administrador, é possível editar um evento, qualquer informação incluida no momento da inserção do evento pode ser alterada posteriormente. Ao efetuar qualquer alteração nos dados do evento todos os usuários que foram convidados serão notificados sobre as mudanças

* Cancelar Evento - 
 Ao acessar um evento o qual o usuário seja administrador, é possível cancelar o evento, no momento do cancelamento é possível incluir uma justificativa do cancelamento,  uma vez cancelado todos os usuários notificados do cancelamento, podendo visualizar a justificativa de tal cancelamento. Da mesma forma, o evento deixará de ser visível aos usuários que foram convidados, se tornando visível apenas ao administrador do mesmo (para futuras consultas e etc)

* Convidar Pessoas - 
 No momento da criação de um evento ou posteriormente o administrador poderá convidar outros usuários para seu evento, que serão notificados sobre o convite, bem como tal evento estará disponível dentro do calendário pessoal de cada participante do evento.

* Notificações - 
 Determinados acontecimentos podem disparar notificações aos usuários, para que estes fiquem cientes da mudança de status quo dentro de um evento, alertas gerais sobre situações atípicas que podem alterar a rotina ou agenda do usuário, dentre outras informações que devem ser disparadas ao mesmo. As mesmas serão exibidas como forma de Lista em ordem da mais recente para a mais antiga, agrupada por datas.Todas as notificações ao serem clicadas abrem a tela de detalhes.

* Detalhes de Notificações - 
 A tela de detalhes de uma notificação, exibe informações mais precisas sobre o conteúdo da notificação, como por exemplo o que foi alterado em um evento, ou os motivos do cancelamento do mesmo. Também pode exibir outras informações como alertas sanitários, ou gerais do sistema dentre outras informaçöes.

## Contribuidores

As seguintes pessoas contribuiram para este projeto:

* [Flavio Augusto Corrêa de Souza](https://github.com/flaviocsouza)
* [Helionardo Pereira Justi](https://github.com/helionardo)
* [Jéssica Abe de Almeida](https://github.com/Abejyou)

## Licença de uso

<!--- Se não tiver certeza de qual, verifique este site: https://choosealicense.com/--->
Este projeto usa a seguinte licença: [MIT License]

