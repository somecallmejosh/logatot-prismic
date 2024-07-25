export const useSettings = () => {
  const { locale } = useI18n({
    useScope: 'local',
  })
  const prismic = usePrismic()
  return useAsyncData('$settings', () => {
    return prismic.client.getSingle('settings', { lang: locale.value })
  }).data
}
