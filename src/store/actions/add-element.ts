import {
  ADD_ELEMENT,
  CHECKED_ELEMENT,
  DELETE_ELEMENT,
  HYDRATE_DATA_DATA,
  PERSIST_DATA,
  EDIT_MODE_ELEMENT,
  EDIT_TEXT_ELEMENT,
} from '../types';

const addElement = (payload: string) => ({
  type: ADD_ELEMENT,
  payload,
});

const deleteElement = (id: string) => ({
  type: DELETE_ELEMENT,
  payload: id,
});

const checkedElement = (id: string) => ({
  type: CHECKED_ELEMENT,
  payload: id,
});

const editModeItem = (id: string) => ({
  type: EDIT_MODE_ELEMENT,
  payload: id,
});

const editTextItem = (text: string, id: string) => ({
  type: EDIT_TEXT_ELEMENT,
  payload: {
    text,
    id,
  },
});

const hydrateDataLite = (payload: string[]) => ({
  type: HYDRATE_DATA_DATA,
  payload,
});

const persistDataList = () => ({
  type: PERSIST_DATA,
});

export {
  hydrateDataLite,
  persistDataList,
  deleteElement,
  checkedElement,
  editModeItem,
  editTextItem,
};

export default addElement;
