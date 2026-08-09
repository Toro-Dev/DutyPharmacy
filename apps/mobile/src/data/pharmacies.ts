export type Pharmacy = {
  id: string;
  name: string;
  city: string;
  neighborhood: string;
  address: string;
  status: 'on-duty' | 'closed';
  closesAt: string;
  phone: string;
};

export const PHARMACIES: Pharmacy[] = [
  {
    id: 'tangier-malabata-01',
    name: 'Pharmacie Malabata',
    city: 'Tangier',
    neighborhood: 'Malabata',
    address: 'Avenue Mohammed VI, Malabata',
    status: 'on-duty',
    closesAt: '08:00',
    phone: '+212 539 00 00 01',
  },
  {
    id: 'tangier-centre-01',
    name: 'Pharmacie du Centre',
    city: 'Tangier',
    neighborhood: 'Centre Ville',
    address: 'Rue de la Liberté, Centre Ville',
    status: 'on-duty',
    closesAt: '09:00',
    phone: '+212 539 00 00 02',
  },
  {
    id: 'casablanca-maarif-01',
    name: 'Pharmacie Maârif',
    city: 'Casablanca',
    neighborhood: 'Maârif',
    address: 'Boulevard Bir Anzarane, Maârif',
    status: 'on-duty',
    closesAt: '08:30',
    phone: '+212 522 00 00 01',
  },
  {
    id: 'rabat-agdal-01',
    name: 'Pharmacie Agdal',
    city: 'Rabat',
    neighborhood: 'Agdal',
    address: 'Avenue Fal Ould Oumeir, Agdal',
    status: 'on-duty',
    closesAt: '08:00',
    phone: '+212 537 00 00 01',
  },
];
