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
    mode_swap();
}

const mode_swap = () => {
    /* const body = document.body;
    console.log(page_mode);

    if (page_mode == mode.dark) {
        body.style.backgroundColor = "black";
    }
    else if (page_mode == mode.light) {
        body.style.backgroundColor = "white";
    }
    else {
        console.log("mode_swap: unavailable mode");
    } */
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
    right_up_left_p_up.innerHTML = "variedade Gastronomica na ESEC."

    const right_up_left_p_down = document.createElement("p");
    right_up_left_p_down.setAttribute("id", "right_up_left_p_down");
    right_up_left_p_down.innerHTML = "queremos dar a oportunidade aos Alunos de Gastronomia de  dar a provar os seus cozinhados á restante comunidade esequiana."
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
    right_down_right_p_up.innerHTML = "A lista g valoriza a tua arte!"
    right_down_right.appendChild(right_down_right_p_up);

    const right_down_right_p_down = document.createElement("p");
    right_down_right_p_down.setAttribute("id", "right_down_right_p_down");
    right_down_right_p_down.innerHTML = "a lista g pretende dar mais exposição ao trabalho dos alunos e por isso irá criar uma mostra de arte e design."
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
    title.innerHTML = `${title_left}<span style="color:${menu_option_color.sugeresec}">${title_right}</span>`
    container.appendChild(title);

    const content = document.createElement("div");
    content.setAttribute("id", "content");

    const image = document.createElement("img");
    image.setAttribute("src", image_url);
    content.appendChild(image);

    const text_p = document.createElement("p");
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
            text = "mostra de arte e design direcionada aos estudantes da ESEC, com o intuito de expor, durante uma semana em cada mês, os trabalhos que os alunos desenvolvem quer no contexto escolar, quer no âmbito pessoal e fora da escola. Ira realizar-se na semana de 8 a 13 de novembro no patio da esec esta aberta a qualquer pessoa que tenha interesse em visitar.";
            load_schedule_option_content("18 NOV /", "Campanha eleitoral", "assets/cartaz-eleitoral.png", text);
            break;
        case 3:
            text = "mostra de arte e design direcionada aos estudantes da ESEC, com o intuito de expor, durante uma semana em cada mês, os trabalhos que os alunos desenvolvem quer no contexto escolar, quer no âmbito pessoal e fora da escola. Ira realizar-se na semana de 8 a 13 de novembro no patio da esec. Esta aberta a qualquer pessoa que tenha interesse em visitar.";
            load_schedule_option_content("8—13 FEV /", "Mostra de arte e design", "assets/mostra.jpeg", text);
            break;
        default:
            break;

    }
}

