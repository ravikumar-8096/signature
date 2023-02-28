import React, { useRef } from "react";
import SignaturePad from "react-signature-canvas";
import './App.css';

let App = ({add}) => {
    const [sign, setSignature] = React.useState('');
    // let handleCounter = (value) => {
    //     // setCounter(counter + value)
    // }
    let signPad = useRef({});
    let data = "";
    const clear = () => {
      signPad.current.clear();
    };
    const save = () => {
      data = signPad.current.toDataURL();
      console.log('ravi-dat--',data);
      setSignature(data);
    };
    const show = () => {
      signPad.current.fromDataURL(data);
      console.log('ravi-show--',signPad.current.fromDataURL(data));

    };
    return (
        <>
            <div className="container-fluid text-center mt-5">
                <h1 className="text-uppercase text-info h1 ">Signatures</h1>
                <SignaturePad penColor='green' toDataURL
                  canvasProps={{width: 500, height: 200, className: 'sigCanvas'}} 
                  ref={signPad}
                  />
                  <button onClick={clear}>Clear</button>
                  <button onClick={save}>Save</button>
                  <button onClick={show}>Show</button>
                <div className="base64">{sign}</div>
                </div>
        </>
    );
}

export default App;