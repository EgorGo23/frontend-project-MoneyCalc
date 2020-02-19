const addItem = (id, date, money, category) => ({ type: 'CALC_CHANGE_', payload: { id, date, money, category } });

const removeItem = (id) => ({ type: 'REMOVE_ITEM', payload: { id } });

const removeAll = () => ({ type: 'REMOVE_ALL' });