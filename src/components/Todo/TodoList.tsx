import { Button, ListGroup } from 'react-bootstrap';
import React from 'react';
import { useDispatch } from 'react-redux';

import { Task } from '../../common/redux/todo/reducer';
import { completeTask, deleteTask } from '../../common/redux/todo/actions';

import TodoItem from './TodoItem';

interface ListProps {
    list: Task[];
}

const TodoList: React.FunctionComponent<ListProps> = ({ list }): React.ReactElement => {
    const dispatch = useDispatch();
    const handleUpdateTask = (id: number) => {
        dispatch(completeTask(id));
    };

    const handleDeleteTask = (id: number) => {
        console.log(`Delete ${id}`);
        dispatch(deleteTask(id));
    };

    return (
        <ListGroup>
            {list.map((item) => (
                <ListGroup.Item
                    className="d-flex justify-content-between p-2 text-left"
                    variant={`${item.isCompleted && 'dark'}`}
                    key={item.id}
                >
                    <div className="w-100">
                        <TodoItem item={item} handleUpdateTask={handleUpdateTask} />
                    </div>

                    {item.isCompleted && (
                        <Button
                            className="justify-content-end"
                            variant="light"
                            onClick={() => handleDeleteTask(item.id)}
                        >
                            Delete
                        </Button>
                    )}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
};

export default TodoList;
