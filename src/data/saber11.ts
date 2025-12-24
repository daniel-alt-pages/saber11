export type Topic = {
  id: string;
  name: string;
  category?: string; // Biología, Física, Química, etc.
  suggestion?: string;
};

export type Evidence = {
  id: string;
  description: string;
};

export type Affirmation = {
  id: string;
  description: string;
  evidences: Evidence[];
  topics: Topic[];
};

export type Competence = {
  id: string;
  name: string;
  description: string;
  affirmations: Affirmation[];
};

export type Area = {
  id: string;
  name: string;
  icon: string;
  color: string;
  components?: string[]; // Subáreas: Biológico, Físico, Químico, etc.
  competencies: Competence[];
};

// DATOS COMPLETOS basados en la Matriz de Referencia ICFES Saber 11
export const SABER11_DATA: Area[] = [
  {
    id: 'ciencias-naturales',
    name: 'Ciencias Naturales',
    icon: 'FlaskConical',
    color: '#10b981',
    components: ['Biológico', 'Físico', 'Químico', 'CTS'],
    competencies: [
      {
        id: 'cn-uso',
        name: 'Uso Comprensivo del Conocimiento Científico',
        description: 'Capacidad para comprender y usar nociones, conceptos y teorías de las ciencias naturales en la solución de problemas, y para establecer relaciones entre conceptos y conocimientos adquiridos.',
        affirmations: [
          {
            id: 'cn-uso-1',
            description: 'Comprender y usar nociones, conceptos y teorías de las ciencias naturales.',
            evidences: [
              { id: 'cn-uso-1-e1', description: 'Identifica características de fenómenos de la naturaleza basándose en el análisis de información.' },
              { id: 'cn-uso-1-e2', description: 'Asocia fenómenos naturales con conceptos propios del conocimiento científico.' },
              { id: 'cn-uso-1-e3', description: 'Establece relaciones entre conceptos y conocimientos adquiridos sobre fenómenos.' }
            ],
            topics: [
              { id: 'cn-bio-cel', name: 'La Célula: estructura, funciones, transporte', category: 'Biología', suggestion: 'Compara célula animal vs vegetal. Dibuja organelos y sus funciones.' },
              { id: 'cn-bio-hom', name: 'Homeóstasis en organismos y ecosistemas', category: 'Biología', suggestion: 'Estudia regulación de temperatura, glucosa y equilibrio en ecosistemas.' },
              { id: 'cn-bio-her', name: 'Herencia: mitosis, meiosis, genética mendeliana', category: 'Biología', suggestion: 'Practica cuadros de Punnett. Entiende dominancia y recesividad.' },
              { id: 'cn-bio-eco', name: 'Ecología: cadenas tróficas, ciclos biogeoquímicos', category: 'Biología', suggestion: 'Dibuja el ciclo del carbono, nitrógeno y agua.' },
              { id: 'cn-bio-evo', name: 'Evolución y selección natural', category: 'Biología', suggestion: 'Compara Lamarck vs Darwin con ejemplos actuales.' },
              { id: 'cn-qui-est', name: 'Cambios de estado y separación de mezclas', category: 'Química', suggestion: 'Distingue cambios físicos de químicos. Métodos de separación.' },
              { id: 'cn-qui-per', name: 'Propiedades periódicas de los elementos', category: 'Química', suggestion: 'Electronegatividad, radio atómico, energía de ionización.' },
              { id: 'cn-qui-enl', name: 'Enlaces químicos: iónico, covalente, metálico', category: 'Química', suggestion: 'Identifica tipos de enlace según electronegatividad.' },
              { id: 'cn-qui-est', name: 'Estequiometría y balanceo de ecuaciones', category: 'Química', suggestion: 'Practica balanceo por tanteo y cálculo de moles.' },
              { id: 'cn-qui-sol', name: 'Soluciones: pH, concentración, solubilidad', category: 'Química', suggestion: 'Calcula molaridad. Entiende la escala de pH.' },
              { id: 'cn-fis-cin', name: 'Cinemática: MRU, MUA, caída libre', category: 'Física', suggestion: 'Interpreta gráficas posición-tiempo y velocidad-tiempo.' },
              { id: 'cn-fis-din', name: 'Dinámica: Leyes de Newton, fuerzas', category: 'Física', suggestion: 'Dibuja diagramas de cuerpo libre. Aplica F=ma.' },
              { id: 'cn-fis-ene', name: 'Energía: cinética, potencial, conservación', category: 'Física', suggestion: 'Resuelve problemas de montaña rusa y péndulos.' },
              { id: 'cn-fis-ond', name: 'Ondas: luz, sonido, espectro electromagnético', category: 'Física', suggestion: 'Diferencia ondas mecánicas de electromagnéticas.' },
              { id: 'cn-fis-ter', name: 'Termodinámica: calor, temperatura, leyes', category: 'Física', suggestion: 'Entiende transferencia de calor y equilibrio térmico.' }
            ]
          }
        ]
      },
      {
        id: 'cn-explicacion',
        name: 'Explicación de Fenómenos',
        description: 'Capacidad para construir y comprender argumentos, representaciones o modelos que den razón de fenómenos.',
        affirmations: [
          {
            id: 'cn-exp-1',
            description: 'Construir y comprender explicaciones, modelos y representaciones de fenómenos naturales.',
            evidences: [
              { id: 'cn-exp-1-e1', description: 'Explica cómo ocurren algunos fenómenos de la naturaleza basándose en observaciones.' },
              { id: 'cn-exp-1-e2', description: 'Modela fenómenos de la naturaleza basándose en análisis de variables.' },
              { id: 'cn-exp-1-e3', description: 'Analiza la validez o coherencia de una explicación científica dada.' }
            ],
            topics: [
              { id: 'cn-mod-cel', name: 'Teoría Celular y sus postulados', category: 'Modelos', suggestion: '¿Por qué la célula es la unidad de vida?' },
              { id: 'cn-mod-ato', name: 'Teoría Atómica: modelos históricos', category: 'Modelos', suggestion: 'Dalton → Thomson → Rutherford → Bohr → Cuántico' },
              { id: 'cn-mod-ter', name: 'Leyes de la Termodinámica', category: 'Modelos', suggestion: 'Conservación de energía. Entropía.' },
              { id: 'cn-mod-con', name: 'Principios de Conservación (masa, energía, carga)', category: 'Modelos', suggestion: 'Nada se crea ni se destruye.' },
              { id: 'cn-ana-cau', name: 'Relaciones causales en ecosistemas', category: 'Análisis', suggestion: '¿Qué pasa si eliminas un depredador tope?' },
              { id: 'cn-ana-rea', name: 'Efecto de temperatura/presión en reacciones', category: 'Análisis', suggestion: 'Principio de Le Chatelier. Equilibrio químico.' }
            ]
          }
        ]
      },
      {
        id: 'cn-indagacion',
        name: 'Indagación',
        description: 'Capacidad para comprender que a partir de la investigación científica se construyen explicaciones sobre el mundo natural.',
        affirmations: [
          {
            id: 'cn-ind-1',
            description: 'Utilizar procedimientos y metodologías de la investigación científica.',
            evidences: [
              { id: 'cn-ind-1-e1', description: 'Comprende qué tipo de preguntas son pertinentes para una investigación científica.' },
              { id: 'cn-ind-1-e2', description: 'Interpreta y analiza datos representados en texto, gráficas, dibujos y tablas.' },
              { id: 'cn-ind-1-e3', description: 'Comunica de forma apropiada el proceso y resultados de investigación.' },
              { id: 'cn-ind-1-e4', description: 'Diseña experimentos para dar respuesta a sus preguntas.' }
            ],
            topics: [
              { id: 'cn-met-obs', name: 'Observación y formulación de preguntas', category: 'Método Científico', suggestion: 'Las buenas preguntas son específicas y medibles.' },
              { id: 'cn-met-hip', name: 'Hipótesis: formulación y características', category: 'Método Científico', suggestion: 'Debe ser falsable y verificable.' },
              { id: 'cn-met-var', name: 'Variables: dependiente, independiente, controlada', category: 'Método Científico', suggestion: 'Identifica qué cambias, qué mides, qué mantienes constante.' },
              { id: 'cn-met-dis', name: 'Diseño experimental y control de variables', category: 'Método Científico', suggestion: 'Importancia del grupo control.' },
              { id: 'cn-met-dat', name: 'Análisis de datos: tablas y gráficas', category: 'Método Científico', suggestion: 'Interpreta tendencias, máximos, mínimos.' },
              { id: 'cn-met-con', name: 'Conclusiones y comunicación de resultados', category: 'Método Científico', suggestion: '¿Los datos apoyan o refutan la hipótesis?' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'matematicas',
    name: 'Matemáticas',
    icon: 'Calculator',
    color: '#3b82f6',
    components: ['Numérico-Variacional', 'Geométrico-Métrico', 'Aleatorio'],
    competencies: [
      {
        id: 'mat-interp',
        name: 'Interpretación y Representación',
        description: 'Capacidad para comprender y transformar la información cuantitativa y esquemática presentada en distintos formatos.',
        affirmations: [
          {
            id: 'mat-interp-1',
            description: 'Comprender y transformar información cuantitativa presentada en diferentes formatos.',
            evidences: [
              { id: 'mat-int-e1', description: 'Extrae información local y global de tablas, gráficas y diagramas.' },
              { id: 'mat-int-e2', description: 'Traduce entre diferentes representaciones (verbal, algebraica, gráfica, tabular).' },
              { id: 'mat-int-e3', description: 'Identifica características de gráficas cartesianas en relación con la situación.' }
            ],
            topics: [
              { id: 'mat-num-tab', name: 'Lectura e interpretación de tablas de frecuencia', category: 'Numérico', suggestion: 'Practica con datos de periódicos y encuestas.' },
              { id: 'mat-num-gra', name: 'Gráficas: barras, circulares, líneas, histogramas', category: 'Numérico', suggestion: 'Identifica cuándo usar cada tipo de gráfica.' },
              { id: 'mat-num-fun', name: 'Funciones: lineales, cuadráticas, exponenciales', category: 'Variacional', suggestion: 'Relaciona la ecuación y = mx + b con su gráfica.' },
              { id: 'mat-num-por', name: 'Porcentajes, fracciones y razones', category: 'Numérico', suggestion: 'Calcula descuentos y aumentos mentalmente.' },
              { id: 'mat-geo-cor', name: 'Coordenadas cartesianas y ubicación de puntos', category: 'Geométrico', suggestion: 'Practica ubicando puntos (x, y) en el plano.' },
              { id: 'mat-geo-vis', name: 'Vistas y representaciones de cuerpos 3D', category: 'Geométrico', suggestion: 'Dibuja vistas frontal, lateral y superior.' },
              { id: 'mat-geo-tra', name: 'Transformaciones en el plano: traslación, rotación', category: 'Geométrico', suggestion: 'Visualiza cómo cambian las coordenadas.' }
            ]
          }
        ]
      },
      {
        id: 'mat-form',
        name: 'Formulación y Ejecución',
        description: 'Capacidad para plantear y diseñar estrategias que permitan resolver problemas provenientes de contextos matemáticos y no matemáticos.',
        affirmations: [
          {
            id: 'mat-form-1',
            description: 'Plantear estrategias y ejecutar procedimientos para resolver problemas.',
            evidences: [
              { id: 'mat-form-e1', description: 'Diseña estrategias para resolver problemas.' },
              { id: 'mat-form-e2', description: 'Selecciona procedimientos adecuados al tipo de problema.' },
              { id: 'mat-form-e3', description: 'Ejecuta algoritmos y procedimientos rutinarios.' },
              { id: 'mat-form-e4', description: 'Resuelve problemas que involucran cantidades y magnitudes.' }
            ],
            topics: [
              { id: 'mat-alg-ecu', name: 'Ecuaciones lineales y sistemas 2x2', category: 'Álgebra', suggestion: 'Métodos: sustitución, igualación, eliminación.' },
              { id: 'mat-alg-ine', name: 'Inecuaciones y desigualdades', category: 'Álgebra', suggestion: 'Recuerda que al multiplicar por negativo, cambia el signo.' },
              { id: 'mat-alg-fac', name: 'Factorización y productos notables', category: 'Álgebra', suggestion: 'Diferencia de cuadrados, trinomio cuadrado perfecto.' },
              { id: 'mat-geo-are', name: 'Áreas: triángulo, círculo, trapecio, polígonos', category: 'Geometría', suggestion: 'Memoriza fórmulas clave con tarjetas.' },
              { id: 'mat-geo-vol', name: 'Volúmenes: prisma, cilindro, cono, esfera', category: 'Geometría', suggestion: 'V = Área base × altura (para prismas).' },
              { id: 'mat-geo-pit', name: 'Teorema de Pitágoras y aplicaciones', category: 'Geometría', suggestion: 'a² + b² = c² solo para triángulos rectángulos.' },
              { id: 'mat-geo-tri', name: 'Trigonometría: sen, cos, tan, ley del seno/coseno', category: 'Geometría', suggestion: 'SOH CAH TOA: Sen=O/H, Cos=A/H, Tan=O/A.' },
              { id: 'mat-est-cen', name: 'Medidas de tendencia central: media, mediana, moda', category: 'Estadística', suggestion: 'Diferencia entre promedio y dato central.' },
              { id: 'mat-est-dis', name: 'Medidas de dispersión: rango, varianza', category: 'Estadística', suggestion: 'Miden qué tan "regados" están los datos.' },
              { id: 'mat-est-pro', name: 'Probabilidad simple y regla de Laplace', category: 'Probabilidad', suggestion: 'P = casos favorables / casos totales.' }
            ]
          }
        ]
      },
      {
        id: 'mat-arg',
        name: 'Argumentación',
        description: 'Capacidad para validar o refutar conclusiones, estrategias, soluciones, interpretaciones y representaciones en situaciones matemáticas.',
        affirmations: [
          {
            id: 'mat-arg-1',
            description: 'Validar afirmaciones y procedimientos matemáticos, y justificar o refutar resultados.',
            evidences: [
              { id: 'mat-arg-e1', description: 'Justifica la validez de una fórmula o procedimiento.' },
              { id: 'mat-arg-e2', description: 'Acepta o rechaza conclusiones basándose en datos y propiedades.' },
              { id: 'mat-arg-e3', description: 'Detecta errores en procedimientos o argumentaciones.' }
            ],
            topics: [
              { id: 'mat-raz-num', name: 'Propiedades de los números: primos, pares, divisibilidad', category: 'Razonamiento', suggestion: 'Reglas de divisibilidad (2, 3, 5, 9).' },
              { id: 'mat-raz-geo', name: 'Propiedades geométricas: ángulos, paralelas, semejanza', category: 'Razonamiento', suggestion: 'Suma de ángulos internos = 180° (triángulo).' },
              { id: 'mat-raz-con', name: 'Contraejemplos y refutación de afirmaciones', category: 'Razonamiento', suggestion: 'Un solo contraejemplo invalida una regla general.' },
              { id: 'mat-raz-log', name: 'Razonamiento lógico y deductivo', category: 'Razonamiento', suggestion: 'Si A entonces B. Si no B entonces no A.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'sociales',
    name: 'Sociales y Ciudadanas',
    icon: 'Users',
    color: '#f59e0b',
    components: ['Pensamiento Social', 'Interpretación', 'Pensamiento Sistémico'],
    competencies: [
      {
        id: 'soc-pens',
        name: 'Pensamiento Social',
        description: 'Capacidad para usar conceptos básicos de las ciencias sociales y reconocer características del espacio y el tiempo.',
        affirmations: [
          {
            id: 'soc-pens-1',
            description: 'Comprender conceptos básicos de las ciencias sociales y reconocer coordenadas espacio-temporales.',
            evidences: [
              { id: 'soc-pens-e1', description: 'Conoce los fundamentos del sistema político colombiano.' },
              { id: 'soc-pens-e2', description: 'Ubica eventos en el tiempo y el espacio.' },
              { id: 'soc-pens-e3', description: 'Comprende derechos y deberes ciudadanos establecidos en la Constitución.' }
            ],
            topics: [
              { id: 'soc-con-der', name: 'Derechos fundamentales en Colombia', category: 'Constitución', suggestion: 'Artículos 11-41 de la Constitución.' },
              { id: 'soc-con-deb', name: 'Deberes ciudadanos', category: 'Constitución', suggestion: 'Artículo 95: votar, respetar derechos ajenos, etc.' },
              { id: 'soc-con-pod', name: 'Ramas del poder: Ejecutiva, Legislativa, Judicial', category: 'Constitución', suggestion: '¿Quién hace las leyes? ¿Quién las ejecuta? ¿Quién juzga?' },
              { id: 'soc-con-mec', name: 'Mecanismos de participación: tutela, voto, plebiscito', category: 'Constitución', suggestion: 'La tutela protege derechos fundamentales.' },
              { id: 'soc-his-ind', name: 'Independencia de Colombia', category: 'Historia', suggestion: '1810-1819. Causas internas y externas.' },
              { id: 'soc-his-vio', name: 'La Violencia y Frente Nacional', category: 'Historia', suggestion: '1948-1958. Alternancia Liberal-Conservadora.' },
              { id: 'soc-his-con', name: 'Conflicto armado: guerrillas, paramilitares, narcotráfico', category: 'Historia', suggestion: 'FARC, ELN, AUC. Acuerdos de paz.' },
              { id: 'soc-his-91', name: 'Constitución de 1991 y sus reformas', category: 'Historia', suggestion: 'Estado Social de Derecho. Corte Constitucional.' },
              { id: 'soc-geo-eco', name: 'Sectores económicos de Colombia', category: 'Geografía', suggestion: 'Primario, secundario, terciario. Exportaciones.' },
              { id: 'soc-geo-glo', name: 'Globalización y geopolítica mundial', category: 'Geografía', suggestion: 'TLCs, bloques económicos, organismos internacionales.' }
            ]
          }
        ]
      },
      {
        id: 'soc-mult',
        name: 'Interpretación y Análisis de Perspectivas',
        description: 'Capacidad para reconocer perspectivas y analizarlas, identificando los intereses y puntos de vista de diferentes actores.',
        affirmations: [
          {
            id: 'soc-mult-1',
            description: 'Reconocer y analizar diferentes perspectivas en situaciones sociales.',
            evidences: [
              { id: 'soc-mult-e1', description: 'Reconoce las perspectivas de diferentes actores involucrados en un conflicto.' },
              { id: 'soc-mult-e2', description: 'Analiza los intereses y motivos de los actores.' },
              { id: 'soc-mult-e3', description: 'Evalúa la credibilidad y sesgo de las fuentes de información.' }
            ],
            topics: [
              { id: 'soc-act-arm', name: 'Actores del conflicto armado colombiano', category: 'Conflictos', suggestion: 'Estado, guerrillas, paramilitares, víctimas, sociedad civil.' },
              { id: 'soc-act-soc', name: 'Movimientos sociales y organizaciones', category: 'Conflictos', suggestion: 'Sindicatos, ONGs, movimientos estudiantiles.' },
              { id: 'soc-fue-ses', name: 'Sesgo y credibilidad de fuentes', category: 'Fuentes', suggestion: '¿Quién financia? ¿Qué intereses tiene?' },
              { id: 'soc-fue-pre', name: 'Identificación de prejuicios y estereotipos', category: 'Fuentes', suggestion: 'Generalización, discriminación, xenofobia.' },
              { id: 'soc-con-amb', name: 'Conflictos ambientales: minería, recursos hídricos', category: 'Conflictos', suggestion: 'Desarrollo económico vs. protección ambiental.' },
              { id: 'soc-con-gen', name: 'Desigualdad de género y discriminación', category: 'Conflictos', suggestion: 'Brecha salarial, violencia de género, representación.' }
            ]
          }
        ]
      },
      {
        id: 'soc-sist',
        name: 'Pensamiento Sistémico y Reflexión Crítica',
        description: 'Capacidad para entender la realidad social como un sistema complejo, identificando relaciones entre dimensiones.',
        affirmations: [
          {
            id: 'soc-sist-1',
            description: 'Comprender problemas sociales como sistemas complejos con múltiples dimensiones.',
            evidences: [
              { id: 'soc-sist-e1', description: 'Relaciona dimensiones políticas, económicas, culturales y ambientales.' },
              { id: 'soc-sist-e2', description: 'Analiza las consecuencias de decisiones y políticas públicas.' },
              { id: 'soc-sist-e3', description: 'Evalúa la aplicabilidad de soluciones a problemas sociales.' }
            ],
            topics: [
              { id: 'soc-mod-des', name: 'Modelos de desarrollo: sostenible, extractivista', category: 'Modelos', suggestion: 'Crecimiento económico vs. bienestar social.' },
              { id: 'soc-mod-neo', name: 'Neoliberalismo y estado de bienestar', category: 'Modelos', suggestion: 'Privatización vs. servicios públicos.' },
              { id: 'soc-pro-pob', name: 'Pobreza y desigualdad: causas estructurales', category: 'Problemas', suggestion: 'Índice GINI, pobreza multidimensional.' },
              { id: 'soc-pro-des', name: 'Desplazamiento forzado y migración', category: 'Problemas', suggestion: 'Causas: conflicto, economía, desastres.' },
              { id: 'soc-pro-cor', name: 'Corrupción y sus efectos sociales', category: 'Problemas', suggestion: 'Afecta inversión social, confianza institucional.' },
              { id: 'soc-pol-pub', name: 'Análisis de políticas públicas', category: 'Políticas', suggestion: 'Problema → Diseño → Implementación → Evaluación.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'lectura',
    name: 'Lectura Crítica',
    icon: 'BookOpen',
    color: '#8b5cf6',
    components: ['Literal', 'Inferencial', 'Crítico-Valorativo'],
    competencies: [
      {
        id: 'lec-loc',
        name: 'Identificar y Entender Contenidos Locales',
        description: 'Capacidad para comprender el significado de palabras, expresiones y frases que aparecen explícitamente en el texto.',
        affirmations: [
          {
            id: 'lec-loc-1',
            description: 'Comprender el significado de elementos locales del texto.',
            evidences: [
              { id: 'lec-loc-e1', description: 'Entiende el significado de palabras y expresiones en contexto.' },
              { id: 'lec-loc-e2', description: 'Identifica información explícita en el texto (nombres, fechas, lugares).' },
              { id: 'lec-loc-e3', description: 'Comprende la función de conectores y referentes.' }
            ],
            topics: [
              { id: 'lec-sem-sin', name: 'Sinónimos y antónimos en contexto', category: 'Semántica', suggestion: 'La palabra puede cambiar de significado según el contexto.' },
              { id: 'lec-sem-pol', name: 'Polisemia y significado contextual', category: 'Semántica', suggestion: 'Una palabra, múltiples significados. El contexto define.' },
              { id: 'lec-gra-con', name: 'Conectores: adversativos, causales, temporales', category: 'Gramática', suggestion: 'Pero, sin embargo, por lo tanto, luego, mientras.' },
              { id: 'lec-gra-ref', name: 'Referentes y anáforas (pronombres)', category: 'Gramática', suggestion: '¿A qué se refiere "este", "lo", "ello"?' },
              { id: 'lec-inf-exp', name: 'Localización de información explícita', category: 'Información', suggestion: '¿Quién? ¿Qué? ¿Cuándo? ¿Dónde? ¿Cómo?' }
            ]
          }
        ]
      },
      {
        id: 'lec-glob',
        name: 'Comprender Cómo se Articula el Texto',
        description: 'Capacidad para comprender cómo se articulan las partes de un texto para darle un sentido global.',
        affirmations: [
          {
            id: 'lec-glob-1',
            description: 'Comprender la estructura y organización global del texto.',
            evidences: [
              { id: 'lec-glob-e1', description: 'Identifica el tema central y la idea principal del texto.' },
              { id: 'lec-glob-e2', description: 'Comprende la función de partes específicas para el sentido global.' },
              { id: 'lec-glob-e3', description: 'Relaciona información de diferentes partes para hacer inferencias.' }
            ],
            topics: [
              { id: 'lec-tip-nar', name: 'Texto narrativo: cuento, novela, crónica', category: 'Tipologías', suggestion: 'Inicio, nudo, desenlace. Narrador, personajes.' },
              { id: 'lec-tip-arg', name: 'Texto argumentativo: ensayo, editorial, columna', category: 'Tipologías', suggestion: 'Tesis → Argumentos → Conclusión.' },
              { id: 'lec-tip-exp', name: 'Texto expositivo: noticia, artículo científico', category: 'Tipologías', suggestion: 'Informa sin opinar. Objetivo y claro.' },
              { id: 'lec-tip-dis', name: 'Textos discontinuos: infografías, cómics, mapas', category: 'Tipologías', suggestion: 'Combinan texto e imagen. Lectura no lineal.' },
              { id: 'lec-est-tes', name: 'Identificación de tesis y argumentos', category: 'Estructura', suggestion: 'La tesis es la afirmación principal. Los argumentos la apoyan.' },
              { id: 'lec-est-par', name: 'Función de párrafos: introducción, desarrollo, cierre', category: 'Estructura', suggestion: 'Cada párrafo tiene un propósito en el texto.' },
              { id: 'lec-inf-glo', name: 'Inferencias globales: propósito, público, contexto', category: 'Inferencia', suggestion: '¿Para quién escribe? ¿Qué quiere lograr?' }
            ]
          }
        ]
      },
      {
        id: 'lec-crit',
        name: 'Reflexionar y Evaluar',
        description: 'Capacidad para evaluar el contenido del texto, sus estrategias discursivas y la validez de sus argumentos.',
        affirmations: [
          {
            id: 'lec-crit-1',
            description: 'Evaluar críticamente el contenido, forma y contexto del texto.',
            evidences: [
              { id: 'lec-crit-e1', description: 'Reconoce las estrategias discursivas del autor.' },
              { id: 'lec-crit-e2', description: 'Juzga la solidez y validez de los argumentos.' },
              { id: 'lec-crit-e3', description: 'Contextualiza el texto (reconoce prejuicios, intenciones, ideologías).' },
              { id: 'lec-crit-e4', description: 'Relaciona el texto con otros textos o con contextos externos.' }
            ],
            topics: [
              { id: 'lec-pra-int', name: 'Intención comunicativa: informar, persuadir, ironizar', category: 'Pragmática', suggestion: '¿Qué efecto quiere causar en el lector?' },
              { id: 'lec-pra-ton', name: 'Tono del texto: formal, irónico, crítico, nostálgico', category: 'Pragmática', suggestion: 'Las palabras elegidas revelan la actitud del autor.' },
              { id: 'lec-pra-ses', name: 'Sesgo y punto de vista del autor', category: 'Pragmática', suggestion: 'Todo texto tiene un punto de vista. Identifícalo.' },
              { id: 'lec-arg-val', name: 'Validez de argumentos y premisas', category: 'Argumentación', suggestion: '¿Las premisas son verdaderas? ¿La conclusión se sigue?' },
              { id: 'lec-arg-fal', name: 'Falacias argumentativas comunes', category: 'Argumentación', suggestion: 'Ad hominem, generalización apresurada, hombre de paja.' },
              { id: 'lec-ctx-his', name: 'Contexto histórico y cultural del texto', category: 'Contexto', suggestion: '¿Cuándo y dónde se escribió? ¿Qué pasaba?' },
              { id: 'lec-int-txt', name: 'Intertextualidad: relaciones con otros textos', category: 'Contexto', suggestion: 'Referencias, alusiones, parodias, diálogos entre textos.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'ingles',
    name: 'Inglés',
    icon: 'Languages',
    color: '#ec4899',
    components: ['A1', 'A2', 'B1', 'B+'],
    competencies: [
      {
        id: 'ing-a1',
        name: 'Nivel A1 - Partes 1 y 2',
        description: 'Capacidad para comprender avisos simples y relacionar vocabulario básico con definiciones.',
        affirmations: [
          {
            id: 'ing-a1-1',
            description: 'Comprender avisos y vocabulario básico en contextos cotidianos.',
            evidences: [
              { id: 'ing-a1-e1', description: 'Identifica dónde se encuentra un aviso específico.' },
              { id: 'ing-a1-e2', description: 'Relaciona definiciones con palabras de una lista.' }
            ],
            topics: [
              { id: 'ing-voc-lug', name: 'Lugares: hospital, school, airport, restaurant', category: 'Vocabulario', suggestion: 'Etiqueta lugares en tu casa en inglés.' },
              { id: 'ing-voc-cot', name: 'Objetos cotidianos y ropa', category: 'Vocabulario', suggestion: 'Flashcards con imágenes y palabras.' },
              { id: 'ing-voc-fam', name: 'Familia, profesiones, deportes', category: 'Vocabulario', suggestion: 'Describe a tu familia en inglés.' },
              { id: 'ing-gra-imp', name: 'Imperativos: Do not enter, Keep off', category: 'Gramática', suggestion: 'Los avisos usan verbos base: Stop, Hold, Wait.' },
              { id: 'ing-gra-mod', name: 'Modales básicos: Can/Can\'t', category: 'Gramática', suggestion: 'Can = habilidad o permiso. Can\'t = prohibición.' }
            ]
          }
        ]
      },
      {
        id: 'ing-a2',
        name: 'Nivel A2 - Partes 3 y 4',
        description: 'Capacidad para completar conversaciones cotidianas y textos con gramática básica.',
        affirmations: [
          {
            id: 'ing-a2-1',
            description: 'Interactuar en conversaciones simples y completar textos gramaticales.',
            evidences: [
              { id: 'ing-a2-e1', description: 'Completa conversaciones cortas seleccionando la respuesta adecuada.' },
              { id: 'ing-a2-e2', description: 'Completa textos seleccionando palabras gramaticales correctas.' }
            ],
            topics: [
              { id: 'ing-fun-sal', name: 'Saludos, despedidas, presentaciones', category: 'Funciones', suggestion: 'How are you? Nice to meet you. See you later.' },
              { id: 'ing-fun-inv', name: 'Invitaciones: Would you like to...?', category: 'Funciones', suggestion: 'Aceptar: I\'d love to. Rechazar: Sorry, I can\'t.' },
              { id: 'ing-fun-sug', name: 'Sugerencias: Why don\'t we...? Let\'s...', category: 'Funciones', suggestion: 'Proponer actividades.' },
              { id: 'ing-gra-pre', name: 'Present Simple vs Present Continuous', category: 'Gramática', suggestion: 'Simple = hábitos. Continuous = ahora mismo.' },
              { id: 'ing-gra-pas', name: 'Past Simple: regulares e irregulares', category: 'Gramática', suggestion: 'Memoriza los 50 verbos irregulares más comunes.' },
              { id: 'ing-gra-fut', name: 'Future: Will vs Going to', category: 'Gramática', suggestion: 'Will = decisión espontánea. Going to = plan.' },
              { id: 'ing-gra-com', name: 'Comparativos y superlativos', category: 'Gramática', suggestion: 'Bigger than, the biggest. More beautiful than.' },
              { id: 'ing-gra-prp', name: 'Preposiciones de lugar y tiempo', category: 'Gramática', suggestion: 'In, on, at: reglas de uso.' }
            ]
          }
        ]
      },
      {
        id: 'ing-b1',
        name: 'Nivel B1 - Partes 5, 6 y 7',
        description: 'Capacidad para comprender textos, inferir significados y usar gramática avanzada.',
        affirmations: [
          {
            id: 'ing-b1-1',
            description: 'Comprender textos e inferir información implícita.',
            evidences: [
              { id: 'ing-b1-e1', description: 'Comprende información literal mediante parafraseo.' },
              { id: 'ing-b1-e2', description: 'Infiere intención, actitud o temas complejos del texto.' },
              { id: 'ing-b1-e3', description: 'Completa textos complejos con vocabulario y gramática avanzada.' }
            ],
            topics: [
              { id: 'ing-lec-par', name: 'Comprensión literal y parafraseo', category: 'Lectura', suggestion: 'La respuesta correcta dice lo mismo con otras palabras.' },
              { id: 'ing-lec-inf', name: 'Inferencia: tono, intención, actitud', category: 'Lectura', suggestion: 'Lee entre líneas. ¿Qué NO dice pero implica?' },
              { id: 'ing-lec-ide', name: 'Idea principal implícita', category: 'Lectura', suggestion: 'El texto habla de X, pero el tema real es Y.' },
              { id: 'ing-gra-per', name: 'Present Perfect: have/has + past participle', category: 'Gramática', suggestion: 'Experiencias de vida, acciones recientes.' },
              { id: 'ing-gra-mod', name: 'Modales: should, must, might, could', category: 'Gramática', suggestion: 'Consejo, obligación, posibilidad, habilidad pasada.' },
              { id: 'ing-gra-con', name: 'Condicionales: 0, 1, 2', category: 'Gramática', suggestion: 'If + present → will / If + past → would.' },
              { id: 'ing-gra-pas', name: 'Voz pasiva básica', category: 'Gramática', suggestion: 'Be + past participle: The book was written.' },
              { id: 'ing-gra-rel', name: 'Relative clauses: who, which, that', category: 'Gramática', suggestion: 'Añaden información sobre personas/cosas.' }
            ]
          }
        ]
      }
    ]
  }
];
