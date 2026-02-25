import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function MapaPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] p-10 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Mapa de Ayuda SCZ</h1>
      <p className="text-slate-600 mb-8 max-w-lg">Próximamente verás aquí un mapa interactivo con todos los puntos de donación y rescate en la ciudad.</p>
      <Link href="/" className="flex items-center gap-2 text-emerald-600 font-semibold hover:underline">
        <ArrowLeft size={18} /> Volver al inicio
      </Link>
    </main>
  );
}