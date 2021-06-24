import { Fragment, useEffect, useState } from "react"
import styles from "../styles/index.module.scss"


export default function Home() {

  const [open, setOpen] = useState(false)

  const [clicked, setClicked] = useState(false)

  useEffect(()=>{
    let word = "Sayma Go Green With Me!";
    let i = 0;
    let timer = setInterval(function(){
      document.getElementById("tr").innerHTML+=word[i];
      i++;
      if(i>word.length-1){
        clearInterval(timer)
      }
    },120)
  }, [])

  return (
    <>
    <div className={styles.pageContainer}>
      <div className={styles.header} id="tr"></div>
      <div className={`${styles.ringContainer} ${open ? styles.ringOpen : styles.ringClosed}`} onClick={()=>{setOpen(!open)}} />


      {open && 
      <div className={styles.buttonsContainer}>
      <div className={`${styles.mainButton} ${styles.yesButton}`} onClick={() => setClicked(true)}>{"YES"}</div>
      <div className={`${styles.mainButton} ${styles.noButton}`} onClick={() => setClicked(true)}>{"NO"}</div>
      </div> 
      }

      {clicked &&
      <div className={styles.buttonNotWork}>{"The Button Doesn't Do Anything Tell Him In Discord LMAO"}</div>
      }
    </div>    
    </>
  )
}
