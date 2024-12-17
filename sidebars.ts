import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

//export default sidebars;

export default {
  
  tutorialSidebar: [
    'SwamiSaranam/kannimoola_ganapathi',
    'SwamiSaranam/bagavaan_saranam_bagavathi_saranam',
    'SwamiSaranam/thalladi_thalladi',
    'SwamiSaranam/poy_inri_meyyodu_nai_kondu_ponaal',
    'SwamiSaranam/pallikkattu_sabari_malaikku',
    'SwamiSaranam/vanpuli_mel_eerivarum_engal_veeramani_kandane_va',
    'SwamiSaranam/om_guru_naadha_ayyappa',
    'SwamiSaranam/anjumalai_azhaga_ayyya',
    'SwamiSaranam/villali_veeran_ayya',
    'SwamiSaranam/antha_vaaraa_ayya',
    'SwamiSaranam/odiva_ayya_odaivaa_samy',
    'SwamiSaranam/annadaan_prabhuve_saranam_ayyappa',
    'SwamiSaranam/odivaa_ayya_odaivaa',
    'SwamiSaranam/vaa_anga_vaa_sabari_malayakku_vaa',
    'SwamiSaranam/engae_manakudhu',
    'SwamiSaranam/harivarasanam',
    'SwamiSaranam/malaiya_maliazhaga',
    'SwamiSaranam/kannalae_parumaiya',
    'SwamiSaranam/sannadhiyil_kattamkatti',
    'SwamiSaranam/Samy_Samy_iyappa',
    'SwamiSaranam/ethana_piravigal_eduthalum',
    'SwamiSaranam/ganesha_charanam',
    'SwamiSaranam/alaikatuma_samy_alaikatuma',
    'SwamiSaranam/athisesha',
    'SwamiSaranam/vatta_nalla_pottu_vachu',
    'SwamiSaranam/ennalum_unnamam',
    'SwamiSaranam/indha_kana_karunkuzhil',
    'SwamiSaranam/karupu_uoruvam_pondavaram',
    'SwamiSaranam/enga_karupasamy',
    'SwamiSaranam/samayapura_mariyamma'
  ],
};
