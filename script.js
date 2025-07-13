const malla = {
  "PRIMER AÑO": {
    "I SEMESTRE": ["ACI107", "AEA011", "AUD100", "MAT100", "TDE400"],
    "II SEMESTRE": ["AEA240", "AUD222", "AEA220", "MAT140", "LCE001"]
  },
  "SEGUNDO AÑO": {
    "I SEMESTRE": ["LCE002", "AUD444", "ING103", "ACI309", "AEA320", "MAT170"],
    "II SEMESTRE": ["AEA503", "AES500", "LCE003", "AEA504", "AEA420", "AEA214"]
  },
  "TERCER AÑO": {
    "I SEMESTRE": ["DER700", "AEA364", "AES510", "EIN810", "AEA316"],
    "II SEMESTRE": ["AEA513", "AEA315", "AEA425", "AUD814", "AEA605"]
  },
  "CUARTO AÑO": {
    "I SEMESTRE": ["AEA325", "AEA417", "AEA555", "AEA982", "AEA891"],
    "II SEMESTRE": ["AEA790", "EIN813", "AEA694", "AEA530", "AEA893"]
  },
  "QUINTO AÑO": {
    "I SEMESTRE": ["AEA920", "AEA980", "AEA394", "AEA783", "AEA940", "AEA988"],
    "II SEMESTRE": ["AEA540", "AEA040", "AEA520", "AEA404"]
  }
};

const ramos = [
  { codigo: "ACI107", nombre: "Tecnología de la Información I" },
  { codigo: "AEA011", nombre: "Introducción a los Negocios" },
  { codigo: "AUD100", nombre: "Contabilidad I" },
  { codigo: "MAT100", nombre: "Matemática General" },
  { codigo: "TDE400", nombre: "Tec. Comunicación y Habilidades" },
  { codigo: "AEA240", nombre: "Emprendimiento y Negocios" },
  { codigo: "AUD222", nombre: "Contabilidad para la Gestión" },
  { codigo: "AEA220", nombre: "Economía" },
  { codigo: "MAT140", nombre: "Álgebra I" },
  { codigo: "LCE001", nombre: "Inglés I" },
  { codigo: "LCE002", nombre: "Inglés II" },
  { codigo: "AUD444", nombre: "Costos" },
  { codigo: "ING103", nombre: "Economía Circular y Desarrollo Sostenible" },
  { codigo: "ACI309", nombre: "Datos y Decisiones" },
  { codigo: "AEA320", nombre: "Fundamentos de Estrategia" },
  { codigo: "MAT170", nombre: "Cálculo Diferencial" },
  { codigo: "AEA503", nombre: "Marketing Estratégico" },
  { codigo: "AES500", nombre: "Probabilidad y Estadística" },
  { codigo: "LCE003", nombre: "Inglés III" },
  { codigo: "AEA504", nombre: "Introducción a las Finanzas" },
  { codigo: "AEA420", nombre: "T. Liderazgo y Desarrollo Personal" },
  { codigo: "AEA214", nombre: "Microeconomía I" },
  { codigo: "DER700", nombre: "Derecho Empresarial" },
  { codigo: "AEA364", nombre: "Marketing Operacional" },
  { codigo: "AES510", nombre: "Inferencia Estadística" },
  { codigo: "EIN810", nombre: "Gestión de la Calidad" },
  { codigo: "AEA316", nombre: "Macroeconomía I" },
  { codigo: "AEA513", nombre: "Marketing de Servicios" },
  { codigo: "AEA315", nombre: "Microeconomía II" },
  { codigo: "AEA425", nombre: "Econometría" },
  { codigo: "AUD814", nombre: "Planificación y Gestión Tributaria" },
  { codigo: "AEA605", nombre: "Dirección Estratégica de RRHH" },
  { codigo: "AEA325", nombre: "Dirección Estratégica" },
  { codigo: "AEA417", nombre: "Macroeconomía II" },
  { codigo: "AEA555", nombre: "Prep. y Eval. de Proyectos" },
  { codigo: "AEA982", nombre: "Gestión del Cambio Organizacional" },
  { codigo: "AEA891", nombre: "Comercio Internacional" },
  { codigo: "AEA790", nombre: "Control de Gestión" },
  { codigo: "EIN813", nombre: "Administración de la Producción" },
  { codigo: "AEA694", nombre: "Finanzas Corporativas" },
  { codigo: "AEA530", nombre: "Negociación y Resolución de Conflictos" },
  { codigo: "AEA893", nombre: "Investigación de Mercados" },
  { codigo: "AEA920", nombre: "Gestión de Empresas Nuevos Negocios" },
  { codigo: "AEA980", nombre: "Taller de Consultoría" },
  { codigo: "AEA394", nombre: "Instrumentos de Inversión" },
  { codigo: "AEA783", nombre: "Gestión de Marcas" },
  { codigo: "AEA940", nombre: "Economía para Políticas Públicas" },
  { codigo: "AEA988", nombre: "Taller Desarrollo de Carrera" },
  { codigo: "AEA540", nombre: "Decisiones y Simulación" },
  { codigo: "AEA040", nombre: "Taller Aplicado a Administración" },
  { codigo: "AEA520", nombre: "Responsabilidad Social Corporativa" },
  { codigo: "AEA404", nombre: "Financiamiento de Inversiones" }
];

