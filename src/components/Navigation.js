import React from 'react';
import '../assets/style.css'
const Navigation = () => {
  return (
    <div class="nav-head">
      <div class="card ">
        <div class="card-body">
          <table>
            <tr>
              <td  className="font-monospace ps-3 col-4 fw-bold"> ALL TYPES <i class="fas fa-chevron-down"></i>  </td>
              <td className="ps-5 fw-bold text-decoration-underline ">Popular Products </td>
              <td className="ps-5 fw-bold"> Low Price High</td>
              <td className="ps-5 fw-bold"> High Price</td>
              <td  className="ps-5"><p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></td>
              <td className="font-monospace ps-5 text-end fw-bold"> PRICE <i class="fas fa-chevron-down"></i></td>         
            </tr>
          </table>
        </div>
      </div>

    </div>
  );
}

export default Navigation;
