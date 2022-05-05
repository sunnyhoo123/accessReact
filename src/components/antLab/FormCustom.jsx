import React from "react";
import { Form, Button } from "antd";
import PriceInput from "./PriceInput";

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const FormCustom = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  const checkPrice = (_, value) => {
    if (value.number > 0) {
      return Promise.resolve();
    }

    return Promise.reject(new Error("Price must be greater than zero!"));
  };

  return (
    <div>
      <Form
        name="customized_form_controls"
        layout="inline"
        onFinish={onFinish}
        initialValues={{
          price: {
            number: 0,
            currency: "rmb",
          },
        }}
      >
        <Form.Item
          name="price"
          label="Price"
          rules={[
            {
              validator: checkPrice,
            },
          ]}
        >
          <PriceInput />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default FormCustom;
