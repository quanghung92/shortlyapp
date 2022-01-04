import { useState, useRef,useEffect } from "react"
import clsx from "clsx"
import formStyle from './form.module.scss'

function ShortLink() {
  const [inputLink, setinputLink] = useState('')
  const [inputLinkEmpty, setinputLinkEmpty] = useState(false)
  const [listLlinks, setlistLlinks] = useState([])
  const [liCopied, setliCopied] = useState('')
  const [linkChange, setlinkChange] = useState('')
  const inputShortLinkRef = useRef()

  const updateShortLink =(data)=>{
    inputShortLinkRef.current.focus()
    setlistLlinks([...listLlinks,{
      fullLink : data.result.original_link,
      shortLink : data.result.full_short_link
    }])
    setinputLink('')
  }

  useEffect(() => {
    
    const formdata = new FormData();
    const requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow'
    };
    if(inputLink!==''){
      fetch( `https://api.shrtco.de/v2/shorten?url=${inputLink}`, requestOptions)
      .then(response => response.json())
      .then(updateShortLink)
      .catch(error => console.log('error', error));
    }

    
 
  },[linkChange])

  const handleShortLink = () => {
    setlinkChange(inputLink)
    if (inputLink === '') {
      setinputLinkEmpty(true)
    } else {
      setinputLinkEmpty(false)
    }
    
  }

  const handleCopyLink =(index,link)=>{
    setliCopied(index) 
    navigator.clipboard.writeText(link)
  }


  return (
    <div className={clsx(formStyle.wapperPageShortLink, 'wide', 'grid')}>
      <div className={clsx(formStyle.wapperShortLink)}>
        <div className={clsx(formStyle.ShortLink)}>
          <input
            className={clsx(formStyle.inputShorten, { [formStyle.inputShortenEmpty]: inputLinkEmpty })}
            placeholder="Shorten a link here..."
            ref={inputShortLinkRef}
            value={inputLink}
            onChange={(e) => setinputLink(e.target.value)}
          />
          <div className={clsx(formStyle.wapperButtonShort)}>
            <button onClick={handleShortLink} className={clsx(formStyle.buttonShort, 'btn')}>Shorten it!</button>
          </div>
        </div>
        {
          inputLinkEmpty &&
          <div className={clsx(formStyle.validateText)}>Please add a link</div>
        }
      </div>
      {
        listLlinks &&
        <ul className={clsx(formStyle.wapperListLinkShorted)}>
          {listLlinks.map((item, index) => (
            <li className={clsx(formStyle.ListLinkShortedItem,'flex-b')} key={index}>
              <p className={clsx(formStyle.ListLinkShortedFull)}>{item.fullLink}</p>
              <div className={clsx(formStyle.wapperListLinkShortedShort,'flex-b')}>
                <p className={clsx(formStyle.ListLinkShortedShort)}>{item.shortLink}</p>
                <button onClick={(e)=>handleCopyLink(index,item.shortLink)} className={clsx(formStyle.buttonCopy,'btn',{ [formStyle.buttonCopied]: liCopied === index ? true :false })}>{liCopied === index ? 'Copied' : 'Copy'}</button>
              </div>
            </li>
          ))}
        </ul>
      }

    </div>
  )
}

export default ShortLink
