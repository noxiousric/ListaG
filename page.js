/* 
    document.getElementById(K) - referência a elemento html com id K (id="K")
    document.createElement(X) - cria elemento html X (document.createElement("p") cria um elemento 'p')
    X.setAttribute(Y, Z) - define atributo Y, do elemento X, como Z (ex.: Y(id, class, src, ...)="Z");
    X.appendChild(Y) - incorpora elemento Y dentro de X (X engloba Y)
*/

/* no momento em que o site é aberto (f5 também)*/
window.onload = () => {
    /* linha 16 */
    if (mobileCheck()) {
        alert("Looks like you are on a phone, you might wanna tilt your phone sideways!");
    };
    /* linha 147 */
    clickable_logo();
    /* linha 176 */
    clickable_options();
    /* linha 48*/
    load_main_page();
    document.getElementsByTagName("body")[0].setAttribute("class", "dark_body");
}

/* 
    se dispositivo for smartphone, o utilizador é alterado
    (isto porque o site não está completamente responsivo [ecras verticais >.<])
*/
window.mobileCheck = function () {
    let check = false;
    check = (/iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(navigator.userAgent.toLowerCase()));
    return check;
};

/* PAGE MODE */
const slider = document.getElementById("slider");
slider.onclick = () => {
    page_mode == mode.dark ? page_mode = mode.light : page_mode = mode.dark;
    theme_swap(page_mode);
}

const change_schedule_state = (current_theme) => {
    const page_options = document.getElementsByClassName("page_option")
    console.log(page_options);
    for (let i = 0; i < page_options.length; i++) {
        console.log(i);
        page_options[i].setAttribute("class", current_theme + " page_option");
    }
    document.getElementById("title").setAttribute("class", current_theme + "_text");
    document.getElementById("text").setAttribute("class", current_theme + "_text");
}

const theme_swap = (current_theme) => {
    console.log(current_theme);
    document.body.setAttribute("class", current_theme + "_body");
    document.getElementById("logo_image").setAttribute("src", current_theme == "light" ? "assets/g preto.png" : "assets/g branco.png");
    const socials = document.getElementsByClassName("socials_icon");
    for (let i = 0; i < socials.length; i++) {
        socials[i].setAttribute("src", current_theme == "light" ? "assets/" + socials[i].id + " preto.png" : "assets/" + socials[i].id + " branco.png");
    }
    let nav_options = document.getElementsByClassName("menu_option");
    for (let i = 0; i < nav_options.length; i++) {
        nav_options[i].setAttribute("class", current_theme + " menu_option");
    }

    if (previous_option == undefined) {

    }
    else if (previous_option.id == 'schedule') {
        change_schedule_state(current_theme);
    }
}

