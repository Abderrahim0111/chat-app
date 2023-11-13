import { IconButton } from '@mui/material';
import React from 'react';
import AddBoxIcon from '@mui/icons-material/AddBox';

const CreateGroups = () => {
    return (
        <div className='createGroups'>
            <div className='createGroupsContent'>
                <input type="text" name="" id="" placeholder='Enter group name' />
                <IconButton>
                    <AddBoxIcon />
                </IconButton>
            </div>
        </div>
    );
}

export default CreateGroups;
