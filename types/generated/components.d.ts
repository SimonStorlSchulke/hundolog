import type { Schema, Struct } from '@strapi/strapi';

export interface GesundheitGesundheit extends Struct.ComponentSchema {
  collectionName: 'components_gesundheit_gesundheits';
  info: {
    displayName: 'Gesundheit';
    icon: 'heart';
  };
  attributes: {
    Bewegung: Schema.Attribute.Enumeration<
      ['gut', 'l\u00E4uft/sitzt komisch']
    > &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'gut'>;
    Freitext: Schema.Attribute.Text;
    Gewicht: Schema.Attribute.Enumeration<['zu d\u00FCnn', 'okay', 'zu dick']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'okay'>;
    Verhalten: Schema.Attribute.Enumeration<
      ['wach/aufmerksam/klar', 'wirkt zur\u00FCckgezogen/kr\u00E4nklich/matt']
    >;
  };
}

export interface GesundheitMitAnderenHunden extends Struct.ComponentSchema {
  collectionName: 'components_gesundheit_mit_anderen_hundens';
  info: {
    displayName: 'Mit anderen Hunden';
  };
  attributes: {
    Freitext: Schema.Attribute.Text;
    Koerperhaltung: Schema.Attribute.Enumeration<
      ['geduckt', 'aufrecht/auver\u00E4n']
    >;
    Mobbt: Schema.Attribute.Boolean;
    Position: Schema.Attribute.Enumeration<['mittendrin', 'au\u00DFerhalb']>;
    SpieltMitAnderenHunden: Schema.Attribute.Boolean;
    StreitetSichOft: Schema.Attribute.Boolean;
    VerkriechtSich: Schema.Attribute.Boolean;
    VerwaltetRessourcen: Schema.Attribute.Boolean;
    wieDarfSichDerHundBewegen: Schema.Attribute.String;
    WirdBegruesst: Schema.Attribute.Boolean;
  };
}

export interface GesundheitMitMenschen extends Struct.ComponentSchema {
  collectionName: 'components_gesundheit_mit_menschens';
  info: {
    displayName: 'mitMenschen';
    icon: 'user';
  };
  attributes: {
    anfassbarkeit: Schema.Attribute.Enumeration<
      [
        'L\u00E4sst sich \u00FCberall anfassen (Pfoten, Ohren, K\u00F6rper)',
        'L\u00E4sst sich eingeschr\u00E4nkt anfassen',
        'weicht aus',
        'Zeigt Abwehrverhalten',
      ]
    >;
    Freitext: Schema.Attribute.Text;
    freundlich: Schema.Attribute.Boolean;
    kommt: Schema.Attribute.Enumeration<
      ['sofort', 'z\u00F6gerlich', 'h\u00E4lt Abstand']
    >;
    laesstSichEinschraenken: Schema.Attribute.Boolean;
    laesstSichFesthalten: Schema.Attribute.Boolean;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'gesundheit.gesundheit': GesundheitGesundheit;
      'gesundheit.mit-anderen-hunden': GesundheitMitAnderenHunden;
      'gesundheit.mit-menschen': GesundheitMitMenschen;
    }
  }
}
