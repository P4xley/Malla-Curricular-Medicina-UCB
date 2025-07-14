const malla = {
  "1er Año": [
    {
      "id": "ANA-111",
      "sigla": "ANA-111",
      "nombre": "Anatomía Humana",
      "créditos": 20,
      "requisitos": []
    },
    {
      "id": "EGE-111",
      "sigla": "EGE-111",
      "nombre": "Embriología y Genética",
      "créditos": 8,
      "requisitos": []
    },
    {
      "id": "HIS-111",
      "sigla": "HIS-111",
      "nombre": "Histología Humana",
      "créditos": 12,
      "requisitos": []
    },
    {
      "id": "MSC-151",
      "sigla": "MSC-151",
      "nombre": "Medicina Social y Comunicación",
      "créditos": 12,
      "requisitos": []
    },
    {
      "id": "FHC-102",
      "sigla": "FHC-102",
      "nombre": "Formación Humano Cristiana I",
      "créditos": 5,
      "requisitos": []
    },
    {
      "id": "HIM-111",
      "sigla": "HIM-111",
      "nombre": "Historia de la Medicina",
      "créditos": 3,
      "requisitos": []
    },
    {
      "id": "FIS-112",
      "sigla": "FIS-112",
      "nombre": "Fisiologia Humana",
      "créditos": 16,
      "requisitos": [
        "ANA-111",
        "EGE-111",
        "HIS-111"
      ]
    },
    {
      "id": "BIQ-112",
      "sigla": "BIQ-112",
      "nombre": "Bioquímica Clínica",
      "créditos": 8,
      "requisitos": [
        "ANA-111",
        "EGE-111",
        "HIS-111"
      ]
    },
    {
      "id": "MIC-112",
      "sigla": "MIC-112",
      "nombre": "Microbiología Clínica",
      "créditos": 8,
      "requisitos": [
        "ANA-111",
        "EGE-111",
        "HIS-111"
      ]
    },
    {
      "id": "MSI-152",
      "sigla": "MSI-152",
      "nombre": "Medicina Social e Investigación",
      "créditos": 16,
      "requisitos": [
        "MSC-151"
      ]
    },
    {
      "id": "PAR-112",
      "sigla": "PAR-112",
      "nombre": "Parasitología Clínica",
      "créditos": 8,
      "requisitos": [
        "ANA-111",
        "EGE-111",
        "HIS-111"
      ]
    },
    {
      "id": "PSI-162",
      "sigla": "PSI-162",
      "nombre": "Psicología Medica ",
      "créditos": 4,
      "requisitos": [
        "MSC-151"
      ]
    }
  ],
  "2er Año": [
    {
      "id": "ANP-223",
      "sigla": "ANP-223",
      "nombre": "Anatomía Patológica",
      "créditos": 8,
      "requisitos": [
        "BIQ-112",
        "FIS-112",
        "MIC-112",
        "PAR-112"
      ]
    },
    {
      "id": "FSP-223",
      "sigla": "FSP-223",
      "nombre": "Fisiopatología",
      "créditos": 8,
      "requisitos": [
        "BIQ-112",
        "FIS-112",
        "MIC-112",
        "PAR-112"
      ]
    },
    {
      "id": "FAR-223",
      "sigla": "FAR-223",
      "nombre": "Farmacología",
      "créditos": 12,
      "requisitos": [
        "BIQ-112",
        "FIS-112. MIC-112",
        "PAR-112"
      ]
    },
    {
      "id": "SEM-223",
      "sigla": "SEM-223",
      "nombre": "Semiología",
      "créditos": 20,
      "requisitos": [
        "BIQ-112",
        "FIS-112. MIC-112",
        "PAR-112"
      ]
    },
    {
      "id": "CIR-243",
      "sigla": "CIR-243",
      "nombre": "Cirugía I",
      "créditos": 8,
      "requisitos": [
        "BIQ-112",
        "FIS-112",
        "MIC-112"
      ]
    },
    {
      "id": "EPI-253",
      "sigla": "EPI-253",
      "nombre": "Epidemiología",
      "créditos": 4,
      "requisitos": [
        "MIC-112",
        "MSC-152",
        "PAR-112"
      ]
    },
    {
      "id": "sam-253",
      "sigla": "sam-253",
      "nombre": "Salud ambiental",
      "créditos": 2,
      "requisitos": [
        "MIC-112",
        "MSC-152",
        "PAR-112"
      ]
    },
    {
      "id": "SME-223",
      "sigla": "SME-223",
      "nombre": "Salud Mental I",
      "créditos": 2,
      "requisitos": [
        "BIQ-112",
        "FIS-112",
        "MIC-112"
      ]
    },
    {
      "id": "IMA-223",
      "sigla": "IMA-223",
      "nombre": "Imagenología",
      "créditos": 2,
      "requisitos": [
        "BIQ-112",
        "FIS-112",
        "MIC-112"
      ]
    },
    {
      "id": "FHC-202",
      "sigla": "FHC-202",
      "nombre": "Formación Humano Cristiana II",
      "créditos": 5,
      "requisitos": [
        "FHC-102"
      ]
    },
    {
      "id": "CME-334",
      "sigla": "CME-334",
      "nombre": "Clínica Medica",
      "créditos": 20,
      "requisitos": [
        "ANP-223",
        "CIR-243",
        "FSP-223",
        "SEM-223"
      ]
    },
    {
      "id": "CIR-344",
      "sigla": "CIR-344",
      "nombre": "Cirugía II",
      "créditos": 16,
      "requisitos": [
        "ANP-223",
        "CIR-243",
        "FSP-223",
        "SEM-223"
      ]
    },
    {
      "id": "NEU-334",
      "sigla": "NEU-334",
      "nombre": "Neumología",
      "créditos": 4,
      "requisitos": [
        "ANP-253",
        "CIR-243",
        "FSP-223",
        "SEM-223"
      ]
    },
    {
      "id": "CAR-334",
      "sigla": "CAR-334",
      "nombre": "Cardiología",
      "créditos": 4,
      "requisitos": [
        "ANP-253",
        "CIR-243",
        "FSP-223",
        "SEM-223"
      ]
    },
    {
      "id": "INF-334",
      "sigla": "INF-334",
      "nombre": "Infectología",
      "créditos": 4,
      "requisitos": [
        "CIR-243. SEM-223"
      ]
    },
    {
      "id": "TER-334",
      "sigla": "TER-334",
      "nombre": "Terapéutica",
      "créditos": 4,
      "requisitos": [
        "CIR-243",
        "FAR-223",
        "FSP-223",
        "SEM-223"
      ]
    },
    {
      "id": "EME-334",
      "sigla": "EME-334",
      "nombre": "Emergencias",
      "créditos": 5,
      "requisitos": [
        "ANP-253",
        "CIR-243",
        "FSP-223",
        "SEM-223"
      ]
    },
    {
      "id": "ADS-354",
      "sigla": "ADS-354",
      "nombre": "Administración Sanitaria",
      "créditos": 2,
      "requisitos": [
        "EPI-253",
        "SAM-253"
      ]
    },
    {
      "id": "DME-364",
      "sigla": "DME-364",
      "nombre": "Deontología Médica",
      "créditos": 2,
      "requisitos": [
        "CIR-243",
        "SEM-223"
      ]
    },
    {
      "id": "SME-334",
      "sigla": "SME-334",
      "nombre": "Salud Mental II",
      "créditos": 4,
      "requisitos": [
        "CIR-243",
        "FSP-223",
        "SEM-223",
        "SME-223"
      ]
    },
    {
      "id": "SAP-354",
      "sigla": "SAP-354",
      "nombre": "Salud Ocupacional",
      "créditos": 2,
      "requisitos": [
        "EPI-253",
        "SAM-253"
      ]
    },
    {
      "id": "LEC-354",
      "sigla": "LEC-354",
      "nombre": "Lectura Crítica",
      "créditos": 2,
      "requisitos": []
    },
    {
      "id": "PRO-354",
      "sigla": "PRO-354",
      "nombre": "Proyecto",
      "créditos": 2,
      "requisitos": [
        "EPI-253",
        "SAM-253"
      ]
    },
    {
      "id": "FHC-302",
      "sigla": "FHC-302",
      "nombre": "Formación Humano Cristiana III",
      "créditos": 5,
      "requisitos": [
        "FHC-202"
      ]
    }
  ],
  "3er Año": [
    {
      "id": "PED-335",
      "sigla": "PED-335",
      "nombre": "Pediatría",
      "créditos": 18,
      "requisitos": [
        "CIR-334",
        "CME-334"
      ]
    },
    {
      "id": "MFA-335",
      "sigla": "MFA-335",
      "nombre": "Medicina Familiar",
      "créditos": 4,
      "requisitos": [
        "CME-334"
      ]
    },
    {
      "id": "GIN-335",
      "sigla": "GIN-335",
      "nombre": "Ginecología",
      "créditos": 6,
      "requisitos": [
        "CIR-344",
        "SEM-223"
      ]
    },
    {
      "id": "OBS-345",
      "sigla": "OBS-345",
      "nombre": "Obstetricia",
      "créditos": 6,
      "requisitos": [
        "CIR-344",
        "CME-334"
      ]
    },
    {
      "id": "NEU-335",
      "sigla": "NEU-335",
      "nombre": "Neurología",
      "créditos": 4,
      "requisitos": [
        "CIR-334",
        "CME-334"
      ]
    },
    {
      "id": "OFT-345",
      "sigla": "OFT-345",
      "nombre": "Oftalmología",
      "créditos": 4,
      "requisitos": [
        "CIR-344",
        "CME-334"
      ]
    },
    {
      "id": "DER-335",
      "sigla": "DER-335",
      "nombre": "Dermatología",
      "créditos": 4,
      "requisitos": [
        "CME-334"
      ]
    },
    {
      "id": "TRA-345",
      "sigla": "TRA-345",
      "nombre": "Traumatología",
      "créditos": 4,
      "requisitos": [
        "CIR-344",
        "CME-334"
      ]
    },
    {
      "id": "URO-345",
      "sigla": "URO-345",
      "nombre": "Urología",
      "créditos": 4,
      "requisitos": [
        "CIR-344",
        "CME-334"
      ]
    },
    {
      "id": "OTO-345",
      "sigla": "OTO-345",
      "nombre": "Otorrinolaringología",
      "créditos": 4,
      "requisitos": [
        "CIR-344",
        "CME-334"
      ]
    },
    {
      "id": "BMQ-335",
      "sigla": "BMQ-335",
      "nombre": "Biología Molecular",
      "créditos": 3,
      "requisitos": [
        "CME-334"
      ]
    },
    {
      "id": "GER-335",
      "sigla": "GER-335",
      "nombre": "Geriatría y Gerentología",
      "créditos": 4,
      "requisitos": [
        "CIR-334",
        "CME-334",
        "SME-234"
      ]
    },
    {
      "id": "MEL-335",
      "sigla": "MEL-335",
      "nombre": "Medicina Legal y Forense",
      "créditos": 3,
      "requisitos": [
        "CME-334"
      ]
    },
    {
      "id": "ONC-335",
      "sigla": "ONC-335",
      "nombre": "Oncología",
      "créditos": 2,
      "requisitos": [
        "CIR-344",
        "CME-334"
      ]
    },
    {
      "id": "BET-365",
      "sigla": "BET-365",
      "nombre": "Bioética",
      "créditos": 2,
      "requisitos": [
        "DME-364"
      ]
    },
    {
      "id": "IME-365",
      "sigla": "IME-365",
      "nombre": "Ingles Médico",
      "créditos": 2,
      "requisitos": [
        "IDM-204"
      ]
    }
  ]
}
let completadas = new Set();

