import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso Legal | Entrena Sevilla",
  description: "Aviso legal de Entrena Sevilla. Información legal sobre el titular de la web y condiciones de uso.",
};

export default function AvisoLegalPage() {
  return (
    <div className="bg-[#f5f7fb] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
          <h1 className="font-serif text-3xl font-bold text-ink mb-8">Aviso Legal</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-ink-soft">
            <p>
              El presente aviso legal regula el uso y utilización del sitio web <strong>entrenasevilla.es</strong>, del que es titular <strong>Juan José Alfaya Arias</strong>.
            </p>

            <h2 className="text-xl font-bold text-ink mt-8 mb-4">1. Datos identificativos</h2>
            <p>
              En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Titular:</strong> Juan José Alfaya Arias</li>
              <li><strong>Domicilio:</strong> Calle Virgen de Setefilla 12, 41011 Los Remedios, Sevilla</li>
              <li><strong>Correo electrónico:</strong> farrosqui@gmail.com</li>
              <li><strong>Teléfono:</strong> +34 666 003 340</li>
            </ul>

            <h2 className="text-xl font-bold text-ink mt-8 mb-4">2. Usuarios</h2>
            <p>
              El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.
            </p>

            <h2 className="text-xl font-bold text-ink mt-8 mb-4">3. Uso del portal</h2>
            <p>
              <strong>entrenasevilla.es</strong> proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, "los contenidos") en Internet pertenecientes al titular o a sus licenciantes a los que el USUARIO pueda tener acceso.
            </p>
            <p>
              El USUARIO asume la responsabilidad del uso del portal. Dicha responsabilidad se extiende al registro que fuese necesario para acceder a determinados servicios o contenidos. En dicho registro el USUARIO será responsable de aportar información veraz y lícita.
            </p>
            <p>
              El USUARIO se compromete a hacer un uso adecuado de los contenidos y servicios que el titular ofrece a través de su portal y con carácter enunciativo pero no limitativo, a no emplearlos para incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.
            </p>

            <h2 className="text-xl font-bold text-ink mt-8 mb-4">4. Propiedad intelectual e industrial</h2>
            <p>
              El titular por sí o como cesionario, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido, audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.).
            </p>
            <p>
              Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización del titular.
            </p>

            <h2 className="text-xl font-bold text-ink mt-8 mb-4">5. Exclusión de garantías y responsabilidad</h2>
            <p>
              El titular no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
            </p>

            <h2 className="text-xl font-bold text-ink mt-8 mb-4">6. Modificaciones</h2>
            <p>
              El titular se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
            </p>

            <h2 className="text-xl font-bold text-ink mt-8 mb-4">7. Enlaces</h2>
            <p>
              En el caso de que en <strong>entrenasevilla.es</strong> se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet, el titular no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso el titular asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud, veracidad, validez y constitucionalidad de cualquier material o información contenida en ninguno de dichos hipervínculos u otros sitios de Internet.
            </p>

            <h2 className="text-xl font-bold text-ink mt-8 mb-4">8. Legislación aplicable y jurisdicción</h2>
            <p>
              La relación entre el titular y el USUARIO se regirá por la normativa española vigente y cualquier controversia se someterá a los Juzgados y tribunales de la ciudad de Sevilla.
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