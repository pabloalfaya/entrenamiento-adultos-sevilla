import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad | Entrena Sevilla",
  description: "Política de privacidad y protección de datos de Entrena Sevilla. Descubre cómo tratamos y protegemos tus datos personales.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <div className="bg-[#f5f7fb] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm">
          <h1 className="font-serif text-3xl font-bold text-ink mb-8">Política de Privacidad</h1>
          
          <div className="prose prose-slate max-w-none space-y-6 text-ink-soft">
            <p>
              El presente documento describe la política de privacidad aplicable a los datos personales recogidos a través del sitio web <strong>entrenasevilla.es</strong>, de acuerdo con el Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).
            </p>

            <h2 className="text-xl font-bold text-ink mt-8 mb-4">1. Responsable del Tratamiento</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Titular:</strong> Juan José Alfaya Arias</li>
              <li><strong>Domicilio:</strong> Calle Virgen de Setefilla 12, 41011 Los Remedios, Sevilla</li>
              <li><strong>Correo electrónico:</strong> farrosqui@gmail.com</li>
              <li><strong>Teléfono:</strong> +34 666 003 340</li>
            </ul>

            <h2 className="text-xl font-bold text-ink mt-8 mb-4">2. Finalidad del tratamiento de los datos personales</h2>
            <p>
              Los datos personales que nos facilite a través de los diferentes canales de contacto disponibles en el sitio web (correo electrónico, teléfono, WhatsApp) serán tratados con las siguientes finalidades:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Responder a las consultas y solicitudes de información sobre nuestros servicios de entrenamiento.</li>
              <li>Gestionar la reserva de sesiones de valoración y entrenamientos.</li>
              <li>Mantener una relación comercial o profesional con usted.</li>
            </ul>

            <h2 className="text-xl font-bold text-ink mt-8 mb-4">3. Legitimación para el tratamiento</h2>
            <p>
              La base legal para el tratamiento de sus datos es su <strong>consentimiento expreso</strong>, otorgado al contactar con nosotros de forma proactiva mediante los canales facilitados. En el caso de que contrate nuestros servicios, la base legal será la <strong>ejecución de un contrato</strong> en el que el interesado es parte.
            </p>

            <h2 className="text-xl font-bold text-ink mt-8 mb-4">4. Conservación de los datos</h2>
            <p>
              Los datos personales proporcionados se conservarán mientras se mantenga la relación con usted o no solicite su supresión. Asimismo, se conservarán durante los años necesarios para cumplir con las obligaciones legales aplicables.
            </p>

            <h2 className="text-xl font-bold text-ink mt-8 mb-4">5. Comunicación de datos a terceros</h2>
            <p>
              Sus datos no serán cedidos a terceros, salvo obligación legal expresa. En el caso de utilizar servicios de mensajería como WhatsApp, sus datos estarán sujetos a las políticas de privacidad de dicha plataforma (WhatsApp Ireland Limited).
            </p>

            <h2 className="text-xl font-bold text-ink mt-8 mb-4">6. Derechos del usuario</h2>
            <p>
              Cualquier persona tiene derecho a obtener confirmación sobre si estamos tratando datos personales que le conciernan. Las personas interesadas tienen derecho a:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceder a sus datos personales.</li>
              <li>Solicitar la rectificación de los datos inexactos.</li>
              <li>Solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron recogidos.</li>
              <li>Solicitar la limitación de su tratamiento.</li>
              <li>Oponerse al tratamiento de sus datos.</li>
              <li>Solicitar la portabilidad de los datos.</li>
            </ul>
            <p>
              Para ejercer cualquiera de estos derechos, puede dirigirse por escrito al correo electrónico <strong>farrosqui@gmail.com</strong>, adjuntando una fotocopia de su DNI o documento equivalente para acreditar su identidad.
            </p>
            <p>
              Asimismo, si considera que el tratamiento de sus datos personales vulnera la normativa, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).
            </p>

            <h2 className="text-xl font-bold text-ink mt-8 mb-4">7. Medidas de seguridad</h2>
            <p>
              El titular se compromete al uso y tratamiento de los datos personales de los usuarios respetando su confidencialidad, así como a cumplir con su obligación de guardarlos y adaptar todas las medidas para evitar la alteración, pérdida, tratamiento o acceso no autorizado, de conformidad con lo establecido en la normativa vigente de protección de datos.
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