/* carregar conteúdo da opção agenda */
const load_schedule = (container) => {
    if (schedule_state != undefined) {
        container.appendChild(schedule_state);
        return;
    }

    const schedule_container = document.createElement("div");
    schedule_container.setAttribute("id", "schedule_container");

    const page_options = document.createElement("div");
    page_options.setAttribute("id", "page_options");

    let cur_month = 11;
    let cur_year = 21;
    for (let i = 0; i < 8; i++) {
        const page_option = document.createElement("div");
        if (i == 0) {
            page_option.setAttribute("class", "page_option first_option");
        }
        else {
            page_option.setAttribute("class", "page_option");
        }

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

    schedule_state = schedule_container;
}

/* SUGERESEC */
/* carregar conteúdo da opção sugeresec */
const load_sugeresec = (container) => {
    if (sugeresec_state != undefined) {
        container.appendChild(sugeresec_state);
        return;
    }

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

    sugeresec_state = sugeresec_container;
}

/* CONTACTS */
/* carregar conteúdo da opção contactos */
const load_contacts = (container) => {
    if (contacts_state != undefined) {
        container.appendChild(contacts_state);
        return;
    }

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
    schedule_p.innerHTML = "horário funcionamento:  08:00-23:00";
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
    president_contact_p.innerHTML = "contacto presidente :";
    president_info.appendChild(president_contact_p);

    const president_name_p = document.createElement("p");
    president_name_p.setAttribute("id", "president_name_p");
    president_name_p.innerHTML = "bruna Moutinho";
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
    list_contact_p.innerHTML = "contacto list g :";
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

    contacts_state = contacts_container;
}

/* MERCHANDISE */
const update_products_state = (product) => {
    if (products_state != undefined) {
        products_state[product.id] = product;
    }
}

const update_cart_value = () => {
    const cart_value = document.getElementById("cart_num_p");
    cart_value.innerText = parseInt(cart_value.innerText) + 1;
}

const add_to_cart = (id) => {
    if (products_state != undefined) {
        const selected_product = products_state[id];
        if (selected_product != undefined && cart_state != undefined) {
            if (cart_state[id] != undefined) {
                cart_state[id].quantity += 1;
            }
            else {
                update_cart_value();
                const on_cart_product_object = {
                    id: id,
                    quantity: 1,
                }
                cart_state[id] = on_cart_product_object;

                cart_size = Math.max(cart_size, id);
            }
            console.log(products_state);
            console.log(cart_state);
        }
    }
}

/* carregar conteúdo de produto (definido pelos parâmetros da função) */
const load_product = (products, product_id, product_image, product_name, product_price) => {
    const product_object = {
        id: product_id,
        image: product_image,
        name: product_name,
        price: product_price,
    };
    update_products_state(product_object);

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
    add_to_cart_button_p.innerHTML = "adicionar ao carrinho";
    add_to_cart_button.onclick = () => {
        add_to_cart(product_id);
    }
    add_to_cart_button.appendChild(add_to_cart_button_p);

    product.appendChild(image);
    product.appendChild(name);
    product.appendChild(price);
    product.appendChild(add_to_cart_button);
    products.appendChild(product);
}

const update_amounts = () => {
    set_subtotal(subtotal, document.getElementById("totals_and_proceed_subtotal"));
    set_total(subtotal, document.getElementById("totals_and_proceed_total"))
}

const load_in_cart_product = (container, product) => {
    const in_cart_product_object = products_state[product.id];
    if (in_cart_product_object != undefined) {
        const in_cart_product_image_container = document.createElement("div");
        in_cart_product_image_container.setAttribute("class", "in_cart_product_image_container");

        const in_cart_product_image = document.createElement("img");
        in_cart_product_image.setAttribute("class", "in_cart_product_image");
        in_cart_product_image.setAttribute("src", in_cart_product_object.image);
        in_cart_product_image_container.appendChild(in_cart_product_image);

        const in_cart_product_info_wrapper = document.createElement("div");
        in_cart_product_info_wrapper.setAttribute("class", "in_cart_product_info_wrapper");

        const in_cart_product_info_container = document.createElement("div");
        in_cart_product_info_container.setAttribute("class", "in_cart_product_info_container");

        const in_cart_product_info_name = document.createElement("div");
        in_cart_product_info_name.setAttribute("class", "in_cart_product_info_name");
        in_cart_product_info_name.innerText = in_cart_product_object.name;

        const in_cart_product_info_price = document.createElement("div");
        in_cart_product_info_price.setAttribute("class", "in_cart_product_info_price");
        in_cart_product_info_price.innerText = in_cart_product_object.price + currency;

        const in_cart_product_info_quantitity = document.createElement("div");
        in_cart_product_info_quantitity.setAttribute("class", "in_cart_product_info_quantitity");

        const in_cart_product_info_quantitity_value = document.createElement("p");
        in_cart_product_info_quantitity_value.setAttribute("class", "in_cart_product_info_quantitity_value");
        in_cart_product_info_quantitity_value.innerText = product.quantity;

        const in_cart_product_info_quantitity_minus = document.createElement("p");
        in_cart_product_info_quantitity_minus.setAttribute("class", "in_cart_product_info_quantitity_minus");
        in_cart_product_info_quantitity_minus.innerText = "-";
        in_cart_product_info_quantitity_minus.onclick = () => {
            if (parseInt(in_cart_product_info_quantitity_value.innerText) > 0) {
                in_cart_product_info_quantitity_value.innerText = parseInt(in_cart_product_info_quantitity_value.innerText) - 1;
                product.quantity -= 1;
                subtotal -= in_cart_product_object.price;
                update_amounts();
            }
        }

        const in_cart_product_info_quantitity_plus = document.createElement("p");
        in_cart_product_info_quantitity_plus.setAttribute("class", "in_cart_product_info_quantitity_plus");
        in_cart_product_info_quantitity_plus.innerText = "+";
        in_cart_product_info_quantitity_plus.onclick = () => {
            in_cart_product_info_quantitity_value.innerText = parseInt(in_cart_product_info_quantitity_value.innerText) + 1;
            product.quantity += 1;
            subtotal += in_cart_product_object.price;
            update_amounts();
        }

        in_cart_product_info_quantitity.appendChild(in_cart_product_info_quantitity_minus);
        in_cart_product_info_quantitity.appendChild(in_cart_product_info_quantitity_value);
        in_cart_product_info_quantitity.appendChild(in_cart_product_info_quantitity_plus);
        in_cart_product_info_container.appendChild(in_cart_product_info_name);
        in_cart_product_info_container.appendChild(in_cart_product_info_price);
        in_cart_product_info_container.appendChild(in_cart_product_info_quantitity);
        in_cart_product_info_wrapper.appendChild(in_cart_product_info_container);

        container.appendChild(in_cart_product_image_container);
        container.appendChild(in_cart_product_info_wrapper);
    }
}

const load_purchase_status = (container) => {
    const purchase_status = document.createElement("div");
    purchase_status.setAttribute("id", "purchase_status");

    const purchase_status_cart = document.createElement("div");
    purchase_status_cart.setAttribute("id", "purchase_status_cart");
    process_state == 1 ? purchase_status_cart.style.background = menu_option_color.merchandise : null;
    purchase_status_cart.setAttribute("class", "purchase_status_box");

    const purchase_status_cart_p = document.createElement("p");
    purchase_status_cart_p.setAttribute("id", "purchase_status_cart_p");
    purchase_status_cart_p.innerText = "carrinho";
    purchase_status_cart.appendChild(purchase_status_cart_p);

    const purchase_status_shipping = document.createElement("div");
    purchase_status_shipping.setAttribute("id", "purchase_status_shipping");
    process_state == 2 ? purchase_status_shipping.style.background = menu_option_color.merchandise : null;
    purchase_status_shipping.setAttribute("class", "purchase_status_box");

    const purchase_status_shipping_p = document.createElement("p");
    purchase_status_shipping_p.setAttribute("id", "purchase_status_shipping_p");
    purchase_status_shipping_p.innerText = "envio";
    purchase_status_shipping.appendChild(purchase_status_shipping_p);

    const purchase_status_payment = document.createElement("div");
    purchase_status_payment.setAttribute("id", "purchase_status_payment");
    process_state == 3 ? purchase_status_payment.style.background = menu_option_color.merchandise : null;
    purchase_status_payment.setAttribute("class", "purchase_status_box");

    const purchase_status_payment_p = document.createElement("p");
    purchase_status_payment_p.setAttribute("id", "purchase_status_payment_p");
    purchase_status_payment_p.innerText = "pagamento";
    purchase_status_payment.appendChild(purchase_status_payment_p);

    const purchase_status_line_container = document.createElement("div");
    purchase_status_line_container.setAttribute("class", "purchase_status_line_container");
    const purchase_status_line = document.createElement("div");
    purchase_status_line.setAttribute("class", "purchase_status_line");
    purchase_status_line_container.appendChild(purchase_status_line);

    const purchase_status_line_container2 = document.createElement("div");
    purchase_status_line_container2.setAttribute("class", "purchase_status_line_container");
    const purchase_status_line2 = document.createElement("div");
    purchase_status_line2.setAttribute("class", "purchase_status_line");
    purchase_status_line_container2.appendChild(purchase_status_line2);

    purchase_status.appendChild(purchase_status_cart);
    purchase_status.appendChild(purchase_status_line_container);
    purchase_status.appendChild(purchase_status_shipping);
    purchase_status.appendChild(purchase_status_line_container2);
    purchase_status.appendChild(purchase_status_payment);

    container.appendChild(purchase_status);
}

const set_subtotal = (value, totals_and_proceed_subtotal) => {
    totals_and_proceed_subtotal.innerText = "subtotal\t\t" + value + currency;
}

const set_total = (value, totals_and_proceed_total) => {
    totals_and_proceed_total.innerText = "total\t  " + (value + shipping_price) + currency;
}

const load_shipping = (container) => {
    if (shipping_content_state != undefined) {
        container.appendChild(shipping_content_state);
    }
    else {
        const shipping_info_container = document.createElement("div");
        shipping_info_container.setAttribute("id", "shipping_info_container");

        load_purchase_status(shipping_info_container);

        const billing_info_container = document.createElement("div");
        billing_info_container.setAttribute("id", "billing_info_container");

        const billing_info_name = document.createElement("textarea");
        billing_info_name.setAttribute("class", "textarea billing");
        billing_info_name.setAttribute("placeholder", "nome");
        billing_info_name.setAttribute("id", "billing_info_name");
        billing_info_container.appendChild(billing_info_name);

        const billing_info_nif = document.createElement("textarea");
        billing_info_nif.setAttribute("class", "textarea billing");
        billing_info_nif.setAttribute("placeholder", "nif");
        billing_info_nif.setAttribute("id", "billing_info_nif");
        billing_info_container.appendChild(billing_info_nif);

        const billing_info_address = document.createElement("textarea");
        billing_info_address.setAttribute("class", "textarea billing");
        billing_info_address.setAttribute("placeholder", "endereço");
        billing_info_address.setAttribute("id", "billing_info_address");
        billing_info_container.appendChild(billing_info_address);

        const billing_zipcode_locale_wrapper = document.createElement("div");
        billing_zipcode_locale_wrapper.setAttribute("id", "billing_zipcode_locale_wrapper");

        const billing_info_zipcode = document.createElement("textarea");
        billing_info_zipcode.setAttribute("class", "textarea billing");
        billing_info_zipcode.setAttribute("placeholder", "código postal");
        billing_info_zipcode.setAttribute("id", "billing_info_zipcode");
        billing_zipcode_locale_wrapper.appendChild(billing_info_zipcode);

        const billing_info_locale = document.createElement("textarea");
        billing_info_locale.setAttribute("class", "textarea billing");
        billing_info_locale.setAttribute("placeholder", "localidade");
        billing_info_locale.setAttribute("id", "billing_info_locale");
        billing_zipcode_locale_wrapper.appendChild(billing_info_locale);
        billing_info_container.appendChild(billing_zipcode_locale_wrapper);

        const billing_district_phone_wrapper = document.createElement("div");
        billing_district_phone_wrapper.setAttribute("id", "billing_district_phone_wrapper");

        const billing_info_district = document.createElement("textarea");
        billing_info_district.setAttribute("class", "textarea billing");
        billing_info_district.setAttribute("placeholder", "distrito");
        billing_info_district.setAttribute("id", "billing_info_district");
        billing_district_phone_wrapper.appendChild(billing_info_district);

        const billing_info_phone = document.createElement("textarea");
        billing_info_phone.setAttribute("class", "textarea billing");
        billing_info_phone.setAttribute("placeholder", "telefone");
        billing_info_phone.setAttribute("id", "billing_info_phone");
        billing_district_phone_wrapper.appendChild(billing_info_phone);
        billing_info_container.appendChild(billing_district_phone_wrapper);

        const billing_info_email = document.createElement("textarea");
        billing_info_email.setAttribute("class", "textarea billing");
        billing_info_email.setAttribute("placeholder", "e-mail");
        billing_info_email.setAttribute("id", "billing_info_email");
        billing_info_container.appendChild(billing_info_email);

        shipping_info_container.appendChild(billing_info_container);
        load_continue_button(shipping_info_container, container);
        container.appendChild(shipping_info_container);

        shipping_content_state = shipping_info_container;
    }
}

const load_payment_methods = (container) => {
    const paypal_container = document.createElement("div");
    paypal_container.setAttribute("id", "paypal_container");

    const paypal_image = document.createElement("img");
    paypal_image.setAttribute("id", "paypal_image");
    paypal_image.setAttribute("src", "assets/paypal.jpg");
    paypal_container.appendChild(paypal_image);

    const visa_container = document.createElement("div");
    visa_container.setAttribute("id", "visa_container");

    const visa_image = document.createElement("img");
    visa_image.setAttribute("id", "visa_image");
    visa_image.setAttribute("src", "assets/visa.jpg");
    visa_container.appendChild(visa_image);

    const mbway_container = document.createElement("div");
    mbway_container.setAttribute("id", "mbway_container");

    const mbway_image = document.createElement("img");
    mbway_image.setAttribute("id", "mbway_image");
    mbway_image.setAttribute("src", "assets/mbway.jpg");
    mbway_container.appendChild(mbway_image);

    const multibanco_container = document.createElement("div");
    multibanco_container.setAttribute("id", "multibanco_container");

    const multibanco_image = document.createElement("img");
    multibanco_image.setAttribute("id", "multibanco_image");
    multibanco_image.setAttribute("src", "assets/multibanco.jpg");
    multibanco_container.appendChild(multibanco_image);

    container.appendChild(paypal_container);
    container.appendChild(visa_container);
    container.appendChild(mbway_container);
    container.appendChild(multibanco_container);
}

const load_payment = (container) => {
    if (payment_content_state != undefined) {
        container.appendChild(payment_content_state);
    }
    else {
        const payment_info_container = document.createElement("div");
        payment_info_container.setAttribute("id", "payment_info_container");

        load_purchase_status(payment_info_container);

        const payment_methods_container = document.createElement("div");
        payment_methods_container.setAttribute("id", "payment_methods_container");

        load_payment_methods(payment_methods_container);

        payment_info_container.appendChild(payment_methods_container);
        container.appendChild(payment_info_container);

        payment_content_state = payment_info_container;
    }
}

const load_continue_button = (container, cleaner) => {
    const continue_button_wrapper = document.createElement("div");
    continue_button_wrapper.setAttribute("id", "continue_button_wrapper");
    container.appendChild(continue_button_wrapper);

    const continue_button = document.createElement("div");
    continue_button.setAttribute("id", "continue_button");
    continue_button.onclick = () => {
        if (process_state == 1) {
            process_state = 2;
            clean_content(cleaner);
            load_shipping(cleaner);
        }
        else if (process_state == 2) {
            process_state = 3;
            clean_content(cleaner);
            load_payment(cleaner);
        }
    }
    continue_button_wrapper.appendChild(continue_button);

    const continue_button_p = document.createElement("p");
    continue_button_p.setAttribute("id", "continue_button_p");
    continue_button_p.innerText = "continuar";
    continue_button.appendChild(continue_button_p);
}

/* carregar conteúdo do carrinho */
const load_cart = (container) => {
    process_state = 1;

    const cart_content_container = document.createElement("div");
    cart_content_container.setAttribute("id", "cart_content_container");

    const back_to_shop = document.createElement("div");
    back_to_shop.setAttribute("id", "back_to_shop");

    const back_to_shop_p = document.createElement("p");
    back_to_shop_p.setAttribute("id", "back_to_shop_p");
    back_to_shop_p.innerText = "< continuar a comprar";
    back_to_shop.appendChild(back_to_shop_p);
    back_to_shop_p.onclick = () => {
        clean_content(container);
        if (merchandise_state != undefined) {
            container.appendChild(merchandise_state);
        }
        else {
            load_merchandise(container);
        }
    }

    const cart_content = document.createElement("div");
    cart_content.setAttribute("id", "cart_content");

    load_purchase_status(cart_content);

    subtotal = 0;
    for (let i = 0; i <= cart_size; i++) {
        if (cart_state[i] != undefined) {
            const prod = cart_state[i];
            console.log(prod.id);
            const in_cart_product = document.createElement("div");
            in_cart_product.setAttribute("id", "product_" + prod.id);
            in_cart_product.setAttribute("class", "in_cart_product");
            load_in_cart_product(in_cart_product, prod);
            if (products_state[prod.id] != undefined) {
                subtotal += products_state[prod.id].price * cart_state[i].quantity;
            }
            cart_content.appendChild(in_cart_product);
        }
    }

    const totals_and_proceed_wrapper = document.createElement("div");
    totals_and_proceed_wrapper.setAttribute("id", "totals_and_proceed_wrapper");
    cart_content.appendChild(totals_and_proceed_wrapper);

    const totals_and_proceed = document.createElement("div");
    totals_and_proceed.setAttribute("id", "totals_and_proceed");
    totals_and_proceed_wrapper.appendChild(totals_and_proceed);

    const totals_and_proceed_subtotal = document.createElement("p");
    totals_and_proceed_subtotal.setAttribute("id", "totals_and_proceed_subtotal");
    set_subtotal(subtotal, totals_and_proceed_subtotal);
    totals_and_proceed.appendChild(totals_and_proceed_subtotal);

    const totals_and_proceed_shipping = document.createElement("p");
    totals_and_proceed_shipping.setAttribute("id", "totals_and_proceed_shipping");
    totals_and_proceed_shipping.innerText = "portes de envio\t    " + shipping_price + currency;
    totals_and_proceed.appendChild(totals_and_proceed_shipping);

    const totals_and_proceed_total = document.createElement("p");
    totals_and_proceed_total.setAttribute("id", "totals_and_proceed_total");
    set_total(subtotal, totals_and_proceed_total);
    totals_and_proceed.appendChild(totals_and_proceed_total);

    load_continue_button(cart_content, container);

    cart_content_container.appendChild(back_to_shop);
    cart_content_container.appendChild(cart_content);

    container.appendChild(cart_content_container);
}

/* carregar carrinho (visual) */
const load_cart_visual = (container, wrapper) => {
    const cart = document.createElement("div");
    cart.setAttribute("id", "cart");
    cart.onclick = () => {
        clean_content(wrapper);
        load_cart(wrapper);
    }

    const cart_img = document.createElement("img");
    cart_img.setAttribute("src", "./assets/carti.png")

    const cart_num = document.createElement("div");
    cart_num.setAttribute("id", "cart_num");

    const cart_num_p = document.createElement("p");
    cart_num_p.setAttribute("id", "cart_num_p");
    cart_num_p.innerText = "0";

    cart_num.appendChild(cart_num_p);
    cart.appendChild(cart_img);
    cart.appendChild(cart_num);
    container.appendChild(cart);
}

/* carregar conteúdo da opção merchandise */
const load_merchandise = (container) => {
    if (merchandise_state != undefined) {
        container.appendChild(merchandise_state);
        return;
    }

    const merchandise_container = document.createElement("div");
    merchandise_container.setAttribute("id", "merchandise_container");

    const products = document.createElement("div");
    products.setAttribute("id", "products");

    load_product(products, 1, "assets/tote-LM.jpeg", "TOTE BAG - LISTA G", 5);
    load_product(products, 2, "assets/Sweater.jpg", "SWEATER - LISTA G", 18);
    load_product(products, 3, "assets/T-Shirt.jpg", "T-SHIRT - LISTA G", 10);
    load_product(products, 4, "assets/pin.jpg", "PIN - LISTA G", 1);
    merchandise_container.appendChild(products);

    load_cart_visual(merchandise_container, container);

    container.appendChild(merchandise_container);

    merchandise_state = merchandise_container;
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
    if (proposal_state != undefined) {
        container.appendChild(proposal_state)
        return;
    }

    const proposal_container = document.createElement("div");
    proposal_container.setAttribute("id", "proposal_container");

    const video = document.createElement("div");
    video.setAttribute("id", "proposal_video");

    const measures_container = document.createElement("div");
    measures_container.setAttribute("id", "measures_container");
    const measures_title = document.createElement("p");
    measures_title.setAttribute("id", "measures_title");
    measures_title.innerHTML = "medidas";

    const measures = document.createElement("div");
    for (let i = 0; i < 9; i++) {
        load_measure(measures_container, i + 1);
    }
    measures_container.appendChild(measures);

    proposal_container.appendChild(video);
    proposal_container.appendChild(measures_title);
    proposal_container.appendChild(measures_container);

    container.appendChild(proposal_container);

    proposal_state = proposal_container;
}

/* ELEMENTS */
/* (de facto a) carregar conteúdo da opção clicada */
const load_elements_option_content = (elements_number, name_position, title_text, mleft) => {
    const container = document.getElementById("page_content");
    clean_content(container);

    const title = document.createElement("p");
    title.setAttribute("id", "elements_title");
    title.innerHTML = title_text;
    container.appendChild(title);

    const elements = document.createElement("div");
    elements.setAttribute("id", "elements_content");

    for (let i = 0; i < elements_number << 1; i += 2) {
        const name = name_position[i];
        const role = name_position[i + 1];

        const element = document.createElement("div");
        element.setAttribute("class", "element");

        const element_image = document.createElement("div");
        element_image.setAttribute("class", "element_image");

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
                ["bruna moutinho", "presidente", "mariana figueiredo", "vice presidente",
                    "ricardo ferreira", "tesoureiro", "marta barroso", "secretaria",
                    "poema sefa", "secretaria"],
                "A direção e composta pela Presidente, que coordena toda a dinâmica interna do Núcleo e faz a ligação com as entidades externas, pelo Vice-Presidente, que auxilia o Presidente no que for necessário, pela Secretária, responsável pela organização e documentação da informação mais importante discutida e aprovada pelos membros da esec, e pela Tesoureira, que trata das contas do Núcleo. Toda a direcao tem ainda o dever de assumir as maiores responsabilidades quando necessário.");
            break;
        case 5:
            load_elements_option_content(
                3,
                ["miguel tobback", "colaborador",
                    "diva coelho", "colaborador",
                    "oscar castro", "colaborador"],
                "A secção de acao social e ambiente e responsável por angariar fundos solidarios e por organizar os eventos  relacionados ao ambiente.");
        default:
            break;
    }
}

