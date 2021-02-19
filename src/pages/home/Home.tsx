import * as Yup from 'yup';
import { Formik } from 'formik';
import { Button, Form, InputGroup } from 'react-bootstrap';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { GlobalState } from '../../common/redux';
import Header from '../../components/Header/Header';
import AppConstants from '../../common/constants/app';
import { addTask } from '../../common/redux/todo/actions';
import TodoList from '../../components/Todo/TodoList';

import './HomeStyles.scss';

const Home: React.FunctionComponent = (): React.ReactElement => {
    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector((state: GlobalState) => state.auth.user);
    const list = useSelector((state: GlobalState) => state.todo.list);
    const logOut = () => {
        history.push('/login');
    };

    const formAddTaskSchema = Yup.string().required('This field is required').min(3, 'Too short').max(250, 'Too long');

    const handleAddTask = (values: string) => {
        console.log(values);
        dispatch(addTask(values));
    };

    return (
        <div className="container">
            <Header tabs={AppConstants.tabSetting} />
            <Button onClick={logOut} type="primary">
                Logout
            </Button>
            <div>
                <p>Email: {user.email}</p>
                <h2>Todo List</h2>
            </div>
            <Formik
                initialValues={{ title: '' }}
                validateOnChange
                validationSchema={formAddTaskSchema}
                enableReinitialize
                onSubmit={(values) => {
                    handleAddTask(values.title);
                }}
            >
                {({ handleChange, handleSubmit, touched, values, errors }) => (
                    <Form
                        inline
                        className="mb-3"
                        onKeyDown={(e) => {
                            e.key === 'Enter' && handleSubmit();
                        }}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <InputGroup className="w-100">
                            <Form.Control
                                type="text"
                                placeholder="New task"
                                onChange={handleChange}
                                name="title"
                                value={values.title}
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary" onClick={() => handleSubmit()}>
                                    Add
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                        {touched.title && errors.title && (
                            <Form.Text className="text-warning">{errors.title}</Form.Text>
                        )}
                    </Form>
                )}
            </Formik>

            <TodoList list={list} />
        </div>
    );
};

export default Home;
