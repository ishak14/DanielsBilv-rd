import React, { Component } from 'react';
import './table.css';
export default class Table extends Component {
  render(){
    return(
      <div className={this.props.className}>
      <table className=''>
        <tr>
          <th>Kategori</th>
        <th>Priser</th>
          </tr>
          <tr>
            <td>Handtvätt utvändig</td>
          <td>159kr</td>

        </tr>
        <tr>
          <td>Invändig tvätt</td>
        <td>fr 159kr</td>

        </tr>
        <tr>
          <td>Ut och in tvätt fr 299kr</td>
        <td>Supertvätt 399kr</td>
        </tr>
        <tr>
          <td>Motortvätt</td>
        <td>159kr</td>
        </tr>
        <tr>
          <td>Strålkastarrenovering</td>
        <td>259kr</td>
        </tr>
        <tr>
          <td>Däckbyte</td>
        <td>149kr</td>
        </tr>
        <tr>
          <td>Klädseltvätt</td>
        <td>fr 699kr</td>
        </tr>
        <tr>
          <td>Skinnbehandling</td>
        <td>499kr</td>
        </tr>
        <tr>
          <td>Lätt lastbil</td>
        <td>fr 599kr</td>
        </tr>
        <tr>
          <td>Husbilstvätt</td>
        <td>799kr</td>
        </tr>
        <tr>
          <td>Vaxning</td>
        <td>699kr</td>
        </tr>
        <tr>
          <td>Helrekond</td>
        <td>fr 1399kr</td>
        </tr>
        <tr>
          <td>Polering</td>
        <td>fr 899kr</td>
        </tr>
        <tr>
          <td>Lackskydd</td>
        <td>fr 3499kr</td>
        </tr>
        <tr>
          <td>Keramisk lackskydd</td>
        <td>fr 4499kr</td>
        </tr>
        </table>
      </div>
        )
        }
}
