import React, { useState } from "react";
import { View } from "react-native";
import Editor, { OnChangeMessage } from "react-native-mentions-editor";

const users = [
  { id: 1, name: "Raza Dar", username: "mrazadar", gender: "male" },
  { id: 3, name: "Atif Rashid", username: "atif.rashid", gender: "male" },
  { id: 4, name: "Peter Pan", username: "peter.pan", gender: "male" },
  { id: 5, name: "John Doe", username: "john.doe", gender: "male" },
  { id: 6, name: "Meesha Shafi", username: "meesha.shafi", gender: "female" },
];

const Experiment = () => {
  const [_, setMessage] = useState<string>();
  const [clearInput, setClearInput] = useState<boolean>(false);
  const [showMentions, setShowMentions] = useState<boolean>(false);

  const onChangeHandler = (message: OnChangeMessage) => {
    setMessage(message.displayText);
    setClearInput(false);
  };

  const onHideMentions = () => {
    setShowMentions(false);
  }

  return (
    <View style={{ flex: 1 }}>
      <Editor
        onChange={onChangeHandler}
        list={users}
        placeholder="Hello Wolrd"
        showEditor={true}
        clearInput={clearInput}
        showMentions={showMentions}
        onHideMentions={onHideMentions}
      />
    </View>
  );
};

export default Experiment;
