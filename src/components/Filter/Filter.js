import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/filter/filter-slice';
import { selectFilter } from '../../redux/selectors';
import { FilterInput, FilterBox } from './Filter.styled';

export default function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const changeFilter = e => {
    dispatch(updateFilter(e.currentTarget.value));
  };

  return (
    <FilterBox>
      <FilterInput
        type="text"
        value={filter}
        onChange={changeFilter}
        placeholder="Filter contacts by name"
      />
    </FilterBox>
  );
}
