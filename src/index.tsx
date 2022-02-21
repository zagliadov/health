import ReactDOM from 'react-dom';
import {App} from './components/App/App';
import 'antd/dist/antd.css';
import { store } from './features/app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

