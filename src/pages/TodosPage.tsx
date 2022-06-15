import React, {FC, ReactElement, useEffect, useMemo, useState} from 'react';
import AnimPage from "../components/H-O-C/AnimPage";
import {Button, Col, Divider, Dropdown, Layout, Menu, Row, Space} from "antd";
import {todoSliceAction} from "../redux/slices/todosSlice";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux";
import {ITodos} from "../types/global";
import {getUID} from "../helpers/getUID";
import Todo from "../components/Todo";
import {getDate} from "../helpers/getDate";
import {DownOutlined} from '@ant-design/icons';

const TodosPage: FC = () => {
    const sortValues = {
        all: 'All todos',
        done: 'Done todos',
        notDone: 'Not done todos',
    }
    const dispatch = useTypedDispatch()
    const {todos} = useTypedSelector(state => state.todos)
    const {getTodos, createTodo} = todoSliceAction
    const [sortValue, setSortValue] = useState(sortValues.all)

    useEffect(() => {
        dispatch(getTodos())
    }, [])

    const sortTodos: ITodos[] = useMemo(() => {
        if (sortValue === sortValues.done) {
            return [...todos].filter((todo: ITodos) => !todo.isDone)
        } else if (sortValue === sortValues.notDone) {
            return [...todos].filter((todo: ITodos) => todo.isDone)
        } else {
            return todos
        }
    }, [sortValue, todos])

    const menu: ReactElement = (
        <Menu
            items={[sortValues.all, sortValues.done, sortValues.notDone].map((item: string) => {
                return {
                    key: item, label: (
                        <div onClick={() => setSortValue(item)}>{item}</div>
                    )
                }
            })}
        />
    );

    const createNewTodo = () => {
        const newTodo: ITodos = {
            id: getUID(),
            createdAt: getDate(),
            title: prompt() || 'Без Названия',
            description: prompt() || 'Без описания',
            isDone: false,
        }
        dispatch(createTodo(newTodo))
    }

    return (
        <Layout style={{padding: '1rem 0'}}>
            <AnimPage>
                <Row gutter={[32, 16]} align={'top'}>
                    <Col><h2>Todos</h2></Col>
                    <Col><Button type={'primary'} onClick={createNewTodo}>Add</Button></Col>
                    <Col style={{paddingTop: 4}}>
                        <Dropdown overlay={menu}>
                            <Space>
                                {sortValue}
                                <DownOutlined/>
                            </Space>
                        </Dropdown>
                    </Col>
                </Row>
                <Divider/>
                <Row gutter={[16, 16]}>
                    {sortTodos && sortTodos.map((todo: ITodos) =>
                        <Todo key={todo.id} todo={todo}/>
                    )}
                </Row>

            </AnimPage>
        </Layout>
    );
};

export default TodosPage;