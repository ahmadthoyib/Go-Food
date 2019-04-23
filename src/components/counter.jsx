import React, { Component } from 'react'
import {Container, Card,Row,Col, CardImg,CardBody,
    CardTitle, Button } from 'reactstrap';

export default class Counter extends Component {
    //state adalah penyimpanan properti yg bisa di ubah di folder itu sendiri
    state = {
        number: 0,
        harga:0,
        biaya:10000
      };
      tambah = () => {
        this.setState(({ number,harga,biaya }) => ({
          number: number + 1,
          harga: harga + biaya
        }));
      };
        kurang = () => {
          var number =this.state.number;
          if(number > 0)
        this.setState(({ number,harga,biaya}) => ({
          number: number - 1,
          harga: harga - biaya
        }));
      };
  render() {
    return (
      <div style={{textAlign:"center",padding:"10px"}}>
      
       <Container>
       <Card style={{width:"300px",height:"500px"}}>
       
            <CardImg style={{height:"200px"}} src={this.props.gambar} alt="Card image cap" />
          
              <div style={{padding:"10px"}}>
              <h4 >{this.props.menu}</h4>
              <hr/>
              <p>pesan berapa</p>
              <p>Harga: {this.state.harga}</p>
              <h1>{this.state.number}</h1>
              <Button onClick={this.tambah} className="btn btn-success">+</Button>
              {' '}
              <Button onClick={this.kurang}className="btn btn-danger">-</Button>
            </div>
       
        </Card>  
      </Container> 
       
      </div>
    )
  }
}
