import { boot } from 'quasar/wrappers'
import { confirmDialog } from 'src/modules/dialog'
import { i18n } from 'src/modules/i18n'

let fetchVersionInteval
let updateNotifyShow = false

/**
 * Fetch app version
 * @returns {String}
 */
const fetchVersion = async () => {
  try {
    const req = await fetch('/app.config.json')
    const resp = await req.json()

    return resp.version
  } catch (error) {
    console.error(error)

    return process.env.VERSION
  }
}

const updateAppConfirmDialog = async () => {
  if (updateNotifyShow) return
  updateNotifyShow = true

  const resp = await confirmDialog({
    title:
      i18n('updatesNotify.title') +
      ` ${process.env.VERSION}`,
    message: i18n('updatesNotify.message'),
    okLabel: i18n('updatesNotify.okBtnLabel'),
    cancelLabel: i18n('updatesNotify.cancelBtnLabel'),
  })

  if (!resp) {
    clearInterval(fetchVersionInteval)
    updateNotifyShow = false
    return
  }
  location.reload()
}
export default boot(({ app }) => {
  fetchVersionInteval = setInterval(async () => {
    const fetchedVersion = await fetchVersion()

    // Если новых обновлений нет
    if (fetchedVersion === process.env.VERSION) {
      return
    }
    updateAppConfirmDialog()
  }, 5 * 1000)
})
