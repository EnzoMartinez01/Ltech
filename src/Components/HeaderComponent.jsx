import React from 'react';
import logoblack from '../Static/Images/Principal/Logo.png';
import '../Static/Css/header.css';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import $ from 'jquery';
import Headroom from 'headroom.js';

export default function HeaderComponent() {
    $(function () {
        var header = document.getElementById('header');
        var headroom = new Headroom(header);
        headroom.init();
        //Menú Responsive
        // Calculamos el ancho e la página

        var ancho = $(window).width(),
            links = $('#enlaces'),
            btnMenu = $('#btn-menu'),
            icono = $('#btn-menu .icono-menu');

        if (ancho < 1179) {
            links.hide(); // el hide sirve para esconder los elementos
            icono.addClass('fa-bars');
        }

        btnMenu.on('click', function (e) {
            links.slideToggle(); //jQuery dispone de una función que nos permite mostrar u ocultar contenido con efecto slide con la lógica de que si el contenedor no está visible se muestra con slideDown y si está visible se oculta con slideUp. Se trata de la función slideToggle().
            icono.toggleClass('fa-bars'); //permite cada vez que se ejecute cambiar de estado la visibilidad del elemento HTML, es decir si está visible pasa a oculto y si se encuentra oculto pasa a visible.
            icono.toggleClass('fa-times');

        });

        $(window).on('resize', function () {
            if ($(this).width() > 650 && $(this).height() > 1) {
                links.show();
                icono.addClass('fa-times');
                icono.removeClass('fa-bars');
            } else {
                links.hide();
                icono.addClass('fa-bars');
                icono.removeClass('fa-times');
            }

        });
    });
    return (
        <>
            <header id='header'>
                <nav className='menu'>
                    <div className='logo'>
                        <Link to={"/"}><img src={logoblack} alt="L'tech" className='logoimg' />
                            <h1>L'Tech</h1>
                        </Link>
                        <button href="" class="btn-menu" id="btn-menu" >
                            <i class="icono-menu fa fa-bars"></i>
                        </button>
                    </div>
                    <div className='enlaces' id='enlaces'>
                        <Link to={"/"} id='link'>Inicio</Link>
                        <Link to={"/servicios"} id='link'>Servicios</Link>
                        <Link to={"/contacto"} id='link'>Contacto</Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

