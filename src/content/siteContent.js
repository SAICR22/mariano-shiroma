export const navigation = [
  ['inicio', 'Início'], ['sus', 'O SUS'], ['priorizacao', 'Priorização'],
  ['resultados', 'Resultados'], ['digital', 'Saúde digital'],
  ['sao-paulo', 'São Paulo'], ['informacoes', 'Informações']
];

export const scenes = [
  {
    id: 'inicio', image: 'mariano-hero.webp', type: 'portrait', eyebrow: 'MÉDICO | SÃO PAULO',
    title: ['DR. MARIANO', 'SHIROMA'], subtitle: 'Médico e candidato a deputado federal por São Paulo.',
    intro: 'Conheça sua trajetória na saúde pública e os eixos de saúde apresentados no programa do Partido Missão.',
    badge: 'MISSÃO 14 · 1442', cue: 'EXPLORE ↓'
  },
  {
    id: 'sus', image: 'sus-corridor.webp', eyebrow: '01 / SAÚDE PÚBLICA',
    title: ['O SUS EM', 'SÃO PAULO'], subtitle: 'Uma rede de cuidado, muitos caminhos de atendimento.',
    intro: 'Da atenção básica aos serviços especializados, o SUS reúne diferentes portas de entrada e níveis de cuidado.\n\nEm uma metrópole como São Paulo, encaminhamentos, informação clínica e organização da rede fazem parte da experiência de pacientes e profissionais.',
    coda: 'Médico com atuação no SUS, Mariano Shiroma traz sua experiência profissional para a discussão sobre os desafios da saúde pública.'
  },
  {
    id: 'priorizacao', image: 'sus-priority.webp', eyebrow: '02 / ORGANIZAÇÃO DAS FILAS',
    title: ['COMO DEFINIR', 'A PRIORIDADE?'],
    intro: 'O Livro Amarelo propõe a criação da ENER — Escala Nacional de Estratificação de Risco.\n\nA proposta prevê organizar a prioridade nas filas de atendimento a partir de critérios clínicos e sociais, sem desconsiderar o tempo que cada pessoa já espera.',
    steps: [
      ['GRAVIDADE CLÍNICA', 'Considera a condição atual de saúde do paciente.'],
      ['RISCO DE AGRAVAMENTO', 'Avalia a possibilidade de piora em curto e médio prazo.'],
      ['IMPACTO FUNCIONAL', 'Considera o risco de perda de autonomia e da capacidade para atividades cotidianas ou profissionais.'],
      ['VULNERABILIDADE SOCIAL', 'Inclui fatores sociais que podem influenciar a situação do paciente.'],
      ['TEMPO DE ESPERA', 'Considera também o período acumulado na fila.']
    ],
    coda: 'Na proposta, a definição da prioridade combina diferentes critérios, avaliados conforme a situação de cada paciente.',
    source: 'Fonte: Livro Amarelo, capítulo VII — SUS Fila Zero.'
  },
  {
    id: 'resultados', image: 'sus-outcomes.webp', eyebrow: '03 / RESULTADOS EM SAÚDE',
    title: ['SAÚDE QUE', 'RESOLVE'], subtitle: 'O que significa acompanhar resultados?',
    intro: 'O resumo do programa do Partido Missão propõe um modelo de financiamento que considere os desfechos clínicos, e não somente a quantidade de procedimentos realizados.\n\nA proposta relaciona a avaliação dos serviços ao acompanhamento do paciente e aos resultados do cuidado.',
    steps: [
      ['ATENDIMENTO', 'O paciente recebe o cuidado indicado para sua condição.'],
      ['ACOMPANHAMENTO', 'A evolução clínica passa a integrar a avaliação do atendimento.'],
      ['DESFECHO CLÍNICO', 'O resultado do cuidado também é considerado na análise dos serviços de saúde.']
    ],
    coda: 'A proposta desloca parte do foco da quantidade de procedimentos para os resultados acompanhados ao longo do cuidado.',
    source: 'Fonte: Livro Amarelo, capítulo VII — SUS Fila Zero; resumo executivo do programa.'
  },
  {
    id: 'digital', image: 'sus-digital.webp', eyebrow: '04 / TECNOLOGIA NA SAÚDE',
    title: ['SAÚDE', 'CONECTADA'], subtitle: 'Informações que acompanham o paciente.',
    intro: 'O Livro Amarelo apresenta a proposta de criação do PRONTO — Prontuário Eletrônico Nacional Interoperável.\n\nO projeto prevê conectar informações da atenção primária, serviços especializados, hospitais, laboratórios e farmácias.',
    steps: [
      ['PRONTUÁRIO INTEGRADO', 'A proposta prevê reunir informações clínicas de diferentes serviços em um prontuário interoperável.'],
      ['TELEMEDICINA', 'O programa também propõe um sistema digital com recursos de atendimento e acompanhamento remoto.'],
      ['INTELIGÊNCIA ARTIFICIAL', 'O projeto inclui ferramentas de inteligência artificial como apoio ao diagnóstico e ao monitoramento clínico.']
    ],
    coda: 'O programa propõe integrar essas ferramentas em um sistema digital de saúde, inicialmente por meio de projetos-piloto antes de uma possível ampliação nacional.',
    source: 'Fonte: Livro Amarelo, capítulo VII — SUS Fila Zero.'
  },
  {
    id: 'sao-paulo', image: 'sao-paulo.webp', eyebrow: '05 / ORGANIZAÇÃO TERRITORIAL',
    title: ['SÃO PAULO', 'EM PERSPECTIVA'], subtitle: 'Como organizar uma rede de saúde em diferentes escalas?',
    intro: 'O atendimento em saúde envolve unidades básicas, serviços especializados, hospitais e centros regionais de referência.\n\nA articulação entre esses diferentes níveis faz parte da organização territorial do cuidado.',
    steps: [
      ['REDE REGIONAL DE ATENDIMENTO', 'O Livro Amarelo propõe a adoção do modelo Hub-and-Spoke, no qual demandas de maior complexidade seriam concentradas em centros regionais de referência.\n\nO objetivo declarado é articular melhor os diferentes níveis de atendimento e organizar os encaminhamentos dentro da rede.'],
      ['FINANCIAMENTO E DESEMPENHO', 'O programa também propõe a criação do FNMA — Fundo Nacional de Modernização do Acesso.\n\nO fundo prevê repasses aos municípios condicionados ao desempenho, segundo os critérios a serem estabelecidos para o novo modelo.']
    ],
    coda: 'As propostas combinam organização territorial, integração entre serviços e mecanismos de avaliação da gestão.',
    source: 'Fonte: Livro Amarelo, capítulo VII — SUS Fila Zero.'
  },
  {
    id: 'informacoes', image: 'mariano-closing.webp', type: 'portrait', eyebrow: '',
    title: ['DR. MARIANO', 'SHIROMA'], subtitle: 'Médico e candidato a deputado federal por São Paulo.',
    facts: ['PARTIDO MISSÃO — 14', 'NÚMERO DE CANDIDATURA — 1442'],
    intro: 'As propostas de saúde apresentadas nesta página integram o capítulo VII, “SUS Fila Zero”, do programa do Partido Missão.\n\nOs conteúdos resumem medidas propostas e não representam serviços já implementados.',
    footer: 'PROPAGANDA ELEITORAL • DR. MARIANO SHIROMA • 1442\nDEPUTADO FEDERAL • MISSÃO 14 • CNPJ 68.504.086/0001-23',
    imageNotice: 'Imagens de ambientes utilizadas com finalidade ilustrativa, geradas com inteligência artificial.'
  }
];
