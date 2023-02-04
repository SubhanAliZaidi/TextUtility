import React from 'react'

export default function Footer(props) {
    return (
        <>
            <hr className='mt-5'/>
            <div className="container">
                <footer className=" container page-footer font-small cyan darken-3">
                        <p className="container d-flex align-item-center justify-content-center">Contact Us</p>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="d-flex align-item-center justify-content-center">
                                    <a className="fb-ic mx-1">
                                        <img src="assets/icon/facebooklogo.png" alt="" width='30px' height='30px' />
                                    </a>
                                    <a className="tw-ic mx-1">
                                        <img src="assets/icon/linkedin.png" alt="" width='30px' height='30px' />
                                    </a>
                                    <a className="gplus-ic mx-1">
                                        <img src="assets/icon/telegramlogo.png" alt="" width='30px' height='30px' />
                                    </a>
                                    <a className="li-ic mx-1">
                                        <img src="assets/icon/instalogo.png" alt="" width='30px' height='30px' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright text-center py-3">©2023 Copyright - Nazloop
                    </div>
                </footer>
            </div>
        </>
    )
}