/* MAIN PAGE */
/* carregar conteúdo da pagina inicial */
const load_main_page = () => {
    const container = document.getElementById("page_container");

    const left = document.createElement("div");
    left.setAttribute("id", "left");

    const left_up = document.createElement("div");
    left_up.setAttribute("id", "left_up");

    const left_up_image = document.createElement("img");
    left_up_image.setAttribute("src", "assets/foto noticia.jpeg");
    left_up.appendChild(left_up_image);

    const left_down = document.createElement("div");
    left_down.setAttribute("id", "left_down");

    const left_down_p_up = document.createElement("p");
    left_down_p_up.setAttribute("id", "left_down_p_up");
    left_down_p_up.innerHTML = "O primeiro dia de campanha eleitoral da Lista G A AE foi um sucesso!";
    left_down.appendChild(left_down_p_up);

    const left_down_p_down = document.createElement("p");
    left_down_p_down.setAttribute("id", "left_down_p_down");
    left_down_p_down.innerHTML = "Alunos mostraram-se interessados pelos valores e ideais apresentados pela lista candidata à Associação de Estudantes.";
    left_down.appendChild(left_down_p_down);

    left.appendChild(left_up);
    left.appendChild(left_down);

    const right = document.createElement("div");
    right.setAttribute("id", "right");

    const right_up = document.createElement("div");
    right_up.setAttribute("id", "right_up");

    const right_up_left = document.createElement("div");
    right_up_left.setAttribute("id", "right_up_left");

    const right_up_left_p_up = document.createElement("p");
    right_up_left_p_up.setAttribute("id", "right_up_left_p_up");
    right_up_left_p_up.innerHTML = "Variedade gastronómica na ESEC."

    const right_up_left_p_down = document.createElement("p");
    right_up_left_p_down.setAttribute("id", "right_up_left_p_down");
    right_up_left_p_down.innerHTML = "Queremos dar a oportunidade aos alunos de Gastronomia de  dar a provar os seus cozinhados á restante comunidade esequiana."
    right_up_left.appendChild(right_up_left_p_up);
    right_up_left.appendChild(right_up_left_p_down);

    const right_up_right = document.createElement("div");
    right_up_right.setAttribute("id", "right_up_right");

    const right_up_right_img = document.createElement("img");
    right_up_right_img.setAttribute("src", "assets/escola.jpeg");
    right_up_right.appendChild(right_up_right_img);

    right_up.appendChild(right_up_left);
    right_up.appendChild(right_up_right);

    const right_down = document.createElement("div");
    right_down.setAttribute("id", "right_down");

    const right_down_left = document.createElement("div");
    right_down_left.setAttribute("id", "right_down_left");

    const right_down_left_img = document.createElement("img");
    right_down_left_img.setAttribute("src", "assets/mostra noticia.jpeg");
    right_down_left.appendChild(right_down_left_img);

    const right_down_right = document.createElement("div");
    right_down_right.setAttribute("id", "right_down_right");

    const right_down_right_p_up = document.createElement("p");
    right_down_right_p_up.setAttribute("id", "right_down_right_p_up");
    right_down_right_p_up.innerHTML = "A lista G valoriza a tua arte!"
    right_down_right.appendChild(right_down_right_p_up);

    const right_down_right_p_down = document.createElement("p");
    right_down_right_p_down.setAttribute("id", "right_down_right_p_down");
    right_down_right_p_down.innerHTML = "A lista G pretende dar mais exposição ao trabalho dos alunos e por isso irá criar uma mostra de arte e design."
    right_down_right.appendChild(right_down_right_p_down);


    right_down.appendChild(right_down_left);
    right_down.appendChild(right_down_right);

    right.appendChild(right_up);
    right.appendChild(right_down);

    container.appendChild(left);
    container.appendChild(right);
}

/* LOGO */
/* tornar imagem do logo clicável */
const clickable_logo = () => {
    const logo = document.getElementById("logo");
    /* 'onclick' permite definir o que fazer quando algo, neste caso o logo, é clicado */
    logo.onclick = () => {
        if (previous_option == undefined || (previous_option != undefined && logo.id != previous_option.id)) {
            clean_page();
            load_main_page();
            highlight_option(undefined, previous_option);
        }
        previous_option = logo;
    }
}

/* MENU OPTION STATE */
/* quando opção de navegação é clicada colocar cor do background definida  */
const highlight_option = (option, prev) => {
    if (prev != undefined) {
        prev.removeAttribute("style");
    }
    if (option != undefined) {
        option.style.backgroundColor = menu_option_color[option.id];
    }
}

/* MENU OPTION FUNCTION */
/* o que fazer quando opção de navegação é clicada*/
const clickable_options = () => {
    /* 'buttons_menu' contém referências a todas as opções de navegação */
    let buttons_menu = document.getElementsByClassName("menu_option");
    for (let i = 0; i < buttons_menu.length; i++) {
        let option = buttons_menu.item(i);
        if (option.id != menu_option.switch && option.id != menu_option.socials) {
            option.onclick = () => {
                if (previous_option == undefined || (previous_option != undefined && option.id != previous_option.id)) {
                    clean_page();
                    load_content(option);
                    highlight_option(option, previous_option);
                }
                previous_option = option;
            }
        }
    }
}

/* carregar conteúdo de opção clicada */
const load_content = (option) => {
    const container = document.getElementById("page_container");
    switch (option.id) {
        case menu_option.schedule:
            load_schedule(container);
            break;
        case menu_option.elements:
            load_elements(container);
            break;
        case menu_option.contacts:
            load_contacts(container);
            break;
        case menu_option.sugeresec:
            load_sugeresec(container);
            break;
        case menu_option.proposal:
            load_proposal(container);
            break;
        case menu_option.merchandise:
            load_merchandise(container);
            break;
        default:
            break;
    }
}

