import React, {FC} from 'react';
import {ITodos} from "../types/global";
import {Card, Col, Collapse, Divider, Space} from "antd";
import TodoBtns from "./TodoBtns";

const {Panel} = Collapse;

interface IProps {
    todo: ITodos,
}

const Todo: FC<IProps> = ({todo}) => {
    return (
        <Col xs={24} sm={24} md={12} lg={8} xl={6} xxl={6}
             style={{order: todo.isDone ? 2 : 0, transition: 'all linear 0.3s'}}
        >
            <Card
                title={<div>Title — {todo.isDone ? <s>{todo.title}</s> : todo.title}</div>}
            >
                <div>
                    Description — {todo.isDone ? <s>{todo.description}</s> : todo.description}
                </div>
                <div>
                    Created at — {todo.isDone ? <s>{todo.createdAt}</s> : todo.createdAt}
                </div>
                <Divider/>
                <Space direction="vertical">
                    <Collapse collapsible="header">
                        <Panel header="More" key="1" >
                            <TodoBtns todo={todo}/>
                        </Panel>
                    </Collapse>
                </Space>
            </Card>
        </Col>
    );
};

export default Todo;