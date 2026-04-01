export type MatryoshkaItem = {
  id: string;
  title: string;
  originalSource: string;
  content: string; // Markdown text to be parsed
};

export type DeepModule = {
  id: string;
  title: string;
  icon: string;
  summary: string;
  synthesis: string;
  stats: { label: string; val: string }[];
  accordions: MatryoshkaItem[];
};

export const modulesData: DeepModule[] = [
  {
    id: 'ecosistema',
    title: 'Núcleo & Ecosistema',
    icon: '🌐',
    summary: 'La visión territorial de NIDO y el marco departamental 2032.',
    synthesis: 'El ecosistema del Valle del Cauca está en un punto de ebullición. Con más de 300 startups impulsadas por NIDO y una política pública de Ciencia, Tecnología e Innovación enfocada en 7 ejes clave (Biodiversidad, Agro, Salud, etc.), existe una urgencia por traducir la complejidad técnica en narrativas de alto impacto que conecten a investigadores con inversionistas y tomadores de decisión.',
    stats: [
      { label: 'Startups NIDO', val: '+300' },
      { label: 'Focos CTeI', val: '7 Ejes' },
      { label: 'Ubicación', val: 'Cali / Valle' }
    ],
    accordions: [
      {
        id: 'eco-1',
        title: '1.1 Focos estratégicos de la política C+CTeI del Valle',
        originalSource: 'Blueprint Perplexity',
        content: `La Política Pública de Competitividad, Ciencia, Tecnología e Innovación del Valle del Cauca define, en su visión 2032, que el desarrollo departamental se impulsará a través de la CTeI en siete focos estratégicos: **Biodiversidad, Agropecuario‑Agroindustrial, Servicios‑Logística, Salud, Energía, Turismo y Educación**. Estos focos se consideran "vocaciones productivas" y orientan la priorización de proyectos, la formación de capital humano y la financiación con recursos del Sistema General de Regalías. Para cada foco se proyectan intervenciones en investigación aplicada, innovación empresarial y apropiación social del conocimiento, lo cual genera una base constante de proyectos científico‑tecnológicos que requieren traducción a formatos comprensibles para tomadores de decisión y públicos no especializados.

Estos focos se alinean con los Planes y Acuerdos Estratégicos Departamentales de CTeI (PAED), que condicionan la aprobación de proyectos de ciencia e innovación financiados con regalías a que se inscriban dentro de dichos focos. En la práctica, esto implica que buena parte de la producción de documentos técnicos de la región (proyectos, informes, resultados, evaluaciones) se concentra en estos siete ejes, creando una oportunidad clara para servicios de comunicación científica especializada segmentados por foco.`
      },
      {
        id: 'eco-2',
        title: '1.2 Estrategia NIDO y verticales priorizadas',
        originalSource: 'Blueprint Perplexity',
        content: `NIDO se describe como el Distrito de Innovación e Inteligencia Artificial del Valle, una estrategia conjunta de la Gobernación del Valle del Cauca, la Alcaldía de Cali y la Cámara de Comercio de Cali para fortalecer startups de base tecnológica mediante mentorías, conexiones con inversionistas y espacios de coworking. Reportes recientes indican que NIDO ha apoyado más de 300 startups tecnológicas entre 2024 y 2025, incrementando en alrededor de 20% el empleo en el sector de base tecnológica según declaraciones de la Gobernadora.

En cuanto a verticales, comunicaciones oficiales y programas asociados señalan énfasis en:

*   **Salud / HealthTech:** El programa "Valley Care", liderado por NIDO junto con la Gobernación, la Cámara de Comercio de Cali, Reddi Colombia y la Universidad Icesi, convoca soluciones de salud digital enfocadas en telemedicina y monitoreo remoto, internacionalización de servicios, uso de inteligencia artificial para diagnóstico y tratamiento, y optimización de procesos en el sistema de salud.
*   **Startups tecnológicas generales:** Comunicaciones de NIDO resaltan el acompañamiento a startups tecnológicas y científicas en etapa temprana con mentoría especializada, redes de contacto e inserción en ferias nacionales e internacionales.
*   **Sectores transversales tech:** La Cámara de Comercio de Cali identifica un Clúster de Economía Digital que agrupa empresas de productos, servicios y contenidos digitales, así como empresas de otros sectores con capacidades internas de desarrollo tecnológico digital.

Diversas notas institucionales mencionan que NIDO apoya empresas en salud, fintech, logística y educación, lo que coincide con las vocaciones de servicios‑logística, salud y educación de la política C+CTeI. Para un colectivo de comunicación científica, estas verticales concretas sugieren priorizar ofertas para healthtech, soluciones de logística y cadena de suministro basadas en datos, plataformas edtech y servicios intensivos en IA y analítica.`
      },
      {
        id: 'eco-3',
        title: '1.3 Incubadoras, clústeres y actores con los que aliarse',
        originalSource: 'Blueprint Perplexity',
        content: `Existen varios actores locales con mandato explícito de conectar ciencia, tecnología y empresa que pueden ser aliados o clientes directos para un estudio de comunicación científica transmedia:

*   **REDDI – Centro de innovación de la Cámara de Comercio de Cali:** Este centro tiene dos misiones principales: transferir y comercializar tecnologías, y facilitar la creación y aceleración de negocios de base tecnológica o científica. REDDI busca incrementar la protección de activos intangibles y conectar academia, Estado y empresa, lo cual encaja con la propuesta de traducir resultados de I+D a materiales de alto estándar institucional.
*   **Fundación Parquesoft Pacífico / Parquesoft TI:** Parquesoft Pacífico, con sede en Cali desde 2015, se define como fundación que fortalece el ecosistema de innovación y emprendimiento en el suroccidente colombiano, promoviendo formación y consolidación de empresas de base tecnológica e impacto social. Como parte de la red nacional Parquesoft (reconocida por MinCiencias como incubadora de empresas de base tecnológica en otras regiones), ofrece rutas de acompañamiento y formulación de proyectos, lo que abre espacio para ofrecer servicios de comunicación a su portafolio de startups.
*   **Zonamerica Colombia:** Es una zona franca de servicios en Cali que ofrece infraestructura de clase mundial para empresas tecnológicas y de servicios globales. Su posicionamiento como campus empresarial y parque de negocios y tecnología la convierte en espacio natural para startups exportadoras de servicios, que suelen requerir pitch decks e información en inglés adaptada a estándares internacionales.
*   **Cámara de Comercio de Cali y sus iniciativas clúster:** La Plataforma Clúster de la Cámara acompaña cadenas productivas dinámicas del Valle, incluyendo un Clúster de Economía Digital que agrupa empresas con capacidades de desarrollo tecnológico. Estas iniciativas suelen organizar agendas de proyectos, misiones empresariales y programas de sofisticación, donde servicios de comunicación científica pueden incorporarse como componente transversal.

En conjunto, NIDO, REDDI, Parquesoft Pacífico, Zonamerica y la Cámara de Comercio configuran un ecosistema donde un estudio de comunicación científica transmedia puede insertarse como proveedor recurrente de storytelling, visualización de datos y micrositios para proyectos de I+D, spin‑offs universitarios y startups tech.`
      },
      {
        id: 'eco-4',
        title: 'Alianzas Estratégicas y Networking Directo',
        originalSource: 'Deep Research',
        content: `*   **Universidad del Valle (UV):** Punto de partida natural: allí nos conocen. Contactar grupos de investigación, departamento de comunicaciones y editoriales universitarias. Ofrecer talleres o colaboraciones que aprovechen nuestra experiencia.
*   **Instituciones locales de ciencia y cultura:** INCIVA (Instituto de Valle), museos, planetarios; revistas científicas locales (mencionan convocatoria de INCIVA 2026 para divulgación). Establecer puentes con eventos de ciencia (ferias, congresos) y medios académicos.
*   **Colectivos y freelances:** Aunque no hay alianza formal, se puede colaborar con diseñadores freelancers o grupos afines (p. ej. "La Isla en Vela" en arte y educación) para proyectos multidisciplinares.
*   **Alianzas tecnológicas:** Participar en redes de emprendimiento de Cali (p.ej. Ruta N, hubs de innovación) para encontrar oportunidades conjuntas con startups interesadas en divulgación.`
      },
      {
         id: 'eco-5',
         title: 'Investigación de mercado regional',
         originalSource: 'Deep Research',
         content: `*   **Demanda laboral:** Según portales de empleo, hay numerosas ofertas de diseño en Cali (36 en Cali, 48 en Valle). Esto refleja actividad en el sector creativo local. Aunque nuestro enfoque es de nicho (comunicación científica), indica que empresas y organizaciones contratan servicios de diseño gráfico/multimedia.
*   **Iniciativas públicas:** El gobierno local impulsa ciencia y tecnología. Por ejemplo, la Alcaldía de Cali adoptó una Política Pública de CTeI (Acuerdo 0565 de 2023), lo que podría traducirse en más proyectos de divulgación vinculados al desarrollo regional. A nivel nacional, Minciencias lanza convocatorias millonarias (Convocatoria Colombia Inteligente 2026: $24.000M COP), aunque el colectivo no compite directamente, sí sugiere interés institucional en difusión de innovación.
*   **Competencia:** Existen agencias de diseño y comunicaciones generales (p.ej. Cuantika Studio, que ofrece "visualización de datos" e "infografías"), pero pocas especializadas en comunicación científica. Esto nos da ventaja de especialización, aunque la competencia general (agencias creativas, freelance) puede competir en precios.
*   **Rentabilidad:** Con costos mínimos (cero renta, equipos propios), el riesgo financiero inicial es bajo. El desafío es generar ingresos suficientes para sustentar 2 personas. Dado el mercado local (universidades, laboratorios, ONGs), es viable si se asegura un flujo constante de pequeños proyectos. Una estrategia de bajo costo (uso de herramientas gratuitas y reinversión de ingresos) favorecerá la rentabilidad. En resumen, la prospección indica un mercado pequeño pero creciente en Cali para comunicación científica, donde nuestra propuesta de valor (experiencia y enfoque transmedia) es favorable.`
      }
    ]
  },
  {
    id: 'recursos',
    title: 'Recursos & Estructura',
    icon: '💻',
    summary: 'Infraestructura tecnológica disponible y distribución de roles.',
    synthesis: 'Comenzamos ligeros, ágiles y bootstrap. Dos mentes híbridas cruzando diseño, tecnología y ciencia, operando con una infraestructura técnica in-house optimizada. Nuestro mayor activo no es el hardware, es la metodología: transformar la densidad de un paper o un desarrollo tecnológico en micro-experiencias hiper curadas.',
    stats: [
      { label: 'Equipo', val: '2 Personas' },
      { label: 'Costo Base', val: 'Bootstrap' },
      { label: 'Herramientas', val: 'Open / Free' }
    ],
    accordions: [
      {
        id: 'rec-1',
        title: 'Recursos Iniciales (Capital Humano y Hardware)',
        originalSource: 'Deep Research',
        content: `*   **Equipo humano:** 2 profesionales con amplia experiencia en divulgación científica. Ventaja clave: conocimiento de contenido técnico y redes académicas.
*   **Equipos y materiales:** Dos portátiles (Asus A15, MacBook M2), 2 PCs de escritorio, cámara réflex Nikon D5300 con flash básico y lentes, iPad Pro. Este hardware permite producción multimedia interna (foto, video, diseño).
*   **Financiamiento:** Presupuesto muy limitado (sin capital inicial externo). Se operará con bajo costo: casa/espacio compartido (sin alquiler), herramientas gratuitas/open source (p.ej. Figma, Canva, GIMP). Los gastos iniciales mínimos facilitan comenzar rápidamente, pero deberán controlarse cuidadosamente.`
      },
      {
        id: 'rec-2',
        title: 'Mensaje central y diferenciación',
        originalSource: 'Deep Research',
        content: `El colectivo promueve que **la divulgación científica sea atractiva y accesible**, no aburrida ni rígida. La comunicación debe ser **transmedia**: combinando gráficos, video, web y redes. De acuerdo con VO Comunicación, comunicar ciencia implica "transformar información compleja en mensajes claros, visuales y atractivos", lo que coincide con nuestro enfoque didáctico y creativo. Esto nos diferencia de agencias genéricas: nuestro mensaje es que la ciencia se cuenta de forma dinámica, estimulando la curiosidad. Se resaltará este diferencial en todos los materiales promocionales (slogan, branding, redes sociales).`
      },
      {
        id: 'rec-3',
        title: 'Roles y estructura operacional',
        originalSource: 'Deep Research',
        content: `*   **Diseñadora gráfica:** responsable de identidad visual, diseño de infografías, diagramación de documentos, materiales impresos/digitales estáticos.
*   **Diseñador multimedia/web:** encargado de animaciones, desarrollo de micrositios (usando Wordpress o similar gratuito), edición de video/fotografía y soluciones web interactivas (p.ej. presentaciones online).
Ambos colaboran en la conceptualización de proyectos y el contacto con clientes. Adicionalmente, se definirán roles administrativos mínimos (facturación, contabilidad sencilla). Dado el tamaño, no habrá empleados fijos adicionales inicialmente.`
      }
    ]
  },
  {
    id: 'operacion',
    title: 'Línea de Vida (12 Meses)',
    icon: '🗓️',
    summary: 'Plan de acción detallado para asegurar la tracción comercial a 1 año.',
    synthesis: 'Una ejecución milimétrica dividida en 4 fases, desde la validación de los primeros Productos Mínimos Viables transfiriendo proyectos simulados de la Universidad del Valle a scrollytelling, hasta la consolidación de tarifas por "Value-Based Pricing". No buscamos volumen masivo, buscamos 5 a 10 instituciones y equipos altamente comprometidos con revolucionar su comunicación de resultados.',
    stats: [
      { label: 'Fases', val: '4 Fases' },
      { label: 'Meta', val: '5 a 10 Cli' },
      { label: 'Hito 1', val: 'Mes 1' }
    ],
    accordions: [
      {
        id: 'op-1',
        title: 'Objetivos de crecimiento a 1 año',
        originalSource: 'Deep Research',
        content: `*   **Credibilidad y cartera de clientes:** Conseguir testimonios y casos de éxito iniciales para atraer nuevos clientes. Meta: 5–10 clientes recurrentes de investigación u ONG.
*   **Posicionamiento local:** Ser reconocidos en Cali como colectivo confiable. Apostar por alianzas con medios locales de ciencia y participar en eventos del sector.
*   **Expansión de oferta:** Evaluar incorporar colaboradores o formadores en comunicación científica para ampliar capacidad.
*   **Indicadores clave:** Número de proyectos realizados, satisfacción del cliente, visibilidad en redes y eventos (por ejemplo, charlas en UV). El éxito se medirá en reputación (boca a boca) y facturación sostenible básica. Dado el nicho, el crecimiento será orgánico; se estima duplicar la clientela inicial hacia el año, más que crecimientos exponenciales. No obstante, el impulso de políticas de CTeI en Cali (p.ej. nueva Política Pública de CTI) indica un escenario favorable a mediano plazo.`
      },
      {
        id: 'op-2',
        title: 'Fases del Plan Operativo Detallado',
        originalSource: 'Deep Research',
        content: `1.  **Preparación inicial (0-1 mes):**
    *   Definir nombre y branding (logo, paleta de colores, tono de comunicación).
    *   Crear portafolio demostrativo con 3–5 proyectos ficticios (p.ej. infografías sobre temas locales, maquetas de web de proyecto, video corto).
    *   Montar sitio web sencillo (usar plantillas) y perfiles en redes (LinkedIn, Instagram, Facebook) con identidad definida.
    *   Establecer precios base y paquetes (ver Modelo de negocio).
    *   Redactar presentaciones y plantillas de oferta.

2.  **Captación inicial (1-3 meses):**
    *   Contactar conocidos en UV: profesores, centros de investigación e innovación. Ofrecer pilotos sin costo o a precio reducido a cambio de testimonios.
    *   Asistir a eventos locales de ciencia (foros universitarios, ferias tecnológicas) para networking.
    *   Lanzar campañas en redes, enfocando mensaje de divulgación amena. Publicar muestras de trabajo.
    *   Registrar actividades en plataforma de gestión (p.ej. Trello) para seguimiento de tareas.

3.  **Operación y ajuste (3-6 meses):**
    *   Realizar los primeros proyectos (p.ej. infografía para un grupo de investigación, micrositio para una iniciativa cultural). Obtener feedback y mejorar procesos.
    *   Consolidar precios según horas reales invertidas. Aplicar fórmula sugerida: *(costos fijos mensuales + remuneración deseada) / 160 horas*.
    *   Buscar convocatorias locales de apoyo (incubadoras, fondos municipales) y nacionales (Minciencias) para proyectos asociativos.
    *   Evaluar entrada en plataformas freelance profesionales (Workana, Upwork) para ampliar cartera remota si hay capacidad.

4.  **Consolidación (6-12 meses):**
    *   Refinar servicios según demanda (por ejemplo, expandir a e-learning, podcasts si hay interés).
    *   Formular propuesta de valor para alianzas a largo plazo (universidad, centros culturales).
    *   Medir resultados: cantidad de clientes recurrentes, ingresos mensuales promedio (meta inicial cubrir costos básicos).
    *   Ajustar plan comercial si es necesario (ampliar prospectos, buscar fondos de innovación abierta, etc.).`
      },
      {
         id: 'op-3',
         title: 'Checklist Operativo Recomendado (Primera Semana)',
         originalSource: 'Blueprint Perplexity',
         content: `**Paso 1: Formalización mínima legal y tributaria**
*   Verificar con contador que los ingresos esperados por persona natural en 2025‑2026 se mantengan por debajo de 3.500 UVT anuales (o 4.000 UVT si se decide trabajar exclusivamente con entidades públicas) para conservar la condición de no responsable de IVA.
*   Actualizar el RUT de cada fundador con la actividad económica adecuada (diseño gráfico, producción audiovisual, consultoría en innovación/CTeI) y responsabilidades tributarias correctas (no responsable de IVA, declarante de renta según proceda).
*   Habilitarse como facturador electrónico ante la DIAN (usando el servicio gratuito o un proveedor tecnológico) y emitir una factura de prueba a una entidad amiga (por ejemplo, un laboratorio universitario) para validar proceso de facturación.

**Paso 2: Producto mínimo viable transmedia**
*   Diseñar al menos dos "casos demo" completos: un one‑pager de inversión y un micrositio tipo scrollytelling para un proyecto científico simulado en healthtech o logística, incorporando visualización de datos y narrativa clara.
*   Crear un mini‑deck de 10‑12 diapositivas que explique la propuesta de valor del estudio para startups de NIDO (antes/después de un pitch deck aburrido, ejemplos de layouts, KPIs de impacto narrativo), alineado con las tendencias de decks breves y visuales.
*   Preparar un video teaser de máximo 90 segundos que muestre el proceso de transformación de un reporte técnico en piezas transmedia, apto para compartir con aliados como NIDO, REDDI o Parquesoft.

**Paso 3: Inserción rápida en el ecosistema NIDO‑Valle**
*   Identificar, a través de los canales de la Gobernación, la Secretaría de Desarrollo Económico y NIDO, las startups en verticales salud, fintech, logística y educación que participan en convocatorias activas (por ejemplo, Youth Startup Academy y programas como Valley Care) y priorizar una lista corta de 10‑15 potenciales clientes.
*   Contactar formalmente a REDDI, Parquesoft Pacífico y la Cámara de Comercio de Cali para proponer el estudio como aliado de "comunicación de resultados" y ofrecer una charla gratuita sobre tendencias en scrollytelling y pitch decks para su comunidad.
*   Asistir a por lo menos un evento o convocatoria de NIDO o de los clústeres de la Cámara de Comercio en la próxima semana, llevando los demos impresos y digitales para activar conversaciones uno‑a‑uno con gestores de programas y founders.`
      },
      {
         id: 'op-4',
         title: 'Checklist Práctico (Logros a palomear)',
         originalSource: 'Deep Research',
         content: `*   [ ] Definir nombre y registro (si aplica).
*   [ ] Crear logo, sitio web y redes sociales con la identidad visual.
*   [ ] Establecer tarifas base y paquetes de servicios.
*   [ ] Preparar portafolio con ejemplos de trabajos (infografía, video, web).
*   [ ] Elaborar documentos de presentación y plantillas de mensajes de prospección.
*   [ ] Contactar primeros prospectos en UV (y otros conocidos).
*   [ ] Registrarse en plataformas de freelancing profesionales.
*   [ ] Seguir convocatorias de apoyo regional/nacional (Minciencias, alcaldía).`
      }
    ]
  },
  {
    id: 'comercial',
    title: 'Modelos & Ventas',
    icon: '💵',
    summary: 'Cotización por horas hombre y acercamientos outbound ("Lean Sales").',
    synthesis: 'Vendemos valor, no bytes. Nuestra estrategia comercial huye del discurso genérico de las agencias tradicionales. Usamos un enfoque "Lean Outbound" altamente quirúrgico: analizamos qué laboratorio universitario o qué startup en incubación comunica mal su avance, y les mostramos, con demostraciones reales, cómo el diseño transmedia retiene y multiplica la inversión (Value-Based Pricing) sin disonancias técnicas.',
    stats: [
      { label: 'Ventas', val: 'Outbound' },
      { label: 'Pricing', val: 'Value-Based' },
      { label: 'Conversión', val: 'Soft-Sell' }
    ],
    accordions: [
      {
        id: 'com-1',
        title: 'Marketing y Prospección "Lean"',
        originalSource: 'Deep Research',
        content: `*   **Estrategia de mensajería:** Personalizar cada contacto. Evitar presentaciones genéricas: centrarse en problema del cliente (p.ej. "Noté que su grupo comparte avances pero sin apoyo gráfico; ¿cómo lo comunican?"). Usar CTA suaves como "¿Le parece útil una breve llamada de 10 minutos para explorar esta idea?".
*   **Canales:** Email directo y LinkedIn (conexiones a académicos y gestores culturales). Crear contenido de valor en redes: infografías gratuitas relacionadas con ciencia local (atraer seguidores). Colaborar con blogs de ciencia o medios universitarios.
*   **Seguimiento:** Cronograma estricto: enviar recordatorios tras 1 semana si no hay respuesta. Registrar respuestas y actualizaciones (CRM simple o hoja de cálculo).
*   **Plantillas:** Preparar modelos de email y LinkedIn: saludo personalizado, breve introducción del colectivo (mensaje central), referencia a un proyecto relevante del receptor, invitación a contacto (ver "Ejemplo" abajo). Evitar lenguaje de venta agresiva.

**Ejemplo de mensaje email/LinkedIn:**
"Estimado/a Dr/a. [Nombre], me llamó la atención su proyecto sobre [Tema]. Creemos que su investigación merece difusión creativa: somos [Colectivo XYZ], especialistas en ilustrar ciencia de modo dinámico. ¿Le interesaría una breve charla de 10 min para explorar cómo podríamos apoyar su difusión con infografías o videos? Saludos cordiales."`
      },
      {
        id: 'com-2',
        title: 'Modelo de negocio y Cálculo de precios',
        originalSource: 'Deep Research',
        content: `*   **Tarifa por hora:** Calcular con fórmula indicada. Esto cubre salario y costos fijos. Fórmula: \`(costos fijos mensuales + remuneración deseada) / 160 horas\`. Por ejemplo, si entre ambos buscan $4M COP/mes y calculan 320h, el mínimo sería ~$12.500 COP/hora. En la práctica, se suelen cobrar tarifas más altas (por experiencia), por lo que puede redondearse hacia arriba ($25.000 – $50.000 COP/h).
*   **Paquetes de servicio:** Ofrecer categorías: básico (visión general, revisiones limitadas), estándar (más entregables), premium (consultoría + varios formatos). P.ej., "Paquete Web" incluye micrositio de 3 páginas + gestión de dominio por 2 meses, "Paquete Infográfico + Video". Precios referenciales según horas estimadas.
*   **Negociación:** Citar precios no redondos y justificar valor (años de experiencia). Para reducir percepciones de riesgo, puede ofrecerse una pequeña muestra gratuita o revisar parte del trabajo sin costo (estrategia de prospección).`
      }
    ]
  },
  {
    id: 'legal',
    title: 'Blindaje Jurídico',
    icon: '⚖️',
    summary: 'Regímenes Tributarios y Derechos Patrimoniales vs Autor (DNDA).',
    synthesis: 'La creatividad no es un commodity, y nuestro conocimiento tampoco. El blindaje jurídico establece la diferencia crucial entre vender las manos y vender la cabeza. Asegurar la titularidad moral irrenunciable sobre nuestro storytelling y dirección de arte nos permite construir el mejor portafolio de la región, mientras nuestros clientes explotan (Derechos Patrimoniales) las piezas para levantar capital y cumplir hitos institucionales.',
    stats: [
      { label: 'Tope UVT', val: '3.500 / 4.000' },
      { label: 'Regla', val: 'F. Electrónica' },
      { label: 'Autoría', val: 'Moral Creador' }
    ],
    accordions: [
      {
        id: 'leg-1',
        title: '2.1 Topes de ingresos para seguir como "no responsable de IVA"',
        originalSource: 'Blueprint Perplexity',
        content: `En Colombia, la figura que reemplazó al antiguo "régimen simplificado de IVA" es la de "no responsable de IVA", regulada principalmente por el artículo 437 del Estatuto Tributario y sus parágrafos. Para 2025, análisis tributarios actualizados señalan que las personas naturales que pretendan ser no responsables de IVA no pueden haber percibido en 2024 ingresos brutos por operaciones gravadas superiores a 3.500 UVT; con la UVT de 2024, este tope equivale a 164.728.000 pesos.

La DIAN fijó la UVT aplicable para 2025 en 49.799 pesos mediante la Resolución 193 del 4 de diciembre de 2024, lo que implica que el tope de 3.500 UVT para 2025 corresponde a 174.297.000 pesos. Para contratistas que prestan servicios exclusivamente a entidades del Estado, el Estatuto Tributario eleva el umbral a 4.000 UVT, lo que equivale en 2025 a aproximadamente 199.196.000 pesos. Informes recientes muestran que para el año gravable 2026, la DIAN proyecta la UVT en 52.374 pesos, con lo cual el tope de 4.000 UVT para contratos con el Estado asciende a 209.496.000 pesos y el de 3.500 UVT a alrededor de 183.309.000 pesos.

La DIAN ha aclarado, sin embargo, que el beneficio del límite ampliado (4.000 UVT) solo aplica a personas naturales cuyos ingresos provienen exclusivamente de contratos con entidades estatales; si existe mezcla con ingresos privados, se aplica el tope estándar de 3.500 UVT. Además del tope de ingresos, para conservar la condición de no responsable de IVA se deben cumplir otros requisitos (no ser importador habitual, no realizar actividades excluidas de esta categoría, entre otros), por lo que es recomendable revisar el texto actualizado del artículo 437 ET y sus parágrafos con un contador.

Para un colectivo de dos fundadores que opera bajo figura de personas naturales prestadoras de servicios de diseño, comunicación y producción audiovisual, la recomendación práctica es proyectar ingresos anuales consolidados por persona por debajo del umbral de 3.500 UVT, salvo que se tome la decisión explícita de pasar a ser responsable de IVA y trasladar ese impuesto a las tarifas.`
      },
      {
        id: 'leg-2',
        title: '2.2 Obligaciones de facturación electrónica al vender a universidades y startups',
        originalSource: 'Blueprint Perplexity',
        content: `El sistema de facturación electrónica en Colombia fue desarrollado y ampliado por la DIAN a través de las Resoluciones 000042 de 2020 y, más recientemente, 000165 de 2023, que adopta la versión 1.9 del anexo técnico de factura electrónica de venta y regula documentos equivalentes electrónicos. Esta última resolución hace parte de la estrategia de la DIAN para modernizar y masificar la facturación electrónica, obligando a un mayor número de contribuyentes y actividades económicas.

Guías tributarias recientes señalan que todas las personas jurídicas y naturales responsables del impuesto sobre la renta que realizan ventas o prestan servicios gravados con IVA o Impuesto al Consumo están obligadas a expedir factura electrónica. Incluso quienes no están obligados por norma pueden optar voluntariamente por facturar electrónicamente, y en la práctica las entidades públicas y empresas privadas B2B suelen exigir factura electrónica para soportar costos y deducciones.

Para una persona natural que presta servicios de comunicación científica a universidades públicas, privadas o startups (normalmente declarantes de renta), el escenario típico es:

*   Debe estar inscrita en el RUT con la actividad económica correspondiente (por ejemplo, diseño gráfico, producción audiovisual, consultoría en CTeI) y con la responsabilidad de facturador electrónico cuando se ubique dentro de los sujetos obligados.
*   Debe habilitarse como facturador electrónico ante la DIAN, ya sea utilizando el servicio gratuito de facturación electrónica de la DIAN o a través de un proveedor tecnológico autorizado, generando y transmitiendo cada factura para validación y posterior entrega al cliente.
*   Aun si clasifica como no responsable de IVA, la factura electrónica se emite "sin IVA causado" pero sigue siendo el soporte fiscal exigido por universidades y empresas para pago y registro contable.

En consecuencia, aunque una persona natural de bajos ingresos pueda no estar obligada a facturar en ciertos escenarios B2C, al trabajar con universidades, entidades públicas o startups formalizadas lo prudente y casi siempre necesario es operar con facturación electrónica desde el inicio.`
      },
      {
        id: 'leg-3',
        title: '4.1 Naturaleza de los derechos morales y patrimoniales en Colombia',
        originalSource: 'Blueprint Perplexity',
        content: `El régimen colombiano de derecho de autor, basado en la Ley 23 de 1982 y la Decisión Andina 351, distingue entre derechos morales y patrimoniales. La Dirección Nacional de Derecho de Autor (DNDA) explica en sus preguntas frecuentes que los derechos morales son derechos personalísimos que salvaguardan el vínculo entre el autor y su obra, y se caracterizan por ser inalienables, inembargables, intransferibles e irrenunciables. Entre estos derechos se incluyen el derecho a la paternidad de la obra, a conservarla inédita o divulgarla, a oponerse a deformaciones que la desfiguren y, en ciertos casos, a retirarla de circulación.

Los derechos patrimoniales, por su parte, permiten al autor o titular explotar económicamente la obra mediante reproducción, comunicación pública, distribución y transformación, entre otras modalidades, y sí son susceptibles de cesión total o parcial a terceros. La DNDA señala que los contratos por los cuales se transfieren derechos patrimoniales deben constar por escrito y, para ser oponibles frente a terceros, deben inscribirse en el Registro Nacional de Derecho de Autor.

En contratos de trabajo o de prestación de servicios, la DNDA ha indicado que se presume la cesión de derechos patrimoniales en la medida necesaria para el cumplimiento de las actividades habituales del encargante, sin afectar la titularidad originaria del autor ni sus derechos morales. Esto se aplica a obras como piezas gráficas, audiovisuales o desarrollos digitales producidos para entidades públicas o privadas.`
      },
      {
         id: 'leg-4',
         title: '4.2 Cesión patrimonial a universidades públicas y portafolio del autor',
         originalSource: 'Blueprint Perplexity',
         content: `Los manuales y lineamientos sobre cesión de derechos patrimoniales en el sector público enfatizan que los contratos mediante los cuales una entidad pública adquiere derechos patrimoniales sobre obras (incluyendo diseños, software, materiales de comunicación) deben especificar objeto, alcance, territorio, duración y precio, y que cualquier acto de cesión o licencia exclusiva debe inscribirse en el Registro Nacional del Derecho de Autor. Se indica también que es inexistente cualquier estipulación que pretenda transferir de forma general o indeterminable la producción futura del autor o restringir su creación intelectual más allá de lo razonable.

Dado que los derechos morales son inalienables e irrenunciables, aun cuando un colectivo de comunicación ceda los derechos patrimoniales de distribución, reproducción y comunicación pública de una pieza transmedia a una universidad pública mediante contrato de prestación de servicios, la autoría moral de la obra sigue residiendo en los creadores. En otras palabras, la universidad se convierte en titular derivada de los derechos patrimoniales (para explotar y defender la obra), pero no puede borrar ni apropiar la paternidad intelectual de los autores, ni impedirles reivindicar su condición de creadores.

Lo anterior se traduce en que, en principio, es jurídicamente viable que el estudio conserve coautoría moral y utilice la obra en su portafolio, siempre que:

*   El contrato de prestación de servicios especifique que se ceden determinados derechos patrimoniales (por ejemplo, reproducción y comunicación pública institucional), pero no se renuncian ni se limitan indebidamente los derechos morales.
*   No existan cláusulas de confidencialidad o reserva que prohíban la divulgación de la obra o de información sensible asociada al proyecto (por ejemplo, datos de investigación no publicados, secretos empresariales, información protegida por habeas data).
*   Se respeten las directrices de imagen institucional y uso de marcas de la universidad o entidad, incluyendo autorizaciones para exhibir logos y nombres en el portafolio.`
      },
      {
         id: 'leg-5',
         title: '4.3 Recomendaciones contractuales prácticas',
         originalSource: 'Blueprint Perplexity',
         content: `A partir del marco de la DNDA y de la doctrina sobre contratos de cesión de derechos, pueden extraerse varias recomendaciones prácticas para estructurar contratos de prestación de servicios con universidades y entidades públicas:

1.  **Cláusula de autoría y créditos:** Incluir una cláusula que reconozca expresamente al estudio y a sus integrantes como autores de las piezas producidas, indicando que la entidad se compromete a respetar la paternidad de la obra en publicaciones y exhibiciones cuando sea razonable.
2.  **Cesión patrimonial limitada y específica:** Establecer que la cesión de derechos patrimoniales es parcial, no exclusiva (salvo pacto contrario) y limitada a ciertos modos de explotación (por ejemplo, uso institucional en web, redes, impresos), territorio (Colombia o global) y duración, de conformidad con la Ley 23 y la Decisión Andina 351.
3.  **Derecho de uso en portafolio:** Incluir una cláusula expresa autorizando al estudio a utilizar los materiales (o versiones adaptadas) en su portafolio, páginas web y presentaciones comerciales, respetando los tiempos de embargo que la entidad requiera (por ejemplo, no publicar antes de tal fecha o antes de un lanzamiento oficial).
4.  **Registro de contratos en la DNDA:** Recomendar a la entidad el registro del contrato de cesión o licencia en el Registro Nacional de Derecho de Autor para efectos de publicidad y seguridad jurídica, lo que también clarifica el alcance de los derechos para las partes.

Aunque una cláusula que pretendiera que el autor renuncie a sus derechos morales sería jurídicamente ineficaz, los conflictos suelen surgir por temas de confidencialidad, competencia y uso de marcas; por ello, la viabilidad práctica de exhibir las obras en portafolio dependerá tanto del contrato como de la relación institucional. En cualquier caso, para operaciones de mayor cuantía o con universidades públicas, es recomendable complementar estas orientaciones con una revisión puntual por un abogado especializado en propiedad intelectual.`
      },
      {
         id: 'leg-6',
         title: 'Política General de Co-Autoría y Licenciamiento DNDA',
         originalSource: 'Términos Co-Autoría Doc',
         content: `**Principio General:**
El Colectivo opera bajo la premisa de que "visualizar y narrar ciencia es crear conocimiento". Por tanto, todas nuestras entregas conservan nuestra co-autoría creativa, amparados en el régimen de Derecho de Autor en Colombia (Ley 23 de 1982 y Decisión Andina 351).

**Cláusulas Básicas para Clientes e Instituciones (Valle del Cauca)**
Estas cláusulas deben adjuntarse a los contratos de prestación de servicios y entregas finales:

*   **1. Titularidad y Derechos Morales (Inalienables):** De conformidad con los preceptos de la Dirección Nacional de Derecho de Autor (DNDA), los derechos morales son irrenunciables, inembargables e intrasferibles. El Colectivo retiene de forma perpetua su derecho a la paternidad de la obra creativa (decisiones narrativas, dirección de arte, ilustración, estructuras de datos).
*   **2. Cesión de Derechos Patrimoniales (Licencia de Uso):** Mediante este acuerdo, se ceden los derechos patrimoniales (reproducción, distribución y comunicación pública) a la institución de forma [Exclusiva / No Exclusiva], con fines de divulgación científica o comercial según el objeto del contrato. El Colectivo no podrá revender la obra a un tercero competidor de la institución.
*   **3. Visibilidad de Autoría (Firma):** Toda pieza debe mantener visible la firma de paternidad moral. Piezas gráficas/Scrollytelling: Firma "Visualización por [Colectivo]". Pitch Decks/One-Pagers: Crédito en documento anexo o metadata.
*   **4. Exhibición en Portafolio:** Salvo firma explícita de un Acuerdo de Confidencialidad (NDA) que restrinja datos duros o secretos empresariales, El Colectivo se reserva el derecho de explotar la obra en modalidad de "Caso de Estudio" (Case Study) para ser exhibida en su portafolio comercial, web y redes sociales.`
      }
    ]
  },
  {
    id: 'transmedia',
    title: 'Formatos Deep Tech 2026',
    icon: '🎬',
    summary: 'Decisiones narrativas y entregables visuales requeridos por fondos CTeI.',
    synthesis: 'Adiós a los PDFs de 40 páginas. En 2026, un inversionista decide en 2 minutos. Entregamos las "cápsulas transmedia" del futuro: One-Pagers letales, micrositios en formato scrollytelling y dashboards interactivos. Herramientas diseñadas exclusivamente para startups en Deep Tech que necesitan que la ciencia dura luzca irresistible, manteniendo rigurosidad absoluta en los datos.',
    stats: [
      { label: 'Visión', val: 'Short/Sweet' },
      { label: 'Interact', val: 'Scrollytelling' },
      { label: 'Data', val: 'Visual Rooms' }
    ],
    accordions: [
      {
        id: 'trans-1',
        title: '3.1 Formatos de alto impacto para fondos de VC y deep tech',
        originalSource: 'Blueprint Perplexity',
        content: `Diversos análisis de tendencias en pitch decks y comunicación hacia inversionistas muestran una preferencia marcada por materiales más breves, visuales e interactivos frente a reportes extensos. TechCrunch, analizando datos de plataformas de seguimiento de pitches, reporta que en 2024 los inversionistas dedican menos de dos minutos en promedio a revisar cada deck, 27% menos que el año anterior, lo que obliga a ser "short and sweet" y reducir el número de diapositivas.

Firmas especializadas en diseño de presentaciones para startups destacan varias tendencias visuales para 2024‑2026: tipografía grande y audaz, esquemas de color con degradados, layouts asimétricos, animaciones de texto dinámicas y una redefinición de la visualización de datos que sustituye gráficos estándar por infografías, heatmaps e incluso dashboards interactivos. Se observa también un aumento en el uso de elementos interactivos dentro de los decks, como gráficos clicables, encuestas integradas y enlaces a demos en vivo o data rooms.

En el contexto deep tech y ciencias duras, esto se traduce en demanda por:

*   **One‑pagers de inversión:** Documentos de una página (a veces dos) que condensan el problema, la solución, el tamaño de mercado, la tracción y el equipo en un formato altamente visual para lectores con poco tiempo. Estos one‑pagers funcionan como "tarjeta de presentación" de la startup antes de un deck completo o como resumen ejecutivo.
*   **Decks narrativos modulares:** Presentaciones de 10‑15 diapositivas que cuentan una historia clara (problema‑solución‑tracción‑modelos‑roadmap) con gráficas limpias y pocas palabras, complementadas con anexos o data rooms para detalles técnicos y financieros.
*   **Data rooms y anexos técnicos:** Los detalles extensos (papers, modelos, contratos, series de datos) se desplazan a data rooms estructurados, dejando al deck y a los one‑pagers el rol de "gancho narrativo".

Esto favorece servicios que combinen curaduría de contenidos técnicos con alto nivel de diseño de información para empaquetar resultados científicos en activos comerciales listos para inversionistas.`
      },
      {
        id: 'trans-2',
        title: '3.2 Scrollytelling, micrositios y visualización interactiva de datos',
        originalSource: 'Blueprint Perplexity',
        content: `En el ámbito de comunicación científica al público y a stakeholders, el "scrollytelling" se consolida como técnica clave que combina relato, animaciones y visualizaciones que se activan al hacer scroll, ofreciendo una experiencia inmersiva ideal para temas complejos. Estudios y agencias de comunicación científica destacan el scrollytelling como herramienta para explicar investigaciones de forma a la vez rigurosa y entretenida, utilizando movimiento, pequeñas escenas y diálogos para involucrar al lector.

Un análisis de tendencias 2024 en comunicación científica identifica la innovación en visualización de datos como uno de los ejes centrales: infografías, gráficos interactivos y dashboards visualmente atractivos se vuelven estándar para hacer accesibles conjuntos de datos complejos. Además, se enfatiza el uso de experiencias inmersivas (realidad virtual y aumentada), videos cortos para redes sociales y gamificación, aunque estos últimos pueden requerir mayores presupuestos.

Para B2B científico‑tecnológico, se observan formatos con tracción particular:

*   **Micrositios de proyecto con scrollytelling:** Sitios web de una sola página (one‑page sites) que combinan narrativa, gráficos animados e incrustaciones de video para presentar resultados de proyectos, memorias de convocatorias o historias de impacto de fondos de I+D.
*   **Dashboards interactivos para métricas de impacto:** Paneles (por ejemplo, en frameworks tipo BI) que permiten a financiadores explorar KPIs de proyectos de investigación (publicaciones, citas, pilotos, usuarios, métricas de salud, etc.) con filtros por cohorte, región o periodo.
*   **Infografías estáticas y animadas para redes y reportes:** Resúmenes gráficos que pueden reutilizarse en informes institucionales, redes sociales y páginas de proyectos, priorizando claridad visual.

Estas tendencias encajan directamente con un estudio de comunicación científica transmedia especializado en "traducir" pitch decks y reportes aburridos a piezas de alto valor estético y narrativo.`
      },
      {
         id: 'trans-3',
         title: '3.3 Canales y formatos multimedia para ciencia y fondos',
         originalSource: 'Blueprint Perplexity',
         content: `Los análisis recientes sobre comunicación científica resaltan la expansión de formatos como video corto, podcasts narrativos y experiencias VR/AR como herramientas para llegar a audiencias diversas. En B2B, destacan especialmente:

*   **Videos teaser de 60–120 segundos:** Clips que introducen proyectos o startups para usar en redes, landing pages y correos a inversionistas, apoyándose en motion graphics y visualización de datos sintética.
*   **Animaciones explicativas ("explainers") para tecnologías complejas:** Piezas animadas que descomponen conceptos de biotecnología, IA o ingeniería avanzada en secuencias entendibles para comités de inversión no especialistas.
*   **Podcasts o cápsulas de audio para stakeholders:** Formatos de audio que narran la historia del proyecto, sus retos y aprendizajes, útiles para apropiación social de la ciencia y contenidos de branding institucional.

La mayoría de instituciones de investigación aún se encuentran en modelos de comunicación unidireccional en sus sitios web, centrados en notas de prensa y resultados, más que en experiencias interactivas dialogantes. Esto abre un espacio para ofrecer rediseños de páginas de centros de investigación y laboratorios, enfocadas en storytelling, interacción y recursos multimedia.`
      },
      {
         id: 'trans-4',
         title: 'Servicios y entregables finales',
         originalSource: 'Deep Research',
         content: `Basándonos en ambos planes y en la demanda local, se ofrecerán:

*   **Infografías científicas y visualizaciones de datos:** gráficas claras para reportes y redes.
*   **Animaciones y videos explicativos:** cortos 2D/3D sobre temas de investigación.
*   **Micrositios web para proyectos:** páginas independientes alojadas en la web principal, con diseño propio (como aconsejan microsites corporativos).
*   **Libros digitales interactivos y reportes:** PDFs enriquecidos con multimedia, adaptados a dispositivos móviles y tabletas.
*   **Kits de contenido visual para redes:** plantillas de posts, banners, portadas de video.
*   **Consultoría en comunicación científica:** asesoramiento para estructurar mensajes de investigación (ofrecido como servicio de valor agregado).
Comparado con otros estudios, esta oferta mezcla diseño editorial, multimedia e interacción. El plan incluye flexibilidad: si algún servicio no demanda, se ajusta el foco a los más solicitados.`
      }
    ]
  }
];

