# 🧠 Esquema Central de CRM y Automatizaciones (Notion)

## Arquitectura de Bases de Datos en Notion

Crea un Espacio de Trabajo en Notion (gratuito) llamado "Sede Colectivo". Dentro, construye 3 bases de datos maestras enlazadas entre sí:

### 1. Base: "Radar de Clientes" (El Pipeline)
Aquí caerán los prospectos que aún no hemos contactado o están en negociación.
- **Columnas clave:** Nombre Startup/Profe, Sector (Biotech, Edu), Fase (NIDO, U. Valle), Nivel de Empatía (Alto/Medio/Bajo).
- **El toque Humano:** La columna "Nivel de Empatía" la llenas tú tras leer sobre ellos. ¿Sientes que su proyecto es noble? Si no conecta contigo, no se toma el cliente.

### 2. Base: "Sala de Máquinas" (Proyectos Activos)
- Relacionada a los clientes que ya nos dijeron que SÍ.
- **Columnas clave:** Estado (Investigando, Diseñando, Revisión), Link a Carpeta Local, Fecha Límite.

### 3. Base: "Bóveda Transmedia" (Assets e Inspiración)
- Un corcho digital. Cada vez que veas una página web hermosa o escuches una buena analogía, guárdala aquí etiquetada (Inspiración UI, Metáfora Biológica, Paleta de Color).

---

## 🤖 El Bot: Cómo traer clientes automáticamente (El Flujo Zapier/Make)

### Pasos de Automatización:
1. **Radar / Web Scraping (IA Básica):**
   - Configuras un Bot sencillo en [Make.com](https://make.com) o utilizas una extensión como *PhantomBuster*. Le pides que vigile páginas como el Directorio de NIDO o los ganadores de capital semilla de Minciencias.
2. **Filtrado Mágico (IA Intermedia):**
   - El Bot envía esos nombres a ChatGPT a través de Make con el prompt: *"Resume en 1 línea qué hace esta startup médica y dime quién es su CEO en LinkedIn"*.
3. **Aterrizaje en Notion:**
   - Automáticamente, el Bot crea una tarjeta en tu Base *"Radar de Clientes"* en Notion, ya con el nombre del CEO, la empresa y un resumen.
4. **Intervención Humana (Tú entras en acción):**
   - Entras el Lunes por la mañana a Notion, ves 5 nuevas tarjetas que encontró el Bot el fin de semana. Lees los resúmenes. Descartas 2 que son aburridas.
   - De las 3 viables, abres el `_Template` de Cold Email que tienes en tus carpetas, le metes un detalle emocional (*"Hola Juan, vi que su tecnología salva abejas, yo soy de un municipio donde las necesitamos..."*), y envías el correo.

Así es como logramos que la tecnología "arrastre la red" en el mar, capturando cientos de peces de datos, pero eres tú, con tu sensibilidad como diseñador y gestor, quien decide qué peces conservar e invitar a bordo.
