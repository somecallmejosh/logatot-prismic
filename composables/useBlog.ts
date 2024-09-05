export const useBlog = () => {
  const { locale } = useI18n({
    useScope: 'local',
  })
  const prismic = usePrismic()
  return useAsyncData('$blog', () => {
    return prismic.client.getAllByType('blog', { lang: locale.value })
  }).data
}
