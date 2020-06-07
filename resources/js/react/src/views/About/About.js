import React from 'react'
import { FaReact } from 'react-icons/fa'
import { DiLaravel, DiMysql } from 'react-icons/di'
import { 
	Row, 
	Col,
	Card,
	CardHeader,
	CardImg, 
	CardText, 
	CardBody,
	CardTitle, 
	CardSubtitle, 
	Button
} from 'reactstrap'


export default function About() {
  return (
    <div className="animated fadeIn">
      <div className="display-3">About</div>
      <p>
        This library management software was designed to manage multiple large scale libraries on a single database. The software was designed as a single page application with the front-end fully developed with reactJs and the back-end with Laravel.
      </p>
      <p className="mt-3 h6">Designed and Developed by Matthew Kayode Matthew as personal project for more infomation email at <span className="text-primary">MatthewKayode116@gmail.com</span> </p>
      <h3 className="mt-3">Technologies</h3>
      <div className="d-flex mb-3 justify-content-start">
        <div>
          <h3><FaReact size="5rem"/></h3>
          <div className="font-weight-bold text-center">ReactJs</div>
        </div>
        <div>
          <h3><DiLaravel size="5rem"/></h3>
          <div className="font-weight-bold text-center">Laravel</div>
        </div>
        <div>
          <h3><DiMysql size="5rem"/></h3>
          <div className="font-weight-bold text-center">MySQL</div>
        </div>
      </div>
    </div>
  )
}