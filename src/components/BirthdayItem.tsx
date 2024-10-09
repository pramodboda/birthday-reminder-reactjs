import React from 'react';
import { Person } from '../data';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from "@mui/material/Divider";
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
// import WorkIcon from '@mui/icons-material/Work';
// import BeachAccessIcon from '@mui/icons-material/BeachAccess';

const BirthdayItem: React.FC<{ person: Person }> = ({ person }) => {
    return (
        <>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar src={person.image}>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={person.name} secondary={`${person.age} years old`} />
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>
        </>
    );
};

export default BirthdayItem;
