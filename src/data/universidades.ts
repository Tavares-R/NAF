export type Universidade = {
  id: string;
  nome: string;
};

export type UniversidadesPorEstado = {
  [key: string]: Universidade[];
};

export const universidadesPorEstado : UniversidadesPorEstado = {
    AP: [
        { id: 'ap-macapa-unifap', nome: 'AP - UNIFAP - Macapá' },
        { id: 'ap-santana-iff', nome: 'AP - Instituto Federal do Amapá - Santana' },
    ],
    MG: [
        { id: 'mg-abaete', nome: 'MG - UEMG - Abaeté' },
        { id: 'mg-alfenas', nome: 'MG - UNIFENAS - Alfenas' },
        { id: 'mg-almenara', nome: 'MG - IFNMG Campus Almenara - Almenara' },
        { id: 'mg-araguari', nome: 'MG - IMEPAC - Araguari' },
    ],
    RJ: [
        { id: 'rj-angra', nome: 'RJ - Estácio Angra dos Reis - Angra dos Reis' },
        { id: 'rj-belford', nome: 'RJ - UNIABEU - Belford Roxo' },
        { id: 'rj-cabofrio', nome: 'RJ - Estácio Cabo Frio - Cabo Frio' },
    ],
    };