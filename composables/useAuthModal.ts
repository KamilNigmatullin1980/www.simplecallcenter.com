import { readonly } from 'vue'

export const useAuthModal = () => {
  const isOpen = useState('authModal', () => false)

  const open = () => {
    isOpen.value = true
  }

  const close = () => {
    isOpen.value = false
  }

  return {
    isOpen: readonly(isOpen),
    open,
    close
  }
}




