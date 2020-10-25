import React, { useState, useEffect } from "react";
import Registrastion from "../includes/imgs/registration.png";
import FormFeild from "./FormFeild";
import OpenDays from "./openDays";

function FormWrap(props) {
  const days = [
    {
      key: 0,
      value: "Mon",
    },
    {
      key: 1,
      value: "Tus",
    },
    {
      key: 2,
      value: "Wen",
    },
    {
      key: 3,
      value: "Thu",
    },
    {
      key: 4,
      value: "Fri",
    },
    {
      key: 5,
      value: "Sat",
    },
    {
      key: 6,
      value: "Sun",
    },
  ];

  const [openDays, setOpenDays] = useState([0, 1, 2, 3]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const selectedDaysNames = [];

 
  const [formFeilds, setFormFeilds] = useState([
    {
      subject: "",
      email: "",
      phone: "",
      url: "",
      openHours: "",
      closeHours: "",
      description: "",
      fileImg: Registrastion,
      selectedDays: selectedDays,
    },
  ]);
  useEffect(() => {
    for (let i = 0; i < openDays.length; i++) {
      for (let j = 0; j < days.length; j++) {
        if (openDays[i] === days[j].key) {
          selectedDaysNames.push(days[j].value);
        }
      }
    }
    // setSelectedDays([...selectedDaysNames]);
    setFormFeilds([{...formFeilds,selectedDays:selectedDaysNames}]);
  }, [openDays]);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
  };

  const onSelectDay = (e) => {
    if (openDays.includes(e.target.value)) {
      let filteredArray = openDays.filter((item) => item !== e.target.value);
      setOpenDays(filteredArray);
    } else {
      setOpenDays([...openDays, e.target.value]);
    }
  };

  return (
    <div className="FormWrap">
      <form>
        <div className="inputs-wrapper">
          <FormFeild
            label="Subject"
            type="text"
            className="Feild"
            onChange={(e) =>
              setFormFeilds([{ ...formFeilds, subject: e.target.value }])
            }
            placeholder="Artislana Kale"
            required
            value={formFeilds[0].subject}
          />

          {console.log(formFeilds[0].selectedDays)}

          <FormFeild
            label="Email"
            type="text"
            className="Feild"
            onChange={(e) =>
              setFormFeilds([{ ...formFeilds, email: e.target.value }])
            }
            placeholder="Enter Email"
            required
            value={formFeilds[0].email}
          />

          <FormFeild
            label="Phone Number"
            type="text"
            className="Feild"
            onChange={(e) =>
              setFormFeilds([{ ...formFeilds, phone: e.target.value }])
            }
            placeholder="Enter Your phone number"
            required
            value={formFeilds.phone}
          />

          <FormFeild
            label="Url"
            type="text"
            className="Feild"
            onChange={(e) =>
              setFormFeilds([{ ...formFeilds, url: e.target.value }])
            }
            placeholder="http://example.com"
            required
            value={formFeilds[0].url}
          />

          <FormFeild
            label="Open Hours"
            type="text"
            className="Feild"
            onChange={(e) =>
              setFormFeilds([{ ...formFeilds, openHours: e.target.value }])
            }
            required
            value={formFeilds[0].openDays}
          />

          <FormFeild
            label="Closing Hours"
            type="text"
            className="Feild"
            onChange={(e) =>
              setFormFeilds([{ ...formFeilds, closeHours: e.target.value }])
            }
            required
            value={formFeilds[0].closeHours}
          />
          <OpenDays
            days={days}
            openDays={openDays}
            setOpenDays={(e) => setOpenDays(e)}
            onSelectDay={onSelectDay}
          />

          <div className="Feild">
            <label>Description</label>
            <textarea
              onChange={(e) =>
                setFormFeilds([{ ...formFeilds, description: e.target.value }])
              }
              value={formFeilds[0].description}
            ></textarea>
          </div>

          <div className="file_feild">
            <label>File input</label>
            <input
              type="file"
              onChange={onSelectFile}
              value={formFeilds.fileImg}
              required
            />
            <small></small>
          </div>
          <input type="submit" className="searchBtn" />
        </div>
        <div className="image_preview">
          <p>Registration is fast, easy and free.</p>
          {selectedFile ? (
            <img src={preview} alt="reg" />
          ) : (
            <img src={Registrastion} alt="restaurant registrastion" />
          )}
        </div>
      </form>
    </div>
  );
}

export default FormWrap;
