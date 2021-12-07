import React from 'react'
import '../assets/style.css'

const Item = (props) => {
    return (
        <div class="spacing">
            <div className="pt-4 card border w-70  border-2 rounded-3 container ">
                <div className="card-body">
                    <div class="flex">
                        <div> <label class="labelNew">NEW</label></div>
                        <div class="icon"><i className="fas fa-bars"></i></div>
                        <div class="icon"> <i className="bi bi-heart"></i> </div>
                    </div>
                    <div className="">
                        <img class="img" src={props.pict}></img>
                        <h5 className="card-title text-center pt-5 pb-5 " >Wooden Chair</h5>
                    </div>
                    <div className="flex">
                        <div className="starItem"><i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i></div>
                        <div className="starItem-2"> <i class="fas fa-star"></i></div>
                        <div class='label'>
                            <label className="card w-20 pe-5 ps-3 pt-1 fs-6">RP. 12.000.000</label>
                            <label class="card p-2 "> <i class="fas fa-shopping-cart"></i></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item

