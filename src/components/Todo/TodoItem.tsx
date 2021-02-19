import React, { useState } from 'react';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

import { editTask } from '../../common/redux/todo/actions';

const TodoItem: React.FunctionComponent<any> = ({ item, handleUpdateTask }): React.ReactElement => {
    const [title, setTitle] = useState(item.title);
    const [openForm, setOpenForm] = useState(false);
    const dispatch = useDispatch();

    const handleSaveEditTask = (taskId: number) => {
        const newTitle: string = title;
        dispatch(editTask({ taskId, newTitle }));
        setOpenForm(false);
    };

    return (
        <div>
            {openForm ? (
                <InputGroup>
                    <FormControl
                        defaultValue={item.title}
                        onChange={(e) => setTitle(e.target.value)}
                        value={title !== '' ? title : item.title}
                    />
                    <InputGroup.Append>
                        <Button variant="outline-success" onClick={() => handleSaveEditTask(item.id)}>
                            Save
                        </Button>
                    </InputGroup.Append>
                </InputGroup>
            ) : (
                <div onClick={() => handleUpdateTask(item.id)}>
                    <span onClick={() => setOpenForm(true)}>{item.title}</span>
                </div>
            )}
        </div>
    );
};

export default TodoItem;
