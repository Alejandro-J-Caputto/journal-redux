import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

export type NotifiyType = 'registration' | 'login' | 'delete' | 'loading' | 'wuops' | 'searching' | 'create' | 'update';

export const NotificationUI = () => {
  const notificationState = useSelector((state:RootState)=> state.ui)
  const {notificationContent} = notificationState;
  return (    
      <div className="notification">
      <div className="notification__action">
        <i className={notificationContent.icon}></i>
      </div>
      <div className="notifation__body">
        <div className="notification__message">
          <p>{notificationContent.text}</p>
        </div>
      </div>
    </div >
  )
}