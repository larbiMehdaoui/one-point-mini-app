import React, { FC } from 'react';
import DeleteIcon from '../icons/delete';
import './data-item.css';
import EditIcon from '../icons/edit';

interface ActionControllerDataItem extends DataItemType {
  handleDeleteData: (arg: string) => void;
  handleCheckItem: (arg: string) => void;
  handleModeEdit: (arg: string) => void;
  handleTextEdit: (arg1: string, arg2: string) => void;
}

export interface DataItemType {
  description: string;
  checked: boolean;
  isModify: boolean;
  id: string;
}

const DataItem: FC<ActionControllerDataItem> = ({
  description,
  checked,
  isModify,
  id,
  handleDeleteData,
  handleCheckItem,
  handleModeEdit,
  handleTextEdit,
}): JSX.Element => (
  <div className="data_item">
    <input
      className="iconify"
      type="checkbox"
      checked={checked}
      onClick={() => handleCheckItem(id)}
    />
    <div className={`list ${checked ? 'line-through' : ''}`}>
      {isModify && !checked ? (
        <input
          type="text"
          value={description}
          className="edit_input"
          onChange={(e) => handleTextEdit(e.target.value, id)}
        />
      ) : (
        description
      )}
    </div>
    <div className="icon">
      <div onClick={() => handleModeEdit(id)}>
        <EditIcon />
      </div>
      <div onClick={() => handleDeleteData(id)}>
        <DeleteIcon />
      </div>
    </div>
  </div>
);

export default DataItem;