/* SCHEDULE */
/* limpar div (retirar todos os elementos que estão dentro dela) */
const clean_content = (container) => {
    if (container != undefined) {
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild);
        }
    }
}

/* (de facto a) carregar conteúdo de opção (definida pelos parâmetros da ) */
const load_schedule_option_content = (title_left, title_right, image_url, text) => {
    const container = document.getElementById("page_content");
    clean_content(container);

    const title = document.createElement("p");
    title.setAttribute("id", "title");
    title.setAttribute("class", page_mode + "_text");
    title.innerHTML = `${title_left}<span style="color:${menu_option_color.sugeresec}">${title_right}</span>`
    container.appendChild(title);

    const content = document.createElement("div");
    content.setAttribute("id", "content");

    const image = document.createElement("img");
    image.setAttribute("src", image_url);
    content.appendChild(image);

    const text_p = document.createElement("p");
    text_p.setAttribute("class", page_mode + "_text");
    text_p.setAttribute("id", "text");
    text_p.innerHTML = text;
    content.appendChild(text_p);

    container.appendChild(content);
}

/* 
    quando uma opção da agenda é clicada esta função é executada
    verifica qual opção foi clicada e carrega o seu conteúdo
*/
const load_schedule_option = (option) => {
    let text;
    switch (option) {
        case 0:
            text = "Mostra de arte e design direcionada aos estudantes da ESEC, com o intuito de expor, durante uma semana em cada mês, os trabalhos que os alunos desenvolvem quer no contexto escolar, quer no âmbito pessoal e fora da escola. Ira realizar-se na semana de 8 a 13 de novembro no patio da esec. Esta aberta a qualquer pessoa que tenha interesse em visitar.";
            load_schedule_option_content("18 NOV /", "Campanha eleitoral", "assets/cartaz-eleitoral.png", text);
            break;
        case 3:
            text = "Mostra de arte e design direcionada aos estudantes da ESEC, com o intuito de expor, durante uma semana em cada mês, os trabalhos que os alunos desenvolvem quer no contexto escolar, quer no âmbito pessoal e fora da escola. Ira realizar-se na semana de 8 a 13 de novembro no patio da esec. Esta aberta a qualquer pessoa que tenha interesse em visitar.";
            load_schedule_option_content("8—13 FEV /", "Mostra de arte e design", "assets/mostra.jpeg", text);
            break;
        default:
            break;

    }
}

/* carregar conteúdo da opção agenda */
const load_schedule = (container) => {
    const schedule_container = document.createElement("div");
    schedule_container.setAttribute("id", "schedule_container");

    const page_options = document.createElement("div");
    page_options.setAttribute("id", "page_options");

    let cur_month = 11;
    let cur_year = 21;
    for (let i = 0; i < 8; i++) {
        const page_option = document.createElement("div");
        page_option.setAttribute("class", page_mode + " page_option");

        page_option.onclick = () => {
            load_schedule_option(i);
        }
        page_option.onmouseover = () => {
            page_option.style.cursor = "pointer";
            page_option.style.color = "#DDDA1D";
        }
        page_option.onmouseout = () => {
            page_option.removeAttribute("style");
        }

        const page_option_text = document.createElement("p");
        page_option_text.innerHTML = month[cur_month] + " /" + cur_year;
        cur_month++;
        if (cur_month > 12) {
            cur_month = 1;
            cur_year = 22;
        }

        page_option.appendChild(page_option_text);
        page_options.appendChild(page_option);
    }

    const page_content = document.createElement("div");
    page_content.setAttribute("id", "page_content");

    schedule_container.appendChild(page_options);
    schedule_container.appendChild(page_content);

    container.appendChild(schedule_container);

    //primeira opção carregada por defeito
    load_schedule_option(0);

}

