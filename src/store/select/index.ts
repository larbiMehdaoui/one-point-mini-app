import { StateType } from '../definitions';
import { DataItemType } from '../../components/data-item';

export const getDataList = (state: StateType) => state.dataList;
export const hasElementInDataList = (state: StateType) =>
  !!state.dataList.length;

export const getNumberTask = (state: StateType) => ({
  validateTask: (structuredClone(state.dataList) as Array<DataItemType>).filter(
    (task) => task.checked
  ).length,
  todoTask: (structuredClone(state.dataList) as Array<DataItemType>).filter(
    (task) => !task.checked
  ).length,
  total: state.dataList.length,
});
