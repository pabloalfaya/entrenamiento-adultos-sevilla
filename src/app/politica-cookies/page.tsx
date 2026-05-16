import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Cookies | Entrena Sevilla",
  description: "Política de cookies de Entrena Sevilla. Descubre qué cookies utilizamos y cómo configurarlas.",
};

export default function PoliticaCookiesPage() {
  return (
    <div className="bg-[#f5f7fb] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
          <h1 className="font-serif text-3xl font-bold text-ink mb-8">Política de Cookies</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-ink-soft">
            <p>
              En cumplimiento con el artículo 22.2 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), en <strong>entrenasevilla.es</strong> informamos sobre el uso de cookies en nuestro sitio web.
            </p>

            <h2 className="text-xl font-bold text-ink mt-8 mb-4">¿Qué son las cookies?</h2>
            <p>
              Una cookie es un fichero que se descarga en su ordenador o dispositivo móvil al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.
            </p>

            <h2 className="text-xl font-bold text-ink mt-8 mb-4">¿Qué tipos de cookies utiliza esta página web?</h2>
            <p>
              Este sitio web (desarrollado con Next.js) utiliza principalmente <strong>cookies técnicas y estrictamente necesarias</strong> para el correcto funcionamiento y visualización de la web por parte del usuario. Estas cookies no recaban información personal para su uso con fines de marketing.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan.</li>
            </ul>

            <h2 className="text-xl font-bold text-ink mt-8 mb-4">Gestión y desactivación de cookies</h2>
            <p>
              Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador o dispositivo móvil:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Google Chrome:</strong> <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ver instrucciones</a></li>
              <li><strong>Mozilla Firefox:</strong> <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ver instrucciones</a></li>
              <li><strong>Safari:</strong> <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ver instrucciones</a></li>
              <li><strong>Microsoft Edge:</strong> <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ver instrucciones</a></li>
            </ul>
            <p>
              Tenga en cuenta que si acepta las cookies de terceros y posteriormente desea eliminarlas, deberá hacerlo desde las opciones de su navegador.
            </p>

            <h2 className="text-xl font-bold text-ink mt-8 mb-4">Actualización de la política de cookies</h2>
            <p>
              Es posible que actualicemos la Política de Cookies de nuestro sitio web, por ello le recomendamos revisar esta política cada vez que acceda a nuestro sitio web con el objetivo de estar adecuadamente informado sobre cómo y para qué usamos las cookies.
            </p>

            <div className="mt-12 pt-8 border-t border-muted/50 text-center">
              <Link href="/" className="text-primary font-medium hover:underline">
                Volver a la página principal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}