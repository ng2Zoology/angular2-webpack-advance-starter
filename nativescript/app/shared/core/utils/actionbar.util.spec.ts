import {t} from 'frameworks/test.framework/index';
import {ActionBarUtil} from './actionbar.util';

t.describe('nativescript.framework: ActionBarUtil', () => {
  
  t.it('sanity', () => {   
    t.e(ActionBarUtil.SET_TITLE).toBeDefined();
    t.e(ActionBarUtil.ADD_BUTTON).toBeDefined();
    t.e(ActionBarUtil.EMPTY_ITEMS).toBeDefined();
    t.e(ActionBarUtil.STATUSBAR_STYLE).toBeDefined();
  });
});