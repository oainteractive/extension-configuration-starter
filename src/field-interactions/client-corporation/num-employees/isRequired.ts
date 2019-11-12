const interaction: FieldInteraction = {
    fieldName: 'numEmployees',
    name: 'Is Required',
    event: 'init',
    sortOrder: 1,
    invokeOnInit: false,
    script: (API: FieldInteractionAPI) => {
        API.setRequired(API.getActiveKey(), true);
    },
  };
  
  export default interaction;