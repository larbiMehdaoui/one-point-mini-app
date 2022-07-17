import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNumberTask, hasElementInDataList } from '../store/select';
import { hydrateDataLite } from '../store/actions/add-element';

const useInitApp = () => {
  const dispatch = useDispatch();
  const task = useSelector(getNumberTask);
  const hasElement = useSelector(hasElementInDataList);

  useEffect(() => {
    const dataList = localStorage.getItem('@data-list');
    if (dataList && Array.isArray(JSON.parse(dataList))) {
      dispatch(hydrateDataLite(JSON.parse(dataList)));
    }
  }, [dispatch]);

  return { task, hasElement };
};

export default useInitApp;