export const glossary: Record<string, string> = {
  "startups": "Empresas emergentes, usualmente de base tecnológica, diseñadas para crecer muy rápido.",
  "pitch decks": "Presentaciones visuales muy cortas e impactantes usadas para convencer a inversionistas.",
  "pitch deck": "Presentación visual corta e impactante usada para convencer a inversionistas.",
  "data rooms": "Espacios seguros (usualmente en la nube) donde se guarda la información confidencial de una empresa para que un inversionista la revise exhaustivamente.",
  "scrollytelling": "Formato de lectura web interactivo: la historia y animaciones avanzan poco a poco junto al scroll del usuario, evitando aburrirlo.",
  "vc": "Venture Capital (Capital de Riesgo). Fondos gigantes que invierten mucho dinero en startups tecnológicas a cambio de un porcentaje de la empresa.",
  "deep tech": "Empresas basadas en descubrimientos científicos puros o alta ingeniería (ej. biotecnología, inteligencia artificial compleja, robótica espacial).",
  "one-pagers": "Folletos ultra resumidos de una sola cara. Consiguen concentrar todo el poder de un proyecto gigante en una lectura de un minuto.",
  "b2b": "Business to Business. Modelo de ventas en donde una empresa le vende servicios a otra empresa u organización, y no al comprador final de la calle.",
  "kpis": "Key Performance Indicators (Indicadores Clave). Son métricas matemáticas que se usan para medir si un proyecto tuvo verdadero éxito o no.",
  "spin-offs": "Empresas nuevas que nacen separándose y tomando prestado el conocimiento de un gran proyecto de investigación de una universidad u organización mayor.",
  "healthtech": "Tecnología moderna aplicada a la salud: softwares para telemedicina, expedientes o biotecnología médica.",
  "edtech": "Tecnología educativa. Plataformas y herramientas diseñadas desde cero para hacer el aprendizaje mucho más fácil, rápido y entretenido.",
  "fintech": "Tecnología financiera. Emprendimientos que innovan el uso de la banca e inversiones para hacer el manejo del dinero más directo.",
  "frameworks": "Entornos de trabajo o 'moldes' base que utilizan desarrolladores o diseñadores para armar más rápido un proyecto sin empezar desde cero.",
  "dashboards": "Paneles de control o 'tableros' interactivos que agrupan los datos más críticos y los muestran de forma hiper visual (gráficas, barras, porcentajes)."
};
