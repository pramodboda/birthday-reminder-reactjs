import React, {useState} from "react";
import BirthdayList from "./BirthdayList";
import data, {Person} from "../data"

const BirthdayCard: React.FC = () => {
    const [people, setPeople] = useState<Person[]>(data);
    return (
    <main>
        <section className="card">
            <h3>{people.length}</h3>
            <BirthdayList people={people}/>
            <button onClick={() => {setPeople([])}}>Clear All</button>
        </section>
    </main>)
}

export default BirthdayCard