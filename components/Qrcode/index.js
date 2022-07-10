import QRCode from 'qrcode'
import { useState } from 'react'

const QRCodeGenerator = () => {
    const [url,setUrl] = useState('');
    const [qrcode,setqrCode] = useState('');

    const generateQRcode = () => {
        QRCode.toDataURL(url,(err,url)=>{
            if(err) return console.error(err);
            console.log(url);
            setqrCode(url)
        })
    }

    return (
        <>
        <h1>Generator</h1>
        <input value={url} onChange={(e)=>setUrl(e.target.value)}/>
        <button onClick={generateQRcode}>Generate</button>
        <br/>
        <br/>
        <img src={qrcode}/>
        </>
    )
}

export default QRCodeGenerator