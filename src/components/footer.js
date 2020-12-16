import './css/footer.css'

 export default function Footer() {
    console.log('footers')
    return (
        <footer className='footer'>
        <h5 >SEGUINOS</h5>
        <a href="https://www.instagram.com/frodasburgers/" target="_blank"
          ><i  className="fab fa-instagram i-grid"></i
        ></a>
  
        <p className='rights'>
          <i className="far fa-copyright"></i>FRODAS 2020 All Rights Reserved
        </p>
      </footer>
    )
}
