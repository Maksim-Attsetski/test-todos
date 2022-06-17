import React from 'react';
import {Button, Form, Input} from "antd";
import {MinusCircleOutlined, PlusOutlined} from "@ant-design/icons";
import {useTypedSelector} from "../hooks/redux";

const TodosForm = () => {
    const {lang} = useTypedSelector(state => state.lang)
    const formItemLayout = {
        labelCol: {
            xs: {span: 24},
            sm: {span: 4},
        },
        wrapperCol: {
            xs: {span: 24},
            sm: {span: 20},
        },
    };
    const formItemLayoutWithOutLabel = {
        wrapperCol: {
            xs: {span: 24, offset: 0},
            sm: {span: 20, offset: 4},
        },
    };

    return (
        <Form.List
            name="names"
        >
            {(fields, {add, remove}, {errors}) => (
                <>
                    {fields.map((field, index) => (
                        <Form.Item
                            {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                            label={index === 0 ? lang.task : ''}
                            required={true}
                            key={field.key}
                        >
                            <Form.Item
                                {...field}
                                validateTrigger={['onChange', 'onBlur']}
                                rules={[
                                    {
                                        required: true,
                                        whitespace: true,
                                        message: lang.formErrorMessage,
                                    },
                                ]}
                                noStyle
                            >
                                <Input placeholder="task description" style={{width: '90%'}}/>
                            </Form.Item>
                            {fields.length > 1 ? (
                                <MinusCircleOutlined
                                    className="dynamic-delete-button"
                                    onClick={() => remove(field.name)}
                                />
                            ) : null}
                        </Form.Item>
                    ))}
                    <Form.Item>
                        <Button
                            type="dashed"
                            onClick={() => add()}
                            style={{width: '60%'}}
                            icon={<PlusOutlined/>}
                        >
                            {lang.addField}
                        </Button>
                        <Form.ErrorList errors={errors}/>
                    </Form.Item>
                </>
            )}
        </Form.List>
    );
};

export default TodosForm;