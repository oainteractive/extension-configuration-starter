const interaction: FieldInteraction = {
    fieldName: 'firstName',
    name: 'First Name Toast',
    event: 'blur',
    sortOrder: 1,
    invokeOnInit: false,
    script: (API: FieldInteractionAPI) => {
        API.displayToast({
            title: 'Toast Sample',
            message: API.getActiveValue() + ' is my name, too!'
        });
    },
  };
  
  export default interaction;