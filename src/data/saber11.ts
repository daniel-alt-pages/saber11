export type Topic = {
  id: string;
  name: string;
  category?: string;
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
  components?: string[];
  competencies: Competence[];
};

// DATOS OFICIALES ICFES - Basados en Marcos de Referencia y Desglose Oficial
export const SABER11_DATA: Area[] = [
  // ==================== CIENCIAS NATURALES ====================
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
        description: 'Capacidad para asociar fenómenos naturales con conceptos propios del conocimiento científico.',
        affirmations: [
          {
            id: 'cn-uso-4',
            description: 'Asociar fenómenos naturales con conceptos propios del conocimiento científico.',
            evidences: [
              { id: 'cn-uso-4-e1', description: 'Relaciona los componentes de un circuito en serie y en paralelo con sus respectivos voltajes y corrientes.' },
              { id: 'cn-uso-4-e2', description: 'Relaciona los distintos factores que determinan la dinámica de un sistema o fenómeno (condiciones iniciales, parámetros y constantes) para identificar su comportamiento, teniendo en cuenta las leyes de la física.' },
              { id: 'cn-uso-4-e3', description: 'Relaciona los tipos de energía presentes en un objeto con las interacciones que presenta el sistema con su entorno.' },
              { id: 'cn-uso-4-e4', description: 'Establece relaciones entre fenómenos biológicos para comprender la dinámica de lo vivo.' },
              { id: 'cn-uso-4-e5', description: 'Establece relaciones entre fenómenos biológicos para comprender su entorno.' },
              { id: 'cn-uso-4-e6', description: 'Diferencia distintos tipos de reacciones químicas y realiza cálculos de manera adecuada teniendo en cuenta la ley de la conservación de la masa y carga.' },
              { id: 'cn-uso-4-e7', description: 'Establece relaciones entre conceptos fisicoquímicos simples (separación de mezclas, solubilidad, gases ideales) con distintos fenómenos naturales.' },
              { id: 'cn-uso-4-e8', description: 'Establece relaciones entre las propiedades y estructura de la materia con la formación de iones y moléculas.' }
            ],
            topics: [
              { id: 'cn-fis-cir', name: 'Circuitos eléctricos: serie y paralelo', category: 'Física', suggestion: 'Practica con circuitos simples. Aprende ley de Ohm: V=IR' },
              { id: 'cn-fis-din', name: 'Dinámica: Leyes de Newton', category: 'Física', suggestion: 'Dibuja diagramas de cuerpo libre. F=ma' },
              { id: 'cn-fis-ene', name: 'Energía: cinética, potencial, conservación', category: 'Física', suggestion: 'Resuelve problemas de montaña rusa y péndulos' },
              { id: 'cn-bio-din', name: 'Dinámica de ecosistemas y lo vivo', category: 'Biología', suggestion: 'Estudia cadenas tróficas y flujo de energía' },
              { id: 'cn-bio-org', name: 'Funcionamiento de organismos', category: 'Biología', suggestion: 'Sistemas: circulatorio, respiratorio, nervioso' },
              { id: 'cn-qui-rea', name: 'Tipos de reacciones químicas', category: 'Química', suggestion: 'Síntesis, descomposición, sustitución, redox' },
              { id: 'cn-qui-est', name: 'Estequiometría y balanceo', category: 'Química', suggestion: 'Conservación de masa y carga. Calcula moles' },
              { id: 'cn-qui-mat', name: 'Propiedades de la materia: iones y moléculas', category: 'Química', suggestion: 'Estructura atómica, tabla periódica, enlaces' }
            ]
          },
          {
            id: 'cn-uso-5',
            description: 'Comprender que los problemas y sus soluciones involucran distintas dimensiones.',
            evidences: [
              { id: 'cn-uso-5-e1', description: 'Establece relaciones que hay entre dimensiones presentes en una situación problemática.' },
              { id: 'cn-uso-5-e2', description: 'Analiza los efectos en distintas dimensiones que tendría una posible intervención.' },
              { id: 'cn-uso-5-e3', description: 'Identifica los diferentes tipos de fuerzas que actúan sobre los cuerpos que conforman un sistema.' },
              { id: 'cn-uso-5-e4', description: 'Identifica características de algunos procesos que se dan en los ecosistemas para comprender la dinámica que se da en su interior.' },
              { id: 'cn-uso-5-e5', description: 'Identifica características de algunos procesos que se dan en los organismos para comprender la dinámica de lo vivo.' },
              { id: 'cn-uso-5-e6', description: 'Identifica las propiedades y estructura de la materia y diferencia elementos, compuestos y mezclas.' },
              { id: 'cn-uso-5-e7', description: 'Reconoce posibles cambios en el entorno por la explotación de un recurso o el uso de una tecnología.' }
            ],
            topics: [
              { id: 'cn-fis-fue', name: 'Tipos de fuerzas: gravitacional, fricción, tensión', category: 'Física', suggestion: 'Identifica fuerzas en situaciones cotidianas' },
              { id: 'cn-bio-eco', name: 'Procesos ecosistémicos', category: 'Biología', suggestion: 'Ciclos biogeoquímicos, sucesión ecológica' },
              { id: 'cn-bio-cel', name: 'Procesos celulares y organísmicos', category: 'Biología', suggestion: 'Metabolismo, homeóstasis, reproducción' },
              { id: 'cn-qui-cla', name: 'Clasificación de la materia', category: 'Química', suggestion: 'Elementos, compuestos, mezclas homogéneas/heterogéneas' },
              { id: 'cn-cts-amb', name: 'Impacto ambiental de tecnologías', category: 'CTS', suggestion: 'Analiza pros y contras de intervenciones tecnológicas' }
            ]
          }
        ]
      },
      {
        id: 'cn-explicacion',
        name: 'Explicación de Fenómenos',
        description: 'Capacidad para construir explicaciones y usar modelos para dar razón de fenómenos naturales.',
        affirmations: [
          {
            id: 'cn-exp-1',
            description: 'Analizar el potencial del uso de recursos naturales o artefactos y sus efectos sobre el entorno y la salud.',
            evidences: [
              { id: 'cn-exp-1-e1', description: 'Explica algunos principios para mantener la salud individual y la pública con base en principios biológicos, químicos y físicos.' },
              { id: 'cn-exp-1-e2', description: 'Explica cómo la explotación de un recurso o el uso de una tecnología tiene efectos positivos y/o negativos en las personas y en el entorno.' },
              { id: 'cn-exp-1-e3', description: 'Explica el uso correcto y seguro de una tecnología o artefacto en un contexto específico.' }
            ],
            topics: [
              { id: 'cn-cts-sal', name: 'Salud pública y principios científicos', category: 'CTS', suggestion: 'Vacunas, antibióticos, nutrición, contaminación' },
              { id: 'cn-cts-rec', name: 'Explotación de recursos naturales', category: 'CTS', suggestion: 'Minería, petróleo, agua, deforestación' },
              { id: 'cn-cts-tec', name: 'Uso seguro de tecnología', category: 'CTS', suggestion: 'Radiación, energía nuclear, biotecnología' }
            ]
          },
          {
            id: 'cn-exp-2',
            description: 'Explicar cómo ocurren algunos fenómenos de la naturaleza con base en observaciones, patrones y conceptos propios del conocimiento científico.',
            evidences: [
              { id: 'cn-exp-2-e1', description: 'Da las razones por las cuales una reacción describe un fenómeno y justifica las relaciones cuantitativas existentes, teniendo en cuenta la ley de la conservación de la masa y carga.' },
              { id: 'cn-exp-2-e2', description: 'Reconoce las razones por las cuales la materia se puede diferenciar según su estructura y propiedades.' },
              { id: 'cn-exp-2-e3', description: 'Reconoce los atributos que definen ciertos procesos fisicoquímicos simples (separación de mezclas, solubilidad, gases ideales, cambios de fase).' },
              { id: 'cn-exp-2-e4', description: 'Elabora explicaciones al relacionar las variables de estado que describen un sistema electrónico, argumentando a partir de los modelos básicos de circuitos.' },
              { id: 'cn-exp-2-e5', description: 'Elabora explicaciones al relacionar las variables de estado que describen un sistema, argumentando a partir de los modelos básicos de cinemática y dinámica newtoniana.' },
              { id: 'cn-exp-2-e6', description: 'Elabora explicaciones al relacionar las variables de estado que describen un sistema, argumentando a partir de los modelos básicos de la termodinámica.' },
              { id: 'cn-exp-2-e7', description: 'Elabora explicaciones al relacionar las variables de estado que describen un sistema, argumentando a partir de los modelos básicos de ondas.' },
              { id: 'cn-exp-2-e8', description: 'Analiza aspectos de los ecosistemas y da razón de cómo funcionan, de sus interrelaciones con los factores bióticos y abióticos.' },
              { id: 'cn-exp-2-e9', description: 'Analiza la dinámica interna de los organismos y da razón de cómo funcionan sus componentes por separado y en conjunto para mantener la vida.' }
            ],
            topics: [
              { id: 'cn-qui-con', name: 'Conservación de masa y carga en reacciones', category: 'Química', suggestion: 'Balanceo de ecuaciones, mol, número de Avogadro' },
              { id: 'cn-qui-pro', name: 'Propiedades y estructura de la materia', category: 'Química', suggestion: 'Tabla periódica, configuración electrónica' },
              { id: 'cn-qui-fis', name: 'Procesos fisicoquímicos', category: 'Química', suggestion: 'Solubilidad, gases ideales, cambios de fase' },
              { id: 'cn-fis-ele', name: 'Modelos de circuitos eléctricos', category: 'Física', suggestion: 'Ley de Ohm, Kirchhoff, potencia eléctrica' },
              { id: 'cn-fis-cin', name: 'Cinemática y dinámica newtoniana', category: 'Física', suggestion: 'MRU, MUA, caída libre, leyes de Newton' },
              { id: 'cn-fis-ter', name: 'Termodinámica', category: 'Física', suggestion: 'Leyes de la termodinámica, calor, trabajo' },
              { id: 'cn-fis-ond', name: 'Ondas: sonido, luz', category: 'Física', suggestion: 'Frecuencia, longitud de onda, espectro EM' },
              { id: 'cn-bio-sis', name: 'Ecosistemas: factores bióticos y abióticos', category: 'Biología', suggestion: 'Cadenas tróficas, nichos, hábitats' },
              { id: 'cn-bio-org', name: 'Dinámica interna de organismos', category: 'Biología', suggestion: 'Sistemas orgánicos, metabolismo, homeóstasis' }
            ]
          },
          {
            id: 'cn-exp-3',
            description: 'Modelar fenómenos de la naturaleza con base en el análisis de variables y la relación entre conceptos.',
            evidences: [
              { id: 'cn-exp-3-e1', description: 'Usa modelos físicos (no básicos) basados en dinámica clásica (modelos mecanicistas) de un fenómeno particular en un sistema.' },
              { id: 'cn-exp-3-e2', description: 'Identifica y usa modelos químicos para comprender fenómenos particulares de la naturaleza.' },
              { id: 'cn-exp-3-e3', description: 'Analiza y usa modelos biológicos para comprender la dinámica que se da en lo vivo y en el entorno.' }
            ],
            topics: [
              { id: 'cn-mod-fis', name: 'Modelos físicos mecanicistas', category: 'Modelos', suggestion: 'Péndulo, proyectiles, osciladores' },
              { id: 'cn-mod-qui', name: 'Modelos atómicos y moleculares', category: 'Modelos', suggestion: 'Bohr, orbital, VSEPR, hibridación' },
              { id: 'cn-mod-bio', name: 'Modelos biológicos', category: 'Modelos', suggestion: 'Modelo celular, genético, ecológico' }
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
            id: 'cn-ind-6',
            description: 'Comprender que a partir de la investigación científica se construyen explicaciones sobre el mundo natural.',
            evidences: [
              { id: 'cn-ind-6-e1', description: 'Analiza qué tipo de pregunta puede ser contestada a partir del contexto de una investigación científica.' },
              { id: 'cn-ind-6-e2', description: 'Reconoce la importancia de la evidencia para comprender fenómenos naturales.' }
            ],
            topics: [
              { id: 'cn-met-pre', name: 'Formulación de preguntas investigables', category: 'Método Científico', suggestion: 'Preguntas específicas, medibles, falsables' },
              { id: 'cn-met-evi', name: 'Importancia de la evidencia empírica', category: 'Método Científico', suggestion: 'Datos vs opiniones, replicabilidad' }
            ]
          },
          {
            id: 'cn-ind-7',
            description: 'Derivar conclusiones para algunos fenómenos de la naturaleza basándose en conocimientos científicos y evidencia.',
            evidences: [
              { id: 'cn-ind-7-e1', description: 'Comunica de forma apropiada el proceso y los resultados de investigación en ciencias naturales.' },
              { id: 'cn-ind-7-e2', description: 'Determina si los resultados derivados de una investigación son suficientes y pertinentes para sacar conclusiones.' },
              { id: 'cn-ind-7-e3', description: 'Elabora conclusiones a partir de información o evidencias que las respalden.' },
              { id: 'cn-ind-7-e4', description: 'Hace predicciones con base en información, patrones y regularidades.' }
            ],
            topics: [
              { id: 'cn-met-com', name: 'Comunicación científica', category: 'Método Científico', suggestion: 'Informes, artículos, presentaciones' },
              { id: 'cn-met-con', name: 'Elaboración de conclusiones', category: 'Método Científico', suggestion: 'Relación datos-hipótesis-conclusión' },
              { id: 'cn-met-pre', name: 'Predicciones basadas en patrones', category: 'Método Científico', suggestion: 'Tendencias, extrapolación, modelos' }
            ]
          },
          {
            id: 'cn-ind-8',
            description: 'Observar y relacionar patrones en los datos para evaluar las predicciones.',
            evidences: [
              { id: 'cn-ind-8-e1', description: 'Interpreta y analiza datos representados en texto, gráficas, dibujos, diagramas o tablas.' },
              { id: 'cn-ind-8-e2', description: 'Representa datos en gráficas y tablas.' }
            ],
            topics: [
              { id: 'cn-dat-int', name: 'Interpretación de gráficas y tablas', category: 'Datos', suggestion: 'Lectura de ejes, tendencias, valores atípicos' },
              { id: 'cn-dat-rep', name: 'Representación de datos', category: 'Datos', suggestion: 'Histogramas, dispersión, líneas' }
            ]
          },
          {
            id: 'cn-ind-9',
            description: 'Utilizar habilidades de pensamiento y procedimiento para evaluar predicciones.',
            evidences: [
              { id: 'cn-ind-9-e1', description: 'Da posibles explicaciones de eventos o fenómenos consistentes con conceptos de la ciencia (predicción o hipótesis).' },
              { id: 'cn-ind-9-e2', description: 'Diseña experimentos para dar respuesta a sus preguntas.' },
              { id: 'cn-ind-9-e3', description: 'Elige y utiliza instrumentos adecuados para reunir datos.' },
              { id: 'cn-ind-9-e4', description: 'Reconoce la necesidad de registrar y clasificar la información para realizar un buen análisis.' },
              { id: 'cn-ind-9-e5', description: 'Usa información adicional para evaluar una predicción.' }
            ],
            topics: [
              { id: 'cn-exp-hip', name: 'Formulación de hipótesis', category: 'Experimentación', suggestion: 'Si...entonces. Predicciones verificables' },
              { id: 'cn-exp-dis', name: 'Diseño experimental', category: 'Experimentación', suggestion: 'Variables, control, grupo experimental' },
              { id: 'cn-exp-ins', name: 'Instrumentos de medición', category: 'Experimentación', suggestion: 'Calibración, precisión, exactitud' },
              { id: 'cn-exp-reg', name: 'Registro y clasificación de datos', category: 'Experimentación', suggestion: 'Tablas de datos, unidades, organización' }
            ]
          }
        ]
      }
    ]
  },

  // ==================== SOCIALES Y CIUDADANAS ====================
  {
    id: 'sociales',
    name: 'Sociales y Ciudadanas',
    icon: 'Users',
    color: '#f59e0b',
    components: ['Pensamiento Social', 'Interpretación de Perspectivas', 'Pensamiento Sistémico'],
    competencies: [
      {
        id: 'soc-pensamiento',
        name: 'Pensamiento Social',
        description: 'Comprensión de modelos conceptuales, características y contextos de aplicación en las ciencias sociales.',
        affirmations: [
          {
            id: 'soc-pen-1',
            description: 'Comprende modelos conceptuales, sus características y contextos de aplicación.',
            evidences: [
              { id: 'soc-pen-1-e1', description: 'Identifica y usa conceptos sociales básicos (económicos, políticos, culturales y geográficos).' },
              { id: 'soc-pen-1-e2', description: 'Conoce el modelo de Estado Social de Derecho y su aplicación en Colombia.' },
              { id: 'soc-pen-1-e3', description: 'Conoce la organización del Estado: funciones y alcances de las ramas del poder y de los organismos de control.' },
              { id: 'soc-pen-1-e4', description: 'Conoce los mecanismos que los ciudadanos tienen a su disposición para participar activamente en la democracia y para garantizar el respeto de sus derechos.' }
            ],
            topics: [
              { id: 'soc-con-eco', name: 'Conceptos económicos básicos', category: 'Conceptos', suggestion: 'Oferta, demanda, PIB, inflación, desempleo' },
              { id: 'soc-con-pol', name: 'Conceptos políticos básicos', category: 'Conceptos', suggestion: 'Democracia, dictadura, república, soberanía' },
              { id: 'soc-con-cul', name: 'Conceptos culturales y geográficos', category: 'Conceptos', suggestion: 'Identidad, territorio, nación, etnia' },
              { id: 'soc-est-soc', name: 'Estado Social de Derecho', category: 'Constitución', suggestion: 'Art. 1 Constitución. Derechos fundamentales' },
              { id: 'soc-est-ram', name: 'Ramas del poder público', category: 'Constitución', suggestion: 'Ejecutiva, Legislativa, Judicial + Organismos de Control' },
              { id: 'soc-est-mec', name: 'Mecanismos de participación ciudadana', category: 'Constitución', suggestion: 'Voto, tutela, referendo, plebiscito, cabildo abierto' }
            ]
          },
          {
            id: 'soc-pen-2',
            description: 'Comprende dimensiones espaciales y temporales de eventos, problemáticas y prácticas sociales.',
            evidences: [
              { id: 'soc-pen-2-e1', description: 'Localiza en el tiempo y en el espacio eventos históricos y prácticas sociales.' },
              { id: 'soc-pen-2-e2', description: 'Relaciona dimensiones históricas y geográficas de eventos y problemáticas sociales.' },
              { id: 'soc-pen-2-e3', description: 'Relaciona problemáticas o prácticas sociales con características del espacio geográfico.' }
            ],
            topics: [
              { id: 'soc-his-col', name: 'Historia de Colombia: períodos clave', category: 'Historia', suggestion: 'Conquista, Colonia, Independencia, República' },
              { id: 'soc-his-sig', name: 'Siglo XX en Colombia', category: 'Historia', suggestion: 'Violencia, Frente Nacional, Constitución 91' },
              { id: 'soc-geo-col', name: 'Geografía de Colombia', category: 'Geografía', suggestion: 'Regiones, recursos, fronteras, clima' },
              { id: 'soc-geo-mun', name: 'Geografía mundial y geopolítica', category: 'Geografía', suggestion: 'Globalización, bloques económicos, conflictos' }
            ]
          }
        ]
      },
      {
        id: 'soc-perspectivas',
        name: 'Interpretación y Análisis de Perspectivas',
        description: 'Capacidad para contextualizar y evaluar usos de fuentes y argumentos desde múltiples perspectivas.',
        affirmations: [
          {
            id: 'soc-per-3',
            description: 'Contextualiza y evalúa usos de fuentes y argumentos.',
            evidences: [
              { id: 'soc-per-3-e1', description: 'Reconoce y compara perspectivas de actores y grupos sociales.' },
              { id: 'soc-per-3-e2', description: 'Reconoce que las cosmovisiones, ideologías y roles sociales, influyen en diferentes argumentos, posiciones y conductas.' },
              { id: 'soc-per-3-e3', description: 'Establece relaciones entre las perspectivas de los individuos en una situación conflictiva y las propuestas de solución.' }
            ],
            topics: [
              { id: 'soc-act-gru', name: 'Perspectivas de actores sociales', category: 'Actores', suggestion: 'Estado, guerrillas, paramilitares, víctimas, sociedad civil' },
              { id: 'soc-ide-cos', name: 'Cosmovisiones e ideologías', category: 'Ideologías', suggestion: 'Liberalismo, conservadurismo, socialismo' },
              { id: 'soc-con-sol', name: 'Resolución de conflictos', category: 'Conflictos', suggestion: 'Negociación, mediación, acuerdos de paz' }
            ]
          },
          {
            id: 'soc-per-4',
            description: 'Evalúa usos sociales de las ciencias sociales.',
            evidences: [
              { id: 'soc-per-4-e1', description: 'Analiza modelos conceptuales y sus usos en decisiones sociales.' }
            ],
            topics: [
              { id: 'soc-mod-dec', name: 'Modelos para decisiones sociales', category: 'Modelos', suggestion: 'Políticas públicas, desarrollo, bienestar' }
            ]
          }
        ]
      },
      {
        id: 'soc-sistemico',
        name: 'Pensamiento Sistémico y Reflexión Crítica',
        description: 'Capacidad para comprender que los problemas involucran distintas dimensiones y reconocer relaciones entre estas.',
        affirmations: [
          {
            id: 'soc-sis-5',
            description: 'Comprende que los problemas y sus soluciones involucran distintas dimensiones y reconoce relaciones entre estas.',
            evidences: [
              { id: 'soc-sis-5-e1', description: 'Establece relaciones que hay entre dimensiones presentes en una situación problemática.' },
              { id: 'soc-sis-5-e2', description: 'Analiza los efectos en distintas dimensiones que tendría una posible intervención.' }
            ],
            topics: [
              { id: 'soc-dim-pol', name: 'Dimensión política de problemas sociales', category: 'Dimensiones', suggestion: 'Gobernabilidad, corrupción, participación' },
              { id: 'soc-dim-eco', name: 'Dimensión económica de problemas sociales', category: 'Dimensiones', suggestion: 'Pobreza, desigualdad, empleo' },
              { id: 'soc-dim-cul', name: 'Dimensión cultural de problemas sociales', category: 'Dimensiones', suggestion: 'Identidad, discriminación, diversidad' },
              { id: 'soc-dim-amb', name: 'Dimensión ambiental de problemas sociales', category: 'Dimensiones', suggestion: 'Recursos naturales, cambio climático' },
              { id: 'soc-int-pol', name: 'Análisis de políticas públicas', category: 'Intervención', suggestion: 'Diseño, implementación, evaluación' }
            ]
          }
        ]
      }
    ]
  },

  // ==================== MATEMÁTICAS ====================
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
        description: 'Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos.',
        affirmations: [
          {
            id: 'mat-int-1',
            description: 'Comprende y transforma la información cuantitativa y esquemática presentada en distintos formatos.',
            evidences: [
              { id: 'mat-int-1-e1', description: 'Da cuenta de las características básicas de la información presentada en diferentes formatos como series, gráficas, tablas y esquemas.' },
              { id: 'mat-int-1-e2', description: 'Transforma la representación de una o más piezas de información.' }
            ],
            topics: [
              { id: 'mat-gra-lec', name: 'Lectura de gráficas estadísticas', category: 'Gráficas', suggestion: 'Barras, circulares, histogramas, líneas' },
              { id: 'mat-tab-lec', name: 'Lectura e interpretación de tablas', category: 'Tablas', suggestion: 'Frecuencias, doble entrada, series' },
              { id: 'mat-fun-gra', name: 'Gráficas de funciones', category: 'Funciones', suggestion: 'Lineales, cuadráticas, exponenciales' },
              { id: 'mat-tra-rep', name: 'Transformación entre representaciones', category: 'Representación', suggestion: 'Verbal ↔ Algebraica ↔ Gráfica ↔ Tabular' },
              { id: 'mat-esq-dia', name: 'Interpretación de esquemas y diagramas', category: 'Esquemas', suggestion: 'Diagramas de flujo, Venn, árbol' }
            ]
          }
        ]
      },
      {
        id: 'mat-form',
        name: 'Formulación y Ejecución',
        description: 'Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas.',
        affirmations: [
          {
            id: 'mat-for-1',
            description: 'Frente a un problema que involucre información cuantitativa, plantea e implementa estrategias que lleven a soluciones adecuadas.',
            evidences: [
              { id: 'mat-for-1-e1', description: 'Diseña planes para la solución de problemas que involucran información cuantitativa o esquemática.' },
              { id: 'mat-for-1-e2', description: 'Ejecuta un plan de solución para un problema que involucra información cuantitativa o esquemática.' }
            ],
            topics: [
              { id: 'mat-alg-ecu', name: 'Ecuaciones lineales y sistemas 2x2', category: 'Álgebra', suggestion: 'Sustitución, igualación, eliminación' },
              { id: 'mat-alg-ine', name: 'Inecuaciones y desigualdades', category: 'Álgebra', suggestion: 'Cambio de signo al multiplicar por negativo' },
              { id: 'mat-alg-fac', name: 'Factorización y productos notables', category: 'Álgebra', suggestion: 'Diferencia de cuadrados, trinomio cuadrado' },
              { id: 'mat-geo-are', name: 'Cálculo de áreas', category: 'Geometría', suggestion: 'Triángulo, círculo, trapecio, polígonos' },
              { id: 'mat-geo-vol', name: 'Cálculo de volúmenes', category: 'Geometría', suggestion: 'Prisma, cilindro, cono, esfera' },
              { id: 'mat-geo-pit', name: 'Teorema de Pitágoras', category: 'Geometría', suggestion: 'a² + b² = c². Solo triángulos rectángulos' },
              { id: 'mat-tri-raz', name: 'Razones trigonométricas', category: 'Trigonometría', suggestion: 'SOH-CAH-TOA: Sen=O/H, Cos=A/H, Tan=O/A' },
              { id: 'mat-est-med', name: 'Medidas de tendencia central', category: 'Estadística', suggestion: 'Media, mediana, moda' },
              { id: 'mat-pro-sim', name: 'Probabilidad simple', category: 'Probabilidad', suggestion: 'P = favorables / posibles. Regla de Laplace' }
            ]
          }
        ]
      },
      {
        id: 'mat-arg',
        name: 'Argumentación',
        description: 'Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas.',
        affirmations: [
          {
            id: 'mat-arg-1',
            description: 'Valida procedimientos y estrategias matemáticas utilizadas para dar solución a problemas.',
            evidences: [
              { id: 'mat-arg-1-e1', description: 'Plantea afirmaciones que sustentan o refutan una interpretación dada a la información disponible en el marco de la solución de un problema.' },
              { id: 'mat-arg-1-e2', description: 'Argumenta a favor o en contra de un procedimiento para resolver un problema a la luz de criterios presentados o establecidos.' },
              { id: 'mat-arg-1-e3', description: 'Establece la validez o pertinencia de una solución propuesta a un problema dado.' }
            ],
            topics: [
              { id: 'mat-raz-val', name: 'Validación de procedimientos', category: 'Razonamiento', suggestion: 'Verificar pasos, revisar operaciones' },
              { id: 'mat-raz-jus', name: 'Justificación de soluciones', category: 'Razonamiento', suggestion: 'Explicar POR QUÉ funciona el método' },
              { id: 'mat-raz-ref', name: 'Refutación con contraejemplos', category: 'Razonamiento', suggestion: 'Un contraejemplo invalida una regla general' },
              { id: 'mat-pro-num', name: 'Propiedades de los números', category: 'Propiedades', suggestion: 'Primos, pares, divisibilidad (2,3,5,9)' },
              { id: 'mat-pro-geo', name: 'Propiedades geométricas', category: 'Propiedades', suggestion: 'Ángulos, paralelas, congruencia, semejanza' }
            ]
          }
        ]
      }
    ]
  },

  // ==================== LECTURA CRÍTICA ====================
  {
    id: 'lectura',
    name: 'Lectura Crítica',
    icon: 'BookOpen',
    color: '#8b5cf6',
    components: ['Literal', 'Inferencial', 'Crítico'],
    competencies: [
      {
        id: 'lec-local',
        name: 'Identificar y Entender Contenidos Locales',
        description: 'Identifica y entiende los contenidos locales que conforman un texto.',
        affirmations: [
          {
            id: 'lec-loc-1',
            description: 'Identifica y entiende los contenidos locales que conforman un texto.',
            evidences: [
              { id: 'lec-loc-1-e1', description: 'Entiende el significado de los elementos locales que constituyen un texto.' },
              { id: 'lec-loc-1-e2', description: 'Identifica los eventos narrados de manera explícita en un texto (literario, descriptivo, caricatura o cómic) y los personajes involucrados (si los hay).' }
            ],
            topics: [
              { id: 'lec-sem-sig', name: 'Significado de palabras en contexto', category: 'Semántica', suggestion: 'Sinónimos, antónimos, polisemia' },
              { id: 'lec-sem-con', name: 'Conectores lógicos', category: 'Semántica', suggestion: 'Adversativos (pero), causales (porque), temporales (luego)' },
              { id: 'lec-inf-exp', name: 'Información explícita', category: 'Literal', suggestion: '¿Quién? ¿Qué? ¿Cuándo? ¿Dónde? ¿Cómo?' },
              { id: 'lec-inf-per', name: 'Identificación de personajes y eventos', category: 'Literal', suggestion: 'Protagonista, antagonista, acciones principales' }
            ]
          }
        ]
      },
      {
        id: 'lec-global',
        name: 'Comprender la Articulación del Texto',
        description: 'Comprende cómo se articulan las partes de un texto para darle un sentido global.',
        affirmations: [
          {
            id: 'lec-glo-2',
            description: 'Comprende cómo se articulan las partes de un texto para darle un sentido global.',
            evidences: [
              { id: 'lec-glo-2-e1', description: 'Comprende la estructura formal de un texto y la función de sus partes.' },
              { id: 'lec-glo-2-e2', description: 'Identifica y caracteriza las diferentes voces o situaciones presentes en un texto.' },
              { id: 'lec-glo-2-e3', description: 'Comprende las relaciones entre diferentes partes o enunciados de un texto.' },
              { id: 'lec-glo-2-e4', description: 'Identifica y caracteriza las ideas o afirmaciones presentes en un texto informativo.' },
              { id: 'lec-glo-2-e5', description: 'Identifica el tipo de relación existente entre diferentes elementos de un texto (discontinuo).' }
            ],
            topics: [
              { id: 'lec-est-for', name: 'Estructura formal del texto', category: 'Estructura', suggestion: 'Introducción, desarrollo, conclusión' },
              { id: 'lec-tip-nar', name: 'Texto narrativo', category: 'Tipologías', suggestion: 'Cuento, novela, crónica. Inicio-nudo-desenlace' },
              { id: 'lec-tip-arg', name: 'Texto argumentativo', category: 'Tipologías', suggestion: 'Ensayo, editorial. Tesis-argumentos-conclusión' },
              { id: 'lec-tip-exp', name: 'Texto expositivo', category: 'Tipologías', suggestion: 'Noticia, artículo científico. Objetivo' },
              { id: 'lec-tip-dis', name: 'Texto discontinuo', category: 'Tipologías', suggestion: 'Infografías, cómics, mapas. Lectura no lineal' },
              { id: 'lec-voc-sit', name: 'Voces y situaciones', category: 'Voces', suggestion: 'Narrador, personajes, puntos de vista' },
              { id: 'lec-ide-tes', name: 'Identificación de tesis', category: 'Ideas', suggestion: 'La afirmación principal que defiende el autor' }
            ]
          }
        ]
      },
      {
        id: 'lec-critico',
        name: 'Reflexionar y Evaluar',
        description: 'Reflexiona a partir de un texto y evalúa su contenido.',
        affirmations: [
          {
            id: 'lec-cri-3',
            description: 'Reflexiona a partir de un texto y evalúa su contenido.',
            evidences: [
              { id: 'lec-cri-3-e1', description: 'Establece la validez e implicaciones de un enunciado de un texto (argumentativo o expositivo).' },
              { id: 'lec-cri-3-e2', description: 'Establece relaciones entre un texto y otros textos o enunciados.' },
              { id: 'lec-cri-3-e3', description: 'Reconoce contenidos valorativos presentes en un texto.' },
              { id: 'lec-cri-3-e4', description: 'Reconoce las estrategias discursivas en un texto.' },
              { id: 'lec-cri-3-e5', description: 'Contextualiza adecuadamente un texto o la información contenida en este.' }
            ],
            topics: [
              { id: 'lec-val-arg', name: 'Validez de argumentos', category: 'Argumentación', suggestion: '¿Las premisas apoyan la conclusión?' },
              { id: 'lec-fal-com', name: 'Falacias argumentativas', category: 'Argumentación', suggestion: 'Ad hominem, generalización, hombre de paja' },
              { id: 'lec-int-txt', name: 'Intertextualidad', category: 'Relaciones', suggestion: 'Referencias, alusiones, diálogo entre textos' },
              { id: 'lec-val-con', name: 'Contenidos valorativos', category: 'Valoración', suggestion: 'Juicios de valor, opiniones del autor' },
              { id: 'lec-est-dis', name: 'Estrategias discursivas', category: 'Estrategias', suggestion: 'Persuasión, ironía, comparación, ejemplos' },
              { id: 'lec-ctx-his', name: 'Contextualización histórica', category: 'Contexto', suggestion: '¿Cuándo se escribió? ¿Qué pasaba?' },
              { id: 'lec-int-com', name: 'Intención comunicativa', category: 'Intención', suggestion: 'Informar, persuadir, entretener, criticar' }
            ]
          }
        ]
      }
    ]
  },

  // ==================== INGLÉS ====================
  {
    id: 'ingles',
    name: 'Inglés',
    icon: 'Languages',
    color: '#ec4899',
    components: ['A1', 'A2', 'B1', 'B2'],
    competencies: [
      {
        id: 'ing-principiante',
        name: 'Nivel A - Principiante',
        description: 'Capacidad para comprender y utilizar expresiones cotidianas de uso frecuente.',
        affirmations: [
          {
            id: 'ing-a-1',
            description: 'Comprende y utiliza expresiones cotidianas y frases sencillas para necesidades inmediatas.',
            evidences: [
              { id: 'ing-a-e1', description: 'Es capaz de comprender y utilizar expresiones cotidianas de uso muy frecuente así como frases sencillas destinadas a satisfacer necesidades de tipo inmediato.' },
              { id: 'ing-a-e2', description: 'Puede presentarse a sí mismo y a otros, pedir y dar información personal básica sobre su domicilio, sus pertenencias y las personas que conoce.' },
              { id: 'ing-a-e3', description: 'Puede relacionarse de forma elemental siempre que su interlocutor hable despacio y con claridad.' }
            ],
            topics: [
              { id: 'ing-voc-pro', name: 'Presentaciones personales', category: 'Vocabulario', suggestion: 'My name is..., I am from..., I live in...' },
              { id: 'ing-voc-fam', name: 'Familia y posesiones', category: 'Vocabulario', suggestion: 'Mother, father, my house, my things' },
              { id: 'ing-gra-be', name: 'Verb TO BE', category: 'Gramática', suggestion: 'I am, you are, he/she/it is, we/they are' },
              { id: 'ing-voc-lug', name: 'Lugares de la ciudad', category: 'Vocabulario', suggestion: 'School, hospital, park, bank, restaurant' }
            ]
          }
        ]
      },
      {
        id: 'ing-basico',
        name: 'Nivel A2 - Básico',
        description: 'Capacidad para comprender frases de uso frecuente y comunicarse en tareas simples.',
        affirmations: [
          {
            id: 'ing-a2-1',
            description: 'Comprende frases de uso frecuente y se comunica en tareas cotidianas simples.',
            evidences: [
              { id: 'ing-a2-e1', description: 'Es capaz de comprender frases y expresiones de uso frecuente relacionadas con áreas de experiencia relevantes (familia, compras, lugares, ocupaciones).' },
              { id: 'ing-a2-e2', description: 'Sabe comunicarse a la hora de llevar a cabo tareas simples y cotidianas que no requieran más que intercambios sencillos de información.' },
              { id: 'ing-a2-e3', description: 'Sabe describir en términos sencillos aspectos de su pasado y su entorno así como necesidades inmediatas.' }
            ],
            topics: [
              { id: 'ing-gra-pre', name: 'Present Simple', category: 'Gramática', suggestion: 'I work, she works. Rutinas y hábitos' },
              { id: 'ing-gra-con', name: 'Present Continuous', category: 'Gramática', suggestion: 'I am working. Acciones en progreso' },
              { id: 'ing-gra-pas', name: 'Past Simple', category: 'Gramática', suggestion: 'Regulares: +ed. Irregulares: went, saw, ate' },
              { id: 'ing-fun-inv', name: 'Invitaciones y sugerencias', category: 'Funciones', suggestion: "Would you like to...? Let's... Why don't we...?" },
              { id: 'ing-gra-com', name: 'Comparativos y superlativos', category: 'Gramática', suggestion: 'Bigger than, the biggest. More beautiful than' }
            ]
          }
        ]
      },
      {
        id: 'ing-intermedio',
        name: 'Nivel B1 - Pre-intermedio',
        description: 'Capacidad para comprender textos claros y desenvolverse en situaciones cotidianas.',
        affirmations: [
          {
            id: 'ing-b1-1',
            description: 'Comprende textos claros y produce textos coherentes sobre temas familiares.',
            evidences: [
              { id: 'ing-b1-e1', description: 'Es capaz de comprender los puntos principales de textos claros y en lengua estándar sobre cuestiones conocidas (trabajo, estudio, ocio).' },
              { id: 'ing-b1-e2', description: 'Sabe desenvolverse en la mayor parte de las situaciones que pueden surgir durante un viaje.' },
              { id: 'ing-b1-e3', description: 'Es capaz de producir textos sencillos y coherentes sobre temas familiares o de interés personal.' },
              { id: 'ing-b1-e4', description: 'Puede describir experiencias, acontecimientos, deseos y aspiraciones, así como justificar opiniones.' }
            ],
            topics: [
              { id: 'ing-gra-per', name: 'Present Perfect', category: 'Gramática', suggestion: 'Have/has + past participle. Experiencias' },
              { id: 'ing-gra-mod', name: 'Modales: should, must, might', category: 'Gramática', suggestion: 'Consejo, obligación, posibilidad' },
              { id: 'ing-gra-cnd', name: 'Condicionales 0, 1, 2', category: 'Gramática', suggestion: 'If + present → will / If + past → would' },
              { id: 'ing-gra-pav', name: 'Voz pasiva', category: 'Gramática', suggestion: 'Be + past participle. The book was written' },
              { id: 'ing-lec-inf', name: 'Inferencia en lectura', category: 'Lectura', suggestion: 'Tono, intención, idea principal implícita' }
            ]
          }
        ]
      },
      {
        id: 'ing-inter-alto',
        name: 'Nivel B2 - Intermedio',
        description: 'Capacidad para entender textos complejos y relacionarse con fluidez.',
        affirmations: [
          {
            id: 'ing-b2-1',
            description: 'Entiende textos complejos y se relaciona con fluidez y naturalidad.',
            evidences: [
              { id: 'ing-b2-e1', description: 'Es capaz de entender las ideas principales de textos complejos sobre temas concretos o abstractos, incluso técnicos, dentro de su especialización.' },
              { id: 'ing-b2-e2', description: 'Puede relacionarse con hablantes nativos con fluidez y naturalidad, sin esfuerzo para ninguno.' },
              { id: 'ing-b2-e3', description: 'Puede producir textos claros y detallados sobre temas diversos, y defender un punto de vista indicando pros y contras.' }
            ],
            topics: [
              { id: 'ing-gra-3rd', name: 'Third Conditional', category: 'Gramática', suggestion: 'If + had + pp → would have + pp' },
              { id: 'ing-gra-rep', name: 'Reported Speech', category: 'Gramática', suggestion: 'He said that he was tired' },
              { id: 'ing-gra-rel', name: 'Relative Clauses', category: 'Gramática', suggestion: 'Who, which, that, whose, where' },
              { id: 'ing-lec-cri', name: 'Lectura crítica en inglés', category: 'Lectura', suggestion: 'Análisis de argumentos, tono, propósito' },
              { id: 'ing-wri-ess', name: 'Escritura de ensayos', category: 'Escritura', suggestion: 'Introduction, body paragraphs, conclusion' }
            ]
          }
        ]
      }
    ]
  }
];
