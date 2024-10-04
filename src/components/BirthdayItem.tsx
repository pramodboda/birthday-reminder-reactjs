import React from 'react';
import { Person } from '../data';

const BirthdayItem: React.FC<{ person: Person }> = ({ person }) => {
    return (
        <div className="birthday-item">
            <h4>{person.name}</h4>
            <p>{person.age} years old</p>
            <p>Birthday: {person.date}</p>
        </div>
    );
};

export default BirthdayItem;
