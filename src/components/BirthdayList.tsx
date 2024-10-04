import React from 'react';
import BirthdayItem from './BirthdayItem';
import { Person } from '../data';

const BirthdayList: React.FC<{ people: Person[] }> = ({ people }) => {
    return (
        <div>
            {people.map(person => (
                <BirthdayItem key={person.id} person={person} />
            ))}
        </div>
    );
};

export default BirthdayList;
