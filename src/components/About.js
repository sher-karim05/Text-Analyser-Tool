

export default function About(props) {
  return (
    <div className='container' style={{backgroundColor:props.mode === "dark"?"black":"white",color:props.mode === 'dark'? "white":"black"}}>
        <h1 className='my-3' style={{color:props.mode === 'dark'? "white":"black"}}>About Us</h1>
        <div className="accordion" id='accordionExample' style={{backgroundColor:props.mode === "dark"?"black":"white",color:props.mode === 'dark'? "white":"black"}} >
            <div className="accordion-item">
                <h2 className="accordion-header" id='headingOne'>
                    <button className="accordion-button collapsed" style={{backgroundColor:props.mode === "dark"?"black":"white",color:props.mode === 'dark'? "white":"black"}} type='button' data-bs-toggle='collapse' data-bs-target="#collapseOne" aria-expanded="true" aria-controls='collapseOne'>
                        Accoridion Item #1
                    </button>
                </h2>
                </div>
                <div id="collapseOne" className='accordion-collapse collapse show' aria-labelledby='headingOne' data-bs-parent='#accordianExample' style={{backgroundColor:props.mode === "dark"?"black":"white",color:props.mode === 'dark'? "white":"black"}}>
                    <div className="accordion-body" style={{backgroundColor:props.mode === "dark"?"black":"white",color:props.mode === 'dark'? "white":"black"}}>
                        <strong>This is the first item's accordion body.</strong>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere corrupti repudiandae vero eos, dignissimos perferendis illo facilis accusamus officia quos! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, sed necessitatibus ipsum commodi quisquam in libero sequi! Optio aperiam ipsa molestiae? Nesciunt voluptate eos dolorem quisquam earum? Esse, quia sint! lorem20
                    </div>
            </div>
            <div className="accordion-item" style={{backgroundColor:props.mode === "dark"?"rgb(92 86 139":"white",color:props.mode === 'dark'? "white":"black"}} >
                <h2 className="accordion-header" id='headingOne' style={{backgroundColor:props.mode === "dark"?"black":"white",color:props.mode === 'dark'? "white":"black"}}>
                    <button className="accordion-button" type='button' data-bs-toggle='collapse' data-bs-target="#collapseOne" aria-expanded="true" aria-controls='collapseOne' style={{backgroundColor:props.mode === "dark"?"black":"white",color:props.mode === 'dark'? "white":"black"}}>
                        Accoridion Item #2
                    </button>
                </h2>
                <div id="collapseOne" className='accordion-collapse collapse show' aria-labelledby='headingOne' data-bs-parent='#accordianExample' style={{backgroundColor:props.mode === "dark"?"black":"white",color:props.mode === 'dark'? "white":"black"}}>
                    <div className="accordion-body" style={{backgroundColor:props.mode === "dark"?"black":"white",color:props.mode === 'dark'? "white":"black"}}>
                        <strong>This is the first item's accordion body.</strong>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere corrupti repudiandae vero eos, dignissimos perferendis illo facilis accusamus officia quos! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, sed necessitatibus ipsum commodi quisquam in libero sequi! Optio aperiam ipsa molestiae? Nesciunt voluptate eos dolorem quisquam earum? Esse, quia sint! lorem20
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={{backgroundColor:props.mode === "dark"?"black":"white",color:props.mode === 'dark'? "white":"black"}}>
                <h2 className="accordion-header" id='headingOne' style={{backgroundColor:props.mode === "dark"?"black":"white",color:props.mode === 'dark'? "white":"black"}}>
                    <button className="accordion-button" type='button' data-bs-toggle='collapse' data-bs-target="#collapseOne" aria-expanded="true" aria-controls='collapseOne' style={{backgroundColor:props.mode === "dark"?"black":"white",color:props.mode === 'dark'? "white":"black"}}>
                        Accoridion Item #3
                    </button>
                </h2>
                <div id="collapseOne" className='accordion-collapse collapse show' aria-labelledby='headingOne' data-bs-parent='#accordianExample' style={{backgroundColor:props.mode === "dark"?"black":"white",color:props.mode === 'dark'? "white":"black"}}>
                    <div className="accordion-body" style={{backgroundColor:props.mode === "dark"?"black":"white",color:props.mode === 'dark'? "white":"black"}}>
                        <strong>This is the first item's accordion body.</strong>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere corrupti repudiandae vero eos, dignissimos perferendis illo facilis accusamus officia quos! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, sed necessitatibus ipsum commodi quisquam in libero sequi! Optio aperiam ipsa molestiae? Nesciunt voluptate eos dolorem quisquam earum? Esse, quia sint! lorem20
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}
