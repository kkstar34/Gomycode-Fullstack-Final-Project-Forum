import React from 'react'
import Tags from "@yaireo/tagify/dist/react.tagify";



    
// Tagify settings object
    const baseTagifySettings = {
    blacklist: [],
    maxTags: 6,
    backspace: "edit",
    placeholder: "type something",
    editTags: 1,
    dropdown: {
      enabled: 0
    },
    callbacks: {}
  };

  function TagField({ label, name, initialValue = [], suggestions = [], onChange }) {
    const handleChange = e => {
      // console.log(e.type, " ==> ", e.detail.tagify.value.map(item => onChange(item)));
        onChange(e.detail.tagify.value)
    };
  
    const settings = {
      ...baseTagifySettings,
      whitelist: suggestions,
      enforceWhitelist: true,
      callbacks: {
        add: handleChange,
        remove: handleChange,
        blur: handleChange,
        edit: handleChange,
        invalid: handleChange,
        click: handleChange,
        focus: handleChange,
        "edit:updated": handleChange,
        "edit:start": handleChange
      }
    };
  
    
  
    return (
      <div className="form-group">
        <label htmlFor={"field-" + name}>{label}</label>
        <Tags settings={settings} initialValue={initialValue} />
      </div>
    );
  }


export default TagField