/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, PortfolioItem, TestimonialItem, ContactInfo } from './types';

export const CONTACT_DATA: ContactInfo = {
  phone: 'tel:+5516991394448',
  phoneDisplay: '(16) 99139-4448',
  whatsappUrl: 'https://api.whatsapp.com/message/XXCNTTH7QERNF1?autoload=1&app_absent=0',
  email: 'ediinhoferreira@gmail.com',
  address: 'Rua Lázaro Camargo Enkhe 226 - Jardim Pinheiros, Araraquara - SP, 14811-423',
  addressMapUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+L%C3%A1zaro+Camargo+Enkhe+226+-+Jardim+Pinheiros,+Araraquara+-+SP,+14811-423',
  googleReviewsUrl: 'https://www.google.com/maps/place/Smart+Solu%C3%A7%C3%B5es+El%C3%A9tricas/@-21.7695186,-48.137914,15z/data=!4m15!1m8!3m7!1s0x94b8f171a734a9cd:0x17006118b43ae565!2zU21hcnQgU29sdcOnw7VlcyBFbMOpdHJpY2Fz!8m2!3d-21.7695303!4d-48.1378087!10e5!16s%2Fg%2F11gm86_ygc!3m5!1s0x94b8f171a734a9cd:0x17006118b43ae565!8m2!3d-21.7695303!4d-48.1378087!16s%2Fg%2F11gm86_ygc?entry=ttu',
  hours: 'Atendimento Emergencial 24 Horas / Todos os dias'
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'emergencial-24h',
    title: 'Atendimento Emergencial 24h',
    description: 'Atendimento rápido para quedas de energia, curtos-circuitos, disjuntores desarmando e pane elétrica em residências e comércios.',
    category: 'emergência',
    price: 'A partir de R$ 150',
    features: [
      'Disponibilidade aos finais de semana e feriados',
      'Diagnóstico ágil de curto-circuito',
      'Equipamentos de medição de alta precisão',
      'Foco total em segurança imediata'
    ]
  },
  {
    id: 'wallbox-byd',
    title: 'Instalação de Carregador Veicular (BYD/Wallbox)',
    description: 'Instalação profissional e homologada de carregadores de veículos elétricos (Wallbox BYD, GWM e multimarcas) com proteção dedicada.',
    category: 'residencial',
    price: 'A partir de R$ 650',
    features: [
      'Dimensionamento de cabos adequado',
      'Instalação de DPS e Disjuntores Curva B/C',
      'Dispositivo DR Tipo A ou B (obrigatório por norma)',
      'Acompanhamento e testes com o veículo'
    ]
  },
  {
    id: 'fotovoltaico',
    title: 'Sistemas Fotovoltaicos (Energia Solar)',
    description: 'Projetos, instalações e manutenções completas de sistemas de energia solar fotovoltaica para você economizar até 95% na conta de luz.',
    category: 'comercial',
    price: 'Sob Consulta',
    features: [
      'Estudo de viabilidade gratuito',
      'Instalação de inversores e microinversores',
      'Homologação completa junto à CPFL',
      'Limpeza técnica e manutenção de placas'
    ]
  },
  {
    id: 'padrao-cpfl',
    title: 'Adequação de Padrão CPFL',
    description: 'Instalação, aumento de carga, reforma e adequação de padrão de entrada CPFL (monofásico, bifásico ou trifásico) conforme normas vigentes.',
    category: 'residencial',
    price: 'A partir de R$ 450',
    features: [
      'Montagem de caixas homologadas',
      'Aterramento de proteção (hastes de cobre)',
      'Dimensionamento de fiação de entrada',
      'Aprovação rápida e sem burocracia'
    ]
  },
  {
    id: 'manutencao-preventiva',
    title: 'Reforma e Manutenção Preventiva/Corretiva',
    description: 'Revisão completa de fiação, substituição de disjuntores antigos, tomadas, interruptores e modernização do QDC (Quadro de Distribuição).',
    category: 'residencial',
    price: 'A partir de R$ 250',
    features: [
      'Troca total de fiação antiga (fios rígidos)',
      'Instalação de disjuntores termomagnéticos modernos',
      'Organização e identificação do QDC',
      'Testes de isolamento e sobrecarga'
    ]
  },
  {
    id: 'eletrica-comercial',
    title: 'Instalação Elétrica Comercial',
    description: 'Projetos e montagem elétrica para novos estabelecimentos comerciais, lojas, galpões e escritórios. Infraestrutura completa.',
    category: 'comercial',
    price: 'Sob Consulta',
    features: [
      'Montagem de perfilados, eletrocalhas e conduletes',
      'Iluminação comercial de alta eficiência (LED)',
      'Quadros de distribuição de alta potência',
      'Emissão de laudos e ART elétrica'
    ]
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'proj-byd',
    title: 'Carregador Wallbox Inteligente',
    description: 'Instalação residencial de Wallbox oficial BYD de 7kW, incluindo infraestrutura dedicada com eletrodutos galvanizados e quadro de proteção exclusivo com DPS e DR.',
    imageUrl: 'https://i0.wp.com/archeyes.com/wp-content/uploads/2026/01/zaptec-hKDUWDQTZMw-unsplash.jpg?fit=800%2C1200&ssl=1',
    category: 'Mobilidade Elétrica',
    tags: ['BYD', 'Carregador Elétrico', 'Wallbox', 'DR Tipo A']
  },
  {
    id: 'proj-solar',
    title: 'Sistema Fotovoltaico Residencial',
    description: 'Instalação completa de painéis solares monocristalinos e microinversores de alta eficiência. Integração perfeita com o quadro existente e homologação junto à CPFL.',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/59a83164f7e0ab6c6886dd75/a53f6a64-a90e-44d5-87d5-6caaa2b197ab/alexander-mils-YtELR3Q5Y4E-unsplash.png',
    category: 'Energia Solar',
    tags: ['Fotovoltaica', 'Microinversor', 'Economia', 'CPFL']
  },
  {
    id: 'proj-qdc',
    title: 'Reforma de Quadro de Distribuição Geral (QDC)',
    description: 'Substituição de disjuntores pretos antigos (NEMA) por disjuntores modernos (DIN), incluindo barramentos novos de cobre, DPS e DR para segurança total contra choques.',
    imageUrl: 'https://lh3.googleusercontent.com/gps-cs-s/APNQkAHFYQLecnFenk27JG0XHzyOpp0VGmZke6U_ZT806S1y0WmWs3xNwQTfpZ72R4TuJQ0zMaEKgQHMyzMGupfpPTEHJvPjUxQdwDa2S5YwXWKy5DdmC-u9F5dkUEbSjmuQvbEPVC9M=s1000',
    category: 'Manutenção e Segurança',
    tags: ['QDC', 'DR', 'DPS', 'Disjuntor DIN']
  },
  {
    id: 'proj-comercial',
    title: 'Instalação Elétrica de Escritório Corporativo',
    description: 'Infraestrutura aparente moderna em estilo industrial, utilizando conduletes e perfilados, iluminação LED sob medida e circuitos de tomada estabilizados para computadores.',
    imageUrl: 'https://images.unsplash.com/photo-1592899940510-1240e12e70db?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Elétrica Comercial',
    tags: ['Industrial', 'LED', 'Comercial', 'Infraestrutura']
  },
  {
    id: 'proj-lighting',
    title: 'Projeto Luminotécnico Residencial de Alto Padrão',
    description: 'Instalação de fitas LED em sancas de gesso, perfis de LED de embutir e spots direcionais articulados, criando cenários de iluminação aconchegantes e modernos.',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop',
    category: 'Iluminação & Design',
    tags: ['Perfil de LED', 'Sancas', 'Luminotécnico', 'Spots']
  },
  {
    id: 'proj-emergencia',
    title: 'Adequação de Padrão CPFL e Entrada Trifásica',
    description: 'Instalação de postes e caixas padrão CPFL para alteração de carga de bifásico para trifásico, garantindo energia estável para equipamentos de ar condicionado de alta potência.',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600&auto=format&fit=crop',
    category: 'Padrão CPFL',
    tags: ['Aumento de Carga', 'CPFL', 'Poste de Entrada', 'Trifásico']
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 'test-byd',
    author: 'Thiago Mendes',
    role: 'Proprietário de Veículo Elétrico (BYD Song Plus)',
    rating: 5,
    content: 'Contratei a Smart para instalar o carregador Wallbox do meu BYD. Atendimento excelente! O Edinho dimensionou toda a fiação corretamente, instalou DR de proteção contra choques e deixou tudo extremamente seguro e limpo. Recomendo de olhos fechados!',
    imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=300&auto=format&fit=crop',
    projectTag: 'Instalação de Wallbox BYD',
    googleReviewUrl: 'https://maps.google.com/?cid=123456789'
  },
  {
    id: 'test-solar',
    author: 'Renata Vasconcellos',
    role: 'Arquiteta e Cliente Residencial',
    rating: 5,
    content: 'A equipe da Smart Soluções Elétricas realizou a instalação do nosso sistema fotovoltaico e toda a reforma elétrica da nossa residência. Eles são extremamente profissionais, pontuais e transparentes com os preços. A economia veio na primeira fatura da CPFL!',
    imageUrl: 'https://images.squarespace-cdn.com/content/v1/59a83164f7e0ab6c6886dd75/a53f6a64-a90e-44d5-87d5-6caaa2b197ab/alexander-mils-YtELR3Q5Y4E-unsplash.png',
    projectTag: 'Sistema Fotovoltaico Residencial',
    googleReviewUrl: 'https://maps.google.com/?cid=123456789'
  },
  {
    id: 'test-qdc-reforma',
    author: 'Guilherme Ramos',
    role: 'Cliente Residencial',
    rating: 5,
    content: 'Excelente profissional! Realizou a reforma completa do meu quadro de distribuição (QDC) substituindo os disjuntores antigos pretos por padrão DIN modernos com DR e DPS novos para segurança total. Serviço extremamente caprichoso, limpo e organizado!',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    projectTag: 'Reforma de QDC e Proteções',
    googleReviewUrl: 'https://maps.app.goo.gl/yrGDm39U9vxp19SLA'
  },
  {
    id: 'test-padrao-cpfl',
    author: 'Juliana Camargo',
    role: 'Comerciante Local',
    rating: 5,
    content: 'Super recomendo a Smart Soluções Elétricas. Fizeram toda a preparação, postes e a adequação do padrão da CPFL para trifásico de forma extremamente profissional e rápida. O Edinho é super atencioso e entende muito do assunto!',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop',
    projectTag: 'Adequação de Padrão CPFL',
    googleReviewUrl: 'https://maps.app.goo.gl/PnAD1WEcaS5ZRU3t9'
  },
  {
    id: 'test-led-lighting',
    author: 'Carlos Henrique',
    role: 'Cliente Residencial',
    rating: 5,
    content: 'Contratei para fazer toda a instalação de iluminação em LED, perfis embutidos e spots direcionais articulados na minha sala e cozinha. O resultado ficou impecável, serviço de altíssima qualidade, muito detalhista e preço super justo!',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    projectTag: 'Projeto Luminotécnico LED',
    googleReviewUrl: 'https://maps.app.goo.gl/8qe2M6dB4S1Bx3BJ9'
  },
  {
    id: 'test-emergencia',
    author: 'Marcos Silveira',
    role: 'Gerente Comercial de Padaria',
    rating: 5,
    content: 'Tivemos um curto-circuito em pleno sábado à noite e a padaria estava lotada. O Edinho chegou super rápido, identificou a pane no quadro elétrico e resolveu tudo com total agilidade e segurança. O melhor atendimento emergencial 24h de Araraquara!',
    imageUrl: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=300&auto=format&fit=crop',
    projectTag: 'Atendimento Emergencial 24h',
    googleReviewUrl: 'https://maps.google.com/?cid=123456789'
  }
];

