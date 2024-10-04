import React, {useState} from "react";
import BirthdayList from "./BirthdayList";
import data, {Person} from "../data";

// UI
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";

const BirthdayCard: React.FC = () => {
    const [people, setPeople] = useState<Person[]>(data);
    return (
    <main>
        <section className="card">
            <Card>
                <CardHeader>
                    <CardTitle>
                        <CardDescription>

                        </CardDescription>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                <h3>{people.length}</h3>
            <BirthdayList people={people}/>
                </CardContent>
                <CardFooter>
                    <Button className="w-full"  onClick={() => {setPeople([])}}>
                    Clear All
                    </Button>
                </CardFooter>
            </Card>
          
            <button onClick={() => {setPeople([])}}>Clear All</button>
        </section>
    </main>)
}

export default BirthdayCard