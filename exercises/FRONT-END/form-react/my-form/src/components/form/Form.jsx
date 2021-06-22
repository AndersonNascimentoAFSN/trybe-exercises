import React, { createContext, useState } from 'react'

// export const FormCtx = createContext({
//   fields: {},
//   errors: {}
// });
export const FormCtx = createContext();

export default function Form(props) {
  const [state, setstate] = useState({
    fields: {},
    errors: {}
  });

  const setFields = (event, { id}) => {
    event.persist();
    console.log("add/update field value!");
  };

  const { fields, errors } = state;

  const formCtx = {
    fields,
    errors,
    setFields: setFields
  }

  return (
    <form action="">
      <FormCtx.Provider value={formCtx}>
        {props.children}
      </FormCtx.Provider>
    </form>
  )
}
