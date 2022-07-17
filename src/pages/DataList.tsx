import React from 'react';
import DataItem from '../components/data-item';
import useDataList from './data-list.hook';

const DataList = (): JSX.Element => {
  const {
    dataList,
    handleDeleteData,
    handleCheckItem,
    handleModeEdit,
    handleTextEdit,
  } = useDataList();

  return (
    <div>
      {dataList.map((list) => (
        <DataItem
          handleTextEdit={handleTextEdit}
          handleModeEdit={handleModeEdit}
          handleCheckItem={handleCheckItem}
          handleDeleteData={handleDeleteData}
          key={list.id}
          {...list}
        />
      ))}
    </div>
  );
};

export default DataList;
