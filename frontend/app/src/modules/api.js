/**
 * Get targets for attack
 * @returns {Object}
 */
export const getDefaultTargets = async () => {
  return [
    'https://lenta.ru/',
    'https://ria.ru/',
    'https://ria.ru/lenta/',
    'https://www.rbc.ru/',
    'https://www.rt.com/',
    'http://kremlin.ru/',
    'http://en.kremlin.ru/',
    'https://smotrim.ru/',
    'https://tass.ru/',
    'https://tvzvezda.ru/',
    'https://vsoloviev.ru/',
    'https://www.1tv.ru/',
    'https://www.vesti.ru/',
    'https://online.sberbank.ru/',
    'https://sberbank.ru/',
    'https://zakupki.gov.ru/',
    'https://www.gosuslugi.ru/',
    'https://er.ru/',
    'https://www.rzd.ru/',
    'https://rzdlog.ru/',
    'https://vgtrk.ru/',
    'https://www.interfax.ru/',
    'https://www.mos.ru/uslugi/',
    'http://government.ru/',
    'https://mil.ru/',
    'https://www.nalog.gov.ru/',
    'https://customs.gov.ru/',
    'https://pfr.gov.ru/',
    'https://rkn.gov.ru/',
    'https://www.gazprombank.ru/',
    'https://www.vtb.ru/',
    'https://www.gazprom.ru/',
    'https://lukoil.ru',
    'https://magnit.ru/',
    'https://www.nornickel.com/',
    'https://www.surgutneftegas.ru/',
    'https://www.tatneft.ru/',
    'https://www.evraz.com/ru/',
    'https://nlmk.com/',
    'https://www.sibur.ru/',
    'https://www.severstal.com/',
    'https://www.metalloinvest.com/',
    'https://nangs.org/',
    'https://rmk-group.ru/ru/',
    'https://www.tmk-group.ru/',
    'https://ya.ru/',
    'https://www.polymetalinternational.com/ru/',
    'https://www.uralkali.com/ru/',
    'https://www.eurosib.ru/',
    'https://ugmk.ua/',
    'https://omk.ru/',
    'https://sputniknews.com/',
    'https://lt.sputniknews.ru/',
    'https://baltnews.lt/',
    'https://sputniknews.ru/',
    'https://regnum.ru/\t',
    'https://iz.ru/',
    'https://eadaily.com/',
    'https://www.rubaltic.ru/',
    'http://www.fsb.ru/',
    'https://president.gov.by/ru',
    'https://etpgpb.ru',
    'https://api.etpgpb.ru',
    'https://etp.gpb.ru/',
    'https://passport.etpgpb.ru',
    'https://gos.etpgpb.ru',
    'https://inter-rao.etpgpb.ru',
    'https://rosnedra.etpgpb.ru ',
    'https://gpn.etpgpb.ru',
    'https://geh.etpgpb.ru',
    'https://trade.etpgpb.ru',
    'https://gb.etpgpb.ru',
    'https://koronapay.com',
    'https://api.koronapay.com',
  ]
}

/**
 * Get a emails list of Russians
 * @returns {Promise<Array>}
 */
export const getRussiansEmailsList = async () => {
  try {
    const req = await fetch(
      'https://raw.githubusercontent.com/NIRVANA101/Russian-GBSB/main/CONTENTS/Emails/emails.json',
    )
    const resp = await req.json()

    return Array.isArray(resp) ? resp : []
  } catch (error) {
    console.error(error)
    return []
  }
}
