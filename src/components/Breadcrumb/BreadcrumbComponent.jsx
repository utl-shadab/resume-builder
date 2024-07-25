import React from 'react'
import { Container, Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const BreadcrumbComponent = ({ pageName }) => {
  return (
    <section className='breadcrumb-container'>
      <Container className='position-relative'>
        <Breadcrumb className='breadcrumb-center'>
          <BreadcrumbItem><Link to="/" className='bread-text'>Home</Link></BreadcrumbItem>
          <BreadcrumbItem className='text-white' active>{pageName}</BreadcrumbItem>
        </Breadcrumb>
      </Container>
    </section>
  )
}

export default BreadcrumbComponent