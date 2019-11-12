const interaction: FieldInteraction = {
    fieldName: 'numEmployees',
    name: 'Change Warning',
    event: 'change',
    sortOrder: 1,
    invokeOnInit: false,
    script: (API: FieldInteractionAPI) => {
        API.confirmChanges(API.getActiveKey(), 'You better be right about this!!!');
    },
  };
  
  export default interaction;