/* SUGERESEC */
/* carregar conteúdo da opção sugeresec */
const load_sugeresec = (container) => {

    const sugeresec_container = document.createElement("div");
    sugeresec_container.setAttribute("id", "sugeresec_container");

    const p = document.createElement("p");
    p.innerHTML = "DEIXA AQUI AS TUAS SUGESTÕES PARA A ESEC. FAZ TE OUVIR!"
    p.setAttribute("id", "sugeresec_p");

    const name_input = document.createElement("textarea");
    name_input.setAttribute("class", "textarea sugeresec_thin_textarea");
    name_input.setAttribute("placeholder", "NOME");

    const email_input = document.createElement("textarea");
    email_input.setAttribute("class", "textarea sugeresec_thin_textarea");
    email_input.setAttribute("placeholder", "EMAIL");

    const message_input = document.createElement("textarea");
    message_input.setAttribute("class", "textarea sugeresec_thick_textarea");
    message_input.setAttribute("placeholder", "ESCREVE AQUI A TUA SUGESTAO");

    const button_container = document.createElement("div");
    button_container.setAttribute("id", "button_container");

    const submit_button = document.createElement("button");
    submit_button.setAttribute("id", "sugeresec_submit_button");
    submit_button.innerHTML = "SUBMETER";
    button_container.appendChild(submit_button);

    sugeresec_container.appendChild(p);
    sugeresec_container.appendChild(name_input);
    sugeresec_container.appendChild(email_input);
    sugeresec_container.appendChild(message_input);
    sugeresec_container.appendChild(button_container);
    container.appendChild(sugeresec_container);
}

/* CONTACTS */
/* carregar conteúdo da opção contactos */
const load_contacts = (container) => {

    const contacts_container = document.createElement("div");
    contacts_container.setAttribute("id", "contacts_container");

    const map_container = document.createElement("div");
    map_container.setAttribute("id", "map");

    const map = document.createElement("iframe");
    map.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.2595182757873!2d-8.40845838422868!3d40.203289776516044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd22f983323d75a9%3A0xc7b8f3371fe2682d!2sR.%20Dom%20Jo%C3%A3o%20III%2C%203030-329%20Coimbra!5e0!3m2!1spt-PT!2spt!4v1640698976409!5m2!1spt-PT!2spt");
    map.setAttribute("loading", "lazy");

    const map_info = document.createElement("div");
    const street_p = document.createElement("p");
    street_p.innerHTML = "R. Dom João III, 3030-329 Coimbra";
    map_info.appendChild(street_p);
    const schedule_p = document.createElement("p");
    schedule_p.innerHTML = "Horário funcionamento:  08:00-23:00";
    map_info.appendChild(schedule_p);
    const esec_link_a = document.createElement("a");
    esec_link_a.innerHTML = "https://www.esec.pt/";
    map_info.appendChild(esec_link_a);

    const info = document.createElement("div");
    info.setAttribute("id", "info");

    const president_info = document.createElement("div");
    president_info.setAttribute("id", "president_info");
    president_info.setAttribute("class", "info_box");

    const president_contact_p = document.createElement("p");
    president_contact_p.style.color = menu_option_color.contacts;
    president_contact_p.innerHTML = "Contacto presidente :";
    president_info.appendChild(president_contact_p);

    const president_name_p = document.createElement("p");
    president_name_p.setAttribute("id", "president_name_p");
    president_name_p.innerHTML = "Bruna Moutinho";
    president_info.appendChild(president_name_p);

    const president_email_p = document.createElement("p");
    president_email_p.setAttribute("id", "president_email_p");
    president_email_p.innerHTML = "brunamoutinho@gmail.com";
    president_info.appendChild(president_email_p);

    const president_phone_p = document.createElement("p");
    president_phone_p.setAttribute("id", "president_phone_p");
    president_phone_p.innerHTML = "961955203";
    president_info.appendChild(president_phone_p);

    const list_info = document.createElement("div");
    list_info.setAttribute("id", "list_info");
    list_info.setAttribute("class", "info_box");

    const list_contact_p = document.createElement("p");
    list_contact_p.style.color = menu_option_color.contacts;
    list_contact_p.innerHTML = "Contacto lista G :";
    list_info.appendChild(list_contact_p);

    const list_email_p = document.createElement("p");
    list_email_p.setAttribute("id", "list_email_p");
    list_email_p.innerHTML = "listag_esecae@gmail.com";
    list_info.appendChild(list_email_p);

    map_container.appendChild(map);
    map_container.appendChild(map_info);
    info.appendChild(president_info);
    info.appendChild(list_info);

    contacts_container.appendChild(map_container);
    contacts_container.appendChild(info);
    container.appendChild(contacts_container);
}

