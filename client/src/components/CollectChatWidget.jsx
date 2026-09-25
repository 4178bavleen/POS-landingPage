import { useEffect } from 'react'

const COLLECT_ID = '6ab6329c93f802b48cb894e0'
const SCRIPT_ID = 'collectchat-launcher'

export default function CollectChatWidget() {
  useEffect(() => {
    const formId = import.meta.env.VITE_COLLECTCHAT_FORM_ID || COLLECT_ID

    if (!formId) return undefined

    window.CollectId = formId

    if (document.getElementById(SCRIPT_ID)) return undefined

    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.type = 'text/javascript'
    script.async = true
    script.src = 'https://collectcdn.com/launcher.js'
    document.head.appendChild(script)

    return () => {
      window.collectchat?.unload?.()
      document.getElementById(SCRIPT_ID)?.remove()
      delete window.CollectId
    }
  }, [])

  return null
}
