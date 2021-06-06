import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import { JournalRouter } from './routes/JournalRouter';

const JournalApp = () => {
  return (
    <Provider store={store}>
      <JournalRouter/>
    </Provider>
  )
}

export default JournalApp;