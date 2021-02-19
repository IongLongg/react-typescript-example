import { Button, ListGroup } from 'react-bootstrap';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Task } from '../../common/redux/todo/reducer';
import { updateTask, deleteTask } from '../../common/redux/todo/actions';

interface ListProps {
    list: Task[];
}

const TodoList: React.FunctionComponent<ListProps> = ({ list }): React.ReactElement => {
    const dispatch = useDispatch();
    const handleUpdateTask = (item: Task) => {
        console.log(item);
        dispatch(updateTask(item));
    };

    const handleDeleteTask = (item: Task) => {
        console.log(`Delete ${item}`);
        dispatch(deleteTask(item));
    };

    return (
        <ListGroup>
            {list.map((item) => (
                <ListGroup.Item
                    className="d-flex justify-content-between"
                    variant={`${item.isCompleted && 'dark'}`}
                    key={item.id}
                >
                    <div className="p-2 w-100 text-left" onClick={() => handleUpdateTask(item)}>
                        {item.isCompleted ? <s>{item.title}</s> : item.title}
                    </div>
                    {item.isCompleted && (
                        <Button className="justify-content-end" variant="light" onClick={() => handleDeleteTask(item)}>
                            Delete
                        </Button>
                    )}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default TodoList;
