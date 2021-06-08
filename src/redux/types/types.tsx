

const types = {
  login: '[Auth]Login',
  register: '[Auth] Register',
  logout: '[Auth]Logout',

  uiSetError: '[UI] Set Error',
  uiRemoveError: '[UI] Remove Error',
  uiDisplayNotification: '[UI] Display Notification',
  uiHideNotification: '[UI] Hide Notification',
  uiSetNotificationContent: '[UI] Set Notification Content',


  notesAddNew: '[Notes] New Note',
  notesActive: '[Notes] Set active note',
  notesGetAll: '[Notes] Load notes',
  notesUpdate: '[Notes] Update a note',
  notesDelete: '[Notes] Delete a note',
  notesLogoutCleaning: '[Notes] Logout Cleanint'


}

export default types;