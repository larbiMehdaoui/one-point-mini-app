import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDataList } from '../store/select';
import {
  checkedElement,
  deleteElement,
  editModeItem,
  editTextItem,
  persistDataList,
} from '../store/actions/add-element';

const useDataList = () => {
  const dispatch = useDispatch();
  const dataList = useSelector(getDataList);

  const handleDeleteData = useCallback((id: string) => {
    dispatch(deleteElement(id));
    dispatch(persistDataList());
  }, []);

  const handleCheckItem = useCallback((id: string) => {
    dispatch(checkedElement(id));
    dispatch(persistDataList());
  }, []);

  const handleModeEdit = useCallback((id: string) => {
    dispatch(editModeItem(id));
    dispatch(persistDataList());
  }, []);

  const handleTextEdit = useCallback((text: string, id: string) => {
    dispatch(editTextItem(text, id));
    dispatch(persistDataList());
  }, []);

  return {
    dataList,
    handleDeleteData,
    handleCheckItem,
    handleModeEdit,
    handleTextEdit,
  };
};

export default useDataList;
