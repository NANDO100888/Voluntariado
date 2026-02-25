import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function OrganizacionesPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] p-10 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Organizaciones Aliadas</h1>
      <p className="text-slate-600 mb-8 max-w-lg">Directorio de refugios, asilos y ONGs verificadas que necesitan tu apoyo constante.</p>
      <Link href="/" className="flex items-center gap-2 text-emerald-600 font-semibold hover:underline">
        <ArrowLeft size={18} /> Volver al inicio
      </Link>
    </main>
  );
}