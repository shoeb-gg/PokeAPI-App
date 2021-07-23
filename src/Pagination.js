import React from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Pagination({goNext, goPrev}) {
    return (
        <div class="d-flex">
            <div class="p-1 w-50">
                <div class="d-flex flex-row-reverse">
                {goPrev && <Button variant="warning" onClick={goPrev}>Previous</Button>}
                </div>                                
            </div>
            <div class="p-1 w-50">
                {goNext && <Button variant="primary" onClick={goNext}>Next</Button>}
            </div>
        </div>
    )
}

