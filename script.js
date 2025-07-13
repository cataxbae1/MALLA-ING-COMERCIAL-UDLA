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
  { codigo: "ACI107", nombre: "Tecnología de la Información I", desbloquea: ["ACI309"] },
  { codigo: "AEA011", nombre: "Introducción a los Negocios", desbloquea: ["AEA320", "AEA420", "AEA605"] },
  { codigo: "AUD100", nombre: "Contabilidad I", desbloquea: ["AUD222", "AUD444", "AEA504", "AUD814"] },
  { codigo: "MAT100", nombre: "Matemática General", desbloquea: ["AEA220", "MAT140", "MAT170", "AES500", "AEA504"] },
  { codigo: "TDE400", nombre: "Tec. Comunicación y Habilidades", desbloquea: ["AEA420"] },
  { codigo: "AEA240", nombre: "Emprendimiento y Negocios", desbloquea: ["AEA325", "AEA920"] },
  { codigo: "AUD222", nombre: "Contabilidad para la Gestión", desbloquea: [] },
  { codigo: "AEA220", nombre: "Economía", desbloquea: ["AEA214", "AEA316"] },
  { codigo: "MAT140", nombre: "Álgebra I", desbloquea: [] },
  { codigo: "LCE001", nombre: "Inglés I", desbloquea: ["LCE002"] },
  { codigo: "LCE002", nombre: "Inglés II", desbloquea: ["LCE003"] },
  { codigo: "AUD444", nombre: "Costos", desbloquea: ["AEA364"] },
  { codigo: "ING103", nombre: "Economía Circular y Desarrollo Sostenible", desbloquea: [] },
  { codigo: "ACI309", nombre: "Datos y Decisiones", desbloquea: [] },
  { codigo: "AEA320", nombre: "Fundamentos de Estrategia", desbloquea: ["AEA503", "AEA325", "AEA891", "AEA790", "AEA520"] },
  { codigo: "MAT170", nombre: "Cálculo Diferencial", desbloquea: ["AEA214"] },
  { codigo: "AEA503", nombre: "Marketing Estratégico", desbloquea: ["AEA513", "AEA325", "AEA555", "AEA893", "AEA783"] },
  { codigo: "AES500", nombre: "Probabilidad y Estadística", desbloquea: ["AES510", "EIN810", "AEA540"] },
  { codigo: "LCE003", nombre: "Inglés III", desbloquea: [] },
  { codigo: "AEA504", nombre: "Introducción a las Finanzas", desbloquea: ["AEA555", "AEA694", "AEA980"] },
  { codigo: "AEA420", nombre: "Taller Liderazgo y Desarrollo Personal", desbloquea: ["AEA530", "AEA988"] },
  { codigo: "AEA214", nombre: "Microeconomía I", desbloquea: ["AEA315", "AEA425", "AEA940"] },
  { codigo: "DER700", nombre: "Derecho Empresarial", desbloquea: [] },
  { codigo: "AEA364", nombre: "Marketing Operacional", desbloquea: ["AEA513", "AEA893", "AEA783", "AEA040"] },
  { codigo: "AES510", nombre: "Inferencia Estadística", desbloquea: ["AEA425", "AEA893"] },
  { codigo: "EIN810", nombre: "Gestión de la Calidad", desbloquea: ["EIN813"] },
  { codigo: "AEA316", nombre: "Macroeconomía I", desbloquea: ["AEA417", "AEA940"] },
  { codigo: "AEA513", nombre: "Marketing de Servicios", desbloquea: [] },
  { codigo: "AEA315", nombre: "Microeconomía II", desbloquea: [] },
  { codigo: "AEA425", nombre: "Econometría", desbloquea: [] },
  { codigo: "AUD814", nombre: "Planificación y Gestión Tributaria", desbloquea: [] },
  { codigo: "AEA605", nombre: "Dirección Estratégica de RRHH", desbloquea: ["AEA982", "AEA790", "AEA040"] },
  { codigo: "AEA325", nombre: "Dirección Estratégica", desbloquea: ["EIN813", "AEA040"] },
  { codigo: "AEA417", nombre: "Macroeconomía II", desbloquea: [] },
  { codigo: "AEA555", nombre: "Preparación y Evaluación de Proyectos", desbloquea: ["AEA980", "AEA040", "AEA404"] },
  { codigo: "AEA982", nombre: "Gestión del Cambio Organizacional", desbloquea: [] },
  { codigo: "AEA891", nombre: "Comercio Internacional", desbloquea: [] },
  { codigo: "AEA790", nombre: "Control de Gestión", desbloquea: [] },
  { codigo: "EIN813", nombre: "Administración de la Producción", desbloquea: [] },
  { codigo: "AEA694", nombre: "Finanzas Corporativas", desbloquea: ["AEA394"] },
  { codigo: "AEA530", nombre: "Negociación y Resolución de Conflictos", desbloquea: [] },
  { codigo: "AEA893", nombre: "Investigación de Mercados", desbloquea: [] },
  { codigo: "AEA920", nombre: "Gestión de Empresas de Nuevos Negocios", desbloquea: [] },
  { codigo: "AEA980", nombre: "Taller de Consultoría", desbloquea: [] },
  { codigo: "AEA394", nombre: "Instrumentos de Inversión", desbloquea: [] },
  { codigo: "AEA783", nombre: "Gestión de Marcas", desbloquea: [] },
  { codigo: "AEA940", nombre: "Economía para Políticas Públicas", desbloquea: [] },
  { codigo: "AEA988", nombre: "Taller de Desarrollo de Carrera", desbloquea: [] },
  { codigo: "AEA540", nombre: "Decisiones y Simulación", desbloquea: [] },
  { codigo: "AEA040", nombre: "Taller Aplicado a Administración", desbloquea: [] },
  { codigo: "AEA520", nombre: "Responsabilidad Social Corporativa", desbloquea: [] },
  { codigo: "AEA404", nombre: "Financiamiento de Inversiones", desbloquea: [] }
];

const estadoRamos = {};
ramos.forEach(r => estadoRamos[r.codigo] = false);

// Los prerrequisitos de cada ramo para desbloquearlo
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
  "AEA325": ["AEA240", "AEA320", "AEA503"],
  "AEA920": ["AEA240"],
  "AEA214": ["AEA220", "MAT170"],
  "AEA316": ["AEA220"],
  "AEA503": ["AEA320"],
  "AES510": ["AES500"],
  "EIN810": ["AES500"],
  "AEA540": ["AES500"],
  "LCE003": ["LCE002"],
  "AEA555": ["AEA504", "AEA503"],
  "AEA694": ["AEA504"],
  "AEA980": ["AEA504", "AEA555"],
  "AEA530": ["AEA420"],
  "AEA988": ["AEA420"],
  "AEA315": ["AEA214"],
  "AEA425": ["AEA214", "AES510"],
  "AEA940": ["AEA214", "AEA316"],
  "AEA364": ["AUD444"],
  "AEA513": ["AEA503", "AEA364"],
  "AEA893": ["AEA503", "AEA364", "AES510"],
  "EIN813": ["EIN810", "AEA325"],
  "AEA417": ["AEA316"],
  "AUD814": ["AUD100"],
  "AEA790": ["AEA320", "AEA605"],
  "AEA982": ["AEA605"],
  "AEA891": ["AEA320"],
  "AEA394": ["AEA694"],
  "AEA040": ["AEA364", "AEA325", "AEA555", "AEA605"],
  "AEA540": ["AES500"],
  "AEA520": ["AEA320"],
  "AEA404": ["AEA555"]
};

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
