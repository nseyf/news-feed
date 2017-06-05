import { combineReducers } from 'redux';
import NewsReducer from './news_reducer';
import SourceReducer from './source_reducer';

const rootReducer = combineReducers({
  news: NewsReducer,
  sources: SourceReducer
});

export default rootReducer;
