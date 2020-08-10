import React, { Component } from 'react';
import Logo1 from './image1.jpg';

class Home extends Component {
    render() {
        return (

            <div id="carouselExampleIndicators" className="carousel slide carousel-multi-item" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <div className="img">
                            <img className="mt-1" src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_181/f_auto,q_auto,w_1100/v1554932288/shape/mentalfloss/12531-istock-637790866.jpg" width="1550" height="550" alt="..." />
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="img-overlay">
                            <img className="mr-auto" src={Logo1} width="1550" height="550" alt="..." />
                        </div>
                        <div class="carousel-caption text-center ">
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="mt-1" src="https://img.huffingtonpost.com/asset/5a4bc8b31d000027005c1e57.jpeg?cache=MSUWDop9KO&ops=scalefit_720_noupscale&format=webp" width="1540" height="550" alt="" />
                    </div>
                     <div className="carousel-caption text-center ">
                            <div className="col">
                                <input className="form-control" type="text" placeholder="Search" /></div>
                            <div className="column-6-align-center">
                                <button type="button" class="btn btn-primary">search</button></div>
                        </div> 

                   
                 </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
            </div >





        );
    }
}
export default Home;