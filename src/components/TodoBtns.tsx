import React, {FC} from 'react';
import {Button, Col, Row} from "antd";
import {Link} from "react-router-dom";
import {routeNames} from "../routes/routeNames";
import {ITodo} from "../types/global";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux";
import {todoSliceAction} from "../redux/slices/todosSlice";
import TodosFormChange from "./TodosFormChange";

interface IProps {
    todo: ITodo,
}

const TodoBtns: FC<IProps> = ({todo}) => {
    const {lang} = useTypedSelector(state => state.lang)
    const dispatch = useTypedDispatch()
    const {deleteTodo} = todoSliceAction

    return (
        <Row gutter={[16, 16]} align={'middle'} justify={'space-around'}>
            <Col>
                <Button type={'primary'}
                        onClick={() => dispatch(deleteTodo(todo.id))}
                >{lang.delete}
                </Button>
            </Col>
            <Col>
                <Button type={'primary'}
                        disabled={todo.isDone}
                >
                    <Link to={routeNames.TODOS + todo.id}>{lang.open}</Link>
                </Button>
            </Col>
            <Col>
                <TodosFormChange todo={todo}/>
            </Col>
        </Row>
    );
};

export default TodoBtns;