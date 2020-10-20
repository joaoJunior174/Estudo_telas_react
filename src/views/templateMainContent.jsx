import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import Header from './templateCabecalho/templateHeader'
import Footer from './tempateFooter'

export default props => {

    return (
        <>
            <section>
                <Header />
                <div class="main-content">

                    {/* <!-- content --> */}
                    <div class="container-fluid content-top-gap">

                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb my-breadcrumb">
                                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">{props.caminho}</li>
                            </ol>
                        </nav>

                        {props.children}

                    </div>
                    {/* <!-- //content --> */}
                </div>
            </section>
            {/* <!--footer section start--> */}
            <Footer />
        </>
    )

}