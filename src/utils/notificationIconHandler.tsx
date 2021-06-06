export const NOTIFICATION_OPTS = (text?:string) => ({
  login: {
    text: text ? text : 'Succesfully Logged In',
    icon: 'far fa-check-circle'
  },
  registration: {
    text: text ? text : 'Succesfully registered',
    icon: 'far fa-check-circle'
  },
  loading: {
    text: text ? text : 'Activating Super Security!!',
    icon: 'fas fa-sync fa-spin'
  },
  error: {
    text: text ? text : 'there was a problem',
    icon: 'fas fa-exclamation-circle'
  }
})