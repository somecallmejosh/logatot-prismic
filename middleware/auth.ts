export default defineNuxtRouteMiddleware(async (to) => {
  const router = useRouter()
  const accessParam = to.query.access as string | null
  const endpoint = `https://lat-prod-328bdc03c593.herokuapp.com/video_library_accesses/${accessParam}/validate`
  const errorRoute = '/video-learning-error'
  const protectedUid = 'video-learning'
  const unauthorizedRoute = '/video-learning-unauthorized'

  interface ApiResponse {
    success: boolean
    message: string
  }

  if (to.params.uid === protectedUid) {
    if (!accessParam) {
      return await router.push(unauthorizedRoute)
    }

    try {
      const { data } = await useFetch<ApiResponse>(endpoint, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })

      // Accessing the value of the ref
      if (data.value && data.value.success) {
        // Check if the current path is not already '/video-learning'
        if (to.path !== '/video-learning') {
          return await router.push('/video-learning') // Redirect to protected page
        }
      } else {
        return await router.push(unauthorizedRoute)
      }
    } catch (error) {
      return await router.push(errorRoute) // Redirect to a generic error page
    }
  } else {
    console.log('Protected UID not matched. Proceeding without redirection.')
  }
})
