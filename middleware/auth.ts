export default defineNuxtRouteMiddleware(async (to) => {
  const accessParam = to.query.access
  const endpoint = 'https://www.logatot.com/learning-videos'
  const errorRoute = '/video-learning-error'
  const protectedUid = 'video-learning'
  const unauthorizedRoute = '/video-learning-unauthorized'

  if (to.params.uid === protectedUid) {
    if (!accessParam) {
      return navigateTo(unauthorizedRoute) // Redirect to unauthorized page
    }

    try {
      const { data } = await useFetch(endpoint, {
        method: 'POST',
        body: { access: accessParam },
        headers: {
          'Content-Type': 'application/json',
        },
      })

      if (data.value !== 'success') {
        return navigateTo(unauthorizedRoute)
      }
    } catch (error) {
      return navigateTo(errorRoute) // Redirect to a generic error page
    }
  }
})
