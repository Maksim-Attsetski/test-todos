import React, {useEffect, useMemo} from 'react';
import {Link, useParams} from "react-router-dom";
import AnimPage from './H-O-C/AnimPage';
import {useTypedDispatch, useTypedSelector} from "../hooks/redux";
import {ITodo} from "../types/global";
import Todo from "./Todo";
import {routeNames} from "../routes/routeNames";
import {todoSliceAction} from "../redux/slices/todosSlice";
import {Col, Row} from "antd";

const TodoById = () => {
    const {id} = useParams()
    const {lang} = useTypedSelector(state => state.lang)
    const dispatch = useTypedDispatch()
    const {todos} = useTypedSelector(state => state.todos)
    const {getTodos} = todoSliceAction

    useEffect(() => {
        if (todos.length > 0) return
        dispatch(getTodos())
    }, [])

    const todo: ITodo | null = useMemo(() => {
        return todos.filter((todo) => todo.id === id)[0]
    }, [todos])

    return (
        <AnimPage>
            <Row gutter={[16, 16]} className={'page'} align={'middle'} justify={'center'}>
                <Col span={20}>
                    <Row justify={'center'}>
                        {todo
                            ? <Todo todo={todo}/>
                            : <div>{lang.todoWithID}: <strong>{id}</strong> is not found</div>}
                    </Row>
                    <Row gutter={[16, 16]} style={{marginTop: 25}} justify={'center'}>
                        <Col>
                            <Link to={routeNames.TODOS}>{lang.back}</Link>
                        </Col>
                        <Col>
                            <Link to={routeNames.HOME}>{lang.home}</Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </AnimPage>
    );
};

export default TodoById;