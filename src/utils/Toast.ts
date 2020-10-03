import { store } from 'react-notifications-component';

type MessageType = 'success' | 'danger' | 'info' | 'default' | 'warning';

const showToast = (message: string, type: MessageType) => {
  store.addNotification({
    message,
    type,
    insert: 'top',
    container: 'top-right',
    dismiss: {
      duration: 2000,
      onScreen: false
    }
  });
};

export default showToast;
