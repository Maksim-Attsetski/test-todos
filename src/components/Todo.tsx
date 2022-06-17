import React, {FC} from 'react';
import {ITask, ITodo} from "../types/global";
import {Card, Checkbox, Col, Collapse, Row, Space, Timeline} from "antd";
import TodoBtns from "./TodoBtns";
import {todoSliceAction} from "../redux/slices/todosSlice";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux";

const {Panel} = Collapse;

interface IProps {
    todo: ITodo,
}

const Todo: FC<IProps> = ({todo}) => {
    const {lang} = useTypedSelector(state => state.lang)
    const {changeTodo} = todoSliceAction
    const dispatch = useTypedDispatch()

    const changeTodoTask = (id: number) => {
        const tasks = [...todo.tasks].map((task: ITask, index) =>
            index === id ? {isDone: !task.isDone, text: task.text} : task)

        const isDone = tasks.every((task: ITask) => task.isDone)
        dispatch(changeTodo({
            ...todo,
            tasks,
            isDone,
        }))
    }

    return (
        <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}
             style={{order: todo.isDone ? 2 : 0, transition: 'all linear 0.3s'}}
        >
            <Card
                title={<div>{lang.todoName}: {todo.isDone ? <s>{todo.title}</s> : todo.title}</div>}
            >
                <div>
                    {lang.createdAt} — {todo.isDone ? <s>{todo.createdAt}</s> : todo.createdAt}
                </div>

                <Row style={{margin: '1rem 0'}}>
                    <Collapse collapsible="header">
                        <Panel header={lang.tasks} key="1" style={{letterSpacing: 2}}>
                            <Timeline>
                                {todo.tasks && todo.tasks.map((task: ITask, index) =>
                                    <Timeline.Item key={index}>
                                        <Checkbox
                                            onChange={() => changeTodoTask(index)}
                                            checked={task.isDone}>
                                            {task.isDone ? <s>{task.text}</s> : task.text}
                                        </Checkbox>
                                    </Timeline.Item>
                                )}
                            </Timeline>
                        </Panel>
                    </Collapse>
                </Row>

                <Row>
                    <Space direction="vertical">
                        <Collapse collapsible="header">
                            <Panel header={lang.actions} key="2" style={{letterSpacing: 2}}>
                                <TodoBtns todo={todo}/>
                            </Panel>
                        </Collapse>
                    </Space>
                </Row>
            </Card>
        </Col>
    );
};

export default Todo;