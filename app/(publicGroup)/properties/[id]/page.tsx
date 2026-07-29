import React from "react"

const PropertyDetails = async({ params }) => {
 const param = await params
  return <div>PropertyDetails id={param.id}</div>
}

export default PropertyDetails
