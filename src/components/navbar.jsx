import React from "react";

const Navbar=()=>{
    return(
        <div>
            <h1>NAVBAR</h1>
            <nav>
      <ul style={{display:"flex",listStyleType:"none" }}>
        <li style={{marginLeft:"10px"}}><a href="#">Anasayfa</a></li>
        <li style={{marginLeft:"10px"}}><a href="#">Hakkımızda</a></li>
        <li style={{marginLeft:"10px"}}><a href="#">Clarusway</a></li>
        <li style={{marginLeft:"10px"}}><a href="#">İletişim</a></li>
      </ul>
    </nav>
        </div>

    
    )
}


export default Navbar;
// const Header=()=>{
//     return(
//         <div>
//             <h1>NAVBAR</h1>
//         </div>

    
//     )
// }

// export {Header}

