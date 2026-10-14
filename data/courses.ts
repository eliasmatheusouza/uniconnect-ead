import { Course } from '@/types/course';

export const COURSES: Course[] = [
  {
    id: 'eletrotecnica',
    slug: 'eletrotecnica',
    title: 'Técnico em Eletrotécnica EAD',
    category: 'tecnicos',
    categoryLabel: 'Técnico Regular',
    shortDescription: 'Formação especializada em sistemas elétricos industriais, automação, energias renováveis e instalações elétricas com emissão de CFT/CRT.',
    fullDescription: 'Você está a poucos passos de mudar sua vida profissional. Com uma formação rápida, reconhecida pelo MEC e registrada no SISTEC, você se torna Técnico em Eletrotécnica EAD com validade nacional e ao finalizar você pode emitir seu CFT/CRT.',
    duration: 'A partir de 6 meses',
    workload: 1440,
    modulesCount: 5,
    cftRegistration: true,
    registrationCouncil: 'CFT / CRT',
    originalPrice: 1665.90,
    currentPrice: 999.90,
    installmentCount: 12,
    installmentPrice: 98.90,
    discountBadge: '40% de Desconto',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80',
    featured: true,
    modules: [
      {
        title: 'Módulo I - Fundamentos da Eletricidade & Segurança',
        lessonsCount: 7,
        workloadHours: 220,
        topics: ['Eletrostática e Circuitos CC', 'Leis de Kirchhoff', 'Norma Regulamentadora NR-10 Básica', 'Instrumentação e Medidas Elétricas']
      },
      {
        title: 'Módulo II - Instalações Elétricas Prediais e Comerciais',
        lessonsCount: 6,
        workloadHours: 180,
        topics: ['Dimensionamento de Condutores', 'Quadros de Distribuição', 'Projetos em Baixa Tensão (NBR 5410)', 'Aterramento e SPDA']
      },
      {
        title: 'Módulo III - Máquinas Elétricas & Acionamentos',
        lessonsCount: 12,
        workloadHours: 480,
        topics: ['Transformadores Monofásicos e Trifásicos', 'Motores de Indução', 'Inversores de Frequência e Soft-Starters', 'Manutenção Preditiva']
      },
      {
        title: 'Módulo IV - Automação Industrial & Controladores (CLP)',
        lessonsCount: 4,
        workloadHours: 160,
        topics: ['Lógica Ladder', 'Programação de Controladores Lógicos', 'Sensores e Atuadores Industriais', 'Sistemas SCADA']
      },
      {
        title: 'Módulo V - Geração, Transmissão e Energias Renováveis',
        lessonsCount: 6,
        workloadHours: 400,
        topics: ['Sistemas Fotovoltaicos Conectados à Rede', 'Subestações de Média Tensão', 'Eficiência Energética', 'Gestão de Projetos Elétricos']
      }
    ],
    careerProspects: [
      'Empresas concessionárias de energia elétrica',
      'Indústrias automobilísticas, químicas e mineradoras',
      'Projetista e responsável técnico perante o CFT',
      'Instalador e comissionador de usinas solares fotovoltaicas'
    ],
    prerequisites: 'Ensino Médio completo ou cursando o último ano'
  },
  {
    id: 'mecanica',
    slug: 'mecanica',
    title: 'Técnico em Mecânica EAD',
    category: 'tecnicos',
    categoryLabel: 'Técnico Regular',
    shortDescription: 'Capacitação prática em projetos mecânicos, usinagem, manutenção industrial e supervisão de processos de fabricação.',
    fullDescription: 'O curso Técnico em Mecânica forma profissionais de alto nível para liderar manutenção preventiva e corretiva, desenvolvimento de componentes mecânicos e controle de qualidade industrial.',
    duration: 'A partir de 6 meses',
    workload: 1400,
    modulesCount: 5,
    cftRegistration: true,
    registrationCouncil: 'CFT / CRT',
    originalPrice: 1665.90,
    currentPrice: 999.90,
    installmentCount: 12,
    installmentPrice: 98.90,
    discountBadge: '40% de Desconto',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    featured: true,
    modules: [
      {
        title: 'Módulo I - Desenho Técnico Mecânico & Metrologia',
        lessonsCount: 8,
        workloadHours: 240,
        topics: ['Desenho Técnico com CAD 2D/3D', 'Paquímetro, Micrômetro e Relógio Comparador', 'Tolerâncias Geométricas e GD&T', 'Normas ABNT']
      },
      {
        title: 'Módulo II - Ciência dos Materiais e Tratamentos Térmicos',
        lessonsCount: 6,
        workloadHours: 200,
        topics: ['Ligas Ferrosas e Não Ferrosas', 'Ensaio de Dureza e Tração', 'Têmpera, Revenimento e Cementação', 'Corrosão e Proteção']
      },
      {
        title: 'Módulo III - Processos de Fabricação e Usinagem',
        lessonsCount: 10,
        workloadHours: 360,
        topics: ['Torno Convencional e Fresadora', 'Programação e Operação CNC', 'Soldagem MIG/MAG, TIG e Eletrodo Revestido', 'Conformação Mecânica']
      },
      {
        title: 'Módulo IV - Elementos de Máquinas & Sistemas Hidráulicos/Pneumáticos',
        lessonsCount: 8,
        workloadHours: 300,
        topics: ['Engrenagens, Correias, Rolamentos e Eixos', 'Circuitos Eletropneumáticos', 'Bombas e Válvulas Hidráulicas', 'Termodinâmica Aplicada']
      },
      {
        title: 'Módulo V - Gestão da Manutenção (TPM) & Segurança Operacional',
        lessonsCount: 6,
        workloadHours: 300,
        topics: ['Manutenção Preditiva, Preventiva e Corretiva', 'NR-12 Segurança em Máquinas', 'FMEA e Análise de Falhas', 'Supervisão de Equipes']
      }
    ],
    careerProspects: [
      'Indústrias metalmecânicas e siderúrgicas',
      'Montadoras de veículos e autopeças',
      'Empresas de manutenção industrial e usinagem',
      'Inspetor de solda e controle de qualidade'
    ],
    prerequisites: 'Ensino Médio completo ou cursando'
  },
  {
    id: 'seguranca-do-trabalho',
    slug: 'seguranca-do-trabalho',
    title: 'Técnico em Segurança do Trabalho EAD',
    category: 'tecnicos',
    categoryLabel: 'Técnico Regular',
    shortDescription: 'Prevenção de acidentes, programas de gestão ocupacional (PGR, PCMSO, LTCAT) e fiscalização de conformidade com as Normas Regulamentadoras (NRs).',
    fullDescription: 'Profissão com contratação obrigatória por lei em médias e grandes empresas. Desenvolva competências em análise de riscos ambientais, laudos técnicos e treinamentos ocupacionais.',
    duration: 'A partir de 6 meses',
    workload: 1420,
    modulesCount: 5,
    cftRegistration: true,
    registrationCouncil: 'MTE / Registro Profissional',
    originalPrice: 1665.90,
    currentPrice: 999.90,
    installmentCount: 12,
    installmentPrice: 98.90,
    discountBadge: '40% de Desconto',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    featured: true,
    modules: [
      {
        title: 'Módulo I - Legislação Ocupacional e Introdução à SST',
        lessonsCount: 7,
        workloadHours: 220,
        topics: ['História e Legislação Trabalhista', 'Normas Regulamentadoras Fundamentais', 'Responsabilidade Civil e Criminal', 'Estruturação do SESMT e CIPA']
      },
      {
        title: 'Módulo II - Higiene Ocupacional e Avaliação de Riscos',
        lessonsCount: 8,
        workloadHours: 280,
        topics: ['Agentes Físicos (Ruído, Calor, Vibração)', 'Agentes Químicos e Poeiras', 'Agentes Biológicos', 'Aparelhos de Medição (Dosímetro, Luxímetro)']
      },
      {
        title: 'Módulo III - Elaboração de Programas e Documentos Obrigatórios',
        lessonsCount: 10,
        workloadHours: 340,
        topics: ['PGR (Programa de Gerenciamento de Riscos)', 'GRO e Matriz de Riscos', 'LTCAT e Perfil Profissiográfico Previdenciário (PPP)', 'Envio de Eventos no eSocial']
      },
      {
        title: 'Módulo IV - Proteção contra Incêndio e Emergências',
        lessonsCount: 6,
        workloadHours: 260,
        topics: ['NR-23 e Sistemas de Combate a Incêndio', 'Brigada de Emergência', 'Primeiros Socorros no Ambiente de Trabalho', 'Planos de Evacuação']
      },
      {
        title: 'Módulo V - Ergonomia (NR-17) e Treinamentos Corporativos',
        lessonsCount: 7,
        workloadHours: 320,
        topics: ['Análise Ergonômica do Trabalho (AET)', 'Trabalho em Altura (NR-35) e Espaço Confinado (NR-33)', 'Didática para Treinamentos SST', 'Auditorias Internas']
      }
    ],
    careerProspects: [
      'Empresas da construção civil, mineração e petróleo',
      'Hospitais, redes varejistas e indústrias farmacêuticas',
      'Consultor autônomo de SST e elaborador de PGR/LTCAT',
      'Perito assistente técnico da Justiça do Trabalho'
    ],
    prerequisites: 'Ensino Médio concluído'
  },
  {
    id: 'competencia-administracao',
    slug: 'competencia-administracao',
    title: 'Técnico em Administração por Competência',
    category: 'competencia',
    categoryLabel: 'Por Competência',
    shortDescription: 'Reconhecimento oficial de experiência profissional prévia. Obtenha seu diploma reconhecido pelo MEC e registro no CRA em até 48 horas.',
    fullDescription: 'Se você já atua na área administrativa, recursos humanos, compras, logística ou financeiro, a Lei Federal nº 9.394/96 Art. 41 garante a validação dos seus conhecimentos sem necessidade de cursar aulas repetitivas.',
    duration: 'Diploma em 48 horas',
    workload: 1200,
    modulesCount: 3,
    cftRegistration: true,
    registrationCouncil: 'CRA (Conselho Regional de Administração)',
    originalPrice: 1665.90,
    currentPrice: 999.90,
    installmentCount: 12,
    installmentPrice: 98.90,
    discountBadge: 'Diploma em 48h',
    diplomaDelivery: '48 horas após validação',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    featured: true,
    modules: [
      {
        title: 'Etapa 1 - Análise Documental e Comprovação de Vivência',
        lessonsCount: 4,
        workloadHours: 400,
        topics: ['Envio de Carteira de Trabalho, Contratos ou Declarações', 'Mapeamento de Funções Exercidas', 'Validação Curricular Institucional']
      },
      {
        title: 'Etapa 2 - Prova Teórica Online de Validação',
        lessonsCount: 5,
        workloadHours: 400,
        topics: ['Gestão Financeira & Fluxo de Caixa', 'Recursos Humanos e Legislação Trabalhista', 'Marketing e Relacionamento com Clientes', 'Planejamento Estratégico']
      },
      {
        title: 'Etapa 3 - Homologação no SISTEC/MEC e Emissão',
        lessonsCount: 3,
        workloadHours: 400,
        topics: ['Registro Oficial na Plataforma do MEC', 'Publicação do Código Autenticador', 'Envio do Diploma Digital Certificado ICP-Brasil']
      }
    ],
    careerProspects: [
      'Analista e Supervisor Administrativo',
      'Gerente de Departamento Financeiro ou RH',
      'Registro no CRA para assinar relatórios e licitações',
      'Aproveitamento imediato para planos de carreira e concursos'
    ],
    prerequisites: 'Comprovação de experiência na área administrativa e Ensino Médio completo'
  },
  {
    id: 'competencia-eletrotecnica',
    slug: 'competencia-eletrotecnica',
    title: 'Técnico em Eletrotécnica por Competência',
    category: 'competencia',
    categoryLabel: 'Por Competência',
    shortDescription: 'Eletricistas e encarregados com experiência prática: conquiste seu diploma técnico reconhecido pelo MEC e seu CFT em 48 horas.',
    fullDescription: 'Não perca mais contratos nem promoções por falta de diploma. Valide sua experiência de campo como eletricista predial, industrial ou de alta tensão através da certificação por competência garantida pelo MEC.',
    duration: 'Diploma em 48 horas',
    workload: 1440,
    modulesCount: 3,
    cftRegistration: true,
    registrationCouncil: 'CFT / CRT',
    originalPrice: 1665.90,
    currentPrice: 999.90,
    installmentCount: 12,
    installmentPrice: 98.90,
    discountBadge: 'Diploma em 48h',
    diplomaDelivery: '48 horas após validação',
    image: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?auto=format&fit=crop&w=800&q=80',
    featured: true,
    modules: [
      {
        title: 'Fase 1 - Auditoria de Carteira de Trabalho / Contratos',
        lessonsCount: 4,
        workloadHours: 480,
        topics: ['Validação de Experiência Prévia em Sistemas Elétricos', 'Conformidade com a Lei de Diretrizes e Bases da Educação']
      },
      {
        title: 'Fase 2 - Avaliação Técnica Teórica Online',
        lessonsCount: 6,
        workloadHours: 480,
        topics: ['Leis Elétricas e Simbologia', 'Normas de Segurança NR-10 e NR-35', 'Sistemas de Potência e Comandos Elétricos']
      },
      {
        title: 'Fase 3 - Registro no SISTEC e Emissão do Diploma',
        lessonsCount: 3,
        workloadHours: 480,
        topics: ['Cadastramento no Ministério da Educação', 'Emissão com Chave QR Code de Verificação Nacional', 'Habilitação para CFT']
      }
    ],
    careerProspects: [
      'Emissão de ART/TRT perante o CFT',
      'Assinatura de projetos elétricos industriais',
      'Encarregado e supervisor de manutenção elétrica',
      'Contratos com órgãos públicos e construtoras'
    ],
    prerequisites: 'Ensino Médio concluído e experiência prática comprovada como eletricista ou instalador'
  },
  {
    id: 'sequencial-gestao-seguranca',
    slug: 'sequencial-gestao-seguranca',
    title: 'Curso Superior Sequencial em Gestão de Segurança Pública',
    category: 'sequenciais',
    categoryLabel: 'Superior Sequencial',
    shortDescription: 'Diploma de Nível Superior aceito em dezenas de concursos policiais (PM, PC, Polícia Penal) com conclusão em apenas 6 meses.',
    fullDescription: 'Os cursos sequenciais de complementação de estudos são cursos de ensino superior reconhecidos pelo MEC segundo a Lei Federal 9.394/96. Permite que você atenda os requisitos de nível superior para editais de concursos públicos e acelere sua promoção funcional.',
    duration: 'A partir de 6 meses',
    workload: 850,
    modulesCount: 4,
    cftRegistration: false,
    originalPrice: 1590.00,
    currentPrice: 890.00,
    installmentCount: 12,
    installmentPrice: 87.90,
    discountBadge: 'Superior em 6 Meses',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    featured: true,
    modules: [
      {
        title: 'Módulo I - Direito Constitucional, Penal e Direitos Humanos',
        lessonsCount: 8,
        workloadHours: 210,
        topics: ['Garantias Fundamentais e CF/88', 'Teoria do Crime e Aplicação da Pena', 'Tratados Internacionais de Direitos Humanos']
      },
      {
        title: 'Módulo II - Políticas Públicas de Segurança e Gestão de Conflitos',
        lessonsCount: 7,
        workloadHours: 210,
        topics: ['Modelos de Policiamento Comunitário', 'Mediação de Crises', 'Sistemas de Inteligência e Análise Criminal']
      },
      {
        title: 'Módulo III - Legislação Especial e Procedimentos Penais',
        lessonsCount: 8,
        workloadHours: 220,
        topics: ['Estatuto do Desarmamento', 'Lei de Drogas e Abuso de Autoridade', 'Inquérito Policial e Cadeia de Custódia']
      },
      {
        title: 'Módulo IV - Planejamento Estratégico & Gestão Integrada',
        lessonsCount: 6,
        workloadHours: 210,
        topics: ['Gestão de Recursos e Logística de Segurança', 'Operações Integradas', 'Ética Profissional e Liderança']
      }
    ],
    careerProspects: [
      'Concursos Públicos para Polícia Militar e Polícia Penal (onde aceito em edital)',
      'Gestão de Segurança Privada e Patrimonial',
      'Assessoria em Defesa Social e Prefeituras',
      'Plano de carreira com adicional por titulação'
    ],
    prerequisites: 'Ensino Médio completo'
  },
  {
    id: 'eja-ensino-medio',
    slug: 'eja-ensino-medio',
    title: 'EJA - Ensino Médio 100% Online',
    category: 'eja',
    categoryLabel: 'EJA Acelerado',
    shortDescription: 'Conclua o Ensino Médio de forma rápida, flexível e totalmente online, com publicação em Diário Oficial e registro no MEC/Secretaria da Educação.',
    fullDescription: 'Nunca é tarde para conquistar seu diploma do Ensino Médio. Com nossa plataforma interativa, você estuda no seu horário, faz as provas no seu ritmo e recebe seu certificado válido em todo o Brasil para fazer faculdade, cursos técnicos ou concursos.',
    duration: 'Conclusão Flexível (até 3 meses)',
    workload: 1200,
    modulesCount: 4,
    cftRegistration: false,
    originalPrice: 1290.00,
    currentPrice: 699.90,
    installmentCount: 12,
    installmentPrice: 69.90,
    discountBadge: 'Publicação Oficial',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    featured: true,
    modules: [
      {
        title: 'Linguagens, Códigos e Suas Tecnologias',
        lessonsCount: 12,
        workloadHours: 300,
        topics: ['Língua Portuguesa e Literatura', 'Redação e Comunicação Eficaz', 'Inglês e Artes']
      },
      {
        title: 'Matemática e Suas Tecnologias',
        lessonsCount: 12,
        workloadHours: 300,
        topics: ['Álgebra e Funções', 'Geometria e Trigonometria', 'Estatística e Matemática Financeira']
      },
      {
        title: 'Ciências da Natureza',
        lessonsCount: 12,
        workloadHours: 300,
        topics: ['Física Aplicada', 'Química Geral e Orgânica', 'Biologia e Meio Ambiente']
      },
      {
        title: 'Ciências Humanas e Sociais',
        lessonsCount: 12,
        workloadHours: 300,
        topics: ['História do Brasil e Geral', 'Geografia Política e Econômica', 'Filosofia e Sociologia']
      }
    ],
    careerProspects: [
      'Ingresso em Faculdades e Cursos Técnicos',
      'Inscrição em Concursos Públicos de nível médio',
      'Melhores salários no mercado de trabalho'
    ],
    prerequisites: 'Idade mínima de 18 anos completos'
  },
  {
    id: 'curso-ingles-profissional',
    slug: 'curso-ingles-profissional',
    title: 'Curso de Inglês Profissionalizante para o Mercado',
    category: 'idiomas',
    categoryLabel: 'Idiomas & Carreira',
    shortDescription: 'Do básico à fluência prática voltada para entrevistas de emprego, ambiente corporativo, termos técnicos e conversação.',
    fullDescription: 'Metodologia acelerada com foco no mercado de trabalho. Aprenda a falar com segurança, redigir e-mails e conduzir reuniões profissionais com materiais exclusivos da Vértice EAD.',
    duration: 'Flexível (Acesso por 12 meses)',
    workload: 360,
    modulesCount: 4,
    cftRegistration: false,
    originalPrice: 990.00,
    currentPrice: 499.90,
    installmentCount: 12,
    installmentPrice: 49.90,
    discountBadge: '50% OFF',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80',
    featured: false,
    modules: [
      {
        title: 'Nível 1 - Starter & Everyday Communication',
        lessonsCount: 10,
        workloadHours: 90,
        topics: ['Estruturas Fundamentais', 'Apresentações Pessoais', 'Pronúncia e Fonética']
      },
      {
        title: 'Nível 2 - Business Basics & E-mails Corporativos',
        lessonsCount: 10,
        workloadHours: 90,
        topics: ['Redação de E-mails', 'Vocabulário de Negociações', 'Telefonia e Atendimento']
      },
      {
        title: 'Nível 3 - Technical English & Mercado de Trabalho',
        lessonsCount: 12,
        workloadHours: 90,
        topics: ['Terminologias Industriais e de Gestão', 'Simulação de Entrevistas', 'Apresentação de Projetos']
      },
      {
        title: 'Nível 4 - Advanced Fluency & Global Career',
        lessonsCount: 10,
        workloadHours: 90,
        topics: ['Reuniões Internacionais', 'Expressões Corporativas', 'Certificação Final']
      }
    ],
    careerProspects: [
      'Empresas multinacionais e comércio exterior',
      'Vagas remotas em dólar',
      'Promoções para cargos de supervisão e gerência'
    ],
    prerequisites: 'Nenhum pré-requisito necessário'
  }
];