export const CITIES_SERVED = [
  'Araraquara',
  'São Carlos',
  'Matão',
  'Américo Brasiliense',
  'Bueno de Andrada',
  'Gavião Peixoto',
  'Rincão',
  'Santa Lúcia'
];

export const STATS_DATA = [
  { value: '100%', label: 'Satisfação Garantida' },
  { value: '330+', label: 'Avaliações 5 Estrelas' },
  { value: '24h', label: 'Suporte Emergencial' },
  { value: '10+', label: 'Anos de Experiência' }
];

export const BRAND_VALUES = [
  {
    title: 'Segurança em Primeiro Lugar',
    description: 'Trabalhamos rigorosamente dentro das normas técnicas NBR 5410, utilizando apenas materiais homologados de primeira linha.'
  },
  {
    title: 'Rapidez & Pontualidade',
    description: 'Sabemos que problemas elétricos são urgentes. Cumprimos prazos à risca e oferecemos suporte emergencial rápido.'
  },
  {
    title: 'Orçamento Transparente',
    description: 'Sem surpresas desagradáveis. Você recebe o orçamento detalhado antes do serviço começar, sabendo exatamente o que está pagando.'
  },
  {
    title: 'Altíssima Reputação',
    description: 'Aprovados pela comunidade local com pontuação máxima no Google e recomendados de morador para morador.'
  }
];
