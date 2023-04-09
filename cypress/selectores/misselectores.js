class pantallas{

    login = {
        "ingresoallogin": '#login2',
        "corroborotextologin": '#logInModalLabel',
        "name_login": '#loginusername',
        "password_word": '#logInModal > div > div > div.modal-body > form > div:nth-child(2) > label',
        "pass_login": '#loginpassword',
        "recuadrodelogin": '#logInModal > div > div',
        "welcome_name": '#nameofuser'
    }

    phones = {
        "btn_phone": '#itemc',
        "texto_nexus": '#tbodyid > div:nth-child(3) > div > div > h5',
        "btn_nexus_6": '#tbodyid > div:nth-child(3) > div > div > h4 > a',
        "btn_addtocard": '#tbodyid > div.row > div > a'
    }

    pagina_principal = {
        "btn_home": '#navbarExample > ul > li.nav-item.active > a',
        "texto_productstore": '#nava'
    }

    laptops = {
        "btn_laptop": '#contcont > div > div.col-lg-3 > div',
        "texto_sony": '#tbodyid > div:nth-child(1) > div > div > h4 > a',
        "btn_sony_i7": '#contcont > div > div.col-lg-9'
    }

    monitors = {
        "btn_monitor": '#contcont > div > div.col-lg-3 > div',
        "texto_asus": '#tbodyid > div:nth-child(2) > div > div > h4 > a',
        "btn_monitor_aple": '#tbodyid > div:nth-child(1) > div > div > h4 > a'
    }

    carrito_de_compras = {
        "btn_carrito": '#cartur',
        "btn_placeorder": '#page-wrapper > div > div.col-lg-1 > button',
        "texto_total": '#totalm',
        "name_formulario": '#name',
        "country_formulario": '#country',
        "city_formulario": '#city',
        "card_formulario": '#card',
        "month_formulario": '#month',
        "year_formulario": '#year',
        "formulario": '#orderModal > div > div > div.modal-body > form',
        "btn_purcharse": '#orderModal > div > div > div.modal-footer > button.btn.btn-primary',
        "alertadecompraexitosa": 'body > div.sweet-alert.showSweetAlert.visible',
        "btn_ok": 'body > div.sweet-alert.showSweetAlert.visible > div.sa-button-container > div > button'
    }

    desloguearse = {
        "btn_desloguearse": '#logout2'
    }
}

module.exports = new pantallas();
