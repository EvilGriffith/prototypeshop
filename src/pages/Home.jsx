import style from "./Home.module.css"
import React, {useState} from "react"
import {Carousel} from "./carousel/Carousel.jsx"
import {Prod, Femaleprod} from "./items/Prod.jsx"


function Home() {
  let [address,setaddress] = useState("1-я Тверская-Ямская улица, дом 21")
  const [On, setOn] = useState(false);
  const [active, setactive] = useState(true)
  const [active1, setactive1] = useState(false)
  function inputActive () {
    if(!active){
      setactive1(!active1)
      setactive(!active)
      setaddress("1-я Тверская-Ямская улица, дом 21")
    }
  }
  function inputActive2 () {
    if(!active1){
    setactive(!active)
    setactive1(!active1)
    setaddress("г. Москва, 1-я Тверская-Ямская улица, дом 21")
    }
  }
  const[count, setcount] = useState(0)
  function handlerClick(){
    setOn(!On)
  }
  return (
    <>
     <div className={style.navbar}>
      <div className={style.allbox}>
        <div className={style.logo}>NEXTSTEP</div>
        <form className={On ? [style.forminput, style.hid].join("  ") : [style.forminput]}>
        <input className={style.input} placeholder="Поиск"/>
        <div className={style.searchbut}/>
        </form>
        <div className={style.basket}>
          <div className={style.counter}>{count}</div>
          </div>
        <div className={On ? [style.hamburger, style.eror].join("  ") : [style.hamburger]} onClick={handlerClick}></div>
      </div>
      </div>
      <div className={On ? [style.okno, style.active].join("  ") : [style.okno]} id="oknoham"></div>
      <div className={style.main}>
        <div className={style.frstbox}>
        <div className={style.male} id="male">Мужское</div>
        <div className={style.female} id="female">Женское</div>
        </div>
        <div className={style.scndbox}>
        <div className={style.collection}>Новая Коллекция</div>
        <div className={style.sales}>Скидки</div>
        </div>
        <h1 className={style.women}>Женское</h1>
        <p className={style.new}>Новинки</p>
        <Carousel>
          <div className={style.item1}>
            <Femaleprod/>
          </div>
        </Carousel>
        <h1 className={style.man}>Мужское</h1>
        <p className={style.new}>Новинки</p>
        <Carousel>
          <div className={style.item1}>
            <Prod/>
          </div>
        </Carousel>
        <div className={style.shop}>
          <div className={active1 ? [style.photo, style.photo1].join(" ") : [style.photo]}/>
          <div className={style.shoptext}>
            <div className={style.strong}>Наши магазины в Москве</div>
            <div className={style.inputs}>
              <label className={active ? [style.inputlabel, style.select].join(" ") : [style.inputlabel]} htmlFor="bel" onClick={inputActive}>
                M: Белорусская
                </label>
              <label className={active1 ? [style.inputlabel, style.select].join(" ") : [style.inputlabel]} htmlFor="maya" onClick={inputActive2}>
                M: Маяковская
                </label>
                <input type="radio" id="maya" name="shop" className={style.radio}></input>
                <input type="radio" id="bel" name="shop" className={style.radio} checked></input>
                <div className={style.address}>
                  <strong className={style.adr}>Адрес:</strong>
                  <div>{address}</div>
                  </div>
                <div className={style.contacts}>
                    <strong>Контакты</strong>
                    <div>+375 29 524 21 86</div>
                    <div>пн-пт 10:00-20:00</div>
                </div>
            </div>
          </div>
        </div>
        <footer className={style.footer}>
          <div className={style.info}>
          <div className={style.logofooter}>NEXTSTEP</div>
          <div className={style.paymethod}>
            <div className={style.ms}></div>
            <div className={style.visa}></div>
            <div className={style.mir}></div>
            </div>
          <div className={style.by}>
            <a href="https://github.com/EvilGriffith" target="_blank"><div className={style.git}></div></a>
            <a href="https://www.instagram.com/o.p.a.n.e.g.r/" target="_blank"><div className={style.insta}></div></a>
            <a href="https://vk.com/nahuy_ti_menya_zovesh" target="_blank"><div className={style.vk}></div></a>
          </div>
          </div>
        </footer>
      </div>
      </>
    
    )
    
    
    
    
  }

  
  export default Home
  