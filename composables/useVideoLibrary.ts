export const useVideoLibrary = () => {
  const { locale } = useI18n({
    useScope: 'local',
  })
  const prismic = usePrismic()
  return useAsyncData('$video_library', () => {
    return prismic.client.getAllByType('video_library', { lang: locale.value })
  }).data
}