// ✅ Prerrequisitos corregidos fielmente
const prerrequisitos = {
  "ACI309": ["ACI107"],
  "AEA320": ["AEA011"],
  "AEA420": ["AEA011", "TDE400"],
  "AEA605": ["AEA011"],
  "AUD222": ["AUD100"],
  "AUD444": ["AUD100"],
  "AEA504": ["AUD100", "MAT100"],
  "AUD814": ["AUD100"],
  "AEA220": ["MAT100"],
  "MAT140": ["MAT100"],
  "MAT170": ["MAT100"],
  "AES500": ["MAT100"],
  "LCE002": ["LCE001"],
  "LCE003": ["LCE002"],
  "ACI309": ["ACI107"],
  "AEA364": ["AUD444"],
  "AEA214": ["AEA220", "MAT170"],
  "AEA316": ["AEA220"],
  "AEA503": ["AEA320"],
  "AEA325": ["AEA240", "AEA320", "AEA503"],
  "AEA920": ["AEA240"],
  "AEA891": ["AEA320"],
  "AEA790": ["AEA320", "AEA605"],
  "AEA520": ["AEA320"],
  "AEA513": ["AEA503", "AEA364"],
  "AEA555": ["AEA503", "AEA504"],
  "AEA893": ["AEA503", "AEA364", "AES510"],
  "AEA783": ["AEA503", "AEA364"],
  "AES510": ["AES500"],
  "EIN810": ["AES500"],
  "AEA540": ["AES500"],
  "AEA694": ["AEA504"],
  "AEA980": ["AEA504", "AEA555"],
  "AEA530": ["AEA420"],
  "AEA988": ["AEA420"],
  "AEA315": ["AEA214"],
  "AEA425": ["AEA214", "AES510"],
  "AEA940": ["AEA214", "AEA316"],
  "EIN813": ["EIN810", "AEA325"],
  "AEA982": ["AEA605"],
  "AEA417": ["AEA316"],
  "AEA394": ["AEA694"],
  "AEA040": ["AEA325", "AEA364", "AEA513", "AEA555", "AEA605"],
  "AEA404": ["AEA555"]
};

const estadoRamos = {};
ramos.forEach(r => estadoRamos[r.codigo] = false);

function puedeAprobar(codigo) {
  const prereqs = prerrequisitos[codigo] || [];
  return prereqs.every(pr => estadoRamos[pr]);
}

function renderMalla() {
  const contenedor = document.getElementById("malla");
  contenedor.innerHTML = "";

  for (const [anio, semestres] of Object.entries(malla)) {
    const tituloAnio = document.createElement("h2");
    tituloAnio.textContent = anio;
    contenedor.appendChild(tituloAnio);

    for (const [semestre, codigos] of Object.entries(semestres)) {
      const tituloSemestre = document.createElement("h3");
      tituloSemestre.textContent = semestre;
      contenedor.appendChild(tituloSemestre);

      const divGrupo = document.createElement("div");
      divGrupo.className = "ramos";

      codigos.forEach(codigo => {
        const ramo = ramos.find(r => r.codigo === codigo);
        if (!ramo) return;

        const div = document.createElement("div");
        div.className = "ramo";
        div.textContent = `${ramo.nombre} (${ramo.codigo})`;

        if (estadoRamos[ramo.codigo]) {
          div.classList.add("aprobado");
        } else if (!puedeAprobar(ramo.codigo)) {
          div.classList.add("bloqueado");
        }

        div.onclick = () => {
          if (!puedeAprobar(ramo.codigo)) return;
          estadoRamos[ramo.codigo] = !estadoRamos[ramo.codigo];
          renderMalla();
        };

        divGrupo.appendChild(div);
      });

      contenedor.appendChild(divGrupo);
    }
  }
}

renderMalla();
