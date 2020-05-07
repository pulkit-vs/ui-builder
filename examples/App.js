import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Platform
} from "react-native";
import KeyboardSpacer from "react-native-keyboard-spacer";
import RNDraftView from "react-native-draftjs-editor";
 
const ControlButton = ({ text, action, isActive }) => {
  return (
    <TouchableOpacity
      style={[
        styles.controlButtonContainer,
        isActive ? { backgroundColor: "gold" } : {}
      ]}
      onPress={action}
    >
      <Text>{text}</Text>
      
    </TouchableOpacity>
  );
};

const EditorToolBar = ({
  activeStyles,
  blockType,
  toggleStyle,
  toggleBlockType
}) => {
  return (
    <View style={styles.toolbarContainer}>
      <ControlButton
        text={"B"}
        isActive={activeStyles.includes("BOLD")}
        action={() => toggleStyle("BOLD")}
      />
      <ControlButton
        text={"I"}
        isActive={activeStyles.includes("ITALIC")}
        action={() => toggleStyle("ITALIC")}
      />
      <ControlButton
        text={"H"}
        isActive={blockType === "header-one"}
        action={() => toggleBlockType("header-one")}
      />
      <ControlButton
        text={"ul"}
        isActive={blockType === "unordered-list-item"}
        action={() => toggleBlockType("unordered-list-item")}
      />
      <ControlButton
        text={"ol"}
        isActive={blockType === "ordered-list-item"}
        action={() => toggleBlockType("ordered-list-item")}
      />
      <ControlButton
        text={"--"}
        isActive={activeStyles.includes("STRIKETHROUGH")}
        action={() => toggleStyle("STRIKETHROUGH")}
      />
    </View>
  );
};
 
const styleMap = {
  STRIKETHROUGH: {
    textDecoration: "line-through"
  }
};
 
const App = () => {
  const _draftRef = React.createRef();
  const [activeStyles, setActiveStyles] = useState([]);
  const [blockType, setActiveBlockType] = useState("unstyled");
  const [editorState, setEditorState] = useState("");

  console.log("editorState:", JSON.stringify(editorState))
  console.log("setEditorState:", JSON.stringify(setEditorState))
  // console.log("setEditorState:", JSON.stringify(setEditorState))

  // console.log("setActiveBlockType:", JSON.stringify(setActiveBlockType))

  const defaultValue =
    "<h1>A Full fledged Text Editor</h1><p>This editor is built with Draft.js. Hence should be suitable for most projects. However, Draft.js Isn’t fully compatible with mobile yet. So you might face some issues.</p><p><br></p><p>This is a simple implementation</p><ul>  <li>It contains <strong>Text formatting </strong>and <em>Some blocks formatting</em></li>  <li>Each for it’s own purpose</li></ul><p>You can also do</p><ol>  <li>Custom style map</li>  <li>Own css styles</li>  <li>Custom block styling</li></ol><p>You are welcome to try it!</p>";
 
  const editorLoaded = () => {
    console.log("editorLoaded")
    _draftRef.current && _draftRef.current.focus();
  };
 
  const toggleStyle = style => {
    console.log("toggleStyle-1:", style)
    console.log("toggleStyle-2:", (_draftRef))
    console.log("toggleStyle-3:", (_draftRef.current))
    console.log("toggleStyle-4:", (_draftRef.current.setStyle))


    _draftRef.current && _draftRef.current.setStyle(style);
  };
 
  const toggleBlockType = blockType => {
    console.log("toggleBlockType:", blockType)

    _draftRef.current && _draftRef.current.setBlockType(blockType);
  };
 
  useEffect(() => {
    // console.log("useEffect-1:", (_draftRef))
    // console.log("useEffect-2:", (_draftRef.current._webViewRef))

    console.log("useEffect-2:", ( _draftRef.current._webViewRef.current._reactInternalFiber._debugSource))

    //console.log("useEffect-_debugSource:", _draftRef && _draftRef._debugSource)

    /**
     * Get the current editor state in HTML.
     * Usually keep it in the submit or next action to get output after user has typed.
     */
    setEditorState(_draftRef.current ? _draftRef.current.getEditorState() : "");
  }, [_draftRef]);
  //console.log(editorState);
 
  return (
    <SafeAreaView style={styles.containerStyle}>
      <RNDraftView
      // defaultValue pick text
       defaultValue={defaultValue}
        onEditorReady={editorLoaded}
        style={{ flex: 1 }}
        placeholder={"Add text here..."}
        ref={_draftRef}
        onStyleChanged={setActiveStyles}
        onBlockTypeChanged={setActiveBlockType}
        styleMap={styleMap}
      />
      <EditorToolBar
        activeStyles={activeStyles}
        blockType={blockType}
        toggleStyle={toggleStyle}
        toggleBlockType={toggleBlockType}
      />
      {Platform.OS === "ios" ? <KeyboardSpacer /> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    marginTop: 36
  },
  toolbarContainer: {
    height: 56,
    flexDirection: "row",
    backgroundColor: "silver",
    alignItems: "center",
    justifyContent: "space-around"
  },
  controlButtonContainer: {
    padding: 8,
    borderRadius: 2
  }
});
 
export default App;


// This editor - bold 
// 1. line no -> cursor - selected line /word 
// 2. action perform - bold func call 

// speech - results[] - state - 0 element pick
// Select " This editor" at line no 1  - text editor select 
// make it bold - bold keyword -> bold method call (text)- result bold 


// selected text - 
