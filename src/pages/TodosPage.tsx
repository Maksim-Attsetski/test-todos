import React, {FC, ReactElement, useEffect, useMemo, useState} from 'react';
import AnimPage from "../components/H-O-C/AnimPage";
import {Col, Divider, Dropdown, Empty, Layout, Menu, Progress, Row, Space} from "antd";
import {todoSliceAction} from "../redux/slices/todosSlice";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux";
import {ITodo} from "../types/global";
import Todo from "../components/Todo";
import {DownOutlined} from '@ant-design/icons';
import TodosFormCreate from "../components/TodosFormCreate";
import {getTodoDonePercent} from "../helpers/getTodoDonePercent";

const TodosPage: FC = () => {
    const dispatch = useTypedDispatch()
    const {todos} = useTypedSelector(state => state.todos)
    const {lang} = useTypedSelector(state => state.lang)
    const sortValues = {
        all: lang.allTodos,
        done: lang.doneTodos,
        notDone: lang.notDoneTodos,
    }
    const {getTodos} = todoSliceAction
    const [sortValue, setSortValue] = useState(sortValues.all)

    useEffect(() => {
        dispatch(getTodos())
    }, [])

    const sortTodos: ITodo[] = useMemo(() => {
        if (sortValue === sortValues.done) {
            return [...todos].filter((todo: ITodo) => todo.isDone)
        } else if (sortValue === sortValues.notDone) {
            return [...todos].filter((todo: ITodo) => !todo.isDone)
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


    return (
        <Layout className={'page'}>
            <AnimPage>
                <h1 style={{textAlign: 'center'}}>{lang.todos}</h1>
                <Divider/>
                <Row gutter={[32, 16]} align={'top'}>
                    <Col>
                        <TodosFormCreate/>
                        <Divider/>
                        <Dropdown overlay={menu}>
                            <Space>
                                {sortValue}
                                <DownOutlined/>
                            </Space>
                        </Dropdown>
                    </Col>
                    <Col>
                        <Progress percent={getTodoDonePercent(todos)} format={percent => `${percent}% ${lang.done}`}
                                  type="circle"/>
                    </Col>
                </Row>

                <Divider/>

                <Row gutter={[16, 16]}>
                    {sortTodos.length > 0
                        ? sortTodos && sortTodos.map((todo: ITodo) => <Todo key={todo.id} todo={todo}/>)
                        : <Empty/>}
                </Row>

            </AnimPage>
        </Layout>
    );
};

export default TodosPage;