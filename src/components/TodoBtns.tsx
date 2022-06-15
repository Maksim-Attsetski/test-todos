import React, {ChangeEvent, FC} from 'react';
import {Button, Col, notification, Row} from "antd";
import {Link} from "react-router-dom";
import {routeNames} from "../routes/routeNames";
import {ITodos} from "../types/global";
import {useTypedDispatch} from "../hooks/redux";
import {todoSliceAction} from "../redux/slices/todosSlice";

interface IProps {
    todo: ITodos,
}

const TodoBtns: FC<IProps> = ({todo}) => {
    const dispatch = useTypedDispatch()
    const {changeTodo, deleteTodo} = todoSliceAction

    const changeTodoDone = (event: ChangeEvent<HTMLInputElement>) => {

        dispatch(changeTodo({
            ...todo,
            isDone: event.target.checked,
        }))
    }
    const changeFullTodo = () => {
        const title: string | null = prompt('title')
        const description: string | null = prompt('description')

        if (!title) {
            notification.open({message: 'invalid title'})
        } else if (!description) {
            notification.open({message: 'invalid description'})
        } else {
            dispatch(changeTodo({
                ...todo,
                title,
                description,
            }))
        }

    }

    return (
        <Row gutter={[16, 16]} align={'middle'} justify={'space-around'}>
            <Col><input
                type={'checkbox'}
                checked={todo.isDone}
                onChange={changeTodoDone}
            /></Col>
            <Col>
                <Button type={'primary'}
                        disabled={todo.isDone}
                        onClick={() => dispatch(deleteTodo(todo.id))}
                >Delete</Button>
            </Col>
            <Col>
                <Button type={'primary'}
                        disabled={todo.isDone}
                ><Link to={routeNames.TODOS + todo.id}>
                    Open
                </Link></Button>
            </Col>
            <Col>
                <Button type={'primary'}
                        disabled={todo.isDone}
                        onClick={changeFullTodo}
                >Change</Button>
            </Col>
        </Row>
    );
};

export default TodoBtns;