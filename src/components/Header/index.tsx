import './header.scss'
import { IoLogOutOutline } from "react-icons/io5";

export default function Header (){
  return(
    <header>
      <div>
        <div className="logo">
          <h1>GameFlix</h1>
        </div>
        <div className="sair">
       <IoLogOutOutline/>
        </div>
      </div>
    </header>
  )
} 