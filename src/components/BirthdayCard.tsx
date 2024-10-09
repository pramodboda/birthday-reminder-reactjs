import React, { useState } from "react";
import BirthdayList from "./BirthdayList";
import data, { Person } from "../data";

// UI
// import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";

// import {Button} from "@/components/ui/button";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const BirthdayCard: React.FC = () => {
    const [people, setPeople] = useState<Person[]>(data);
    return (
        <main>
            <section className="card">
                <Card sx={{ "width": "300px" }}>
                    <CardContent>
                        {people ? <Typography variant="h5" component="h2">{people.length} Birthdays today</Typography> : ""}

                        <BirthdayList people={people} />
                    </CardContent>

                    <CardActions>
                        <Button variant="contained" sx={{width: "100%"}} onClick={() => { setPeople([]) }}>
                            Clear All
                        </Button>
                    </CardActions>
                </Card>


            </section>
        </main>)
}

export default BirthdayCard