function renderMalla() {
  const container = document.getElementById("malla");
  container.innerHTML = "";

  for (const año in malla) {
    const div = document.createElement("div");
    div.className = "semestre";
    div.innerHTML = `<h2>${año}</h2>`;

    malla[año].forEach((mat) => {
      const matDiv = document.createElement("div");
      matDiv.className = "materia";
      matDiv.id = mat.id;

      const habilitada = mat.requisitos.every(req => completadas.has(req));
      if (habilitada || mat.requisitos.length === 0) {
        matDiv.classList.add("habilitada");
      }

      matDiv.innerHTML = `
        <strong>${mat.sigla}</strong> - ${mat.nombre}<br>
        Créditos: ${mat.créditos}<br>
        Prerrequisitos: ${mat.requisitos.join(", ") || "Ninguno"}
        <div class="checkbox">
          <label>
            <input type="checkbox" onchange="toggleMateria('${mat.id}')" ${completadas.has(mat.id) ? "checked" : ""}>
            Completada
          </label>
        </div>
      `;

      div.appendChild(matDiv);
    });

    container.appendChild(div);
  }
}

function toggleMateria(id) {
  if (completadas.has(id)) {
    completadas.delete(id);
  } else {
    completadas.add(id);
  }
  renderMalla();
}

renderMalla();
