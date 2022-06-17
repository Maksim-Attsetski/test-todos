import React, {FC, useState} from 'react';
import {Button, Form, Modal} from "antd";
import {ITask, ITodo} from "../types/global";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux";
import {todoSliceAction} from "../redux/slices/todosSlice";
import TodosForm from "./TodosForm";

interface IProps {
    todo: ITodo
}

const TodosFormChange: FC<IProps> = ({todo}) => {
    const {lang} = useTypedSelector(state => state.lang)
    const dispatch = useTypedDispatch()
    const {changeTodo} = todoSliceAction
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [form] = Form.useForm();

    const changeFullTodo = (fields: any) => {
        const tasks: ITask[] = fields.names.map((task: any) => {
            return {
                isDone: false, text: task
            }
        })
        const newTodo: ITodo = {
            ...todo,
            tasks,
        }
        dispatch(changeTodo(newTodo))
        setIsOpen(false)
    }
    const formItemLayoutWithOutLabel = {
        wrapperCol: {
            xs: {span: 24, offset: 0},
            sm: {span: 20, offset: 4},
        },
    };

    return (
        <div>
            <Button type={'primary'} disabled={todo.isDone} onClick={() => setIsOpen(true)}>{lang.change}</Button>
            <Modal title={`${lang.changeTodoTitle} :)`} footer={[]}
                   onCancel={() => setIsOpen(false)} visible={isOpen} >
                <Form name="dynamic_form_item" form={form} {...formItemLayoutWithOutLabel}
                      onFinish={(fields) => changeFullTodo(fields)}>
                    <TodosForm/>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">{lang.save}</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default TodosFormChange;