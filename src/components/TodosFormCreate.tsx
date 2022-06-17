import React, {ChangeEvent, useRef, useState} from 'react';
import {Button, Form, Input, Modal} from "antd";
import {ITask, ITodo} from "../types/global";
import {getUID} from "../helpers/getUID";
import {getDate} from "../helpers/getDate";
import {useTypedDispatch, useTypedSelector} from "../hooks/redux";
import {todoSliceAction} from "../redux/slices/todosSlice";
import TodosForm from "./TodosForm";

const TodosFormCreate = () => {
    const dispatch = useTypedDispatch()
    const {createTodo} = todoSliceAction
    const {lang} = useTypedSelector(state => state.lang)
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [title, setTitle] = useState('')
    const [form] = Form.useForm();

    const createNewTodo = (fields: any) => {
        const tasks: ITask[] = fields.names.map((task: any) => {
            return {
                isDone: false, text: task
            }
        })
        const newTodo: ITodo = {
            id: getUID(),
            createdAt: getDate(),
            title: title || 'Без Названия',
            tasks,
            isDone: false,
        }
        dispatch(createTodo(newTodo))
        setIsOpen(false)
        // reset form fields
        setTitle('')
        form.resetFields();
    }
    const formItemLayoutWithOutLabel = {
        wrapperCol: {
            xs: {span: 24, offset: 0},
            sm: {span: 20, offset: 4},
        },
    };

    return (
        <div>
            <Button type={'primary'} onClick={() => setIsOpen(true)}>{lang.addTodo}</Button>
            <Modal title={`${lang.createTodoTitle} :)`} footer={[]}
                   visible={isOpen}
                   onCancel={() => {
                       setIsOpen(false)
                       form.resetFields();
                   }}>
                <Form name="dynamic_form_item" form={form} {...formItemLayoutWithOutLabel}
                      onFinish={(fields) => createNewTodo(fields)}>
                    <Form.Item
                        label={lang.todoName}
                        validateTrigger={['onChange', 'onBlur']}
                        rules={[
                            {
                                required: true,
                                whitespace: true,
                                message: lang.formErrorMessage,
                            },
                        ]}
                    >
                        <Input
                            placeholder="task title"
                            value={title} style={{width: '90%'}}
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setTitle(event.target.value)}
                        />
                    </Form.Item>
                    <TodosForm/>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">{lang.save || 'Save'}</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default TodosFormCreate;