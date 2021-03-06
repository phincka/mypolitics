
import Nowoczesna from 'assets/images/parties/nowoczesna.png';
import PlatformaObywatelska from 'assets/images/parties/po.png';
import Korwin from 'assets/images/parties/korwin.png';
import RuchNarodowy from 'assets/images/parties/rn.png';
import PrawoISprawiedliwosc from 'assets/images/parties/pis.png';
import PolskieStronnictwoLudowe from 'assets/images/parties/psl.png';
import PolskaPartiaSocjalistyczna from 'assets/images/parties/pps.png';
import Razem from 'assets/images/parties/razem.png';
import SojuszLewicyDemokratycznej from 'assets/images/parties/sld.png';
import Wiosna from 'assets/images/parties/wiosna.png';
import Libertarianie from 'assets/images/parties/libertarianie.png';
import { SpheresType } from './spheresCalculator';

export interface Party {
  name: string
  logo: string
  spheresValues: SpheresType
  links: Links
}

interface Links {
  www: string
  programme: string
}

export const parties: Party[] = [
  {
    name: 'Nowoczesna',
    logo: Nowoczesna,
    spheresValues: {
      economics: 0.33,
      social: -0.33,
    },
    links: {
      www: 'https://nowoczesna.org/',
      programme:
        'https://nowoczesna.org/wp-content/uploads/2016/09/Program-Nowoczesnej.pdf',
    },
  },
  {
    name: 'Platforma Obywatelska',
    logo: PlatformaObywatelska,
    spheresValues: {
      economics: -0.1,
      social: -0.1,
    },
    links: {
      www: 'https://platforma.org/',
      programme:
        'https://koalicjaobywatelska.pl/images/Twoja-Polska-Program-Koalicji-Obywatelskiej.pdf',
    },
  },
  {
    name: 'KORWiN',
    logo: Korwin,
    spheresValues: {
      economics: 0.9,
      social: 0.5,
    },
    links: {
      www: 'https://wolnosc.pl/',
      programme: 'https://wolnosc.pl/deklaracja-ideowa/',
    },
  },
  {
    name: 'Ruch Narodowy',
    logo: RuchNarodowy,
    spheresValues: {
      economics: 0.1,
      social: 0.7,
    },
    links: {
      www: 'https://ruchnarodowy.net/',
      programme: 'https://ruchnarodowy.net/wp-content/uploads/Program-Ruchu-Narodowego.pdf',
    },
  },
  {
    name: 'Prawo i Sprawiedliwość',
    logo: PrawoISprawiedliwosc,
    spheresValues: {
      economics: -0.33,
      social: 0.33,
    },
    links: {
      www: 'http://pis.org.pl/',
      programme: 'http://pis.org.pl/dokumenty',
    },
  },
  {
    name: 'Polskie Stronnictwo Ludowe',
    logo: PolskieStronnictwoLudowe,
    spheresValues: {
      economics: 0.1,
      social: 0.1,
    },
    links: {
      www: 'https://www.psl.pl/',
      programme:
        'https://www.psl.pl/wp-content/uploads/2019/09/PROGRAM_PSL_2019.pdf',
    },
  },
  {
    name: 'Polska Partia Socjalistyczna',
    logo: PolskaPartiaSocjalistyczna,
    spheresValues: {
      economics: -0.9,
      social: 0.0,
    },
    links: {
      www: 'http://ppspl.eu/',
      programme: 'http://ppspl.eu/index.php/dokumenty-statutowe/7-o-nas',
    },
  },
  {
    name: 'Partia Razem',
    logo: Razem,
    spheresValues: {
      economics: -0.66,
      social: -0.66,
    },
    links: {
      www: 'https://partiarazem.pl/',
      programme: 'http://partiarazem.pl/program/',
    },
  },
  {
    name: 'Sojusz Lewicy Demokratycznej',
    logo: SojuszLewicyDemokratycznej,
    spheresValues: {
      economics: -0.5,
      social: -0.5,
    },
    links: {
      www: 'https://sld.org.pl/',
      programme: 'https://sld.org.pl/program/dokumenty',
    },
  },
  {
    name: 'Wiosna',
    logo: Wiosna,
    spheresValues: {
      economics: -0.5,
      social: -0.66,
    },
    links: {
      www: 'https://wiosnabiedronia.pl/',
      programme: 'https://wiosnabiedronia.pl/program',
    },
  },
  {
    name: 'Libertarianie',
    logo: Libertarianie,
    spheresValues: {
      economics: 0.8,
      social: -0.5,
    },
    links: {
      www: 'https://www.partialibertarianie.pl/',
      programme: 'https://www.partialibertarianie.pl/program',
    },
  },
];

export default parties;
