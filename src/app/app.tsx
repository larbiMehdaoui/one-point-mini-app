import { useEffect, useState } from 'react';
import Field from '../components/field';
import './app.css';
import DataList from '../pages/DataList';
import useInitApp from './app.hook';

function App() {
  const { task, hasElement } = useInitApp();

  return (
    <div className="app">
      <div className="header">
        <div className="title">
          <h2>onepoint</h2>
        </div>

        <div className="form_input">
          <Field />
        </div>
      </div>
      <div className="card task">
        <span>
          A valider: <strong>{task.validateTask}</strong>
        </span>
        <span>
          A faire: <strong>{task.todoTask}</strong>
        </span>
        <span>
          Total: <strong>{task.total}</strong>
        </span>
      </div>
      {hasElement && (
        <div className="card bg-white">
          <DataList />
        </div>
      )}
    </div>
  );
}

export default App;
