import React from 'react'

export default function Title({ftitle,sectitle}) {
    return (
        <div>
            <div className="row">
                <div className="col-10 mx-auto my-2 text-center text-title">
                    <h1 className="text-capitalize font-weight-bold">
                        Online <strong className="text-blue">Store</strong>
                    </h1>
                </div>
            </div>
        </div>
    )
}
