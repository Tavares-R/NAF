export type AtendimentoOption = {
  id: string; 
  label: string; 
};

export const atendimentosPF: AtendimentoOption[] = [
  { id: 'irpf', label: 'Auxílio à elaboração e orientações sobre a Declaração de Ajuste Anual do IRPF' },
  { id: 'cpf', label: 'Auxílio à inscrição e Informações cadastrais de CPF' },
  { id: 'cno', label: 'Auxílio à emissão e informações sobre Certidões Negativas de Débitos PF e PJ' },
  { id: 'cin', label: 'Auxílio à inscrição e informações cadastrais da Carteira de Identidade Nacional (CIN)' },
  { id: 'outra-pf', label: 'Outra' }, 
];


export const atendimentosMEI: AtendimentoOption[] = [
    { id: 'mei-inscricao', label: 'Auxílio à inscrição e informações gerais sobre o Microempreendedor Individual' },
    { id: 'simples-nacional', label: 'Auxílio à inscrição e informações gerais sobre o Simples Nacional' },
    { id: 'outra-mei', label: 'Outra' },
];