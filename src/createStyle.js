function createStyle (){

    const style = document.createElement('style');
    style.innerHTML = `
    body {
        background:
            linear-gradient(rgba(0,0,0, 0.3), rgba(0,0,0, 0.3)),
            url('background.jpg') no-repeat fixed;
    }
    
    #content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* background-color: rgba(255,255,255, 0.05); */
        margin: 100px;
        min-height: 400px;
        border-radius: 100px;
    }
    #content:hover{
        background-color: rgba(255,255,255, 0.05);
    
    }
    
    h1{
        display:flex;
        align-items: center;
        color: white;
        font-size: 100px;
        padding-top: 25px;
    }
    p{  
        display:flex;
        align-items: center;
        font-family: "Montserrat", sans-serif;
        color: #edf0f1;
        text-decoration: none;
        font-size: 20px;
        padding: 50px;
        line-height: 200%;
    }
    
    
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 10%;
      }
      
      .logo {
        cursor: pointer;
        max-width: 150px;
        max-height: 100px;
      }
      
      .nav__links a,
      .cta,
      .overlay__content a,
      header {
        font-family: "Montserrat", sans-serif;
        font-weight: 500;
        color: #edf0f1;
        text-decoration: none;
      }
      
      .nav__links {
        list-style: none;
        display: flex;
      }
      
      .nav__links li {
        padding: 0px 30px;
      }
      
      .nav__links li a {
        transition: all 0.3s ease 0s;
      }
      
      .nav__links li a:hover {
        color: #0088a9;
      }
      
      .cta {
        padding: 9px 25px;
        background-color: rgba(0, 136, 169, 1);
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease 0s;
      }
      
      .cta:hover {
        background-color: rgba(0, 136, 169, 0.8);
      }
      
      /* Mobile Nav */
      
      .menu {
        display: none;
      }
      
      .overlay {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        background-color: #24252a;
        overflow-x: hidden;
        transition: all 0.5s ease 0s;
      }
      
      .overlay__content {
        display: flex;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      
      .overlay a {
        padding: 15px;
        font-size: 36px;
        display: block;
        transition: all 0.3s ease 0s;
      }
      
      .overlay a:hover,
      .overlay a:focus {
        color: #0088a9;
      }
      .overlay .close {
        position: absolute;
        top: 20px;
        right: 45px;
        font-size: 60px;
        color: #edf0f1;
      }
    `;
    document.head.appendChild(style);
}

export {createStyle}