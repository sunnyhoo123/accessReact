import React from "react";
import { useFormik } from "formik";

import TextField from "@components/shared/InputTypes/TextField/TextField";
import { registrationSchema } from "./RegistrationSchema";
import { Button, Flex, Text } from "@chakra-ui/react";
import { IconAlertCircle, IconCirclePlus } from "@tabler/icons";
import { ScrollToTopFormikError } from "./ScrollToTop/ScrollToTop";

const formId = "sign-in-form";

function HookuseFormik() {
  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: true,
    initialValues: { ...registrationSchema },
    onSubmit: async (values) => {
      // to do: loading + API
      console.log(values);
    },
    validate: async (values) => {
      const errors = {};
      if (!values.description.trim()) {
        errors.description = "Required";
      }
      return errors;
    },
  });

  const setAddress = () => {
    formik.setFieldValue("address", "shenzhen");
  };

  function saveDraft() {
    // 验证数据，调用接口
    formik.validateForm().then((errors) => {
      console.log(errors, "form error");
    });
  }

  const customHandleSubmit = (e) => {
    e.preventDefault();
    formik.handleSubmit();

    const tempTouched = { ...formik.errors };
    Object.keys(tempTouched).forEach((errorFieldID) => {
      tempTouched[errorFieldID] = true;
    });
    formik.touched = tempTouched;
    ScrollToTopFormikError(formik);
    formik.setSubmitting(false);
  };

  // 使用原生form（自带submit），button的type设为submit,
  return (
    <div>
      <h1>Form Plus</h1>
      <form id={formId} onSubmit={customHandleSubmit}>
        <TextField
          label="&nbsp;"
          id="description"
          type="text"
          placeholder="Type in title for your project"
          errorMessage={formik.touched.description && formik.errors.description}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          value={formik.values.description}
          maxLength={50}
          errorIcon={
            <Text pr={4}>
              <IconAlertCircle size={16} color="red" />
            </Text>
          }
        />
        <div style={{ height: "800px" }}>setAddress dddd</div>
        <Button form={formId} type="submit">
          NEXT STEP
        </Button>
        <Button onClick={saveDraft}>SAVE</Button>
        <Button onClick={setAddress}>填充单个表单数据</Button>
      </form>
    </div>
  );
}

export default HookuseFormik;
