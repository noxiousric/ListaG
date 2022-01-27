/* 
    variáveis que contém o conteúdo (html) de cada opção, 
    caso este tenha sido já carregado.

    utilizadas para reduzir o tempo de carregamento do 
    conteúdo das opções (invés de criar todos os elementos,
    definir os seus atributos e englobá-los sempre que a opção
    é clicada, esse 'trabalho' pode ser feito apenas umas 
    vez guardando o resultado nestas variáveis)
*/
let schedule_state;
let elements_state;
let contacts_state;
let sugeresec_state;
let proposal_state;
let merchandise_state;

/* objeto relativo ao tema da página */
const mode = {
    light: "light",
    dark: "dark"
}

/* variável que contém o tema em uso atual ('dark' por defeito) */
let page_mode = mode.dark;

/* objeto relativo ao nome das opções de navegação */
const menu_option = {
    schedule: "schedule",
    elements: "elements",
    contacts: "contacts",
    sugeresec: "sugeresec",
    proposal: "proposal",
    merchandise: "merchandise",
    switch: "switch",
    socials: "socials"
}

/* objeto relativo á cor das opções de navegação */
const menu_option_color = {
    schedule: "#DDDA1D",
    elements: "#2D5B8C",
    contacts: "#38B0E4",
    sugeresec: "#E75531",
    proposal: "#F49A12",
    merchandise: "#8E31B8"
}

/* 
    variável utilizada para retirar a cor de fundo da opção 
    previamente clicada (quando outra opção é clicada) 
*/
let previous_option;

/* objeto usado para carregar as opções da agenda (suporte) */
const month = {
    1: "JAN",
    2: "FEV",
    3: "MAR",
    4: "ABR",
    5: "MAI",
    6: "JUN",
    7: "JUL",
    8: "AUG",
    9: "SET",
    10: "OUT",
    11: "NOV",
    12: "DEZ",
}


/* objeto relativo ao conteúdo de cada medida */
const measures = {
    1: "Mostra mensal de arte e design com o intuito de expor o trabalho dos estudantes",
    2: "Semana de integração com atividades para os novos estudantes.",
    3: ": espaço e acompanhamento dedicado aos estudantes de Erasmus",
    4: ": fim de semana de campismo com atividades",
    5: ": Feira trimestral dedicada aos pequenos negócios dos estudantes",
    6: "corrida solidária para angariar fundos para instituições",
    7: "Comemoração de dias temáticos, como o são Valentim, Halloween, natal,...",
    8: "Fóruns e reuniões abertas para sugestões dos estudantes da ESEC acerca do que pode ser melhorado",
    9: ": encontro semestral dos cursos da ESEC, com webinares, palestras, workshops inseridos nas diversas áreas dos cursos",
}

/* objeto relativo ao conteúdo destacado de medidas */
const measures_highlight = {
    3: "ESEC+",
    4: "ESECAMPING",
    5: "ESEC FLEA MARKET",
    9: "Ponto de encontro",
}

/* 
    variável que mantém estado da opção 'secções' da página elementos
    0 - secções não está aberta
    1 - secções está aberta
*/
let elements_sections_clicked = 0;


/* objeto relativo ao conteúdo de cada opção da página elementos */
const elements_options = {
    1: "direcao",
    2: "conselho fiscal",
    3: "assembleia geral",
    4: "seccoes",
    5: "acao social e ambiente",
    6: "comunicacao e marketing",
    7: "cultura e eventos",
    8: "desporto",
    9: "pedagogia e empregabilidade",
    10: "relacoes internacionais",
}

const currency = "€";

/* cart related states */
/* produtos disponíveis */
let products_state = [];
/* produtos no carrinho */
let cart_state = [];
/* purchase amounts */
let subtotal = 0;
const shipping_price = 2;
/* onde utilizador está no processo de compra */
let process_state = 1;
/* conteúdo da página do carrinho */
let cart_size = 0;
let shipping_content_state;
let payment_content_state;
