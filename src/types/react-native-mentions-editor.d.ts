declare module "react-native-mentions-editor" {
  export type OnChangeMessage = {
    text: string;
    displayText: string;
  };

  interface EditorProps {
    onChange: (message: OnChangeMessage) => void;
    onHideMentions: () => void;
    list: any[];
    placeholder?: string;
    showEditor: boolean;
    clearInput: boolean;
    showMentions: boolean;
  }

  const Editor: React.FC<EditorProps>;

  export default Editor;
}