/* MERCHANDISE */

/* carregar conteúdo de produto (definido pelos parâmetros da função) */
const load_product = (products, product_id, product_image, product_name, product_price) => {
    const product = document.createElement("div");
    product.setAttribute("id", "product" + product_id);
    product.setAttribute("class", "product");

    const image = document.createElement("img");
    image.setAttribute("class", "product_image");
    image.setAttribute("src", product_image);

    const name = document.createElement("p");
    name.setAttribute("class", "product_name");
    name.innerHTML = product_name;

    const price = document.createElement("p");
    price.setAttribute("class", "product_price");
    price.innerHTML = product_price + currency;

    const add_to_cart_button = document.createElement("div");
    add_to_cart_button.setAttribute("class", "add_to_cart_button");
    const add_to_cart_button_p = document.createElement("p");
    add_to_cart_button_p.innerHTML = "Adicionar ao carrinho";
    add_to_cart_button.appendChild(add_to_cart_button_p);

    product.appendChild(image);
    product.appendChild(name);
    product.appendChild(price);
    product.appendChild(add_to_cart_button);
    products.appendChild(product);
}

/* carregar conteúdo da opção merchandise */
const load_merchandise = (container) => {
    const merchandise_container = document.createElement("div");
    merchandise_container.setAttribute("id", "merchandise_container");

    const products = document.createElement("div");
    products.setAttribute("id", "products");

    load_product(products, 1, "assets/tote-LM.jpeg", "TOTE BAG - LISTA G", 5);
    load_product(products, 2, "assets/Sweater.jpg", "SWEATER - LISTA G", 18);
    load_product(products, 3, "assets/T-Shirt.jpg", "T-SHIRT - LISTA G", 10);
    load_product(products, 4, "assets/pin.jpg", "PIN - LISTA G", 1);
    merchandise_container.appendChild(products);

    container.appendChild(merchandise_container);
}

/* PROPOSAL */
/* carregar cada medida (definida pelos parâmetros da função) */
const load_measure = (container, id) => {
    const measure = document.createElement("div");
    measure.setAttribute("class", "measure");

    const measure_id = document.createElement("p");
    measure_id.setAttribute("class", "measure_id");
    measure_id.innerHTML = id;

    const measure_text_container = document.createElement("div");
    measure_text_container.setAttribute("class", "measure_text_container");
    const measure_text = document.createElement("p");
    measure_text.setAttribute("class", "measure_text");
    if (measures[id].charAt(0) == ':') {
        measure_text.innerHTML += `<span style="color:${menu_option_color.proposal}">${measures_highlight[id]}</span>`;
    }
    measure_text.innerHTML += measures[id];
    measure_text_container.appendChild(measure_text)

    measure.appendChild(measure_id);
    measure.appendChild(measure_text_container);

    container.appendChild(measure);
}

/* carregar conteúdo da opção proposta */
const load_proposal = (container) => {

    const proposal_container = document.createElement("div");
    proposal_container.setAttribute("id", "proposal_container");

    const video = document.createElement("div");
    video.setAttribute("id", "proposal_video");
    video.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/1IkaHOGXRtA" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>';

    const measures_container = document.createElement("div");
    measures_container.setAttribute("id", "measures_container");
    const measures_title = document.createElement("p");
    measures_title.setAttribute("id", "measures_title");
    measures_title.innerHTML = "Medidas";

    const measures = document.createElement("div");
    for (let i = 0; i < 9; i++) {
        load_measure(measures_container, i + 1);
    }
    measures_container.appendChild(measures);

    proposal_container.appendChild(video);
    proposal_container.appendChild(measures_title);
    proposal_container.appendChild(measures_container);

    container.appendChild(proposal_container);
}

