/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Demo embebida de AMAY: es una SPA estática (React Router) servida
      // desde public/proyectos/amay/demo/. Los archivos reales (assets,
      // icons, manifest) se resuelven primero por el filesystem; cualquier
      // otra sub-ruta (ej. /proyectos/amay/demo/onboarding) cae aquí y sirve
      // el index.html para que el router del lado del cliente la maneje.
      {
        source: "/proyectos/amay/demo",
        destination: "/proyectos/amay/demo/index.html",
      },
      {
        source: "/proyectos/amay/demo/:path*",
        destination: "/proyectos/amay/demo/index.html",
      },
    ];
  },
};

export default nextConfig;
