import React from 'react';
import { PersonDetails, PersonList } from '../sw-components';
import Row from '../row';

const PeoplePage = (props) => {
    const {id} = props.match.params;

    return (
      <Row
        left={<PersonList onItemSelected={(selectedItem) => props.history.push(selectedItem)} />}
        right={<PersonDetails itemId={id} />} />
    );
};

export default PeoplePage;