export const TESTIMONIALS = [
  {
    name: 'Carlos Eduardo Mendes',
    role: 'Técnico em Eletrotécnica formado',
    company: 'Responsável Técnico em Usina Solar (MG)',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    text: 'Consegui emitir meu registro no CFT em tempo recorde após concluir o curso na Vértice EAD. Hoje assino como responsável técnico pelas instalações e meu salário dobrou. O suporte foi excepcional do primeiro dia até a emissão do diploma!'
  },
  {
    name: 'Juliana Vasconcelos',
    role: 'Técnica em Segurança do Trabalho',
    company: 'Atuando em Construtora (SP)',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    text: 'A flexibilidade do EAD da Vértice foi essencial para mim que já cuidava da família. Os materiais didáticos são super diretos ao ponto e os professores sanaram todas as minhas dúvidas sobre o eSocial e o PGR. Recomendo de olhos fechados!'
  },
  {
    name: 'Marcos Vinícius Silva',
    role: 'Técnico em Administração por Competência',
    company: 'Supervisor Financeiro',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    text: 'Eu já tinha mais de 4 anos de experiência prática no financeiro, mas perdia promoções por não ter o diploma técnico. A validação por competência da Vértice EAD foi super séria, com prova e homologação no SISTEC. Em 48 horas estava tudo resolvido!'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Os cursos técnicos da Vértice EAD são reconhecidos pelo MEC e registrados no SISTEC?',
    answer: 'Sim, 100% reconhecidos! Nossa instituição e nossos cursos parceiros possuem credenciamento oficial e registro ativo no SISTEC (Sistema Nacional de Informações da Educação Profissional e Tecnológica) do Ministério da Educação (MEC). O código da mantenedora é 48643, podendo ser conferido publicamente no portal oficial do MEC.'
  },
  {
    question: 'Posso tirar o meu registro profissional no CFT / CRT / CRA após concluir?',
    answer: 'Sim! Ao concluir o curso técnico e receber seu diploma registrado, você tem o direito garantido por lei federal de solicitar sua carteira profissional e registro no conselho da sua classe (CFT/CRT para os cursos industriais, CRA para Administração, etc.), permitindo assinar laudos e atuar como responsável técnico.'
  },
  {
    question: 'Como funciona a Certificação por Competência com diploma em 48 horas?',
    answer: 'A Certificação por Competência Profissional é amparada pelo Artigo 41 da Lei de Diretrizes e Bases da Educação Nacional (Lei nº 9.394/1996). O profissional que já possui experiência prática comprovada (mínimo de 1 a 2 anos) passa por uma análise de documentos e uma avaliação teórica de conhecimentos. Uma vez aprovado, seu diploma com registro no SISTEC/MEC é emitido e homologado em até 48 horas úteis.'
  },
  {
    question: 'O estágio é obrigatório para todos os cursos técnicos?',
    answer: 'Para a grande maioria de nossos cursos na modalidade EAD flexível, o estágio não é obrigatório para a emissão do diploma, facilitando para quem já trabalha ou tem rotinas aceleradas. Caso seu empregador solicite ou você queira estagiar, emitimos o Termo de Compromisso de Estágio normalmente.'
  },
  {
    question: 'Quais são as formas de pagamento disponíveis?',
    answer: 'Trabalhamos com Cartão de Crédito em até 12x com parcelas reduzidas sem juros, PIX à vista com desconto extra de 5% e liberação instantânea de acesso, ou Boleto Bancário.'
  },
  {
    question: 'Onde fica o polo educacional da Vértice EAD?',
    answer: 'Nosso polo administrativo e educacional de apoio possui atendimento em âmbito nacional para alunos de todos os estados do Brasil via plataforma 100% online e suporte humanizado via WhatsApp.'
  }
];
