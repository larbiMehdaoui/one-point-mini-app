import { AnyAction } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import {
  ADD_ELEMENT,
  CHECKED_ELEMENT,
  DELETE_ELEMENT,
  EDIT_MODE_ELEMENT,
  EDIT_TEXT_ELEMENT,
  HYDRATE_DATA_DATA,
} from '../types';
import { DataItemType } from '../../components/data-item';

const initialState: DataItemType[] = [];

const AddElementReducer = (
  state = initialState,
  { type, payload }: AnyAction
) => {
  switch (type) {
    case ADD_ELEMENT:
      return [
        {
          checked: false,
          isModify: false,
          id: uuidv4(),
          description: payload,
        },
        ...state,
      ];
    case CHECKED_ELEMENT:
      return (structuredClone(state) as Array<DataItemType>).map((item) => {
        if (item.id === payload) item.checked = !item.checked;
        return item;
      });
    case EDIT_MODE_ELEMENT:
      return (structuredClone(state) as Array<DataItemType>).map((item) => {
        if (item.id === payload) item.isModify = !item.isModify;
        return item;
      });
    case EDIT_TEXT_ELEMENT:
      return structuredClone(state).map(
        (item: { id: string; description: string }) => {
          if (item.id === payload.id) {
            item.description = payload.text;
          }
          return item;
        }
      );
    case DELETE_ELEMENT:
      return (structuredClone(state) as Array<DataItemType>).filter(
        (item) => item.id !== payload
      );
    case HYDRATE_DATA_DATA:
      return payload;
    default:
      return state;
  }
};

export default AddElementReducer;
