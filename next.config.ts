/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Desactivamos la optimización de imágenes nativa porque GH Pages no tiene servidor para procesarlas
  images: {
    unoptimized: true, 
  },
};

export default nextConfig;