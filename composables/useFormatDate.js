import { useI18n } from 'vue-i18n'
export const useFormatDate = (date) => {
  const { locale } = useI18n({
    useScope: 'local',
  })

  if (locale.value === 'en-us') {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleDateString('en-US', options)
  } else {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleDateString('es-es', options)
  }
}