/* limpar opções abaixo da opção 'secções */
const clean_sections_options = (container) => {
    for (let i = 0; i <= 5; i++) {
        container.removeChild(container.lastChild);
    }
}

/* carregar opções restantes quando a opção 'secções' é clicada */
const load_sections_options = (container) => {
    for (let i = 5; i <= 10; i++) {
        const page_option = document.createElement("div");
        page_option.setAttribute("class", "page_option");

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
        container.appendChild(page_option);
    }
}

/* carregar conteúdo da opção elementos */
const load_elements = (container) => {
    if (elements_state != undefined) {
        container.appendChild(elements_state);
        return;
    }

    const elements_container = document.createElement("div");
    elements_container.setAttribute("id", "elements_container");

    const page_options = document.createElement("div");
    page_options.setAttribute("id", "page_options");

    for (let i = 1; i <= 4; i++) {
        const page_option = document.createElement("div");
        if (i == 1) {
            page_option.setAttribute("class", "page_option first_option");
        }
        else {
            page_option.setAttribute("class", "page_option");
        }

        /* opção 'secções' (caso especial) */
        if (i == 4) {
            page_option.onclick = () => {
                if (elements_sections_clicked == 0) {
                    load_sections_options(page_options);
                    page_option.style.backgroundColor = "#2D5B8C";
                    page_option.style.color = "white";
                    elements_sections_clicked = 1;
                }
                else {
                    clean_sections_options(page_options);
                    page_option.removeAttribute("style");
                    elements_sections_clicked = 0;
                }
                load_elements_option(i);
            }
            page_option.onmouseover = () => {
                page_option.style.cursor = "pointer";
                if (elements_sections_clicked == 0) {
                    page_option.style.color = "#2D5B8C";
                }
            }
            page_option.onmouseout = () => {
                page_option.removeAttribute("style");
                if (elements_sections_clicked == 1) {
                    page_option.style.backgroundColor = "#2D5B8C";
                    page_option.style.color = "white";
                }
            }
        }
        /* qualquer outra opção */
        else {
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

    elements_state = elements_container;

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