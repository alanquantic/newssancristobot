import Image from "next/image";
import Link from "next/link";

const ASSET_BASE = "https://news.sancristobot.org/wp-content/uploads/2025/11";
const HERO_IMAGE = `${ASSET_BASE}/trojes_.jpg`;
const POST_IMAGE = `${ASSET_BASE}/sancristobot.jpg`;

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:inline-block focus:h-auto focus:w-auto focus:overflow-visible focus:rounded focus:bg-brand-primary-dark focus:px-4 focus:py-2 focus:text-white focus:outline focus:outline-2 focus:outline-offset-2"
      >
        Ir al contenido
      </a>

      <header className="sr-only">
        <p>TROJES SAN CRISTÓBAL — News del Condominio</p>
      </header>

      <main id="contenido">
        {/* Hero: min-height 100vh, imagen de portada, títulos centrados (Elementor) */}
        <section
          className="relative flex min-h-[500px] flex-col items-center justify-start bg-cover bg-center bg-no-repeat md:min-h-[600px] lg:min-h-screen"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        >
          <div
            className="pointer-events-none absolute inset-0 bg-black/15"
            aria-hidden
          />
          <div className="relative z-10 flex w-full max-w-[1240px] flex-col items-center px-4 pt-[120px] md:pt-[150px] lg:pt-[32vh]">
            <h1 className="text-center text-[50px] font-normal uppercase leading-none tracking-[5px] text-brand-primary-dark md:text-[60px] md:tracking-[7px] lg:text-[80px] lg:tracking-[10px]">
              TROJES SAN CRISTÓBAL
            </h1>
            <h2 className="mt-1 text-center text-[25px] font-light uppercase leading-none tracking-[2px] text-black md:text-[35px] md:tracking-[4px] lg:text-[40px] lg:tracking-[6.3px]">
              NEWS
            </h2>
          </div>
        </section>

        {/* Sobre */}
        <section className="mx-auto my-12 max-w-[1240px] px-4 md:my-20 lg:my-[80px] lg:px-5">
          <div className="lg:pr-20">
            <h2 className="mb-2.5 text-[30px] font-medium uppercase leading-tight text-black lg:text-[36px]">
              Sobre
            </h2>
            <p className="max-w-3xl text-[17px] leading-[1.7] text-[#585858]">
              Micrositio de Noticias de Trojes de San Cristobal. Entérate de las
              últimas noticias de administración y la comunidad que a todos nos
              importa
            </p>
          </div>
        </section>

        {/* Listado / artículo destacado */}
        <section className="mx-auto mb-12 max-w-[1240px] px-4 md:mb-20 lg:mb-[100px] lg:px-5">
          <article className="overflow-hidden rounded-sm bg-white md:bg-brand-soft">
            <Link
              href="#"
              className="relative block aspect-[50/33] w-full overflow-hidden md:aspect-[100/66]"
              aria-label="Ver noticia: ¡Lanzamos San CristoBot!"
            >
              <Image
                src={POST_IMAGE}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1240px) 100vw, 1240px"
                priority
              />
            </Link>
            <div className="px-1 py-6 md:px-4 lg:p-8 lg:px-10">
              <h2 className="mb-2 text-[28px] font-medium leading-tight text-black md:text-[32px] lg:text-[35px]">
                <Link
                  href="#"
                  className="text-black no-underline hover:text-brand-primary-dark"
                >
                  ¡Lanzamos San CristoBot!
                </Link>
              </h2>
              <p className="mb-6 text-[20px] text-[#585858] md:text-[23px] lg:text-[25px]">
                <time dateTime="2025-11-20">noviembre 20, 2025</time>
              </p>
              <div className="space-y-4 text-[17px] leading-[1.7] text-[#585858]">
                <p>
                  <span aria-hidden>🚀 </span>
                  <strong className="font-medium text-black">
                    Nueva Herramienta: Tu condominio ahora es más inteligente
                  </strong>
                </p>
                <p>
                  Estimados condóminos de{" "}
                  <strong className="font-medium text-black">
                    Trojes de San Cristóbal
                  </strong>
                  ,
                </p>
                <p>
                  Con el objetivo de mejorar nuestra comunicación y brindarles
                  respuestas más rápidas, nos complace anunciar el lanzamiento de
                  nuestro micrositio y asistente virtual:{" "}
                  <strong className="font-medium text-black">
                    San Cristobot
                  </strong>
                  .
                </p>
                <p>
                  <strong className="font-medium text-black">
                    ¿Qué es San Cristobot?
                  </strong>{" "}
                  Es una herramienta diseñada para gestionar las dudas más
                  frecuentes sin necesidad de acudir a la oficina o esperar una
                  respuesta manual.
                </p>
                <p>
                  <strong className="font-medium text-black">
                    Desde hoy, podrán autogestionar lo siguiente:
                  </strong>
                </p>
                <ol className="list-decimal space-y-2 pl-6 marker:text-[#585858]">
                  <li>
                    <strong className="font-medium text-black">
                      Salón de Eventos:
                    </strong>{" "}
                    Verifiquen disponibilidad y realicen reservas (con 3 días de
                    antelación).
                  </li>
                  <li>
                    <strong className="font-medium text-black">Finanzas:</strong>{" "}
                    Consulten su saldo actual con el condominio.
                  </li>
                  <li>
                    <strong className="font-medium text-black">Reportes:</strong>{" "}
                    Levanten incidencias o quejas de forma directa.
                  </li>
                  <li>
                    <strong className="font-medium text-black">
                      Información:
                    </strong>{" "}
                    Acceso directo a teléfonos de caseta, administración y dudas
                    sobre el reglamento.
                  </li>
                </ol>
                <p>
                  <strong className="font-medium text-black">
                    ¿Cómo acceder?
                  </strong>{" "}
                  Simplemente ingresen a nuestro nuevo micrositio:{" "}
                  <a
                    href="https://sancristobot.org"
                    className="font-medium text-brand-primary-dark underline decoration-brand-primary-dark/40 underline-offset-2 hover:text-brand-primary"
                  >
                    sancristobot.org
                  </a>{" "}
                  y busquen la ventana de chat en la esquina inferior derecha.
                </p>
                <p>
                  Seguimos trabajando para hacer de Trojes de San Cristóbal una
                  comunidad para todos.
                </p>
                <p>
                  Atentamente,{" "}
                  <strong className="font-medium text-black">
                    La Administración
                  </strong>
                </p>
              </div>
            </div>
          </article>
        </section>

        {/* CTA: fondo + overlay oscuro 59% */}
        <section
          className="relative bg-cover bg-center bg-no-repeat px-5 py-12 md:py-20 lg:px-0 lg:py-[100px] lg:pb-[200px]"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        >
          <div
            className="absolute inset-0 bg-[#160b0b]/[0.59]"
            aria-hidden
          />
          <div className="relative z-10 mx-auto flex max-w-[575px] flex-col items-center text-center text-white">
            <h2 className="mb-2.5 text-[28px] font-medium uppercase leading-tight tracking-[3px] text-white md:text-[35px] lg:tracking-[4.92px]">
              IR A SAN CRISTO BOT
            </h2>
            <p className="text-[17px] leading-[1.7]">
              ¿TE GUSTARÍA IR A NUESTRA HERRAMIENTA?
            </p>
            <div className="mt-6">
              <Link
                href="https://admin.sancristobot.org/resident-dashboard.html"
                className="inline-block border-0 bg-brand-primary px-10 py-4 text-base font-normal uppercase tracking-[3px] text-white no-underline transition-colors hover:bg-brand-primary-dark"
              >
                DA CLICK AQUÍ
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-auto border-t border-transparent bg-white py-9 text-center text-[15px] text-[#585858] md:py-12">
        <p>
          ©2025 Todos los Derechos Reservados. Hecho por CEOS Hyperion
        </p>
      </footer>
    </>
  );
}
