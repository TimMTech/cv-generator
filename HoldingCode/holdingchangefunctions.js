const handleChange = (e) => {
  const { id, value } = e.target;
  setInputValue((prevState) => ({
    experienceForm: {
      ...prevState.experienceForm,
      [id]: value,
    },
  }));
};


  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputValue((prevState) => ({
      educationForm: {
        ...prevState.educationForm,
        [id]: value,
      },
    }));
  };

    const handleChange = (e) => {
      const { id, value } = e.target;
      console.log(value);
      setInputValue((prevState) => ({
        personalForm: {
          ...prevState.personalForm,
          [id]: value,
        },
      }));
    };

    const handleFile = (e) => {
      const { id, files } = e.target;
      if (!files) return;
      setInputValue((prevState) => ({
        personalForm: {
          ...prevState.personalForm,
          [id]: URL.createObjectURL(new Blob([files[0]], { type: "image/*" })),
        },
      }));
    };