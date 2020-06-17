import React,{useState} from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import './App.css';

function App() {

  const [ text , setText] = useState('')

  return (
    <div className="App">
      <div clasName= "editor">
        <CKEditor
          editor = {ClassicEditor}
          data = {text}
          onChange = {(event, editor) => {
            const data = editor.getData()
            setText(data)

          }}
        />
        
      </div>
      <div style={{padding: "2rem"}}>
        <h2>Content</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default App;
