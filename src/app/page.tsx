"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { HeartHandshake, PawPrint, Gift, Search, MapPin, ArrowRight, Menu, ChevronDown, X } from 'lucide-react';

export default function HomePage() {
  // Estado para controlar si el menú de celular está abierto o cerrado
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Función para cerrar el menú al hacer clic en un enlace
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <main className="min-h-screen bg-[#F8FAFC] font-sans text-slate-800">
      
      {/* Navbar Minimalista */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HeartHandshake className="text-emerald-600" size={28} />
            <span className="font-extrabold text-xl tracking-tight text-slate-900">Voluntariado<span className="text-emerald-600">SCZ</span></span>
          </div>
          
          {/* Navegación para Computadoras (Desktop) */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            
            {/* Dropdown: Iniciativas */}
            <div className="relative group py-6">
              <button className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                Iniciativas <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 w-48 bg-white border border-slate-100 shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Link href="/iniciativas" className="block px-4 py-2 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">Ayuda a Personas</Link>
                <Link href="/iniciativas" className="block px-4 py-2 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">Rescate Animal</Link>
                <div className="my-1 border-t border-slate-100"></div>
                <Link href="/iniciativas" className="block px-4 py-2 font-semibold text-emerald-600 hover:bg-emerald-50 transition-colors">Ver todas</Link>
              </div>
            </div>

            {/* Dropdown: Organizaciones */}
            <div className="relative group py-6">
              <button className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                Organizaciones <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 w-56 bg-white border border-slate-100 shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Link href="/organizaciones" className="block px-4 py-2 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">Refugios y Asilos</Link>
                <Link href="/organizaciones" className="block px-4 py-2 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">Centros de Acopio</Link>
                <Link href="/organizaciones" className="block px-4 py-2 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">Registrar mi ONG</Link>
              </div>
            </div>

            {/* Dropdown: Mapa */}
            <div className="relative group py-6">
              <button className="flex items-center gap-1 hover:text-emerald-600 transition-colors">
                Mapa <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 w-48 bg-white border border-slate-100 shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <Link href="/mapa" className="block px-4 py-2 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">Mapa de Donaciones</Link>
                <Link href="/mapa" className="block px-4 py-2 hover:bg-emerald-50 hover:text-emerald-600 transition-colors">Zonas Críticas</Link>
              </div>
            </div>

          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
              <MapPin size={14} />
              Santa Cruz
            </div>
            
            {/* Botón de Menú para Celulares */}
            <button 
              className="md:hidden text-slate-600 hover:text-emerald-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Menú Desplegable para Celulares */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full left-0 top-16 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-6 py-6 flex flex-col gap-6">
              
              {/* Sección Iniciativas Celular */}
              <div className="flex flex-col gap-3">
                <span className="font-bold text-slate-900 border-b border-slate-100 pb-2">Iniciativas</span>
                <Link href="/iniciativas" onClick={closeMenu} className="text-slate-600 pl-2 hover:text-emerald-600">Ayuda a Personas</Link>
                <Link href="/iniciativas" onClick={closeMenu} className="text-slate-600 pl-2 hover:text-emerald-600">Rescate Animal</Link>
                <Link href="/iniciativas" onClick={closeMenu} className="text-emerald-600 font-semibold pl-2">Ver todas</Link>
              </div>

              {/* Sección Organizaciones Celular */}
              <div className="flex flex-col gap-3">
                <span className="font-bold text-slate-900 border-b border-slate-100 pb-2">Organizaciones</span>
                <Link href="/organizaciones" onClick={closeMenu} className="text-slate-600 pl-2 hover:text-emerald-600">Refugios y Asilos</Link>
                <Link href="/organizaciones" onClick={closeMenu} className="text-slate-600 pl-2 hover:text-emerald-600">Centros de Acopio</Link>
                <Link href="/organizaciones" onClick={closeMenu} className="text-slate-600 pl-2 hover:text-emerald-600">Registrar mi ONG</Link>
              </div>

              {/* Sección Mapa Celular */}
              <div className="flex flex-col gap-3">
                <span className="font-bold text-slate-900 border-b border-slate-100 pb-2">Mapa</span>
                <Link href="/mapa" onClick={closeMenu} className="text-slate-600 pl-2 hover:text-emerald-600">Mapa de Donaciones</Link>
                <Link href="/mapa" onClick={closeMenu} className="text-slate-600 pl-2 hover:text-emerald-600">Zonas Críticas</Link>
              </div>

            </div>
          </div>
        )}
      </nav>

      {/* Hero Section Moderno */}
      <section className="relative pt-24 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/50 to-transparent -z-10" />
        
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Conecta tu tiempo con <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              quienes más lo necesitan
            </span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Encuentra oportunidades de voluntariado, apoya a refugios locales y descubre puntos de donación en toda la ciudad. Tu ayuda transforma realidades.
          </p>

          {/* Buscador Flotante */}
          <div className="bg-white p-2 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col md:flex-row gap-2 max-w-2xl mx-auto">
            <div className="flex-1 flex items-center px-4 py-3 md:py-0">
              <Search className="text-slate-400 mr-3" size={20} />
              <input 
                type="text" 
                placeholder="Ej. Asilos, rescate animal, recolección..." 
                className="w-full bg-transparent border-none outline-none text-slate-700 placeholder:text-slate-400"
              />
            </div>
            <button className="bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-emerald-700 transition-all shadow-sm hover:shadow-emerald-200">
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* Sección de Categorías (Cards de alto diseño) */}
      <section className="max-w-7xl mx-auto px-6 pb-24 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Tarjeta 1: Personas */}
          <div className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
              <HeartHandshake className="text-emerald-600 group-hover:text-white transition-colors duration-300" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Personas</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Brinda apoyo y compañía a niños, adultos mayores y familias en situación de vulnerabilidad en nuestra ciudad.
            </p>
            <button className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
              Explorar voluntariados <ArrowRight size={18} />
            </button>
          </div>

          {/* Tarjeta 2: Animalitos */}
          <div className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mb-6 group-hover:bg-amber-500 transition-colors duration-300">
              <PawPrint className="text-amber-600 group-hover:text-white transition-colors duration-300" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Animalitos</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Apoya a refugios, rescata un perrito de la calle o ayuda a cuidar manadas enteras que buscan un hogar definitivo.
            </p>
            <button className="flex items-center gap-2 text-amber-600 font-semibold group-hover:gap-3 transition-all">
              Ayudar a refugios <ArrowRight size={18} />
            </button>
          </div>

          {/* Tarjeta 3: Donaciones */}
          <div className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-colors duration-300">
              <Gift className="text-purple-600 group-hover:text-white transition-colors duration-300" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Donaciones</h3>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Localiza puntos de acopio verificados para entregar ropa, alimentos, medicinas y artículos de primera necesidad.
            </p>
            <button className="flex items-center gap-2 text-purple-600 font-semibold group-hover:gap-3 transition-all">
              Ver puntos de acopio <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>

      {/* Footer Limpio */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 opacity-80 justify-center md:justify-start">
            <HeartHandshake className="text-slate-400" size={20} />
            <span className="font-bold text-slate-400 tracking-tight">VoluntariadoSCZ</span>
          </div>
          <p className="text-sm text-slate-400">
            © 2026 Santa Cruz de la Sierra. Construido para ayudar.
          </p>
          <div className="flex justify-center gap-6 text-sm font-medium text-slate-400">
            <span className="hover:text-emerald-600 cursor-pointer">Privacidad</span>
            <span className="hover:text-emerald-600 cursor-pointer">Términos</span>
          </div>
        </div>
      </footer>

    </main>
  );
}