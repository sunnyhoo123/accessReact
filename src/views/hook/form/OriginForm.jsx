import React from "react";
import { useFormik } from "formik";
import { registrationSchema } from "./RegistrationSchema";
import { Button, Flex, Text } from "@chakra-ui/react";
import { Input, Wrapper, Label, IconWrapper } from '../hook.styles';
import { IconAlertCircle, IconCirclePlus } from '@tabler/icons';

function HookuseFormik() {
  const formik = useFormik({
    validateOnChange: false,
    validateOnBlur: true,
    initialValues: { ...registrationSchema },
    onSubmit: async (values) => {
      // to do: loading + API
      console.log(3333, values);
    },
    validate: async (values) => {
      const errors = {};
      if (!values.description.trim()) {
        errors.description = "Required";
      }
      return errors;
    },
  });

  function customHandleSubmit (e) {
    e.preventDefault();
    formik.handleSubmit();
  }

  function validateForm(){
    var x=document.forms["originForm2"]["fname"].value;
    console.log(x,99)
    if (x==null || x==""){
      alert("姓必须填写");
      return false;
    }
  }

  return (
    <div>
      <form name="originForm1">
        <input type="text" name="textName"></input>
        <input type="submit" value="提交1"></input>
        <button>submit 1</button>
      </form>

      <form name="originForm2" action="https://www.runoob.com/try/demo_source/demo-form.php" onSubmit={validateForm} method="post">
        <input type="text" name="fname"></input>
        <input type="submit" value="提交2"></input>
        <button>submit 2</button>
      </form>

      <form onSubmit={customHandleSubmit}>
        <Input id='storeName' value={formik.values.storeName} title="Store Name" name='storeName' placeholder="store name" onChange={formik.handleChange}></Input>
        <input type="submit" form="listModal" value="提交 sub"/>
      </form>
    </div>
  );
}

export default HookuseFormik;