/* ELEMENTS */
/* (de facto a) carregar conteúdo da opção clicada */
const load_elements_option_content = (elements_number, name_position, title_text) => {
    const container = document.getElementById("page_content");
    clean_content(container);

    const title = document.createElement("p");
    title.setAttribute("id", "elements_title");
    title.innerHTML = title_text;
    container.appendChild(title);

    const elements = document.createElement("div");
    elements.setAttribute("id", "elements_content");

    for (let i = 0; i < elements_number * 3; i += 3) {
        const name = name_position[i];
        console.log("name: " + name);
        const pfp_url = name_position[i + 1];
        const role = name_position[i + 2];

        const element = document.createElement("div");
        element.setAttribute("class", "element");

        const element_image = document.createElement("div");
        element_image.setAttribute("class", "element_image");

        const element_img = document.createElement("img");
        element_img.setAttribute("class", "element_img");
        if (pfp_url != null) {
            element_img.setAttribute("src", pfp_url);
        }
        element_image.appendChild(element_img);

        const element_name = document.createElement("p");
        element_name.setAttribute("class", "element_name");
        element_name.innerHTML = name;

        const element_role = document.createElement("p");
        element_role.setAttribute("class", "element_role");
        element_role.innerHTML = role;

        element.appendChild(element_image);
        element.appendChild(element_name);
        element.appendChild(element_role);

        elements.appendChild(element);
    }

    container.appendChild(elements);
}

/* dependendo da opção clicada, o conteúdo desejado é carregado */
const load_elements_option = (option) => {
    switch (option) {
        case 1:
            load_elements_option_content(
                5,
                ["Bruna Moutinho", "assets/bruna.jpeg", "Presidente", "Mariana Figueiredo", "assets/mariana.jpeg", "Vice Presidente",
                    "Ricardo Ferreira", "assets/ric.jpeg", "Tesoureiro", "Marta Barroso", "assets/marta.jpeg", "Secretaria",
                    "Poema Sefa", null, "Secretaria"],
                "A direção e composta pela Presidente, que coordena toda a dinâmica interna do Núcleo e faz a ligação com as entidades externas, pelo Vice-Presidente, que auxilia o Presidente no que for necessário, pela Secretária, responsável pela organização e documentação da informação mais importante discutida e aprovada pelos membros da esec, e pela Tesoureira, que trata das contas do Núcleo. Toda a direcao tem ainda o dever de assumir as maiores responsabilidades quando necessário.");
            break;
            break;
    }
}

/* limpar opções abaixo da opção 'secções */
const clean_sections_options = (container) => {
    for (let i = 0; i <= 5; i++) {
        container.removeChild(container.lastChild);
    }
}

/* carregar conteúdo da opção elementos */
const load_elements = (container) => {
    const elements_container = document.createElement("div");
    elements_container.setAttribute("id", "elements_container");

    const page_options = document.createElement("div");
    page_options.setAttribute("id", "page_options");

    for (let i = 1; i <= 3; i++) {
        const page_option = document.createElement("div");
        page_option.setAttribute("class", page_mode + " page_option");

        page_option.onclick = () => {
            load_elements_option(i);
        }
        page_option.onmouseover = () => {
            page_option.style.cursor = "pointer";
            page_option.style.color = "#2D5B8C";
        }
        page_option.onmouseout = () => {
            page_option.removeAttribute("style");
        }

        const page_option_text = document.createElement("p");
        page_option_text.innerHTML = elements_options[i];

        page_option.appendChild(page_option_text);
        page_options.appendChild(page_option);
    }

    const page_content = document.createElement("div");
    page_content.setAttribute("id", "page_content");

    elements_container.appendChild(page_options);
    elements_container.appendChild(page_content);

    container.appendChild(elements_container);

    //first page by default
    load_elements_option(1);
}

/* PAGE UPDATE */
/* 
    limpar a página toda (exceto o menu de navegação)
    ( usada quando alguma opção é clicada:
        - limpar conteúdo atual
        - carregar conteúdo desejado )
*/
const clean_page = () => {
    const container = document.getElementById("page_container");
    while (container.hasChildNodes()) {
        container.removeChild(container.firstChild);
    }
}